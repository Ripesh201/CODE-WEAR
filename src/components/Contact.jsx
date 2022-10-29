import React,{useState} from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Contact = () => {

    let navigate = useNavigate()
    const [data, setdata] = useState({ name: "", email: "", msg: "" })
    const changeHandler = (e) => {
        setdata({ ...data, [e.target.name]:e.target.value})
    }
    const subHandler = async (e) => {
        e.preventDefault();
        let { name, email, msg } = data;
        const res = await fetch("http://localhost:5000/auth/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")

            },
            body: JSON.stringify({ name, email, msg })
        })
        const cdata = await res.json();
        if (res.status === 201) {

            console.log("ok" + cdata.ok);
            setdata({ name: "", email: "", msg: "" })
            navigate("/")

            toast.success(`Your Message Has Been Sent`, {
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

        }

    }
    return (
        <>
            <div className="contact_info" style={{ width: "100%" }}>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between p-5" >
                        {/* phone number */}
                        <div className="contact_info_item py-3 d-flex justify-content-center align-items-center col-md-3 border border-dark" style={{ boxShadow: "5px 5px 10px #888888", borderRadius: "10px" }} >
                            <i class="fs-5 mx-2 fa-solid fa-mobile-screen"></i>
                            <div className="contact_info_content ">
                                <div className="contact_info_title ">
                                    Phone
                                </div>
                                <div className="conatct_info_text">
                                    +91 111 543 2198
                                </div>
                            </div>
                        </div>
                        {/* email number */}
                        <div className="contact_info_item py-3 d-flex justify-content-center align-items-center col-md-3 border border-dark" style={{ boxShadow: "5px 5px 10px #888888", borderRadius: "10px" }}>
                            <i className="mx-3 fs-5 fa-solid fa-envelope-circle-check"></i>                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Email
                                </div>
                                <div className="conatct_info_text">
                                    ripesh@gmail.com
                                </div>
                            </div>
                        </div>
                        {/* address number */}
                        <div className="contact_info_item py-3 d-flex justify-content-center align-items-center col-md-3 border border-dark" style={{ boxShadow: "5px 5px 10px #888888", borderRadius: "10px"}}>
                            <i className="mx-3 fs-5 fa-solid fa-map-location" ></i>                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Address
                                </div>
                                <div className="conatct_info_text">
                                    Surat, GJ, India
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <div className="container mb-5" >
                    <div className="row">
                        <div className="col-12 text-center py-4 my-4">
                            <h1 className='fw-bold mb-4 '>Get in Touch</h1>
                            <hr className='border border-dark ' />

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 d-flex justify-content-center">
                            <img src="/assets/contact1.jpg" alt="conatct" height='300px' width='300px' />
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={subHandler} method="post">
                                <div class="mb-3">
                                    <label for="exampleForm" class="form-label">Name</label>
                                    <input type="text" class="form-control  border-dark" id="exampleForm" placeholder="Please Enter Your Name" name="name" required  onChange={changeHandler} />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control border-dark" name="email" id="exampleFormControlInput1" placeholder="name@example.com" onChange={changeHandler} />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                    <textarea class="form-control border-dark" id="exampleFormControlTextarea1" name="msg" placeholder="How can we help?" rows="6" onChange={changeHandler} ></textarea >
                                </div>
                                <button type="submit" className=" mb-5 btn btn-outline-dark">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact