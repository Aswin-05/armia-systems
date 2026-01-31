import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Layout/Header/Header'
import Footer from './Components/Layout/Footer/Footer'
import Banner from './Components/Layout/Banner/Banner'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<div className="container mt-5"><h2>Home</h2></div>} />
        <Route path="/about" element={<div className="container mt-5"><h2>About Us</h2></div>} />
        <Route path="/services" element={<div className="container mt-5"><h2>Services</h2></div>} />
        <Route path="/blog" element={<div className="container mt-5"><h2>Blog</h2></div>} />
        <Route path="/contact" element={<div className="container mt-5"><h2>Contact Us</h2></div>} />
      </Routes>
      <Footer />
    </>
  )
}



export default App
