import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import BgImage1 from "../assets/coffeebg.jpg";
import BgImage2 from "../assets/coffee-cover.jpg";
import BgImage3 from "../assets/download.png";

const images = [BgImage1, BgImage2, BgImage3];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
};

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const bgImage = {
    backgroundImage: `url(${images[currentImage]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <main style={bgImage} id="About">
      <section className="min-h-[750px] w-full relative">
        <motion.div className="container -mt-11" {...fadeInUp}>
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center min-h-[850px]">
            {/* First Div */}
            <div className="text-black md:mt-0 p-4 space-y-4 -mt-10">
              <motion.h1 className="text-6xl font-bold leading-tight ml-14" {...fadeInUp}>
                About Us
              </motion.h1>
              <h1 className="text-2xl">Black Lifestyle Lovers</h1>
              <p className="text-sm opacity-55 leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sint! Aut voluptates, dolore officiis rem placeat nihil error dolorum. Culpa sed quam dolores totam accusamus nostrum dolor exercitationem qui fuga?
              </p>
            </div>
            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </div>
            </div>
            {/* Second Div */}
            <div className="text-black mt-[100px] md:mt-0 p-4 space-y-4">
              <p className="text-sm opacity-55 leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, sint! Aut voluptates, dolore officiis rem placeat nihil error dolorum. Culpa sed quam dolores totam accusamus nostrum dolor exercitationem qui fuga?
              </p>
            </div>
          </div>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button onClick={prevImage}>
              <FaArrowLeft className="text-white text-3xl" />
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button onClick={nextImage}>
              <FaArrowRight className="text-white text-3xl" />
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Hero;
