import React from 'react'
import { Link } from 'react-router-dom';

const About = () =>{
  return (
    <>
    <div>
        <div className="container py-3 my-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className='text fw-bold mb-3'>OFFICE DETAILS</h1>
                    <p className="lead mb-3">
                    With the advancement in technology and science, people can now do various things at the comfort of their homes and one such thing is online shopping. It has gained a lot of spotlight due to its ever-increasing demand and craze among people. Online shopping refers to the way of purchasing things online without actually going to the physical stores.People used to shop in stores; swiping through hangers, trying on clothes, and being surprised by what looked good on them. Now, clothing is a 2x4 digital image that you scroll past, worn by someone who is not you, in a color that is not accurate, in a fashion that invites no spontaneity. Our infinity makes us so limited.Because products online live within the digital space, online retailers are not restricted to shelves and often have more inventory on hand with a wider selection of products. Also, online shopping gives you the chance to buy anything from any retailer, no matter where you're located. If you're in the market for a new lamp.
                    </p>
                    <Link to="/contact" className="btn btn-outline-dark px-3">Contact Us</Link>
                </div>
                <div className="col-md-6">
                    <img src="/assets/about1.jpg" alt="About Us" height='550px' width='680px' />
                </div>
            </div>
        </div>
    </div>
    <div>
        <div className="container py-3 my-5">
            <div className="row">
            <div className="col-md-6">
                    <img src="/assets/about2.jpg" alt="About Us" height='530px' width='640px' />
                </div>
                <div className="col-md-6">
                    <h1 className='text fw-bold mb-3'>STAFF DETAILS</h1>
                    <p className="lead mb-3">
                    To be honored by your peers is incredibly gratifying and I am so thankful to my colleagues across the league for this recognition. I'm also grateful to the talented and dedicated coaching staff I work with every day in Toronto. To be recognized with an award that bears Michael H. Goldberg's name is very special.If our most highly qualified General Staff officers had been told to work out the most nonsensical high level organization for war which they could think of, they could not have produced anything more stupid that that which we have at present.One of the things that I did before I ran for president is I was a professional speaker. Not a motivational speaker - an inspirational speaker. Motivation comes from within. You have to be inspired. That's what I do. I inspire people, I inspire the public, I inspire my staff. I inspired the organizations I took over to want to succeed.I loved being Maleficent. I was quite sad to put my staff down.
                    </p>
                    <Link to="/contact" className="btn btn-outline-dark px-3">Contact Us</Link>
                </div>
               
            </div>
        </div>
    </div>
    </>
  )
}

export default About; 