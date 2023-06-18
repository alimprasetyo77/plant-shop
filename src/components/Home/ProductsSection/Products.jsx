import Button from "../../Button"
import Card from "../../Card"
import data from '../../../data.json'
import RatingStar from "../../RatingStar"
import { BsFillBagPlusFill } from "react-icons/bs"
import { useDispatch } from "react-redux"
import { addToCart } from '../../../features/CartSlice'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const Products = () => {
    const [datas, setDatas] = useState(data.Products)
    const dispath = useDispatch()
    useEffect(() => {
        truncateData()
    }, [])
    const truncateData = () => {
        const slice = data.Products.slice(21,30)
        setDatas(slice)
    }
    const handleAddToCart = (item) => {
        dispath(addToCart(item))
    }
    
    return (
        <div className="min-h-screen w-full md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-10 py-20 font-Roboto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-y-4">
                <h3 className="font-bold text-[32px]">New Plants</h3>
                <Link to={'/shop'}>
                    <Button className={'bg-[#FF5100] text-white'}>Shop Now</Button>
                </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8 ">
                {datas.map((data, index) => (
                    <Card key={index} className={'relative'} >
                        <div className="group">
                            <Link to={`/product/${data.name}`}>
                                <Card.thumbnail src={data.source} className={`cursor-pointer`} width={400} height={600} />
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
                            <span className="text-sm font-semibold text-black/90">{data.name}</span>
                            <span className="text-xs text-gray-400 ">{data.description}</span>
                            <span className="text-sm text-black/70 font-semibold">${data.price.toLocaleString('en-US')}</span>
                        </Card.summary>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Products