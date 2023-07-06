/* eslint-disable react/prop-types */
import { FaDownload, FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa"

const ShareLink = ({ image, url }) => {
  const downloadImage = (imageUrl) => {
    const link = document.createElement('a');
    link.href = imageUrl.url;
    link.download = (imageUrl.title).replace(/\s/g, '');
    link.click();
  };
  const handleShareFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank')
  }
  const handleShareTwitter = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent('hello world')}`;
    window.open(shareUrl, '_blank')
  }
  const handleSharePinterest = () => {
    const shareUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank')
  }

  return (
    <>
      <div className="absolute w-5 h-5 rotate-45 top-[38px] right-16 bg-white"></div>
      <div className="absolute top-10 right-10 w-44 h-auto bg-white rounded-md p-4">
        <div className="flex flex-col gap-y-5 text-black">
          <div className="flex items-center gap-x-3 cursor-pointer hover:opacity-80" onClick={() => handleShareFacebook()}>
            <FaFacebook className="text-[#3b5998]" />
            <span className="capitalize text-xs block">share on facebook</span>
          </div>
          <div className="flex items-center gap-x-3 cursor-pointer hover:opacity-80" onClick={() => handleShareTwitter()}>
            <FaTwitter className="text-[#1da1f2]" />
            <span className="capitalize text-xs block">share on twitter</span>
          </div>
          <div className="flex items-center gap-x-3 cursor-pointer hover:opacity-80" onClick={() => handleSharePinterest()}>
            <FaPinterest className="text-[#bd081c]" />
            <span className="capitalize text-xs block">pin it</span>
          </div>
          <div className="flex items-center gap-x-3 cursor-pointer hover:opacity-80" onClick={() => downloadImage(image)}>
            <FaDownload className="text-[#9da5ae]" />
            <span className="capitalize text-xs block">Download image</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShareLink