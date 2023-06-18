/* eslint-disable react/prop-types */
import clsx from "clsx"

const Button = (props) => {
    return (
        <button {...props} className={clsx(props.className, ' py-3 px-7 text-black font-semibold capitalize')}>
            {props.children}
        </button>
    )
}

export default Button