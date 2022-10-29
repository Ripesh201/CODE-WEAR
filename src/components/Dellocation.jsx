import React, { useContext, useState } from 'react'
import Refcon from '../context/Refcontext';
import Dbcon from '../context/Dbcon';
import { toast } from 'react-toastify';

function Dellocation(props) {
    const refcon = useContext(Refcon)
    let { refloc, reflocclose, reflocsub } = refcon
    const [data, setdata] = useState({ hno: "", area: "", pin: "", cod: "", city: "" })

    const clearCart = async () => {
        await fetch(`http://localhost:5000/clearCart/${localStorage.getItem('userId')}`)
          .then(response => {
            if (!response.ok) {
              console.log('error')
            }
            return response.json()
          })
      }

      const dbcon=useContext(Dbcon)
      let {yourorder}=dbcon;

    const subHandler = (e) => {
        e.preventDefault()

        let { hno, area, pin, cod, city } = data
        if (cod === ""||city===""||hno===""||area===""||pin==="") {
            toast.warning(`All Fields Are Required`, {
                position: "top-right",
                autoClose: 2300,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style: {
                    textTransform: "capitalize"
                }
            })
        }else{

            yourorder(hno, area, pin, cod, city)
            setdata({ hno: "", area: "", pin: "", cod: "", city: "" })
            clearCart()
        }
        
        }
    const changeHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })


    }
    const clickHandler = () => {


        reflocsub.current.click()
    }


    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropl" style={{ display: "none" }} ref={refloc}>
            </button>

            <div className="modal fade pt-4 pb-4" id="staticBackdropl" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-capitalize" style={{ fontSize: "23px" }} id="staticBackdropLabel">enter your delivery location <i className="fa-solid fa-location-dot" style={{ fontSize: "23px" }}></i></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form method='POST' onSubmit={subHandler} >

                                <div className="mb-3">

                                    <label htmlFor="hno" className="form-label text-capitalize">Flat, House no., Building, Company, Apartment</label>
                                    <input type="text" className="form-control boder border-dark" id="hno" name="hno" required onChange={changeHandler} minLength={3} value={data.hno} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="area" className="form-label text-capitalize">Area, Street, Sector, Village</label>
                                    <input type="text" className="form-control boder border-dark" id="area" name="area" required onChange={changeHandler} minLength={5} value={data.area} />
                                </div>
                                <div className="mb-3 d-flex justify-content-between">
                                    <div>

                                        <label htmlFor="pin" className="form-label text-capitalize">Your Pincode</label>
                                        <input type="text" className="form-control boder border-dark" id="pin" name="pin" required onChange={changeHandler} minLength={5} value={data.pin} />
                                    </div>
                                    <div>

                                        <label htmlFor="city" className="form-label text-capitalize text-end d-block mx-2">Your City</label>
                                        <input type="text" className="form-control boder border-dark" id="city" name="city" required onChange={changeHandler} minLength={5} value={data.city} />
                                    </div>
                                </div>
                                <div className=' pb-3'>

                                    <label htmlFor="cod" className="form-label text-capitalize " style={{ marginLeft: "5px" }}>Payment Mode</label>
                                    <select required className="form-select boder border-dark" aria-label="Default select example" name='cod' id='cod' onChange={changeHandler} value={data.cod} >
                                        <option value="select payment mode">Select Payment Mode</option>
                                        <option value="cash on delivery" >Cash On delivery</option>

                                    </select>
                                </div>




                                <input type="submit" value="confirm order" style={{ display: "none" }} ref={reflocsub} />
                            </form>
                        </div>
                        <div className="modal-footer">

                            <div>

                                <button type="button" className="btn btn-outline-dark mx-1" data-bs-dismiss="modal" ref={reflocclose}>Close</button>
                                <button type="button" className="btn btn-dark mx-1" style={{
                                    outline: "none"
                                }} onClick={clickHandler}>Confirm Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dellocation