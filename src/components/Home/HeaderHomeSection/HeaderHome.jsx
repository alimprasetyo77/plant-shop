/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdOutlineClose } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'
import Hero from './Hero'
import MobileMenu from './MobileMenu'
import SideBarCart from './SideBarCart'
import { Link } from 'react-router-dom'
import { setActivePage } from '../../../features/NavigationSlice'
const Header = () => {
  const activePage = useSelector((state) => state.navigation.activePage)
  const [isOpen, setIsOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const itemsCart = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  const handlePageChange = (page) => {
    dispatch(setActivePage(page))
  }
  return (
    <nav className="w-screen h-screen p-4 md:p-8 bg-[url('./assets/chris-lawton-cfl3FijYglM-unsplash.jpg')] bg-no-repeat bg-cover bg-center text-white bg-black/50 bg-blend-multiply font-Roboto relative ">
      <div className="flex items-center justify-between">
        <div className='md:hidden text-3xl cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdOutlineClose /> : <RxHamburgerMenu />}
        </div>
        <div id="brand">
          <h1 className='font-Roboto text-xl md:text-3xl cursor-pointer'>Greenstore</h1>
        </div>
        <div id="rightNav" className='flex items-center gap-x-8 px-4'>
          <ul className='hidden md:flex gap-x-8 mr-8 text-lg text-white/80'>
            <Link to={'/'} className={`${activePage == 'home' ? 'text-white' : ''} cursor-pointer `}>Home</Link>
            <Link to={'/shop'} className='cursor-pointer' onClick={() => handlePageChange('plants')}>Plants</Link>
            <Link to={'/about'} className='cursor-pointer' onClick={() => handlePageChange('about')}>About</Link>
            <Link to={'/contact'} className='cursor-pointer' onClick={() => handlePageChange('contact')}>Contact</Link>
          </ul>
          <div className='relative text-3xl cursor-pointer' onClick={() => setCartOpen(!cartOpen)}>
            <AiOutlineShoppingCart />
            <span className='absolute -top-3 -right-3 h-5 w-5 rounded-full bg-white flex justify-center items-center items text-xs text-black font-semibold'>{itemsCart.length}</span>
          </div>
          <div className='text-3xl cursor-pointer hidden md:flex font-semibold'>
            <BsPerson />
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && <MobileMenu />}
      {/* Cart Menu */}
      {<SideBarCart cartOpen={cartOpen} setCartOpen={setCartOpen} />}
      <Hero />
    </nav>
  )
}

export default Header