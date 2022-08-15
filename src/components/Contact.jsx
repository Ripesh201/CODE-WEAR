import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="contact_info" style={{ width: "100%" }}>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-between p-5">
                        {/* phone number */}
                        <div className="contact_info_item py-3 d-flex justify-content-center align-items-center col-md-3" style={{ boxShadow: ".7px .7px .7px .7px black", borderRadius: "10px" }}>
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
                        <div className="contact_info_item py-3 d-flex justify-content-center align-items-center col-md-3" style={{ boxShadow: ".7px .7px .7px .7px black", borderRadius: "10px" }}>
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
                        <div className="contact_info_item py-3 d-flex justify-content-center align-items-center col-md-3" style={{ boxShadow: ".7px .7px .7px .7px black", borderRadius: "10px" }}>
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
                            <h1 className='fw-bold mb-4'>Get in Touch</h1>
                            <hr />

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 d-flex justify-content-center">
                            <img src="/assets/contact1.jpg" alt="conatct" height='300px' width='300px' />
                        </div>
                        <div className="col-md-6">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleForm" class="form-label">Name</label>
                                    <input type="text" class="form-control" id="exampleForm" placeholder="Please Enter Your Name" required />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="How can we help?" rows="6"></textarea>
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