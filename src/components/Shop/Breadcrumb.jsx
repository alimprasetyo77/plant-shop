/* eslint-disable react/prop-types */
import { AiFillHome } from "react-icons/ai"

const Breadcrumb = (props) => {
    return (

        <div className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <a href="/" className="inline-flex items-center gap-x-2 text-sm font-medium text-gray-700  dark:text-gray-400 ">
                       <AiFillHome className="text-xl"/>
                        Home
                    </a>
                </li>
                <li>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" ></path></svg>
                        <a href="/shop" className="ml-1 text-sm font-medium text-gray-700  md:ml-2 dark:text-gray-400 ">Shop</a>
                    </div>
                </li>  
                {props.page > 1 && 
                 <li>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" ></path></svg>
                        <a href="#" className="ml-1 text-sm font-medium text-gray-700  md:ml-2 dark:text-gray-400 ">Page {props.page}</a>
                    </div>
                </li>
                }

            </ol>
        </div>

    )
}

export default Breadcrumb