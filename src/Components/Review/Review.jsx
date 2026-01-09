import remimg1 from "../../assets/remimg1.jpg";
import remimg2 from "../../assets/remimg2.jpg";
import { HiArrowTurnRightDown } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function Review() {
  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-[450px] py-10 overflow-hidden">
      
      {/* heading */}
      <div className="text-center mt-5 sm:mt-10">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif">
          Customer Reviews
        </h1>
        <p className="text-gray-400 mt-3 text-sm">
          Real feedback from our happy customers
        </p>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 px-6 mt-10 mb-10 items-stretch">
        
        {/* card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.03 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
          className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl/40 p-6"
        >
          {/* image FIXED */}
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={remimg1}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 text-[13px] font-bold font-serif">
              <HiArrowTurnRightDown className="text-xl text-yellow-500" />
              Rahul Sharma
            </p>
            <p className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</p>
            <p className="text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed">
              “Booking was very easy and the car was in excellent condition.
              Pickup and drop were smooth and on time.”
            </p>
          </div>
        </motion.div>

        {/* card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.03 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
          className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl/40 p-6"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={remimg2}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 text-[13px] font-bold font-serif">
              <HiArrowTurnRightDown className="text-xl text-yellow-500" />
              Anjali Verma
            </p>
            <p className="text-yellow-400 text-sm">⭐⭐⭐⭐</p>
            <p className="text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed">
              “Affordable prices and well-maintained cars. Customer support
              was helpful throughout the trip.”
            </p>
          </div>
        </motion.div>

        {/* card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, scale: 1.03 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
          className="flex items-start gap-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl/40 p-6"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={remimg1}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2 text-[13px] font-bold font-serif">
              <HiArrowTurnRightDown className="text-xl text-yellow-500" />
              Mohit Kumar
            </p>
            <p className="text-yellow-400 text-sm">⭐⭐⭐☆</p>
            <p className="text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed">
              “Great service for daily travel and weekend trips. The car was
              clean and comfortable.”
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
