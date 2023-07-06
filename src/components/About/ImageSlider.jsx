/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import image1 from "../../assets/products-img/image1.jpg";
import image2 from "../../assets/products-img/image2.jpg";
import image3 from "../../assets/products-img/image3.jpg";
import image4 from "../../assets/products-img/image4.jpg";
import image5 from "../../assets/products-img/image5.jpg";
import image6 from "../../assets/products-img/image6.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { BsZoomIn } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import ShareLink from "./ShareLink";

const ImageSlider = ({ setShowImage, showImage }) => {
  const [currenIndex, setCurrenIndex] = useState(1);
  const [zoomActive, setZoomActive] = useState(false);
  const [shareActive, setShareActive] = useState(false)
  const [position, setPosition] = useState(0)

  const image = [
    { url: image1, title: "image 1" },
    { url: image2, title: "image 2" },
    { url: image3, title: "image 3" },
    { url: image4, title: "image 4" },
    { url: image5, title: "image 5" },
    { url: image6, title: "image 6" },
  ];

  useEffect(() => {
    setCurrenIndex(showImage.value);
    setPosition(showImage.currentPosition)
  }, [showImage]);

  const goToPrev = () => {
    const isFirstSlide = currenIndex === 1;
    const newIndex = isFirstSlide ? image.length : currenIndex - 1;
    setCurrenIndex(newIndex);

    const first = position === 0
    const newPosition = first ? 6750 : position - 1350
    setPosition(newPosition)
    setZoomActive(false)
  };
  const goToNext = () => {
    const isLastSlide = currenIndex === image.length;
    const newIndex = isLastSlide ? 1 : currenIndex + 1;
    setCurrenIndex(newIndex);

    const last = position === 6750
    const newPosition = last ? 0 : position + 1350
    setPosition(newPosition)
    setZoomActive(false)
  };
  const styles = {
    transform: `${position > 0 ? `translateX(-${position}px)` : `translateX(-0px)`}`
  };
  return (
    <div className={`fixed inset-0 ${shareActive ? 'bg-black/90' : 'bg-black/80'} duration-500 z-0`}>
      <div className="absolute flex items-center gap-x-8  top-5 right-10 z-[60] text-white">
        <BsZoomIn
          className="text-2xl cursor-pointer opacity-80 hover:opacity-100 duration-300"
          onClick={() => setZoomActive(!zoomActive)}
        />
        <FaShare
          className="text-2xl cursor-pointer opacity-80 hover:opacity-100 duration-300"
          onClick={() => setShareActive(!shareActive)}
        />
        {shareActive && <ShareLink image={image[currenIndex - 1]} url={'https://www.test.com'} />}

        <MdClose
          className="text-3xl cursor-pointer opacity-80 hover:opacity-100 duration-300"
          onClick={() => setShowImage(false)}
        />
      </div>

      <span className="text-white text-lg absolute left-10 top-5">
        {currenIndex} / {image.length}
      </span>

      <div className="absolute text-white text-4xl top-1/2 left-5 md:left-20 z-50 cursor-pointer">
        <AiOutlineArrowLeft onClick={goToPrev} />
      </div>

      {/* <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-50" >
        <img src={image[currenIndex - 1]?.url} alt="plant" width={300} height={300} className={`${zoomActive ? 'scale-[3]' : 'scale-100'} ${fullScreenActive ? 'h-screen w-screen' : ''} duration-500`} />
      </div> */}

      <div className={`fixed top-1/2 w-[350px] right-1/2 translate-x-1/2 -translate-y-1/2 z-10`}>
        <div className={`flex items-center  transition-transform duration-200 ease-in gap-x-[1000px]`} style={styles}>
          {Array.from({ length: image.length }, (_, index) => (
            <img src={image[index].url} alt="image" key={index} className={`h-[550px] duration-300 ${zoomActive ? 'scale-[2]' : 'scale-100'}`} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-5 right-[49%]  text-white text-xl">
        <span>{image[currenIndex - 1]?.title}</span>
      </div>

      <div className="absolute text-white text-4xl top-1/2 right-5 md:right-20 z-50 cursor-pointer ">
        <AiOutlineArrowRight onClick={goToNext} />
      </div>
    </div >
  );
};

export default ImageSlider;
