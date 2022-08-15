import React from 'react'
import About from './About';
import Contact from './Contact';
import Products from './Products'



const Home = () => {
  return (
    <div className='hero'>
      <div className="card text-bg-dark">
        <img src="/assets/bg.jpg" className="card-img" alt="Background" height="680px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="">
            <h5 className="card-title display-4 fw-bolder mb-o text-white">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2 ">
              CHECK OUT ALL THE TRENDS
            </p>
          </div>
        </div>
      </div>

      <Products></Products>
      {/* <About></About> */}
      {/* <Contact></Contact> */}
      {/* <Login></Login> */}
    </div>
  )

}

export default Home;