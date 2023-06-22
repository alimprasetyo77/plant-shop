/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom"
import { BsFillBagPlusFill } from "react-icons/bs"
import Button from "../Button"
import data from '../../data.json'
import { useEffect, useRef, useState } from "react"
import Description from "./Description"
import Rating from "./Rating"
import Card from "../Card"
import RatingStar from '../RatingStar'
import { useDispatch } from "react-redux"
import { addToCart } from "../../features/CartSlice"

const Product = () => {
  const { product } = useParams()
  const [dataProduct, setDataProduct] = useState([])
  const [descActive, setDescActive] = useState(true)
  const [ratingActive, setRatingActive] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const dispatch = useDispatch()
  const ref = useRef()
  const [length, setLength] = useState((localStorage.getItem('reviews')) ? JSON.parse(localStorage.getItem('reviews')).length : 0)
  useEffect(() => {
    getDataByProductName()
    setShowImage(true)

  }, [])
  const getDataByProductName = () => {
    const result = data.Products.filter((data) => data.name === product)
    setDataProduct(result)
  }
  const handleClick = (nameButton) => {
    if (nameButton === 'description') {
      setDescActive(true)
      setRatingActive(false)
    } else {
      setRatingActive(true)
      setDescActive(false)
    }
  }
  const changeImage = (url) => {
    setShowImage(false)
    if (ref.current.src === url) {
      setShowImage(true)
    } else {
      setTimeout(() => {
        ref.current.src = url
        setShowImage(true)
      }, 300);
    }
  }
  const handleAddToCart = (items) => {
    dispatch(addToCart(items))
  }
  return (
    <div className="bg-slate-100/70 flex items-center justify-center min-h-screen py-5 md:py-14 ">
      <div className="max-w-2xl md:max-w-7xl flex flex-col bg-white shadow-sm w-full h-auto p-4 md:p-20 gap-y-10 ">
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="w-full xl:w-1/2 overflow-hidden">
            <img src="http://source.unsplash.com/600x900?plants" alt="image" className={`${showImage ? 'opacity-100' : ' opacity-0 '} w-full h-[600px] md:h-[900px]  object-cover object-center transition-transform duration-300 ease-in-out`} ref={ref} />
            <div className="flex items-center gap-x-4 mt-8 ">
              <img src="http://source.unsplash.com/600x900?plants" alt="image" className="w-20 sm:w-28 h-20 sm:h-28 cursor-pointer opacity-80 hover:opacity-100" onClick={(e) => changeImage(e.target.src)} />
              <img src={dataProduct[0]?.source} alt="image" width={600} height={900} className="w-20 sm:w-28 h-20 sm:h-28 cursor-pointer opacity-80 hover:opacity-100" onClick={(e) => changeImage(e.target.src)} />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-px md:px-10 py-8 md:py-4 font-Roboto">
            <div className="flex flex-col items-start gap-2 md:gap-5 ">
              <h3 className="text-black/80 text-sm md:text-base">{dataProduct[0]?.description}</h3>
              <h2 className="text-2xl font-medium">{dataProduct[0]?.name}</h2>
              <div className="flex items-center gap-x-3 ">
                <span className="text-2xl text-[#575250] font-bold">${dataProduct[0]?.price}</span>
                <span className="text-[#575250]">+ free shiping</span>
              </div>
              <p className="text-[#575250] text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nesciunt qui? Repudiandae odio earum at reiciendis! Expedita cumque, consequuntur maxime fugit culpa asperiores praesentium error illum distinctio facere nisi corrupti!
                Recusandae cum molestiae corporis dolores reiciendis quasi minus ipsum optio aperiam.</p>
              <p className="text-[#575250] text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil inventore ex, veritatis doloribus beatae officia. Adipisci, tenetur dolorum quis ullam temporibus modi fugit facilis voluptas recusandae delectus excepturi nostrum esse?</p>
              <div className="flex items-center gap-x-5 w-2/3">
                <input type="number" className="border border-slate-300 w-14 h-10 text-slate-500 outline-none p-2" defaultValue={1} min={1} />
                <Button className={'bg-[#FF5100] text-white w-full sm:text-sm text-xs'}>Add To Cart</Button>
              </div>
              <div className="w-full bg-black/20 h-px"></div>
              <p className=" text-sm text-[#575250]"><span className="font-semibold">Categories</span> : {dataProduct[0]?.description}</p>
            </div>
          </div>
        </div>

        <div className="w-full bg-black/20 h-px"></div>

        {/* section rating & description */}
        <div className="flex items-center gap-x-8 font-medium -mt-8 ">
          <button className={`${descActive ? 'border-t-4 border-black/80 -mt-2 py-2' : '-mt-[6px]'} text-black/70`} onClick={() => handleClick('description')}>Description</button>
          <button className={`${ratingActive ? 'border-t-4 border-black/80 -mt-2 py-2' : '-mt-[6px]'} text-black/70`} onClick={() => handleClick('rating')}>Reviews {`(${length})`}</button>
        </div>
        {ratingActive ? <Rating setLength={setLength} /> : <Description image={dataProduct[0]?.source} />}
        {/* section rating & description */}

        {/* Related products */}
        <div className="py-10 font-Roboto">
          <h1 className="text-4xl font-bold">Related products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-x-8 py-8">
            {data.Products.slice(0, 3).map((data, index) => (
              <Card key={index} className={'relative'} >
                <div className="group">
                  <Link to={`/product/${data.name}`}>
                    <Card.thumbnail src={data.source} className={`cursor-pointer w-full h-96 object-cover `} />
                  </Link>
                  {/* Cart Icon */}
                  <button className={`group-hover:opacity-100  opacity-0 shadow-2xl absolute top-2 right-2 w-9 h-9 flex items-center justify-center bg-white rounded-full ease-in-out  transition-all duration-300 cursor-pointer `} onClick={() => handleAddToCart({
                    id: data.productId,
                    name: data.name,
                    price: data.price,
                    image: data.source,
                    qty: 1
                  })}>
                    <BsFillBagPlusFill className="text-2xl text-[#4B4F58] hover:text-black/80 group-active:scale-110 transition-all transform duration-200" />
                  </button>
                  {/* Cart Icon */}
                </div>
                <Card.summary>
                  <RatingStar star={data.rating} />
                  <span className="text-sm font-bold text-black/90">{data.name}</span>
                  <span className="text-xs text-gray-400 ">{data.description}</span>
                  <span className="text-sm text-black/70 font-bold">${data.price.toLocaleString('en-US')}</span>
                </Card.summary>
              </Card>
            ))}
          </div>
        </div>
        {/* Related products */}
      </div>
    </div>
  )
}

export default Product