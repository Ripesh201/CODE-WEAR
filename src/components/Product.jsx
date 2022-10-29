import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';
import { Skeleton } from 'antd';


// import { useDispatch } from 'react-redux';
// import { addCart } from '../Cart/Action';


const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);


    // const dispatch = useDispatch();
    // const addProduct = (product) =>{
    //     dispatch(addCart(product));
    // }


    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch(`http://fakestoreapi.com/products/${id}`);

            setProduct(await response.json());
            setLoading(false);

        }
        getProducts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={70} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </>
        )
    }

    const addToCart = async () => {
        const param = {
            userId: localStorage.getItem('userId'),
            product: product,
            qty: 1
        }
        const res = await fetch("http://localhost:5000/addToCart", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "auth-token": localStorage.getItem("token")
            },
            body: JSON.stringify(param)
        })
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title}
                        height="400px" width="400x" />
                </div>

                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                    <h2 className='display-5'>{product.title}</h2>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>

                    <h3 className='display-6 fw-bold my-4'>
                        Rs.{product.price * 100}
                    </h3>
                    <p className="lead">{product.description}</p>
                    <button onClick={() => addToCart()} className='btn btn-outline-dark px-4 py-2'>
                        Add to Cart
                    </button>
                    <Link to="/cart" className='btn btn-dark ms-2 px-3 py-2'>
                        Go to Cart
                    </Link>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5" >
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Product