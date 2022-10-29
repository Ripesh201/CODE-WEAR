import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import Refcon from '../context/Refcontext';
import Dellocation from './Dellocation';

const Cart = () => {

  const [products, setProducts] = useState([])
  const [cartTotal, setCartTotal] = useState({
    totalItems: 0, totalRate: 0
  })



  console.log(cartTotal)

  useEffect(() => {
    getCart();
    // eslint-disable-next-line
  }, [])


  const getCart = async () => {
    const res = await fetch(`http://localhost:5000/getCart/${localStorage.getItem('userId')}`)
      .then(response => {
        if (!response.ok) {
          console.log('error')
        }
        return response.json()
      })
    if (res.status) {
      setProducts(res.data);
      getCartTotal(); 
    }
  }

  const getCartTotal = async () => {
    const res = await fetch(`http://localhost:5000/cartTotal/${localStorage.getItem('userId')}`)
      .then(response => {
        if (!response.ok) {
          console.log('error')
        }
        return response.json()
      })

    if (res.data) {
      setCartTotal(res.data);
    }
  }

  const increaseQty = async (productId) => {
     await fetch(`http://localhost:5000/increaseQty/${productId}`)
      .then(response => {
        if (!response.ok) {
          console.log('error')
        }
        return response.json()
      })
    getCart();
  }

  const decreaseQty = async (productId) => {
   await fetch(`http://localhost:5000/decreaseQty/${productId}`)
      .then(response => {
        if (!response.ok) {
          console.log('error')
        }
        return response.json()
      })
    getCart();
  }

  const removeProduct = async (productId) => {
     await fetch(`http://localhost:5000/removeFromCart/${productId}`)
      .then(response => {
        if (!response.ok) {
          console.log('error')
        }
        return response.json()
      })
    getCart();
  }

  const clearCart = async () => {
     await fetch(`http://localhost:5000/clearCart/${localStorage.getItem('userId')}`)
      .then(response => {
        if (!response.ok) {
          console.log('error')
        }
        return response.json()
      })
    getCart();
  }

  const refcon = useContext(Refcon)
  let { refloc } = refcon
  const buyHandler = () => {
    refloc.current.click()
  }
  return (

    <div className='my-5 ' style={{ width: "80%", marginLeft: "150px", boxShadow: "1px 1px 10px 2px #888888" }}>
        <h2 className='text-center pt-4 pb-2'>Shopping Cart</h2>
      <hr className='border border-dark m-auto d-flex ' style={{ width: "93%" }} />


      <div>
        {products.length === 0 ? (
         <div className="pt-4" style={{width:"90%", height:"500px"}}>
          {/* <h2 className='text-center' >Your Cart is Empty..</h2> */}
          <img src="/assets/cart2.webp" className="card-img m-auto d-flex" alt="Background" height="460px" style={{width:"65%",paddingLeft:"70px"}}  />
          </div>
        ) : (
          <div>
          
            <div>
              {products?.map((product) => {
                return (
                  <>
                    <div className="container  py-2 itembox ">
                      <div className="row " >
                        <div className="col-md-2 py-5 mx-5 ">
                          <img src={product.product.image} class="card-img-top " alt={product.product.title} height="200px" style={{ width: "120%" }} />
                        </div>
                        <div className="col-md-5 py-5 mx-5 " style={{ paddingLeft: "110px" }}>
                          <h3 className='m-auto d-flex '>
                            {product.product.title}
                          </h3>
                          <p className="lead fw-bold mt-3" >
                            Rs. {product.product.price * 100}
                          </p>
                          <p>Quantity : {product.qty}</p>

                          <p className="lead fw-bold mt-3" >
                            Total Rs. {product.product.price * 100 * product.qty}
                          </p>

                          <button
                            disabled={product.qty === 1}
                            className='btn btn-outline-dark me-3 mt-3'
                            onClick={() => { decreaseQty(product._id) }}
                          >
                            <i className='fa fa-minus'></i>
                          </button>
                          <button
                            className='btn btn-outline-dark mt-3 '
                            onClick={() => { increaseQty(product._id) }}
                          >
                            <i className='fa fa-plus'></i>
                          </button>
                          <button
                            className='btn btn-outline-secondary mx-3 mt-3'
                            onClick={() => removeProduct(product._id)}
                          >
                            <i class="fa-solid fa-trash m-1 "></i>
                            Remove Item
                          </button>

                        </div>
                        {/* <button className='btn btn-outline-dark  mt-5' style={{width:"10%",height:"100%",marginLeft:"150px"}}>
                  Payment Now
                </button> */}
                      </div>
                    </div>
                    <hr className='border border-dark m-auto d-flex ' style={{ width: "93%" }} />

                  </>
                )
              })}
            </div>
            <div className="pt-5 pb-5">
              <div className="container border border-dark pt-2 text-center " style={{ width: "30%", height: "250px" }}>
                <h4 className='pt-3'>Total Quantity : {cartTotal.totalItems}</h4>
                <h4 className='pt-3'>Total Price : {cartTotal.totalRate * 100}</h4>
                <div className="c">
                  <button className='btn btn-outline-dark mt-3 ' style={{ width: "80%" }} onClick={buyHandler}>
                    Procced To Buy
                  </button>
                </div>
                <div className="cv">
                  <button
                    className='btn btn-outline-danger mt-3 ' style={{ width: "80%" }}
                    onClick={() => clearCart()}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Dellocation setProducts={setProducts}/>
    </div>

  )
}

export default Cart