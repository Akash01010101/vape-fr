import React, { useEffect, useState } from 'react';  
import logo from '../assets/image.png';  
import cart from '../assets/icons8-cart-100.png';  
import { useNavigate } from 'react-router-dom';  

const Navbar = () => {  
  const navigate = useNavigate();  
  const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);  
  const [menuVisible, setMenuVisible] = useState(false); // Manage menu visibility  

  const handleResize = () => {  
    setIsMobile(window.innerWidth < 768);  
  };  
  const handleSearch = (event) => {  
    event.preventDefault(); // Prevent default form submission  
    const searchInput = event.target.search.value; // Get the value from the search input  
    navigate(`/search?query=${encodeURIComponent(searchInput)}`); // Navigate to search results with query  
  }; 
  const hidemenu = () => {  
    setMenuVisible(false);  
  };  

  const togglemenu = () => {  
    setMenuVisible(prev => !prev);  
  };  

  // Hide the menu on click of the menu items  
  const handleNavigation = (path) => {  
    navigate(path);  
    hidemenu();  // Hide the menu after navigation  
  };  

  useEffect(() => {  
    window.addEventListener('resize', handleResize);  
    return () => {  
      window.removeEventListener('resize', handleResize);  
    };  
  }, []);  

  return (  
    <nav style={{ backgroundColor: 'black', padding: '10px', position: 'sticky', top: '0' }}>  
      <div className='navx' style={{ color: 'white' }}>  
        <div className='navx'>  
          {isMobile ? (  
            <>  
              <div id="menu" className={menuVisible ? '' : 'menu-hidden'}>  
                <ul className="menu-list">  
                  <li onClick={() => handleNavigation('/')}>HOME</li>  
                  <li onClick={() => handleNavigation('/Starterkit')}>STARTER KIT</li>  
                  <li onClick={() => handleNavigation('/Regular')}>REGULAR E-JUICE</li>  
                  <li onClick={() => handleNavigation('/Saltnic')}>SALT NIC</li>  
                  <li onClick={() => handleNavigation('/Coils')}>COILS & PODS</li>  
                  <li onClick={() => handleNavigation('/Juul')}>JUUL PODS & STARTER KITS</li>  
                  <li onClick={() => handleNavigation('/Disposable')}>DISPOSABLE VAPE</li>  
                  <li onClick={() => handleNavigation('/Iqos')}>IQOS & HEETS</li>  
                  <li onClick={() => handleNavigation('/Snus')}>SNUS</li>  
                </ul>  
              </div>  
              <div className='navbar'>  
                <div className="nav-top">  
                  <svg className='ham' onClick={togglemenu} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 40 40">  
                    <path fill="#c2e8ff" d="M1.5 18.5H38.5V21.5H1.5z"></path>  
                    <path fill="#7496c4" d="M38,19v2H2v-2H38 M39,18H1v4h38V18L39,18z"></path>  
                    <path fill="#c2e8ff" d="M1.5 8.5H38.5V11.5H1.5z"></path>  
                    <path fill="#7496c4" d="M38,9v2H2V9H38 M39,8H1v4h38V8L39,8z"></path>  
                    <g>  
                      <path fill="#c2e8ff" d="M1.5 28.5H38.5V31.5H1.5z"></path>  
                      <path fill="#7496c4" d="M38,29v2H2v-2H38 M39,28H1v4h38V28L39,28z"></path>  
                    </g>  
                  </svg>  
                  <img className='logo' src={logo} onClick={() => { navigate('/'); hidemenu(); }} alt="xhwww" />  
                  <div style={{ position: 'relative' }}>  
                    <img className='cart' onClick={() => { navigate('/Cart'); }} src={cart} alt="Cart" />  
                    {/* Cart item count badge */}  
                    {existingCart.length > 0 && (  
                      <span style={{  
                        position: 'absolute',  
                        top: '-5px',  
                        right: '-10px',  
                        backgroundColor: 'red',  
                        color: 'white',  
                        borderRadius: '50%',  
                        padding: '2px 5px',  
                        fontSize: '12px',  
                      }}>  
                        {existingCart.length}  
                      </span>  
                    )}  
                  </div>  
                </div>  
                <div className="nav-search">  
                  <form onSubmit={handleSearch}>  
                  <input id='search' name='search' type="text" placeholder='Search' />  
                  </form>  
                </div>  
              </div>  
            </>  
          ) : (  
            <>  
              <div className="nav-search">  
                <img className='logo' src={logo} onClick={() => { navigate('/'); }} alt="xhwww" />  
                <form onSubmit={handleSearch}>  
                  <input id='search' name='search' type="text" placeholder='Search' />  
                  </form>    
                <div style={{ position: 'relative' }}>  
                  <img className='cart' onClick={() => { navigate('/Cart'); }} src={cart} alt="Cart" />  
                  {/* Cart item count badge */}  
                  {existingCart.length > 0 && (  
                    <span style={{  
                      position: 'absolute',  
                      top: '-5px',  
                      right: '-10px',  
                      backgroundColor: 'red',  
                      color: 'white',  
                      borderRadius: '50%',  
                      padding: '2px 5px',  
                      fontSize: '12px',  
                    }}>  
                      {existingCart.length}  
                    </span>  
                  )}  
                </div>  
              </div>  
              <ul className="menu-list">  
                <li onClick={() => handleNavigation('/')}>HOME</li>  
                <li onClick={() => handleNavigation('/Starterkit')}>STARTER KIT</li>  
                <li onClick={() => handleNavigation('/Regular')}>REGULAR E-JUICE</li>  
                <li onClick={() => handleNavigation('/Saltnic')}>SALT NIC</li>  
                <li onClick={() => handleNavigation('/Coils')}>COILS & PODS</li>  
                <li onClick={() => handleNavigation('/Juul')}>JUUL PODS & STARTER KITS</li>  
                <li onClick={() => handleNavigation('/Disposable')}>DISPOSABLE VAPE</li>  
                <li onClick={() => handleNavigation('/Iqos')}>IQOS & HEETS</li>  
                <li onClick={() => handleNavigation('/Snus')}>SNUS</li>  
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