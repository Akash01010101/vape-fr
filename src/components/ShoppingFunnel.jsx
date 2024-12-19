import React from "react";
import cart from '../assets/icons8-cart-100.png'
import truck from '../assets/icons8-truck-50.png'
const ShoppingFunnel = () => {
  return (
    <div>
      {/* Flexible Shopping Funnel */}
      <section className="py-10 bg-gray-50">
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-800">
            FLEXIBLE SHOPPING FUNNEL
          </h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Order Placement */}
          <div className="text-center">
            <img
              src={cart}
              alt="Order Placement"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-medium text-gray-700">ORDER PLACEMENT</h3>
            <p className="text-gray-500 mt-2">
              First place your order with us, select your product and checkout
              with any payment method.
            </p>
          </div>
          {/* Order Processing */}
          <div className="text-center">
          <svg className="mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#FF9800" d="M40,42H8c-1.1,0-2-0.9-2-2V8c0-1.1,0.9-2,2-2h32c1.1,0,2,0.9,2,2v32C42,41.1,41.1,42,40,42z"></path><path fill="#FFB74D" d="M21 6H27V13H21z"></path><path fill="#B86D00" d="M29 37H38V38H29zM35 32H37V36H35z"></path><path fill="#B86D00" d="M36 30L34 33 38 33zM30 32H32V36H30z"></path><path fill="#B86D00" d="M31 30L29 33 33 33z"></path>
</svg>
            <h3 className="text-lg font-medium text-gray-700">ORDER PROCESSING</h3>
            <p className="text-gray-500 mt-2">
              Once we'd receive your order, we'd confirm your order via mail and
              Order Placement process would be running on.
            </p>
          </div>
          {/* Order Delivery */}
          <div className="text-center">
            <img
              src={truck}
              alt="Order Delivery"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-medium text-gray-700">ORDER DELIVERY</h3>
            <p className="text-gray-500 mt-2">
              All Goods Delivery would be done by FedEx & other courier top-rated
              companies.
            </p>
          </div>
        </div>
      </section>

      {/* 100% Original Products */}
      <section className="py-12 bg-black text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">100% ORIGINAL PRODUCTS</h2>
          <p className="text-gray-300">
            We pride ourselves on offering 100% original and genuine products. Our
            commitment to quality ensures that every vape device, accessory, and
            e-liquid in our collection meets the highest standards of authenticity
            and performance.
          </p>
        </div>
        {/* Slider Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

export default ShoppingFunnel;
