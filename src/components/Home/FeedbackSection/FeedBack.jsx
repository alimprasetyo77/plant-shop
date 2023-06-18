// import Card from "../Card"
import data from '../../../data.json'
import Card from '../../Card'
import { FaQuoteLeft } from 'react-icons/fa'
const FeedBack = () => {
    return (
        <div className="py-24">
            <div className='flex flex-col items-center'>
                <h1 className="text-[#1E1810] text-3xl md:text-4xl font-bold">What Our Customers Say</h1>
                <div className="w-10 h-px bg-orange-500 my-4 "></div>
            </div>

            <div className="text-center max-w-xs md:max-w-sm lg:max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
                {data.Feedback.map((data, index) => (
                    <Card key={index}>
                        <Card.summary className={'items-center gap-y-6 pt-6'}>
                            <span className='text-[#FF7A3D] text-xl'><FaQuoteLeft /></span>
                            <p className='font-medium text-[#1E1810]'>{data.text}</p>
                            <div className='flex flex-col items-center gap-y-4'>
                                <Card.thumbnail src={data.PhotoProfileUrl} width={40} height={40} alt="profile" className='rounded-full' />
                                <span className='text-xs font-semibold tracking-[2px] uppercase text-[#575250]'>{data.name}</span>
                            </div>
                        </Card.summary>
                    </Card>
                ))}
            </div>
        </div >
    )
}

export default FeedBack