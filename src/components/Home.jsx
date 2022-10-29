import React from 'react'
import Products from './Products'



const Home = () => {
  return (
    <>
      <div className='hero'>
        <div className="card text-bg-dark">
          <img src="/assets/bg.jpg" className="card-img" alt="Background" height="700px" />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="i">
              <h5 className="card-title display-4 fw-bolder mb-o text-white">NEW SEASON ARRIVALS</h5>
              <p className="card-text lead fs-2">
                CHECK OUT ALL THE TRENDS
              </p>
            </div>
          </div>
        </div>




        <Products></Products>
      </div>
    </>
  )

}

export default Home;