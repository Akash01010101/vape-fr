import React from 'react';  
import { Link } from 'react-router-dom'; // Import Link for navigation  
import combinedArray_final from '../components/Items';  
import Navbar from '../components/Navbar';  
import Footer from '../components/Footer';  

function CartPage() {  
    // Retrieve the stored cart items from localStorage  
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];  

    // Find products corresponding to the cart items  
    const cartProducts = cartItems.map(cartItem => {  
        const product = combinedArray_final.concated.find(item => item.id === cartItem.id);  
        return {   
            ...product, // Spread existing product details  
            color: cartItem.color, // Add selected color  
            quantity: cartItem.quantity // Add quantity  
        };  
    }).filter(Boolean); // Filter out undefined products   

    // Function to remove item from cart  
    const handleRemoveItem = (id, color) => {  
        const updatedCartItems = cartItems.filter(item => !(item.id === id && item.color === color));  
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));  
        window.location.reload(); // Refresh the page to reflect changes (you might choose to do this differently)  
    };  

    // If no items are in the cart, display a message  
    if (cartProducts.length === 0) {  
        return (  
            <div>  
                <Navbar />  
                <div style={{ textAlign: 'center', margin: '20px' }}>  
                    <h1>Your Cart is Empty</h1>  
                    <p><Link to="/">Go back to products</Link></p>  
                </div>  
                <Footer />  
            </div>  
        );  
    }  

    return (  
        <div>  
            <Navbar />  
            <div className="cart-page" style={{ padding: '20px' }}>  
                <h1>Your Cart</h1>  
                {cartProducts.map(product => (  
                    <div key={product.id + product.color} style={{ borderBottom: '1px solid #ccc', padding: '10px 0', display: 'flex', alignItems: 'center' }}>  
                        <img src={product.image} alt={product.title} style={{ width: '100px', height: 'auto', marginRight: '10px' }} />  
                        <div style={{ flexGrow: 1 }}>  
                            <h2 style={{ margin: 0 }}>{product.title}</h2>  
                            <p>Price: {product.price2 || product.price}</p>  
                            <p>Selected Color: {product.color}</p>  
                            <p>Quantity: {product.quantity}</p>  
                        </div>  
                        <button   
                            onClick={() => handleRemoveItem(product.id, product.color)}   
                            style={{   
                                padding: '10px 15px',   
                                backgroundColor: 'red',   
                                color: 'white',   
                                border: 'none',   
                                cursor: 'pointer'   
                            }}  
                        >  
                            Remove  
                        </button>  
                    </div>  
                ))}  
            </div>  
            <Footer />  
        </div>  
    );  
}  

export default CartPage;