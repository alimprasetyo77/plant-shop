/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Products from "../components/Shop/Products"
import { useDispatch } from "react-redux"
import { setActivePage } from "../features/NavigationSlice"

const Shop = () => {
  useEffect(() => {
    handlePageChange()

  }, [])
  const dispatch = useDispatch()
  const handlePageChange = () => {
    dispatch(setActivePage('plants'))
  }
  return (
    <div className="bg-slate-100/70">
      <Header />
      <Products />
      <Footer />
    </div>
  )
}

export default Shop