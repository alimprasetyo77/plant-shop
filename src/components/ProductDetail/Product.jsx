/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import Button from "../Button"
import data from '../../data.json'
import { useEffect, useRef, useState } from "react"
import Description from "./Description"
import Rating from "./Rating"
const Product = () => {
    const { product } = useParams()
    const [dataProduct, setDataProduct] = useState([])
    const [descActive, setDescActive] = useState(true)
    const [ratingActive, setRatingActive] = useState(false)
    const [showImage, setShowImage] = useState(false)
    const ref = useRef()
    const [length, setLength] = useState((localStorage.getItem('reviews')) ? JSON.parse(localStorage.getItem('reviews')).length  : 0) 
    useEffect(() => {
        getDataByProductName()
        setShowImage(true)
        
    }, [])
    const getDataByProductName = () => {
        const result = data.Products.filter((data) => data.name === product)
        setDataProduct(result)
    }
    const handleClick = (nameButton) => {
        if(nameButton === 'description') {
            setDescActive(true)
            setRatingActive(false)
        } else{
            setRatingActive(true)
            setDescActive(false)
        }
    }
    const changeImage = (url) => {
        setShowImage(false)
        if( ref.current.src === url) {
            setShowImage(true)
        }else{
            setTimeout(() => {
                ref.current.src = url
                setShowImage(true)
            }, 300);
        }
    }
    return (
        <div className="bg-slate-100/70 flex items-center justify-center min-h-screen py-28">
            <div className="max-w-7xl flex flex-col  bg-white shadow-md w-full h-auto p-10 gap-y-10">
                <div className="flex justify-between">
                    <div className="w-1/2 overflow-hidden">
                        <img src="http://source.unsplash.com/600x900?plants" alt="image" className={`${showImage ? 'opacity-100' : ' opacity-0 '}w-[600px] h-[900px]  object-cover object-center transition-transform duration-300 ease-in-out`} ref={ref}/>
                        <div className="flex items-center gap-x-4 mt-8 ">
                            <img src="http://source.unsplash.com/600x900?plants" alt="image" className="w-28 h-28 cursor-pointer opacity-80 hover:opacity-100" onClick={(e) => changeImage(e.target.src)}/>
                            <img src={dataProduct[0]?.source} alt="image" width={600} height={900} className="w-28 h-28 cursor-pointer opacity-80 hover:opacity-100" onClick={(e) => changeImage(e.target.src)}/>
                        </div>
                    </div>
                    <div className="w-1/2 p-10 ">
                        <div className="flex flex-col items-start gap-5 font-Roboto">
                            <h3 className="text-black/80">{dataProduct[0]?.description}</h3>
                            <h2 className="text-2xl font-medium">{dataProduct[0]?.name}</h2>
                            <div className="flex items-center gap-x-3 ">
                                <span className="text-2xl font-bold">${dataProduct[0]?.price}</span>
                                <span className="text-[#575250]">+ free shiping</span>
                            </div>
                            <p className="text-[#575250]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nesciunt qui? Repudiandae odio earum at reiciendis! Expedita cumque, consequuntur maxime fugit culpa asperiores praesentium error illum distinctio facere nisi corrupti!
                                Recusandae cum molestiae corporis dolores reiciendis quasi minus ipsum optio aperiam.</p>
                            <p className="text-[#575250]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil inventore ex, veritatis doloribus beatae officia. Adipisci, tenetur dolorum quis ullam temporibus modi fugit facilis voluptas recusandae delectus excepturi nostrum esse?</p>
                            <div className="flex items-center gap-x-5 w-1/2">
                                <input type="number" className="border border-slate-300 w-14 h-12 text-slate-500 outline-none p-2" defaultValue={1} min={1} />
                                <Button className={'bg-[#FF5100] text-white w-full '}>Add To Cart</Button>
                            </div>
                            <div className="w-full bg-black/20 h-px"></div>
                            <span className=" text-sm text-[#575250]">{dataProduct[0]?.description}</span>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-black/20 h-px"></div>
                <div className="flex items-center gap-x-8 font-medium -mt-8 ">
                    <button className={`${descActive ? 'border-t-4 border-black/80 -mt-2 py-2' : '-mt-[6px]'} text-black/70`} onClick={() => handleClick('description')}>Description</button>
                    <button className={`${ratingActive ? 'border-t-4 border-black/80 -mt-2 py-2' : '-mt-[6px]'} text-black/70`} onClick={() => handleClick('rating')}>Reviews {`(${length })`}</button>
                </div>
                {ratingActive ? <Rating setLength={setLength}/> : <Description image={dataProduct[0]?.source}/> }
            </div>
        </div>
    )
}

export default Product