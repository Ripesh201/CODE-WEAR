import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import Refcon from '../context/Refcontext';

// navbar login button click btn ...............
const Navbar = () => {

  const refcon = useContext(Refcon)
  let { reflog,refreg } = refcon
  const showModal = () => {
    reflog.current.click()
  };
  
  
  
  
  
  // navbar register button click btn ...............
  
  
  const showModal1 = () => {
    refreg.current.click()
  };




  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-2 shadow-sm">
        <div className="container">
          <img src="/assets/logo1.jpg" alt="phone" height='50px' width='80px' />
          <Link className="navbar-brand fw-bold fs-4" to="/">CodeWear</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-1 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/products">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/contact">Contact</Link>
              </li>

            </ul>
            <div classNameName="buttons">
              <button onClick={showModal} id="btn1" className="btn btn-outline-dark">
                <i className="fa fa-sign-in" ></i> Login</button>
              <button onClick={showModal1} id="btn1" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus"></i> Register</button>
              <Link to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart"></i> Cart (0)</Link>
            </div>
          </div>
        </div>
      </nav>






      {/* ............Navbar login button ........ */}


      <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={reflog}>
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"></h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form  >
                {/*className='border border-dark p-5 border border-2 rounded-3 shadow-lg' */}
                <h1 className='text-center fw-bold '>Sign In</h1>
                <hr className='border border-dark border border-3  ' />
                {/* <div className="col-md-5 d-flex justify-content-center">
            
                        <img src="/assets/login.jpg" alt="conatct" height='300px' width='300px' />
                    </div> */}
                <div className="mb-3 pt-3 ">
                  <label for="exampleInputEmail1" className="form-label " >Email address</label>
                  <input type="email" className="form-control  border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 pt-3 pb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control  border-dark" id="exampleInputPassword1" />
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-dark">Login</button>
            </div>
          </div>
        </div>
      </div>




      {/* ............Navbar Register button ........ */}



      <button type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal2" ref={refreg}>
        Launch demo modal
      </button>

      <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <h1 className='text-center fw-bold '>Sign Up</h1>
                <hr className='border border-dark border border-3' />
                <div className="row">
                  <div className="col mb-3 pt-2">
                    <label for="validationCustom01" className="form-label">First Name</label>
                    <input type="text" className="form-control border-dark" placeholder="First name" aria-label="First name" required />
                  </div>
                  <div className="col pt-2 mb-3">
                    <label for="exampleInput" className="form-label">Last Name</label>
                    <input type="text" className="form-control border-dark" placeholder="Last name" aria-label="Last name" required />
                  </div>
                </div>
                <div className="pt-1 pb-3">
                  <label for="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control  border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className=" pt-1 pb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control  border-dark" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 pt-1 pb-3">
                  <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control  border-dark" id="exampleInputPassword1" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-dark">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar