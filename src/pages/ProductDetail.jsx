/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import Product from '../components/ProductDetail/Product'
import { useDispatch } from 'react-redux'
import { setActivePage } from '../features/NavigationSlice'
import Header from '../components/Header'
import Footer from '../components/Footer'
const ProductDetail = () => {
  useEffect(() => {
    handlePageChange()

  }, [])
  const dispatch = useDispatch()
  const handlePageChange = () => {
    dispatch(setActivePage('plants'))
  }
  return (
    <div className='absolute overflow-x-hidden'>
      <Header />
      <Product />
      <Footer />
    </div>
  )
}

export default ProductDetail