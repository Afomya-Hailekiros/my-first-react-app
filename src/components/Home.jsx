import React from 'react';
import { motion } from 'framer-motion';
import BgImage from '../assets/bg-slate.png';
import coffeeMain from '../assets/black.png';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from './Navbar';

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: 'easeOut' },
};

const jump = {
  initial: { y: 0 },
  animate: { y: [0, -20, 0] },
  transition: { duration: 1, ease: 'easeInOut', repeat: Infinity, repeatType: 'loop' },
};

const Home = () => {
  return (
    <main style={bgImage} id="Home" className="min-h-screen">
      <Navbar />
      <section className="min-h-[600px] w-full flex justify-center items-center">
        <div className="container mx-auto pt-8 px-4">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3 place-items-center min-h-[850px]">
            {/* First Div */}
            <motion.div className="text-lightOrange p-4 space-y-4" {...fadeInUp}>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">Black Tumbler</h1>
              <h1 className="text-xl md:text-2xl">Black Lifestyle Lovers</h1>
              <p className="text-sm md:text-base opacity-55 leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sint! Aut voluptates, dolore officiis rem placeat nihil error dolorum. Culpa sed quam dolores totam accusamus nostrum dolor exercitationem qui fuga?
              </p>
            </motion.div>
            {/* Image with Jumping Animation and Bottom Shadow */}
            <motion.div className="relative flex justify-center items-center" {...fadeInUp}>
              <motion.img 
                src={coffeeMain} 
                alt="Black Coffee" 
                className="w-40 md:w-48 lg:w-52"
                style={{ boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.5)' }}
                {...jump}
              />
            </motion.div>
            {/* Second Div */}
            <motion.div className="text-lightOrange p-4 space-y-4" {...fadeInUp}>
              <h1 className="text-xl md:text-2xl">Black Lifestyle Lovers</h1>
              <p className="text-sm md:text-base opacity-55 leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sint! Aut voluptates, dolore officiis rem placeat nihil error dolorum. Culpa sed quam dolores totam accusamus nostrum dolor exercitationem qui fuga?
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="hero">
        <Hero />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </main>
  );
};

export default Home;
