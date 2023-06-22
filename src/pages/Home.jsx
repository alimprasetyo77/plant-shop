/* eslint-disable react-hooks/exhaustive-deps */
import Benefit from "../components/Home/BenefitSection/Benefit"
import Footer from "../components/Footer"
import GiftCard from "../components/Home/GiftCardSection/GiftCard"
import Products from "../components/Home/ProductsSection/Products"
import Story from '../components/Home/StorySection/Story'
import FeedBack from '../components/Home/FeedbackSection/FeedBack'
import HeaderHome from '../components/Home/HeaderHomeSection/HeaderHome'
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { setActivePage } from "../features/NavigationSlice"
const Home = () => {
  useEffect(() => {
    handlePageChange()

  }, [])
  const dispatch = useDispatch()
  const handlePageChange = () => {
    dispatch(setActivePage('home'))
  }
  return (
    <div className="overflow-x-hidden ">
      <HeaderHome />
      <Products />
      <Story />
      <FeedBack />
      <GiftCard />
      <Benefit />
      <Footer />
    </div>
  )
}

export default Home