import Carimg from "../../assets/Car.png";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white overflow-x-hidden" id="Home">
      
      {/* container FIXED */}
      <div className="max-w-[1280px] mx-auto min-h-[400px] px-4">
        
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          
          {/* IMAGE */}
          <div className="order-1 sm:order-2 w-full overflow-hidden">
            <motion.img
              src={Carimg}
              initial={{ x: 40, opacity: 0 }}   // 60 → 40 (safe)
              animate={{ x: 0, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.9 }}
              className="w-full max-w-full max-h-[600px] object-contain block mx-auto"
            />
          </div>

          {/* TEXT */}
          <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
            
            <motion.p
              variants={fadeInUp}
              initial={{ y: 30, opacity: 0 }}
              animate="animate"
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-[#ffc727] text-[20px] font-serif"
            >
              Effortless
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              initial={{ y: 30, opacity: 0 }}
              animate="animate"
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-4xl lg:text-[56px] font-serif font-semibold"
            >
              Gadi Wala
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial={{ y: 30, opacity: 0 }}
              animate="animate"
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-gray-500 dark:text-gray-300 text-[14px]"
            >
              Book reliable and affordable cars in just a few clicks.
              Enjoy comfortable rides, easy booking, and 24/7 support for every journey.
            </motion.p>

            <motion.button
              variants={fadeInUp}
              initial={{ y: 30, opacity: 0 }}
              animate="animate"
              transition={{ duration: 0.9, delay: 0.4 }}
              className="bg-[#ffc727] text-black px-6 py-2 rounded-md hover:bg-[#ffc727]/80"
            >
              Get Started
            </motion.button>

          </div>
        </div>
      </div>
    </div>
  );
}
