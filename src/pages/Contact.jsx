/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import ContactContent from "../components/Contact/ContactContent"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { useDispatch } from "react-redux"
import { setActivePage } from '../features/NavigationSlice';


const Contact = () => {
  useEffect(() => {
    handlePageChange()

  }, [])
  const dispatch = useDispatch()
  const handlePageChange = () => {
    dispatch(setActivePage('contact'))
  }
  return (
    <div>
      <Header />
      <ContactContent />
      <Footer />
    </div>
  )
}

export default Contact