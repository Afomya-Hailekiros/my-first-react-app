import React from 'react';
import { motion } from "framer-motion";
import BgImage from "../assets/bg-slate.png";
import data from "../components/data";
import { useOrder } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Menu2 = () => {
  const { orders, addOrder } = useOrder();
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: 'easeOut' },
  };

  const handleOrder = (item) => {
   
      addOrder(item);
      alert(`${item.title} ordered successfully!`);
    
  };

  const calculateTotal = () => {
    return orders.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0);
  };

  return (
    <section className="min-h-[750px] w-full" style={bgImage}>
      <div className="container mx-auto p-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map(item => (
            <motion.div 
              key={item.id}
              className="bg-gray-100 p-6 rounded-lg shadow-lg"
              {...fadeInUp}
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <img src={item.image} alt={item.title} className="w-full h-30 object-cover rounded-t-lg"/>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <p className="text-gray-900 font-bold">{item.price}</p>
              <button 
                className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
                onClick={() => handleOrder(item)}
              >
                Order Now
              </button>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold">Total Price: ${calculateTotal().toFixed(2)}</h3>
        </div>
      </div>
    </section>
  );
};

export default Menu2;
