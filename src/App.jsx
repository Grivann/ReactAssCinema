import { useState } from 'react';
import Hero from './Hero/Hero';
import Box from './Boxes/Box';
import Download from './Download/Download';
import Footer from './Footer/Footer'
import './index.css';
import phone1 from './assets/phone1.png';
import phone2 from './assets/phone2.png';
import phone3 from './assets/phone3.png';
import phones from './assets/phones.png';
import heroimg from './assets/Heroimg.png';
import Dlimg from './assets/Dlimg.png';
import logoimg from './assets/logo.png';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Hero heroimg={heroimg} logoimg={logoimg}></Hero>

      <div className='flex flex-col items-center mt-[-225px] z-100'>
        <img src={phones} alt="" className='md:w-[850px] md:h-[640px] w-[595px] h-[448px] z-100 '/> 
        <hr className='w-[884px] mt-[75px]'/>
        <h1 className='w-[70%] text-[26px] sm:text-[33px] md:text-[42px] lg:text-[50px]  lg:leading-[80px] text-center poppins-bold mt-[33px] mb-[50px]'>How the app works?</h1>
      </div>

      <Box 
        lorr="flex-row" 
        text1="Create an account" 
        text2="Create/login to an existing account to get started" 
        text3="An account is created with your email and a desired password" 
        sauce={phone1}
      />

      <Box 
        lorr="flex-row-reverse" 
        text1="Checkout" 
        text2="When you done check out and get it delivered." 
        text3="When you done check out and get it delivered with ease." 
        sauce={phone2}
      />

      <Box 
        lorr="flex-row" 
        text1="Create an account" 
        text2="Create/login to an existing account to get started" 
        text3="An account is created with your email and a desired password" 
        sauce={phone3}
      />
      <Download Dlimg={Dlimg}></Download>
      <Footer logoimg={logoimg}></Footer>
    </div>
  );
}

export default App;
