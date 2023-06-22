/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect,  useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import Button from '../Button'
import DangerAlert from './DangerAlert'
const Rating = ({setLength}) => {
  const [reviews, setReviews] = useState([])
  const [rating, setRating] = useState(0)
  const [alert, setAlert] = useState(false)
  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = () => {
    setReviews(JSON.parse(localStorage.getItem('reviews')))
  }
  const handleReview = (e) => {
    // e.preventDefault()
    const newItem = {
      review: e.target[0].value,
      rating: rating,
      name : e.target[1].value,
      email : e.target[2].value
    }
    if (newItem.review !== '' && newItem.rating >= 1 && newItem.name !==  '' && newItem.email !== '') {
      setAlert(false)
      // Mendapatkan data dari Local Storage
      const existingData = localStorage.getItem('reviews');
      // Mengubah data menjadi array (jika ada) atau membuat array kosong (jika tidak ada)
      const dataArray = existingData ? JSON.parse(existingData) : [];
      dataArray.push(newItem);
      // Simpan ke Local Storage
      localStorage.setItem('reviews', JSON.stringify(dataArray));
      setReviews(JSON.parse(existingData))
      setLength(JSON.parse(localStorage.getItem('reviews')).length)
    } else {
      setAlert(true)
    }
    
  }

  return (
    <>
      {reviews?.length > 0 ?
        <div className='flex flex-col gap-y-8'>
          {reviews?.map((data, index) => (
            <div className='flex items-center gap-x-4' key={index}>
              <img src="http://source.unsplash.com/60x60?person" className='h-14 w-14 rounded-full' alt="" />
              <div className='flex flex-col gap-y-4'>
                <span className='text-black/50 text-xl '>Your review is awaiting approval</span>
                <div className='flex items-center'>
                  {Array.from({ length: data.rating }, (_, index) => (
                    <AiFillStar key={index} className='text-yellow-500 text-xl' />
                  ))}
                </div>
                <p className='text-black/70 text-base'>{data.review}</p>
              </div>
            </div>
          ))}
        </div>
        :
        <p className='text-black/60 '>There are no reviews yet.</p>
      }
      <div className="flex flex-col p-6 gap-4 shadow-md text-black/70 border border-gray-900/20">
      {alert && <DangerAlert />}
        <h1 className="text-xl font-medium ">Add Review</h1>
        <span className='-mt-2'>Your email address will not be published. Required fields are marked *</span>
        <form onSubmit={handleReview} className='space-y-4'>
          <div className="flex items-center gap-x-4">
            <span className='text-lg font-medium'>Your Rating *</span>
            <div className='flex items-center text-2xl'>
              {[1, 2, 3, 4, 5].map(value => (
                <AiFillStar key={value} className={`${value <= rating ? 'text-yellow-500' : 'text-gray-400'} cursor-pointer`} onClick={() => setRating(value)} />
              ))}
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='relative'>
              <span className='text-lg font-medium'>Your Review *</span>
            </div>
            <textarea id="text" cols="30" rows="5" maxLength={615} className='resize-none outline-none border border-gray-900/20 p-4 rounded' ></textarea>
          </div>
          <div className='flex items-center gap-x-4'>
            <div className='w-1/2'>
              <label>Name *</label>
              <input type="text" className='py-3 px-4 w-full outline-none border border-gray-900/20 rounded'/>
            </div>
            <div className='w-1/2'>
              <label>Email *</label>
              <input type="email" className='py-3 px-4 w-full outline-none border border-gray-900/20 rounded'/>
            </div>
          </div>
          <div className='flex items-center gap-x-2'>
            <input type="checkbox" className='outline-none border border-black/20' />
            <p className='text-sm'>Save my name, email, and website in this browser for the next time I comment.</p>
          </div>
          <Button className={'bg-[#FF5100] text-white font-medium py-2 px-0 w-28'}>Submit</Button>
        </form>
      </div>
    </>
  )
}

export default Rating