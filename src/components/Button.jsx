/* eslint-disable react/prop-types */
import clsx from "clsx"

const Button = (props) => {
    return (
        <button {...props} className={clsx(props.className, ' py-3 px-7 text-black font-bold capitalize hover:opacity-80 duration-150 rounded')}>
            {props.children}
        </button>
    )
}

export default Button