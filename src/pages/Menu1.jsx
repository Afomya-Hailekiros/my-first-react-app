import React from 'react';
import { motion } from "framer-motion";
import BgImage from "../assets/bg-slate.png";
import { useOrder } from '../context/OrderContext'; // Import the context

import coffee from "../assets/coffee/coffee3.png";
import coffee1 from "../assets/coffee/coffee4.jpeg";
import coffee2 from "../assets/coffee/coffee7.jpeg";
import coffee3 from "../assets/coffee/coffee6.jpeg";
import coffee4 from "../assets/coffee/coffee8.jpeg";
import coffee5 from "../assets/coffee/coffee10.jpeg";
import coffee6 from "../assets/coffee/coffee11.jpeg";
import coffee7 from "../assets/coffee/coffee12.jpeg";
import coffee8 from "../assets/coffee/coffee13.jpeg";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};



const Menu1 = () => {
  const { addOrder } = useOrder(); // Use the context

  const cardVariants = {
    offscreen: { opacity: 0, y: 100 },
    onscreen: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 10, delay: 0.2, duration: 1.5, ease: "easeOut" }
    },
  };


  const handleOrder = (service) => {
    addOrder(service);
    alert(`${service} ordered successfully!`);
  };

  return (
    <section className="min-h-[750px] w-full" style={bgImage}>
      <div className="container mx-auto p-4">
        <h2 className="text-4xl font-bold text-center mb-8">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example service card */}
          <motion.div 
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold mb-4">Service One</h3>
            <img src={coffee} alt="Service 1" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
            <p className="text-gray-700 mb-4">Description of the first service.</p>
            <button 
              className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
              onClick={() => handleOrder('Service One')}
            >
              Order Now
            </button>         
             </motion.div>
          {/* Repeat for other cards */}
          <motion.div 
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold mb-4">Service Two</h3>
            <img src={coffee6} alt="Service 2" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
            <p className="text-gray-700 mb-4">Description of the second service.</p>
            <button 
              className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
              onClick={() => handleOrder('Service One')}
            >
              Order Now
            </button>          </motion.div>
          <motion.div 
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold mb-4">Service Three</h3>
            <img src={coffee5} alt="Service 3" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
            <p className="text-gray-700 mb-4">Description of the third service.</p>
            <button 
              className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
              onClick={() => handleOrder('Service One')}
            >
              Order Now
            </button>          </motion.div>
          <motion.div 
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold mb-4">Service Four</h3>
            <img src={coffee1} alt="Service 4" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
            <p className="text-gray-700 mb-4">Description of the fourth service.</p>
            <button 
              className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
              onClick={() => handleOrder('Service One')}
            >
              Order Now
            </button>          </motion.div>
          <motion.div 
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold mb-4">Service Five</h3>
            <img src={coffee2} alt="Service 5" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
            <p className="text-gray-700 mb-4">Description of the fifth service.</p>
            <button 
              className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
              onClick={() => handleOrder('Service One')}
            >
              Order Now
            </button>          </motion.div>
          <motion.div 
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold mb-4">Service Six</h3>
            <img src={coffee3} alt="Service 6" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
            <p className="text-gray-700 mb-4">Description of the sixth service.</p>
            <button 
              className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
              onClick={() => handleOrder('Service One')}
            >
              Order Now
            </button>          </motion.div>
          <motion.div 
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold mb-4">Service Seven</h3>
            <img src={coffee4} alt="Service 7" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
            <p className="text-gray-700 mb-4">Description of the seventh service.</p>
            <button 
              className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
              onClick={() => handleOrder('Service One')}
            >
              Order Now
            </button>          </motion.div>
          <motion.div 
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold mb-4">Service Eight</h3>
            <img src={coffee7} alt="Service 8" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
            <p className="text-gray-700 mb-4">Description of the eighth service.</p>
            <button 
              className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
              onClick={() => handleOrder('Service One')}
            >
              Order Now
            </button>          </motion.div>
          <motion.div 
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold mb-4">Service Nine</h3>
            <img src={coffee8} alt="Service 9" className="w-full h-48 object-cover rounded-t-lg mb-4"/>
            <p className="text-gray-700 mb-4">Description of the ninth service.</p>
            <button 
              className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
              onClick={() => handleOrder('Service One')}
            >
              Order Now
            </button>          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Menu1;
