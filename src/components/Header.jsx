/* eslint-disable react/prop-types */
import { useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsPersonFill } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import SideBarCart from "./Home/HeaderHomeSection/SideBarCart"
import { MdOutlineClose } from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx"
import MobileMenu from "./Home/HeaderHomeSection/MobileMenu"

const Header = () => {
  const itemsCart = useSelector(state => state.cart.items)
  const activePage = useSelector(state => state.navigation.activePage)
  const [cartOpen, setCartOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)


  return (
    <nav className="w-screen h-auto p-4 md:p-7 font-Roboto bg-white border ">
      <div className="flex items-center justify-between ">
        <div className='md:hidden text-3xl cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdOutlineClose /> : <RxHamburgerMenu />}
        </div>
        <a href="/" className="text-black/80 text-2xl font-medium">Greenstore</a>
        <div id="rightNav" className='flex items-center gap-x-8 px-4'>
          < ul className='hidden md:flex gap-x-10 mr-8 text-[15px] ' >
            <Link to={'/'} className={`${activePage == 'home' ? 'text-black' : 'text-[#575250]'} hover:text-opacity-80 cursor-pointer `}>Home</Link>
            <Link to={'/shop'} className={`${activePage == 'plants' ? 'text-black' : 'text-[#575250]'} hover:text-opacity-80 cursor-pointer `}>Plants</Link>
            <Link to={'/about'} className={`${activePage == 'about' ? 'text-black' : 'text-[#575250]'} hover:text-opacity-80 cursor-pointer `}>About</Link>
            <Link to={'/contact'} className={`${activePage == 'contact' ? 'text-black' : 'text-[#575250]'} hover:text-opacity-80 cursor-pointer `}>Contact</Link>
          </ul >
          <div className='relative  text-3xl cursor-pointer' onClick={() => setCartOpen(!cartOpen)}>
            <AiOutlineShoppingCart className={`text-[#FF5100]`} />
            <span className={`bg-[#FF5100] absolute -top-3 -right-3 h-5 w-5 rounded-full text-black/80  flex justify-center items-center items text-xs font-semibold `}>{itemsCart.length}</span>
          </div>
          <div className='text-2xl cursor-pointer hidden md:flex font-semibold'>
            <BsPersonFill className="text-[#575250]" />
          </div>
        </div >
      </div>

      {isOpen && <MobileMenu />}
      <SideBarCart cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </nav >
  )
}

export default Header