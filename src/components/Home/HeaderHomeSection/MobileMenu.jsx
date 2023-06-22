/* eslint-disable react/prop-types */

import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const MobileMenu = () => {
  const activePage = useSelector(state => state.navigation.activePage)
  return (
    <>
      <div className={`flex md:hidden absolute w-screen  inset-x-0 bg-white py-4 px-6 `}>
        <ul className='flex flex-col text-black gap-y-4'>
          <li>
            <Link to={'/'} className={`${activePage == 'home' ? "opacity-100" : "opacity-60"} text-sm  hover:opacity-100 cursor-pointer`}>Home</Link>

          </li>
          <li>
            <Link to={'/shop'} className={`${activePage == 'plants' ? "opacity-100" : "opacity-60"} text-sm  hover:opacity-100 cursor-pointer`}>Plants</Link>

          </li>
          <li>
            <Link to={'/about'} className={`${activePage == 'about' ? "opacity-100" : "opacity-60"} text-sm  hover:opacity-100 cursor-pointer`}>About</Link>

          </li>
          <li>
            <Link to={'/contact'} className={`${activePage == 'contact' ? "opacity-100" : "opacity-60"} text-sm  hover:opacity-100 cursor-pointer`}>Contact</Link>

          </li>
        </ul>
      </div>
    </>
  )
}

export default MobileMenu