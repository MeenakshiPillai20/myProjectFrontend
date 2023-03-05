import React from 'react'

export default function FooterContainer1() {
  return (
   <>
     <div className='footer-container mt-4'>
           <div className='footer-box mx-4 px-3 '>
              <h1 className='footer-ishop'>iSHOP</h1>
              <p className='footer-para mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
           </div>
           <div className='footer-box mx-4 px-3 '>
             <h4 >Follow Us</h4>
             <p className='footer-para mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
             <div>
             <i className="fab fa-facebook me-4 text-primary"></i>
             <i className="fab fa-twitter text-primary"></i>
             </div>
           </div>
           <div className='footer-box mx-4 px-3 '>
              <h4>Contact Us</h4>
              <p className='footer-para mt-4'>iShop: address @building 124 Call us now: 0123-456-789 Email: support@whatever.com</p>
           </div>
        </div>
   </>
  )
}
