import React from 'react'
import logo from '../assets/image.png'
import cart from '../assets/icons8-cart-100.png'
import { useState, useEffect } from 'react';  
import { useNavigate } from 'react-router-dom';

const Navbar = () => {  
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Adjust based on your breakpoint  

  const handleResize = () => {  
    setIsMobile(window.innerWidth < 768);  
  };  

  useEffect(() => {  
    window.addEventListener('resize', handleResize);  
    return () => {  
      window.removeEventListener('resize', handleResize);  
    };  
  }, []);  

  return (  
    <nav style={{ backgroundColor: 'black', padding: '10px' }}>  
      <div className='navx' style={{ color: 'white' }}>  
  
        <div className='navx'>  
          {isMobile ? (  
             <div className='navbar'>
             <div className="nav-top">
             <svg className='ham' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 40 40">
     <path fill="#c2e8ff" d="M1.5 18.5H38.5V21.5H1.5z"></path><path fill="#7496c4" d="M38,19v2H2v-2H38 M39,18H1v4h38V18L39,18z"></path><path fill="#c2e8ff" d="M1.5 8.5H38.5V11.5H1.5z"></path><path fill="#7496c4" d="M38,9v2H2V9H38 M39,8H1v4h38V8L39,8z"></path><g><path fill="#c2e8ff" d="M1.5 28.5H38.5V31.5H1.5z"></path><path fill="#7496c4" d="M38,29v2H2v-2H38 M39,28H1v4h38V28L39,28z"></path></g>
     </svg>
             <img className='logo' src={logo} onClick={()=>{navigate('/')}}  alt="xhwww 
             " />
             <img className='cart' onClick={()=>{navigate('/Cart')}} src={cart} alt="" />
             </div>
             <div className="nav-search">
             <form >
               <input id='search' type="text" placeholder='Search' />
             </form>
           </div>
         </div> 
          ) : (  
            <>
            <div className="nav-search">
            <img className='logo' src={logo} onClick={()=>{navigate('/')}} alt="xhwww"/>
              <form>
                <input type="text" placeholder='Search' id="search" />
              </form>
              <img className='cart' onClick={()=>{navigate('/Cart')}} src={cart} alt="" />
            </div>
            <ul className="menu-list">  
        <li onClick={()=>{navigate('/')}} >HOME</li>  
        <li onClick={()=>{navigate('/Starterkit')}}>STARTER KIT</li>  
        <li onClick={()=>{navigate('/Regular')}}>REGULAR E-JUICE</li>  
        <li onClick={()=>{navigate('/Saltnic')}}>SALT NIC</li>  
        <li onClick={()=>{navigate('/Coils')}}>COILS & PODS</li>  
        <li onClick={()=>{navigate('/Juul')}}>JUUL PODS & STARTER KITS</li>  
        <li onClick={()=>{navigate('/Disposable')}}>DISPOSABLE VAPE</li>  
        <li onClick={()=>{navigate('/Iqos')}}>IQOS & HEETS</li>  
        <li onClick={()=>{navigate('/Snus')}}>SNUS</li>  
      </ul>
            </>
          )}  
        </div>  
        <div style={{ display: 'flex', gap: '15px', color: 'white' }}>  
        </div>  
       </div>  
    </nav>  
  );  
};  

export default Navbar;