import React, { useEffect } from 'react'
import Homeslider from '../components/home/Homeslider'
import FEATUREDBRANDS from '../components/home/FEATUREDBRANDS'
import BESTSELLERS from '../components/home/BESTSELLERS'
import FEATUREDCATEGORIES from '../components/home/FEATUREDCATEGORIES'
import './style/pages.css'
import Cookies from 'js-cookie';

function Home() {

  useEffect(() => {
    // Check if a user identifier cookie exists
    let userId = Cookies.get('user_id');

    // If not, generate a random user identifier and set it as a cookie
    if (!userId) {
      userId = Math.random().toString(36).substring(2);
      Cookies.set('user_id', userId, { expires: 365 });
    }

    console.log('User ID:', userId);
  }, []);

  return (
    <div >

      <Homeslider></Homeslider>
      <FEATUREDBRANDS></FEATUREDBRANDS>
      <BESTSELLERS />
      <FEATUREDCATEGORIES></FEATUREDCATEGORIES>


      
    </div >

  )
}

export default Home
