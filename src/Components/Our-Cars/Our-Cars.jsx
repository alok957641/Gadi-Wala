import { motion } from "framer-motion";
import { FaCarSide, FaGasPump, FaSnowflake } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import ourcars1 from "../../assets/ourcars1.png";
import ourcars2 from "../../assets/ourcars2.png";
import ourcars3 from "../../assets/ourcars3.png";
import ourcars4 from "../../assets/ourcars4.png";
import ourcars5 from "../../assets/ourcars5.png";
import ourcars6 from "../../assets/ourcars6.png";
export default function OurCars() {
  return (
    <div className="dark:bg-gray-900 dark:text-white max-w-[1280px] mx-auto min-h-[400px] px-4 py-10 sm:py-0 overflow-x-hidden" id="Booking">
      <div className=" flex flex-col justify-center items-center mt-[10px] lg:mt-[40px] sm:mt-[30px]">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold font-serif">
            Featured Cars
          </h1>
          <p className="text-gray-400 mt-3 text-sm">
            Choose from our popular and reliable rental cars.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 items-stretch sm:grid-cols-2 grid-cols-1 gap-8 px-9 mt-14 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
            className="shadow-xl/20 bg-white dark:bg-gray-800 rounded-xl rounded-lg ">
            <div>
              <img src={ourcars1} alt="" className="max-h-[150px]" />
            </div>
            <div className=" flex flex-col gap-3 px-5">
              {/* price & name sec  */}
              <div className=" ">
                <h2 className="text-[16px] font-bold ">Tata Nexon</h2>
                <span className="text-[16px] font-bold text-yellow-500">
                  ₹1,999
                </span>
                <span className="text-[13px] font-bold text-gray-400">
                  /day
                </span>
              </div>
              {/* features div  */}
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-300 mb-5">
                <div className=" flex justify-start items-center gap-2">
                  <FaSnowflake /> AC
                </div>
                <div className="flex justify-start items-center gap-2">
                  <MdSettings /> Manual
                </div>
                <div className=" flex justify-start items-center gap-2">
                  <FaGasPump /> Petrol
                </div>
                <div className=" flex justify-start items-center gap-2">
                  <FaCarSide /> 5 Seater
                </div>
              </div>
              <div className="px-2 mb-3">
                <button className="w-full bg-[#ffc727] p-1 rounded-md animate-bounce">
                  Book Now{" "}
                </button>
              </div>
            </div>
          </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
            className=" shadow-xl/20 bg-white dark:bg-gray-800 rounded-xl rounded-lg ">
            <div className="px-3">
              <img src={ourcars2} alt="" className="max-h-[150px]" />
            </div>
            <div className=" flex flex-col gap-3 px-5">
              {/* price & name sec  */}
              <div className=" ">
                <h2 className="text-[16px] font-bold ">Maruti Swift</h2>
                <span className="text-[16px] font-bold text-yellow-500">
                  ₹1,299
                </span>
                <span className="text-[13px] font-bold text-gray-400">
                  /day
                </span>
              </div>
              {/* features div  */}
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-300 mb-5">
                <div className=" flex justify-start items-center gap-2">
                  <FaSnowflake /> AC
                </div>
                <div className="flex justify-start items-center gap-2">
                  <MdSettings /> Manual
                </div>
                <div className=" flex justify-start items-center gap-2">
                  <FaGasPump /> Petrol
                </div>
                <div className=" flex justify-start items-center gap-2">
                  <FaCarSide /> 5 Seater
                </div>
              </div>
              <div className="px-2 mb-3">
                <button className="w-full bg-[#ffc727] p-1 rounded-md animate-bounce">
                  Book Now{" "}
                </button>
              </div>
            </div>
          </motion.div>
           <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
            className=" shadow-xl/20 bg-white dark:bg-gray-800 rounded-xl  rounded-lg ">
            <div className="px-5 mt-1">
              <img src={ourcars3} alt="" className="max-h-[150px]" />
            </div>
            <div className=" flex flex-col gap-3 px-5">
              {/* price & name sec  */}
              <div className=" ">
                <h2 className="text-[16px] font-bold ">Hyundai i20</h2>
                <span className="text-[16px] font-bold text-yellow-500">
                  ₹1,499
                </span>
                <span className="text-[13px] font-bold text-gray-400">
                  /day
                </span>
              </div>
              {/* features div  */}
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-300 mb-5">
                <div className=" flex justify-start items-center gap-2">
                  <FaSnowflake /> AC
                </div>
                <div className="flex justify-start items-center gap-2">
                  <MdSettings /> Manual
                </div>
                <div className=" flex justify-start items-center gap-2">
                  <FaGasPump /> Petrol
                </div>
                <div className=" flex justify-start items-center gap-2">
                  <FaCarSide /> 5 Seater
                </div>
              </div>
              <div className="px-2 mb-3">
                <button className="w-full bg-[#ffc727] p-1 rounded-md animate-bounce">
                  Book Now{" "}
                </button>
              </div>
            </div>
          </motion.div>
           <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
            className=" shadow-xl/20 bg-white dark:bg-gray-800 rounded-xl  rounded-lg ">
            <div className="px-12 mt-1">
              <img src={ourcars4} alt="" className="max-h-[150px]" />
            </div>
            <div className=" flex flex-col gap-3 px-5">
              {/* price & name sec  */}
              <div className=" ">
                <h2 className="text-[16px] font-bold ">Honda City</h2>
                <span className="text-[16px] font-bold text-yellow-500">
                  ₹1,899
                </span>
                <span className="text-[13px] font-bold text-gray-400">
                  /day
                </span>
              </div>
              {/* features div  */}
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-300 mb-5">
                <div className=" flex justify-start items-center gap-2">
                  <FaSnowflake />Climate Control
                </div>
                <div className="flex justify-start items-center gap-2">
                  <MdSettings /> Automatic 
                </div>
                <div className=" flex justify-start items-center gap-2">
                  <FaGasPump /> Petrol
                </div>
                <div className=" flex justify-start items-center gap-2">
                  <FaCarSide /> 5 Seater
                </div>
              </div>
              <div className="px-2 mb-3">
                <button className="w-full bg-[#ffc727] p-1 rounded-md animate-bounce">
                  Book Now{" "}
                </button>
              </div>
            </div>
          </motion.div>
           <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
            className=" shadow-xl/20 bg-white dark:bg-gray-800 rounded-xl rounded-lg ">
            <div className="px-3 mt-1">
              <img src={ourcars5} alt="" className="max-h-[150px]" />
            </div>
            <div className=" flex flex-col gap-3 px-5">
              {/* price & name sec  */}
              <div className=" ">
                <h2 className="text-[16px] font-bold ">Toyota Innova</h2>
                <span className="text-[16px] font-bold text-yellow-500">
                  ₹2,499
                </span>
                <span className="text-[13px] font-bold text-gray-400">
                  /day
                </span>
              </div>
              {/* features div  */}
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-300 mb-5">
                <div className=" flex justify-start items-center gap-2">
                  <FaSnowflake /> AC
                </div>
                <div className="flex justify-start items-center gap-2">
                  <MdSettings /> Manual
                </div>
                <div className=" flex justify-start items-center gap-2">
                  <FaGasPump /> DIESAL
                </div>
                <div className=" flex justify-start items-center gap-2">
                  <FaCarSide /> 5 Seater
                </div>
              </div>
              <div className="px-2 mb-3">
                <button className="w-full bg-[#ffc727] p-1 rounded-md animate-bounce">
                  Book Now{" "}
                </button>
              </div>
            </div>
          </motion.div>
           <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
            className=" shadow-xl/20 bg-white dark:bg-gray-800 rounded-xl rounded-lg ">
            <div className="px-2 mt-1">
              <img src={ourcars6} alt="" className="max-h-[150px]" />
            </div>
            <div className=" flex flex-col gap-3 px-5">
              {/* price & name sec  */}
              <div className=" ">
                <h2 className="text-[16px] font-bold ">Mahindra Thar</h2>
                <span className="text-[16px] font-bold text-yellow-500">
                  ₹2,299
                </span>
                <span className="text-[13px] font-bold text-gray-400">
                  /day
                </span>
              </div>
              {/* features div  */}
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-300 mb-5">
                <div className=" flex justify-start items-center gap-2">
                  <FaSnowflake /> AC
                </div>
                <div className="flex justify-start items-center gap-2">
                  <MdSettings /> Manual
                </div>
                <div className=" flex justify-start items-center gap-2">
                  <FaGasPump /> Diesal
                </div>
                <div className=" flex justify-start items-center gap-2">
                  <FaCarSide /> 5 Seater
                </div>
              </div>
              <div className="px-2 mb-3">
                <button className="w-full bg-[#ffc727] p-1 rounded-md animate-bounce">
                  Book Now{" "}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
