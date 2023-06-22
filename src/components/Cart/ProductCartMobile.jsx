/* eslint-disable react/prop-types */
import { AiOutlineCloseCircle } from "react-icons/ai"
import Button from "../Button"

const ProductCartMobile = ({ itemsCart, handleRemoveItem, handleQtyById, dataItemUpdate }) => {

  return (
    <div className="md:hidden flex flex-col gap-y-8">
      {itemsCart.map((item, index) => (
        <div className="border border-black/20" key={index}>
          <div className="border-b border-black/20 p-4 flex justify-end">
            <AiOutlineCloseCircle className="hover:text-black/80 cursor-pointer text-right" onClick={() => handleRemoveItem(item.id)} />
          </div>
          <div className="border-b border-black/20 p-4 flex justify-center">
            <img src={item.image} width={100} height={100} />
          </div>
          <div className="border-b border-black/20 p-4 flex justify-between">
            <span className="font-semibold text-sm text-black/70 capitalize">Product :</span>
            <span className="font-semibold text-sm text-black/70 capitalize">{item.name}</span>
          </div>
          <div className="border-b border-black/20 p-4 flex justify-between">
            <span className="font-semibold text-sm text-black/70 capitalize">Price :</span>
            <span className="font-semibold text-sm text-black/70 capitalize">${item.price}</span>
          </div>
          <div className="border-b border-black/20 p-4 flex justify-between">
            <span className="font-semibold text-sm text-black/70 capitalize">Quantity :</span>
            <div className="flex items-center gap-x-4">
              <input className="p-2 border border-black/20 outline-none w-14 text-center" type="number" min={1} max={100} onChange={(e) => handleQtyById(e.target.value, item.id)} defaultValue={item.qty} />
            </div>
          </div>
          <div className="border-b border-black/20 p-4 flex justify-between">
            <span className="font-semibold text-sm text-black/70 capitalize">subTotal :</span>
            <span className="font-semibold text-sm text-black/70 capitalize">{'$' + (item.price * item.qty).toLocaleString('en-US')}</span>
          </div>
        </div>
      ))}
      <div className="border p-4 border-black/20 flex justify-between">
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
    </div>
  )
}

export default ProductCartMobile