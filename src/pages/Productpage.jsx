import { useLocation, useParams } from 'react-router-dom';
import combinedArray from '../components/Items';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Productpage() {
  const { id } = useParams(); // To access the product ID from the URL parameter

  // Find the product from combinedArray based on the id
  const product = combinedArray.find(item => item.id === id);

  // If the product is not found, display a message
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Design unfinished</h1>
      <Navbar/>
      <h1>{product.title}</h1>
      {/* Display images */}
      <div>
        {Object.keys(product).map(key => {
          if (key.startsWith('image')) {
            return (
              <div key={key}>
                <img src={product[key]} alt={key} />
              </div>
            );
          }
          return null;
        })}
      </div>
      {/* Display product details (desc, price, etc.) from the second array */}
      <div>
        <p>{product.desc}</p>
        <p>Price: {product.price}</p>
        {/* Render other details like price2, colors, etc., if available */}
        {product.price2 && <p>Price (alternate): {product.price2}</p>}
        {product.colors && <p>Available colors: {product.colors.join(', ')}</p>}
      </div>
      <Footer/>
    </div>
  );
}

export default Productpage;
