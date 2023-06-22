/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import Button from "../Button"

const Alert = ({title}) => {
  return (
    <div id="alert-border-3" className="flex flex-col md:flex-row top-5 right-5 left-5 shadow-sm gap-6 justify-between p-4 mb-4 text-green-800 border-t-4 border-green-500 bg-white/10 " role="alert">
      <div className="flex items-center gap-x-2 ml-3 text-sm font-medium ">
        <svg className="flex-shrink-0 w-6 h-6 fill-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z " ></path></svg>
        " {title} " has been added to your cart.
      </div>
      <Link to={'/cart'}>
        <Button className={'bg-[#FF5100] text-white text-sm'}>View Cart</Button>
      </Link>
    </div>
  )
}

export default Alert