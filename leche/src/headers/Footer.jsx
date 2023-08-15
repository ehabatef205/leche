import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
export default function Footer() {
  return (<div className=' d-flex justify-content-center'style={{backgroundColor:"#50514f",minHeight:"450px"}}>
    <div className=' d-flex flex-wrap  justify-content-center'style={{width:"80%"}}>
     <div className=' col-12 col-lg-5 col-md-5 ' >
      <div className='w-75 m-5 '>
      <h3 className='text-white'> <b>Stay in the loop</b> </h3>
      <p className='text-white'>Sign up and be the first to hear about new products and promotions!</p>
      <span className='my-4 w-100'>
        <a className=' w-100' style={{textDecoration:"none"}} href='/login'> 
        <button className='btn  w-75 text-white' style={{backgroundColor:"#65c297"}}> <b>
          S I G N  U P  N O W  </b></button>
        </a>
       
      </span>
      <div className='my-5 w-50 d-flex justify-content-between' >
      <div className="site-footer__social-icons-member">
                  <a style={{ color: "#fff" }} href="" target="_blank">
                    <InstagramIcon />
                  </a>
                </div>
                <div className="site-footer__social-icons-member">
                  <a style={{ color: "#fff" }} href="" target="_blank">
                    <FacebookIcon />
                  </a>
                </div>
                <div className="site-footer__social-icons-member">
                  <a style={{ color: "#fff" }} href="" target="_blank">
                    <TwitterIcon />
                  </a>
                </div>
                <div className="site-footer__social-icons-member">
                  <a style={{ color: "#fff" }} href="" target="_blank">
                    <PinterestIcon />
                  </a>
                </div>
                <div className="site-footer__social-icons-member">
                  <a style={{ color: "#fff" }} href="" target="_blank">
                    <YouTubeIcon />
                  </a>
                </div>
      </div>
      <div  className=" text-secondary  Footer__content" style={{fontSize:"0.7rem"}}> 
              <p>LECHE © 2023 | جميع الحقوق محفوظة</p>
            </div>
      </div>
      
     </div>

     <div className=' col-12 col-lg-7 col-md-7 ' >
     <div className='w-75 m-5 d-flex flex-wrap  '>
      <a   className=" w-100"style={{textDecoration:"none"}} href="/">
      <button className='btn w-100 text-white' style={{backgroundColor:"#ecb0c5",height:"70px"}}><b style={{fontSize:"1.4rem"}}> Enjoy Shopping With Leche</b></button>

      </a>
      <div className='col-6  my-3 ' >
        <h5 className='text-white  my-2'>SHOP BROOKSTONE.COM</h5>
        <span className='my-3'>
        <p className='text-white'>list</p>
        <p className='text-white'>list</p>
        <p className='text-white'>list</p>
        <p className='text-white'>list</p>
        </span>
      </div>
      <div className='col-6 my-3 '>
      <h5 className='text-white my-2'>CUSTOMER SERVICE</h5>

      <span className='my-3'>
        <a href='#' className='text-white'style={{textDecoration:"none"}}><p>Contact Us</p></a>
      
        </span>
      </div>
     </div>
     </div>
     </div>
    </div>
  )
}
