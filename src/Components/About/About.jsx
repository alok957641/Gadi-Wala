import Car1img from "../../assets/car1.png";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      id="About"
      className="dark:bg-gray-900 dark:text-white overflow-x-hidden"
    >
      {/* container FIXED */}
      <div className="max-w-[1280px] mx-auto min-h-[400px] px-4 py-14 flex items-center">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 items-center w-full">

          {/* IMAGE */}
          <motion.img
            src={Car1img}
            initial={{ x: -40, opacity: 0 }}   // 80 → 40
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full max-w-full max-h-[600px] object-contain block mx-auto"
          />

          {/* TEXT */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}   // 80 → 40
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="space-y-5 px-4 sm:px-10"
          >
            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              About Us
            </h1>

            <p className="text-gray-500 dark:text-gray-200 text-[14px] leading-relaxed">
              Book reliable and affordable cars in just a few clicks. Enjoy
              comfortable rides, easy booking, and 24/7 support for every
              journey.
            </p>

            <p className="text-gray-500 dark:text-gray-200 text-[14px] leading-relaxed">
              Our mission is to provide comfortable rides, transparent pricing,
              and round-the-clock customer support so every journey feels safe
              and stress-free.
            </p>

            <button className="border-2 border-[#ffc727] text-[#ffc727] hover:bg-[#ffc727] hover:text-black duration-300 px-6 py-2 rounded-md">
              Explore Our Cars
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
