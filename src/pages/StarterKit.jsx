import React from 'react'
import Navbar from '../components/Navbar'
import combinedArray_final from '../components/Items'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
export default function StarterKit() {
    const nav = useNavigate()

    const goToProductDetails = (id) => {
      nav(`/product/${id}`, { state: { productId: id } });
    };
  return (
    <div className='starter'>
    <Navbar/>
    <div  style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent:'center'}}>
      {combinedArray_final.combinedArray.map((item) => (
        <div onClick={()=>{goToProductDetails(item.id)}} className='prod' key={item.id} style={{ border: 'none', padding: '10px', width: '200px' }}>
          <img id={item.id}
            src={item.image}
            alt={item.title}
            style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
          />
          <h3 className='prod-title' style={{ fontSize: '1em', textAlign: 'center' }}>{item.title}</h3>
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  )
}
