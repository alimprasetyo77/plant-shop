/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { MdOutlineClose } from "react-icons/md"
import { AiOutlineCloseCircle } from "react-icons/ai"
import Button from "../../Button"
import { removeFromCart } from "../../../features/CartSlice"
import { Link } from "react-router-dom"

const SideBarCart = ({ cartOpen, setCartOpen }) => {
    const cartItems = useSelector(state => state.cart.items)
    const dispatch = useDispatch()
    const subTotal = cartItems.reduce((accumulator, item) => {
        return accumulator + (item.price * item.qty);
    }, 0);
    const handleRemoveItem = (itemId) => {
        dispatch(removeFromCart(itemId))
    }
    return (
        <>
            {cartOpen && <div className={`fixed inset-0 bg-black/50 z-10`} onClick={() => setCartOpen(false)}></div>}
            <div className={`${cartOpen ? 'translate-x-0' : 'translate-x-full '}ease-in-out duration-300 transition-all fixed top-0 right-0 w-full sm:w-[450px] lg:w-[550px]  h-screen bg-white z-[11]`}>
                <div className="flex items-center justify-between text-black/90 font-semibold  border-b py-3 px-4 mb-4 ">
                    <h2 className="text-sm ">Shopping Cart</h2>
                    <MdOutlineClose className="text-2xl cursor-pointer" onClick={() => setCartOpen(false)} />
                </div>
                {cartItems.length > 0 ?
                    <>
                        {cartItems.map((cartItem, index) => (
                            < div className="flex items-start gap-x-6 text-black w-full px-4 py-3 mx-4 border-b" key={index} >
                                <img src={cartItem.image} width={40} height={40} alt="image-plants" className="object-cover object-center" />
                                <div className="flex flex-col gap-y-2 flex-grow ">
                                    <span className="font-semibold text-sm text-black/90">{cartItem.name}</span>
                                    <span className="text-[#575250] text-sm">{cartItem.qty} <span className="text-xs">x</span> ${cartItem.price}</span>
                                </div>
                                <div className="cursor-pointer " onClick={() => handleRemoveItem(cartItem.id)}>
                                    <AiOutlineCloseCircle className="text-[#575250] text-xl opacity-50 hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>
                        ))}
                    </>
                    :
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#575250] ">
                        <p>No products in the cart.</p>
                    </div>
                }
                <div className="p-4 absolute bottom-0 w-full space-y-6">
                    {cartItems.length > 0 &&
                        <div className="flex items-center justify-between  border-t border-b border-black/20 p-2">
                            <span className="font-semibold text-sm text-black/80">Subtotal:</span>
                            <span className="text-[#575250] ">${subTotal.toLocaleString('en-US')}</span>
                        </div>
                    }
                    <div className="flex flex-col gap-y-4">
                        <Link to={'/cart'}>
                            {cartItems.length > 0 && <Button className={'bg-[#FF5100] text-white w-full'}>View Cart</Button>}
                        </Link>
                        <Button className={'bg-[#FF5100] text-white w-full'}>Continue Shopping</Button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SideBarCart