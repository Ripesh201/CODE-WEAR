import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import Refcon from '../context/Refcontext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dbcon from '../context/Dbcon';
// navbar login button click btn ...............
const Navbar = () => {
  const [data, setdata] = useState({ fname: "", lname: "", email: "", pass: "", cpass: "" })

  const refcon = useContext(Refcon)
  let { reflog, refreg, refsignup, refclose, refclosein, refsignin,reload,setreload } = refcon
  const showModal = () => {
    reflog.current.click()
  };



  const changeHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  // navbar register button click btn ...............


  const showModal1 = () => {
    refreg.current.click()
  };


  const subHandler = async (e) => {
    e.preventDefault();
    let { fname, lname, email, pass, cpass } = data;
    const res = await fetch("http://localhost:5000/auth/signup", {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "auth-token":localStorage.getItem("token")

      },
      body: JSON.stringify({ fname, lname, email, pass, cpass })
    })
    const token = await res.json();
    if (res.status === 201) {
      console.log("sign up done.!");
      setdata({ fname: "", lname: "", email: "", pass: "", cpass: "" })
      refclose.current.click()

      localStorage.setItem("token", token)
      getcontact()
      setreload({})

    }
    else {

      toast.warn(`${token}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          textTransform: "capitalize"
        }
      })
    }

  }

  // sign in

  const condb = useContext(Dbcon)
  let { getcontact } = condb

  const [data2, setData2] = useState({ email: "", pass: "" })
  const subHandler2 = async (e) => {
    e.preventDefault();
    let { email, pass } = data2
    const res = await fetch("http://localhost:5000/auth/signin", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "auth-token":localStorage.getItem("token")
      },
      body: JSON.stringify({ email, pass })
    })
    const token = await res.json()
    if (res.status === 200) {
      localStorage.setItem("token", token)
      setData2({ email: "", pass: "" })

      refclosein.current.click()

      getcontact()
      setreload({})

    }
    else {
      // refclose.current.click()

      toast.warn(`${token}`, {
        position: "top-right",
        autoClose: 2300,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        progressClassName: 'bar',
        style: {
          textTransform: "capitalize"
        }


      });
    }
  }

  const changeHandler2 = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value })
  }

  const subTrigger = () => {
    refsignup.current.click()
  }
  const signinTrigger = () => {
    refsignin.current.click()
  }

  // logout
  const logoutHandler = () => {
    localStorage.removeItem("token")
    setreload({})
  }
  const changepassHandler = () => {

  }
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
              <div className='d-flex'>

                {!localStorage.getItem("token") && <> <button onClick={showModal} id="btn1" className="btn btn-outline-dark">
                  <i className="fa fa-sign-in" ></i> Login</button>
                  <button onClick={showModal1} id="btn1" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-user-plus"></i> Register</button></>}

                {localStorage.getItem("token") && <><li className="nav-item dropdown mx-3 pt-2" style={{ listStyle: "none",marginTop:"-6px" }}>
                  <Link className="nav-link  links dropdown-toggle" to="" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                    <i className="fa-solid fa-user nicons"></i> <span style={{fontSize:"20px"}}>{localStorage.getItem("fname")}</span>
                  </Link>
                  <ul className="dropdown-menu p-2" style={{ width: "257px" }}>
                    <li onClick={changepassHandler} ><Link
                      className="dropdown-item p-1" to="#" style={{ fontSize: "21px" }}><i className="fa-solid fa-unlock" style={{ fontSize: "21px" }}></i> Change Password</Link></li>

                    <li className='logout' onClick={logoutHandler}> <Link to="#" style={{ fontSize: "21px" }}
                      className='dropdown-item p-1'><i className="fa-solid fa-right-from-bracket" style={{ fontSize: "21px" }}></i> Logout</Link></li>


                  </ul>
                </li></>}
                <Link to="/cart" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-shopping-cart"></i> Cart (0)</Link>
              </div>
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
              <form method='post' onSubmit={subHandler2} >
                <h1 className='text-center fw-bold '>Sign In</h1>
                <hr className='border border-dark border border-3  ' />


                <div className="mb-3 pt-3 ">
                  <label for="exampleInputEmail1" className="form-label " >Email address</label>
                  <input type="email" className="form-control  border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" name='email' onChange={changeHandler2} value={data2.email} />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 pt-3 pb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control  border-dark" id="exampleInputPassword1" name='pass' onChange={changeHandler2} value={data2.pass} />
                </div>
                <input type="submit" className='d-none' value="" ref={refsignin} />
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal" ref={refclosein}>Close</button>
              <button type="button" onClick={signinTrigger} class="btn btn-dark">Login</button>
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
              <form method='post' onSubmit={subHandler}>
                <h1 className='text-center fw-bold '>Sign Up</h1>
                <hr className='border border-dark border border-3' />
                <div className="row">
                  <div className="col mb-3 pt-2">
                    <label for="validationCustom01" className="form-label">First Name</label>
                    <input type="text" name='fname' className="form-control border-dark" placeholder="First name" aria-label="First name" onChange={changeHandler} value={data.fname} required />
                  </div>
                  <div className="col pt-2 mb-3">
                    <label for="exampleInput" className="form-label">Last Name</label>
                    <input type="text" name='lname' className="form-control border-dark" placeholder="Last name" aria-label="Last name" required onChange={changeHandler} value={data.lname} />
                  </div>
                </div>
                <div className="pt-1 pb-3">
                  <label for="exampleInputEmail2" className="form-label">Email address</label>
                  <input type="email" name='email' className="form-control  border-dark" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="name@example.com" onChange={changeHandler} value={data.email} />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className=" pt-1 pb-3">
                  <label for="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" name='pass' className="form-control  border-dark" id="exampleInputPassword1" onChange={changeHandler} value={data.pass} />
                </div>
                <div className="mb-3 pt-1 pb-3">
                  <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                  <input type="password" name='cpass' className="form-control  border-dark" id="exampleInputPassword1" onChange={changeHandler} value={data.cpass} />
                </div>
                <input type="submit" className='d-none' value="" ref={refsignup} />
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal" ref={refclose}>Close</button>
              <button type="button" onClick={subTrigger} class="btn btn-dark">Register</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Navbar