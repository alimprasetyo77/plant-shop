/* eslint-disable no-unused-vars */
import { AiOutlineCloseCircle } from "react-icons/ai"
import { TbMessageForward, TbMinus, TbPlus } from 'react-icons/tb'
import Button from "../Button"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { removeFromCart, updateCartItem } from "../../features/CartSlice"
import { useState } from "react"
import ProductCartMobile from "./ProductCartMobile"

const ProductCart = () => {
  const itemsCart = useSelector(state => state.cart.items)
  const [dataItemUpdate, setDataItemUpdate] = useState([])
  const dispath = useDispatch()
  // menghitung subtotal
  const subTotal = itemsCart.reduce((accumulator, item) => {
    return accumulator + (item.price * item.qty);
  }, 0);

  // menampung Qty yang mau id update
  const handleQtyById = (qty, id) => {
    if (qty !== '') {
      setDataItemUpdate(prev => [...prev, { id: id, qty: qty }])
    } else {
      setDataItemUpdate(prev => [...prev, { id: id, qty: 1 }])
    }
  }

  // remove item state
  const handleRemoveItem = (itemId) => {
    dispath(removeFromCart(itemId))
  }

  // Update state
  const handleUpdateItem = (e) => {
    e.preventDefault()
    dispath(updateCartItem(dataItemUpdate))
    setDataItemUpdate([])
  }

  return (
    <div className="h-auto p-16 my-16 flex flex-col items-center justify-center max-w-xl md:max-w-6xl mx-auto font-Roboto gap-y-6 overflow-x-hidden bg-white rounded">
      <h1 className="text-2xl font-bold place-self-start">Cart</h1>
      {itemsCart.length > 0 ?
        <>
          <form onSubmit={handleUpdateItem}>
            <table className="hidden md:table w-full table-fixed border border-black/20">
              <thead className="text-start">
                <tr>
                  <th className="border border-x-0 border-black/20 p-2 text-black/70 text-sm w-24"></th>
                  <th className="border border-x-0 border-black/20 p-2 text-black/70 text-sm w-24"></th>
                  <th className="border border-x-0 border-black/20 p-2 text-black/70 text-sm w-56">Product</th>
                  <th className="border border-x-0 border-black/20 p-2 text-black/70 text-sm">Price</th>
                  <th className="border border-x-0 border-black/20 p-2 text-black/70 text-sm">Quantity</th>
                  <th className="border border-x-0 border-black/20 p-2 text-black/70 text-sm">Subtotal</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {itemsCart.map((product, index) => (
                  <tr key={index}>
                    <td className="border border-x-0 p-2 border-black/20 text-black/50 text-xl ">
                      <AiOutlineCloseCircle onClick={() => handleRemoveItem(product.id)} className="hover:text-black/80 cursor-pointer " />
                    </td>
                    <td className="border border-x-0 p-2 border-black/20">
                      <img src={product.image} alt="img" />
                    </td>
                    <td className="border border-x-0 border-black/20 p-8 text-sm">{product.name}</td>
                    <td className="border border-x-0 border-black/20 p-8">${(product.price).toLocaleString('en-US')}</td>
                    <td className="border border-x-0 border-black/20 p-8">
                      <input type="number" name="qty" id="qty" className="p-2 border border-black/20 outline-none w-20 text-center" min={1} max={100} defaultValue={product.qty} onChange={(e) => handleQtyById(e.target.value, product.id)} />
                    </td>
                    <td className="border border-x-0 border-black/20 p-8">${(product.price * product.qty).toLocaleString('en-US')}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td colSpan="6" className="px-6 py-4 w-full text-lg font-bold capitalize border border-black/20 ">
                    <div className="flex items-center justify-between ">
                      <div >
                        <input type="text" className="border border-black/20 outline-none font-normal text-sm p-2" placeholder="Coupon Code" />
                        <Button className={'bg-[#FF5100] text-white ml-2'}>Apply Coupon</Button>
                      </div>
                      {dataItemUpdate.length > 0 ?
                        <Button className={'bg-[#FF5100] text-white '} type={"submit"} >Update cart</Button>
                        :
                        <Button className={'bg-[#FF5100] text-white cursor-not-allowed opacity-80 '} type={"submit"} disabled>Update cart</Button>

                      }
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>

            {/* Table mobile */}
            <ProductCartMobile itemsCart={itemsCart} handleRemoveItem={handleRemoveItem} handleQtyById={handleQtyById} dataItemUpdate={dataItemUpdate} />
            {/* Table mobile */}

            <div className="flex justify-center md:justify-end py-8 ">
              <div className="flex flex-col w-3/4 md:w-[48%] border border-black/20 overflow-x-hidden">
                <div className="border border-t-0 border-b border-black/20 p-2">
                  <h2 className="font-semibold ">Cart Totals</h2>
                </div>
                <table>
                  <tbody>
                    <tr className="flex items-center justify-between pl-10 pr-40 py-2 text-sm text-black/70 border-b border-black/20 mx-4">
                      <th>Subtotal</th>
                      <td>${subTotal.toLocaleString('en-US')}</td>
                    </tr>
                    <tr className="flex items-center justify-between  pl-10 pr-40 py-2 text-sm text-black/70 border-b border-black/20 mx-4">
                      <th>Total</th>
                      <td>${subTotal.toLocaleString('en-US')}</td>
                    </tr>
                  </tbody>
                </table>
                <Button className={'bg-[#FF5100] m-4 text-white'}>Buy Now</Button>
              </div>
            </div>

          </form>
        </>
        :
        <>
          <div className="w-full h-[2px] bg-black"></div>
          <div className="flex items-center text-sm gap-4">
            <TbMessageForward className="text-xl" />
            Your cart is currently empty.
          </div>
          <div>
            <Link to={'/'}>
              <Button className={"bg-[#FF5100] text-white"}>Return To Shop</Button>
            </Link>
          </div>
        </>
      }
    </div>
  )
}

export default ProductCart