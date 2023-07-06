/* eslint-disable react-hooks/exhaustive-deps */
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setActivePage } from '../features/NavigationSlice';
import AboutContent from '../components/About/AboutContent';
const About = () => {
  useEffect(() => {
    handlePageChange()

  }, [])
  const dispatch = useDispatch()
  const handlePageChange = () => {
    dispatch(setActivePage('about'))
  }
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About