/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import ProductCart from "../components/Cart/ProductCart"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useDispatch } from "react-redux"
import { setActivePage } from "../features/NavigationSlice"

const Cart = () => {
<<<<<<< HEAD
    useEffect(() => {
        handlePageChange()
      
      }, [])
      const dispatch = useDispatch()
      const handlePageChange = () => {
          dispatch(setActivePage('cart'))
      }
    return (
        <>
            <Header />
            <ProductCart />
            <Footer />
        </>
    )
=======
  useEffect(() => {
    handlePageChange()

  }, [])
  const dispatch = useDispatch()
  const handlePageChange = () => {
    dispatch(setActivePage('cart'))
  }
  return (
    <div className="bg-slate-100">
      <Header />
      <ProductCart />
      <Footer />
    </div>
  )
>>>>>>> master
}

export default Cart