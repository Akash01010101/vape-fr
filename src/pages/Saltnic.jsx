import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import combinedArray_final from '../components/Items';

export default function Saltnic() {
  const [visibleItems, setVisibleItems] = useState(10); // Initial number of items
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef(null);
  const nav = useNavigate();

  const goToProductDetails = (id) => {
    nav(`/product/${id}`, { state: { productId: id } });
    window.scrollTo(0,0)
  };

  const loadMoreItems = () => {
    if (!isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setVisibleItems((prev) => prev + 10); // Load 10 more items
        setIsLoading(false);
      }, 500); // Simulated delay
    }
  };

  // Intersection Observer to detect when to load more items
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMoreItems();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <div className='.st'>      <Navbar />
    <div className="starter">

      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth:'1000px',
        }}
      >
        {combinedArray_final.salt.slice(0, visibleItems).map((item) => (
          <div
            onClick={() => {
              goToProductDetails(item.id);
            }}
            className="prod"
            key={item.id}
            style={{ border: 'none', padding: '5px', width: '170px' }}
          >
            <img
              id={item.id}
              src={item.image}
              alt={item.title}
              style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
            />
            <h3 className="prod-title" style={{ textAlign: 'center' }}>
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Loading indicator */}
      {isLoading && <p style={{ textAlign: 'center', margin: '20px' }}>Loading...</p>}

      {/* Invisible div to trigger observer */}
      <div ref={observerRef} style={{ height: '20px' }}></div>

    </div>
    <Footer /></div>
    
  );
}
