import { useParams } from 'react-router-dom';  
import { useState } from 'react';  
import combinedArray_final from '../components/Items';  
import Navbar from '../components/Navbar';  
import Footer from '../components/Footer';  
import React from 'react';  

function Productpage() {  
  const { id } = useParams(); // To access the product ID from the URL parameter  
  const [selectedColor, setSelectedColor] = useState(null); // State to manage selected color  
  const [quantity, setQuantity] = useState(1); // State to manage quantity  

  // Find the product from combinedArray based on the id  
  const product = combinedArray_final.concated.find(item => item.id === id);  

  // If the product is not found, display a message  
  if (!product) {  
    return <div>Product not found</div>;  
  }  

  // Function to handle color selection  
  const handleColorSelect = (color) => {  
    setSelectedColor(color);  
  };  

  // Function to handle quantity adjustment  
  const handleQuantityChange = (delta) => {  
    setQuantity(prevQuantity => Math.max(1, prevQuantity + delta));  
  };  

  // Function to handle adding the product to the cart  
  const handleAddToCart = () => {  
    // Check if product has colors and if a color is selected  
    if (product.colors && product.colors.length > 0 && !selectedColor) {  
        alert('Please select a color before adding to the cart.');  
        return;  
    }  
  
    // Get stored cart items from localStorage or create an empty array if none exist  
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];  
  
    // Create the cart item object  
    const cartItem = {  
        id: product.id,  
        color: selectedColor,  
        quantity: quantity // Include quantity if needed  
    };  
  
    // Check if the item is already in the cart  
    const itemIndex = existingCart.findIndex(item => item.id === product.id && item.color === selectedColor);  
    if (itemIndex === -1) {  
        // If not, add the new item to the cart  
        existingCart.push(cartItem);  
        localStorage.setItem('cartItems', JSON.stringify(existingCart));  
    } else {  
        // If it is, update the quantity (if you want to allow this)  
        existingCart[itemIndex].quantity += quantity;  
        localStorage.setItem('cartItems', JSON.stringify(existingCart));  
    }  
    alert('Added to Cart')
  }; 

  return (  
    <div>  
      <Navbar />  
      <div className='prod-top'>  
        <div style={{ flex: '1', maxWidth: '500px' }}>  
          {Object.keys(product).map(key => {  
            if (key === 'image') {  
              return (  
                <img  
                  key={key}  
                  src={product[key]}  
                  alt={key}  
                  style={{ width: '100%', height: 'auto', marginBottom: '10px' }}  
                />  
              );  
            }  
            return null;  
          })}  
        </div>  
        <div style={{ flex: '1', maxWidth: '500px' }}>  
          <b style={{ fontSize: "20px" }}>{product.title}</b>  
          <div>  
            <p style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>  
              {product.price2 ? <span style={{ textDecoration: 'line-through', marginRight: '10px' }}>{product.price2}</span> : null}  
              {product.price}  
            </p>  
          </div>  
          {product.colors && (  
            <div style={{ marginBottom: '20px' }}>  
              <p></p>  
              <div style={{ display: 'flex', gap: '10px', flexWrap:'wrap'}}>  
                {product.colors.map((color) => (  
                  <button  
                    key={color}  
                    onClick={() => handleColorSelect(color)}  
                    style={{  
                      padding: '10px 20px',  
                      border: `2px solid ${selectedColor === color ? 'orange' : '#ccc'}`,  
                      backgroundColor: selectedColor === color ? 'orange' : 'white',  
                      cursor: 'pointer',  
                    }}  
                  >  
                    {color}  
                  </button>  
                ))}  
              </div>  
            </div>  
          )}  
          <div style={{ marginBottom: '20px' }}>  
            <p>Quantity:</p>  
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>  
              <button onClick={() => handleQuantityChange(-1)} style={{ padding: '10px', cursor: 'pointer' }}>-</button>  
              <span style={{ fontSize: '18px' }}>{quantity}</span>  
              <button onClick={() => handleQuantityChange(1)} style={{ padding: '10px', cursor: 'pointer' }}>+</button>  
            </div>  
          </div>  
          <button  
            style={{  
              padding: '15px 30px',  
              backgroundColor: 'orange',  
              color: 'white',  
              fontSize: '16px',  
              border: 'none',  
              cursor: 'pointer',  
            }}  
            onClick={handleAddToCart}  
          >  
            ADD TO CART  
          </button>  
        </div>  
      </div>  
      <div className='desc-prod'>  
        <h1 style={{ fontSize: '20px' }}>Description:</h1>  
        {product.desc ? (  
          <p  style={{fontSize:'15px'}}>  
            {product.desc.split('\n').map((line, index) => (  
              <React.Fragment key={index}>  
                {line}  
                <br />  
              </React.Fragment>  
            ))}  
          </p>  
        ) : (<></>)}  
      </div>   
      <div style={{ marginTop: '20px' }}>  
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>  
          {Object.keys(product).map(key => {  
            if (key.startsWith('image') && key !== 'image') {  
              return (  
                <img  
                  key={key}  
                  src={product[key]}  
                  alt={key}  
                  style={{ maxWidth: '100%' }}  
                />  
              );  
            }  
            return null;  
          })}  
        </div>  
      </div>  

      <Footer />  
    </div>  
  );  
}  

export default Productpage;