/* eslint-disable react-hooks/exhaustive-deps */
import Breadcrumb from "./Breadcrumb"
import data from '../../data.json'
import Card from '../Card'
import RatingStar from "../RatingStar"
import { BsFillBagPlusFill } from "react-icons/bs"
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr'
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../../features/CartSlice"
import { fetchAllData, handleHighToLow, handleLowToHigh, handleSortAverage, handleSortPopularity, sortLatestData } from "./HandleSorting"
import { Link } from "react-router-dom"

const Products = () => {
  const dispath = useDispatch()
  const [datas, setDatas] = useState([])
  const [sortName, setSortName] = useState('')
  const [loading, setLoading] = useState(false)
  const [totalItems, setTotalItems] = useState(data.totalItems) // 31
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = data.perPage // 10

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (!sortName) return fetchAllData({ currentPage, perPage, data, setDatas })
      if (sortName == 'default') return fetchAllData({ currentPage, perPage, data, setDatas })
      if (sortName == 'popularity') return handleSortPopularity({ data, currentPage, perPage, setDatas, setTotalItems })
      if (sortName == 'ratingaverage') return handleSortAverage({ data, setDatas, setTotalItems, currentPage, perPage })
      if (sortName == 'latest') return sortLatestData({ currentPage, perPage, data, setDatas, setTotalItems })
      if (sortName == 'lowtohigh') return handleLowToHigh({ data, currentPage, perPage, setDatas, setTotalItems })
      if (sortName == 'hightolow') return handleHighToLow({ data, currentPage, perPage, setDatas, setTotalItems })
    }, 500);
  }, [currentPage, sortName])

  const handleAddToCart = (item) => {
    dispath(addToCart(item))
  }
  const handlePageChange = (index) => {
    setCurrentPage(index)
  }
  return (
    <div className="min-h-screen px-4 md:px-10 py-10 md:py-28 max-w-7xl mx-auto">
      <div className="space-y-8">
        <Breadcrumb page={currentPage} />
        <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4">
          <span className="text-[#575250]">Showing {(currentPage - 1) * perPage} - {((currentPage - 1) * perPage) + perPage} of {totalItems} result</span>
          <select id="countries" className="bg-gray-50 border border-gray-300 text-[#666666] text-sm block w-52 py-3 px-4 rounded outline-none" onChange={(e) => setSortName(e.target.value)}>
            <option value="default" selected >Default Sorting</option>
            <option value="popularity" >Sort By Popularity</option>
            <option value="ratingaverage">Sort By Average Rating</option>
            <option value="latest">Sort By Latest</option>
            <option value="lowtohigh">Sort By: low to high</option>
            <option value="hightolow">Sort By: high to low</option>
          </select>
        </div>

      </div>
      <div className="p-3 px-0 md:p-6 ">
        {loading ?
          <div className="flex justify-center">
            <svg aria-hidden="true" className="w-14 h-14 mr-2 text-gray-200 animate-spin fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
          </div>
          :

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {datas.map((data, index) => (
              <Card key={index} className={'relative'} >
                <div className="group">
                  <Link to={`/product/${data.name}`}>
                    <Card.thumbnail src={data.source} className={`cursor-pointer `} width={400} height={600} />
                  </Link>
                  {/* Cart Icon */}
                  <button className={`group-hover:opacity-100  opacity-0 shadow-2xl absolute top-2 right-2 w-9 h-9 flex items-center justify-center bg-white rounded-full ease-in-out  transition-all duration-300 cursor-pointer `} onClick={() => handleAddToCart({
                    id: data.productId,
                    name: data.name,
                    price: data.price,
                    image: data.source,
                    qty: 1
                  })}>
                    <BsFillBagPlusFill className="text-2xl text-[#4B4F58] " />
                  </button>
                  {/* Cart Icon */}
                </div>
                <Card.summary>
                  <RatingStar star={data.rating} />
                  <span className="text-sm font-semibold text-black/90">{data.name}</span>
                  <span className="text-xs text-gray-400 ">{data.description}</span>
                  <span className="text-sm text-black/70 font-semibold">${data.price.toLocaleString('en-US')}</span>
                </Card.summary>
              </Card>
            ))}
          </div>
        }
      </div>
      <div className="py-4">
        <ul className="flex items-center space-x-2">
          {currentPage > 1 ?
            <li>
              <a href="#" className="block py-3 px-4 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg " onClick={() => setCurrentPage(currentPage - 1)}>
                <GrFormPreviousLink />
              </a>
            </li>
            :
            null
          }
          {Array.from({ length: Math.ceil(totalItems / perPage) }, (_, index) => (
            <li key={index} onClick={() => handlePageChange(index + 1)} >
              <a href="#" className={`${currentPage === index + 1 && 'text-black border border-blue-300 bg-stone-700 '} hover:bg-stone-700 hover:text-white py-4 px-5 leading-tight bg-white border border-gray-300 `}>{index + 1}</a>
            </li>
          ))}
          {currentPage < Math.ceil(totalItems / perPage) ?
            <li>
              <a href="#" className="block py-3 px-4 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg " onClick={() => setCurrentPage(currentPage + 1)}>
                <GrFormNextLink />
              </a>
            </li>
            :
            null
          }
        </ul>
      </div>
    </div>
  )
}

export default Products