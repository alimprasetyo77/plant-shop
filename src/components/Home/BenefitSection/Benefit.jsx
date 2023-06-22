import { AiFillLock } from "react-icons/ai"
import { FaBox, FaHandHoldingHeart } from 'react-icons/fa'

const Benefit = () => {
    return (
        <div className="py-16 px-10">
            <div className="max-w-xs md:max-w-5xl  grid grid-cols-1 md:grid-cols-3 gap-16 mx-auto">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FF5100] text-white flex items-center justify-center">
                        <AiFillLock className="text-xl" />
                    </div>
                    <div>
                        <span className="uppercase font-semibold">secure payment</span>
                        <p className="text-sm">Curabitur interdum, nisl at tincidunt.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FF5100] text-white flex items-center justify-center">
                        <FaBox className="text-xl" />
                    </div>
                    <div>
                        <span className="uppercase font-semibold">DELIVERED WITH CARE</span>
                        <p className="text-sm">Donec sit amet neque id nisl.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#FF5100] text-white flex items-center justify-center">
                        <FaHandHoldingHeart className="text-xl" />
                    </div>
                    <div>
                        <span className="uppercase font-semibold">excelent service</span>
                        <p className="text-sm">Amet neque id nisl ullamcorper.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefit
