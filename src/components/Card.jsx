/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import clsx from "clsx"
const Card = ({ children, className }) => {
    return (
        <div className={clsx(className, 'ease-in-out duration-500 transition-all')}>
            {children}
        </div>
    )
}
const thumbnailCard = (props) => {
    return (
        <img src={props.src} {...props} alt="thumbnail" width={props.width} height={props.height} className={clsx(props.className, "bg-center bg-cover")} />
    )
}

const summaryCard = ({ children, className }) => {
    return (
        <div className={clsx(className, "flex flex-col items-start gap-y-2 py-2")} >
            {children}
        </div>
    )
}
Card.thumbnail = thumbnailCard
Card.summary = summaryCard
export default Card