/* eslint-disable react/prop-types */

const MobileMenu = () => {
    return (
        <>
            <div className={`ease-in-out duration-150 transition-all flex md:hidden absolute w-screen  inset-x-0 bg-white py-2 px-6 `}>
                <ul className='flex flex-col text-black gap-y-4'>
                    <li className='text-lg cursor-pointer'>Home</li>
                    <li className='text-lg opacity-60 hover:opacity-100 cursor-pointer'>Plants</li>
                    <li className='text-lg opacity-60 hover:opacity-100 cursor-pointer'>About</li>
                    <li className='text-lg opacity-60 hover:opacity-100 cursor-pointer'>Contact</li>
                </ul>
            </div>
        </>
    )
}

export default MobileMenu