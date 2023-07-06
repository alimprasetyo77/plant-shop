import { useState } from "react"
import { BsQuote } from "react-icons/bs"
import ImageSlider from "./ImageSlider"
import image1 from '../../assets/products-img/image1.jpg'
import image2 from '../../assets/products-img/image2.jpg'
import image3 from '../../assets/products-img/image3.jpg'
import image4 from '../../assets/products-img/image4.jpg'
import image5 from '../../assets/products-img/image5.jpg'
import image6 from '../../assets/products-img/image6.jpg'

const AboutContent = () => {
  const [showImage, setShowImage] = useState([])
  return (
    <div className='font-Roboto py-24'>
      <div className="max-w-7xl mx-auto bg-white px-6 md:px-20 py-16 space-y-24">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-x-20 lg:gap-x-32 gap-y-6 md:gap-y-0">
          <h1 className="text-4xl md:text-6xl font-bold -mt-32">About</h1>
          <div className="flex flex-col gap-y-4">
            <div className="w-16 h-px bg-[#FF5100]"></div>
            <h2 className="text-2xl font-semibold">We provide fresh and healthy plants for your space</h2>
            <p className="font-medium text-black/80">Tincidunt ut pellentesque arcu molestie dolor, nunc feugiat sit mauris semper platea urna, sapien fermentum venenatis etiam enim ullamcorper phasellus tortor justo sapien faucibus in adipiscing risus adipiscing bibendum nec eget tincidunt sed.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-x-48 gap-y-4 md:gap-y-0 ">
          <div className="w-96">
            <h3 className="font-bold text-black/80 uppercase tracking-wider whitespace-nowrap">Our Story</h3>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="font-medium text-black/80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis magnam expedita perspiciatis consequuntur ratione reiciendis iure placeat saepe ea, ex vitae, nobis soluta, nostrum et sit rerum facilis consectetur!</p>
            <p className="font-medium text-black/80">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem recusandae ipsam adipisci assumenda magnam dignissimos dicta? Ex nam eaque, vitae harum, sunt corrupti expedita ipsam fugiat, veniam minus voluptatem soluta.
              Fuga vel tempore fugiat in asperiores est eveniet vero quaerat at, nam eos neque quae odio, repellendus quisquam vitae illo quam quos odit pariatur consequuntur voluptates? Deleniti dolore repudiandae ipsum?
            </p>
            <p className="font-medium text-black/80">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate eveniet reprehenderit officiis maxime quas ratione vero veritatis, optio commodi magnam in sint eum esse culpa quis ad, aperiam, at ipsam.</p>
            <div className="flex flex-col gap-y-4">
              <BsQuote className="text-[#FF5100] text-3xl md:text-4xl" />
              <p className="font-bold text-base md:text-lg">Massa aliquam montes, odio porttitor sit ac maecenas interdum ut tincidunt nisl erat quam eu natoque in nisl, lobortis sapien in nec ullamcorper vel.</p>
            </div>
            <div className="flex items-center gap-x-4">
              <img src="https://source.unsplash.com/40x40?person" className="rounded-full" alt="" />
              <div className="flex flex-col">
                <span className="tracking-widest font-light text-black uppercase text-sm">emily evergreen</span>
                <span className="text-black/70 text-xs">Founder, Owner</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          <img src={image1} alt="image" className="w-full cursor-pointer" onClick={() => setShowImage({ bool: true, value: 1, currentPosition: 0 })} />
          <img src={image2} alt="image" className="w-full h-full cursor-pointer" onClick={() => setShowImage({ bool: true, value: 2, currentPosition: 1350 })} />
          <img src={image3} alt="image" className="w-full cursor-pointer" onClick={() => setShowImage({ bool: true, value: 3, currentPosition: 2700 })} />
          <img src={image4} alt="image" className="w-full cursor-pointer" onClick={() => setShowImage({ bool: true, value: 4, currentPosition: 4050 })} />
          <img src={image5} alt="image" className="w-full cursor-pointer" onClick={() => setShowImage({ bool: true, value: 5, currentPosition: 5400 })} />
          <img src={image6} alt="image" className="w-full cursor-pointer" onClick={() => setShowImage({ bool: true, value: 6, currentPosition: 6750 })} />
        </div>
      </div>
      <div className={`${showImage.bool === true ? 'opacity-100 z-[99] ' : 'opacity-0 -z-[5] '} absolute duration-500 ease-in-out`}>
        <ImageSlider setShowImage={setShowImage} showImage={showImage} />
      </div>
    </div>
  )
}

export default AboutContent