/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { AiOutlineStar } from 'react-icons/ai'

const RatingStar = ({ star }) => {
    const array = Array.from({ length: 5 }, (element, index) => {
        return (
            <span key={index}>
                {star >= index + 1 ?
                    <AiOutlineStar /> : null
                }
            </span>
        )
    })
    return (
        <div className='flex text-sm'>{array}</div>
    )
}

export default RatingStar