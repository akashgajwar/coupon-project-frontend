import React from 'react'
import './Footer.module.css'
import { SlSocialInstagram } from "react-icons/Sl";
const Footer = () => {
  return (
    <div className='bg-slate-900 text-white'>
            <div className='max-w-7xl mx-auto'>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
                <div className='mb-5'>
                  <h1 className='text-xl font-bold pt-4'>Company</h1>
                  <ul className='pt-4'>
                    <li><a href='#' className='hover:text-yellow-500'>About</a></li>
                    <li><a href='#' className='hover:text-yellow-500'>Careers</a></li>
                    <li><a href='#' className='hover:text-yellow-500'>Press</a></li>
                    <li><a href='#' className='hover:text-yellow-500'>Blog</a></li>
                    <li><a href='#' className='hover:text-yellow-500'>Affiliates</a></li>
                    <li><a href='#' className='hover:text-yellow-500'>Partnerships</a></li>
                  </ul>
                </div>
                <div className='mb-5'>
                  <h1 className='text-xl font-bold pt-4'>Community</h1>
                  <ul className='pt-4'>
                    <li><a href='#' className='hover:text-yellow-500'>Team Plans</a></li>
                    <li><a href='#' className='hover:text-yellow-500'>Refer a Friend</a></li>
                    <li><a href='#' className='hover:text-yellow-500'>Limited Membership</a></li>
                    <li><a href='#' className='hover:text-yellow-500'>Scholorships</a></li>
                    <li><a href='#' className='hover:text-yellow-500'>Free Classes</a></li>
                  </ul>
                </div>
                <div className='mb-5'>
                  <h1 className='text-xl font-bold pt-4'>Teaching</h1>
                  <ul className='pt-4'>
                    <li><a href='#' className='hover:text-yellow-500'>Become a Teacher</a></li>
                    <li><a href='#' className='hover:text-yellow-500'>Teacher help center</a></li>
                    <li><a href='#' className='hover:text-yellow-500'>Teacher Rules & Requirements</a></li>
                  </ul>
                </div>

              </div>
              <hr></hr>
            </div>
          <div className='flex pt-4 pb-6 max-w-7xl mx-auto justify-between'>
           <div>
              <div className=''>@couponfollow, Inc. 2023</div>
            </div>
            
              <div className='flex'>
                <div className='mx-4'>Help</div>
                <div className='mx-4'>Privacy</div>
                <div className='mx-4'>Terms</div>
                <div className='mx-4'>Your Privacy Choices</div>
              </div>
            
            
            <div>
            <div className='flex-1'> Insta Whatsapp Twitter Gmail </div>
            </div>
          </div> 
            
          </div>
        
  )
  
          
}

export default Footer
