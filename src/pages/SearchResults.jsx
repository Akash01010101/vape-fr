import React, { useEffect, useState } from 'react';  
import { useLocation, useNavigate } from 'react-router-dom';  
import combinedArray_final from '../components/Items'; // Ensure the path is correct  

const SearchResults = () => {  
  const location = useLocation();  
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');  
  const [filteredResults, setFilteredResults] = useState([]);  

  // Extract search term from query parameters  
  useEffect(() => {  
    const params = new URLSearchParams(location.search);  
    const term = params.get('query') || '';  
    setSearchTerm(term);  
    filterResults(term);  
  }, [location]);  
  const handleNavigation = (path) => {  
    navigate(path);  
    hidemenu();  // Hide the menu after navigation  
  };  

  const filterResults = (term) => {  
    const results = combinedArray_final.combinedArray.filter(item =>  
      item.title.toLowerCase().includes(term.toLowerCase())  
    );  
    setFilteredResults(results);  
  };  

  return (  
    <div style={{ padding: '20px' }}>  
      <h2>Search Results for: "{searchTerm}"</h2>  
      {filteredResults.length > 0 ? (  
        <div style={{  
          display: 'grid',  
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // Responsive grid layout  
          gap: '20px' // Gap between grid items  
        }}>  
          {filteredResults.map((item, index) => (  
            <div key={index} 
            onClick={()=>{
                handleNavigation(`/product/${item.id}`);
            }}
             style={{  
              border: '1px solid #ccc',  
              borderRadius: '8px',  
              padding: '10px',  
              textAlign: 'center' // Center text  
            }}>   
              <img src={item.image} alt={item.title} style={{   
                maxWidth: '100%',   
                height: 'auto',   
                borderRadius: '4px' // Slight rounding of image corners  
              }} />   
              <h3 style={{ margin: '10px 0', fontSize: '1rem' }}>{item.title}</h3>  
              <p style={{ margin: '5px 0' }}>Price: {item.price}</p>  
            </div>  
          ))}  
        </div>  
      ) : (  
        <p>No results found!</p>  
      )}  
    </div>  
  );  
};  

export default SearchResults;