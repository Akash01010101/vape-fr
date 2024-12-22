import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import combinedArray_final from '../components/Items';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function StarterKit() {
  const [visibleItems, setVisibleItems] = useState(10); // Number of items to show initially
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef(null);
  const nav = useNavigate();

  const goToProductDetails = (id) => {
    nav(`/product/${id}`, { state: { productId: id } });
  };

  const loadMoreItems = () => {
    if (!isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setVisibleItems((prev) => prev + 10); // Load 10 more items
        setIsLoading(false);
      }, 500); // Simulate loading delay
    }
  };

  // Intersection Observer to detect when to load more
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
    <div className="starter">
      <Navbar />
      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {combinedArray_final.combinedArray.slice(0, visibleItems).map((item) => (
          <div
            onClick={() => {
              goToProductDetails(item.id);
            }}
            className="prod"
            key={item.id}
            style={{ border: 'none', padding: '10px', width: '200px' }}
          >
            <img
              id={item.id}
              src={item.image}
              alt={item.title}
              style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
            />
            <h3 className="prod-title" style={{ fontSize: '1em', textAlign: 'center' }}>
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Loading indicator */}
      {isLoading && <p style={{ textAlign: 'center', margin: '20px' }}>Loading...</p>}

      {/* Invisible div to trigger observer */}
      <div ref={observerRef} style={{ height: '20px' }}></div>

      <Footer />
    </div>
  );
}
