import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai"
import Button from "./Button"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-[#575250] text-white py-24 flex flex-col items-center justify-center gap-y-12">
            <ul className=" flex items-center gap-x-8 ">
                <Link to={'/'}>
                    <li>Home</li>
                </Link>
                <Link to={'/shop'}>
                    <li>Plants</li>
                </Link>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="flex flex-col items-center gap-y-4 ">
                <h2 className="text-2xl font-bold">Subscribe to our newsteller</h2>
                <div className="flex items-center gap-x-2">
                    <input type="email" className="p-3 w-56 md:w-96 text-sm" placeholder="Your Email Address" />
                    <Button className={'text-white bg-[#FF5100] py-2 px-4 md:py-4 md:px-8'}>Subscribe</Button>
                </div>
            </div>
            <div className="flex items-center gap-x-6 text-xl">
                <AiFillInstagram />
                <AiFillFacebook />
                <AiFillTwitterCircle />
            </div>
        </footer>
    )
}

export default Footer