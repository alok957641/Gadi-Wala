// import Car1img from "../../assets/car1.png";
import { motion } from "framer-motion";
import { FaRupeeSign,FaCarSide ,FaHeadset ,FaMapMarkedAlt ,FaSlidersH , FaLayerGroup } from "react-icons/fa";

export default function Services() {
  return (
    <div className="dark:bg-gray-900 dark:text-white max-w-[1280px] mx-auto min-h-[400px] px-4 py-10 sm:py-0 flex items-center ">
      <div className=" mt-[30px] sm:mb-[40px] mb-[20px]">
        <div className="flex justify-center items-center flex-col  gap-[30px]">
          <div className="text-center mb-[30px]">
            <h1 className="text-3xl sm:text-4xl font-bold font-serif">
              Why Choose Us
            </h1>
            <p className="text-gray-400 mt-3 text-sm">
              Reliable, affordable, and hassle-free car rentals
            </p>
          </div>
          <div className="grid sm:grid-cols-3  lg:grid-cols-3 gap-[30px] grid-cols-1 place-items-cente px-9">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: false }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl flex flex-col gap-2 justify-center items-center"
            >
                <FaRupeeSign  className="text-4xl text-yellow-400"/>
              <h3
                class="text-xl font-semibold text-center
             text-gray-900 dark:text-gray-100 mb-2"
              >
                Affordable Pricing
              </h3>

              <p
                class="text-sm text-left pl-0
            text-gray-600 dark:text-gray-300"
              >
                Clear pricing with no hidden charges for every ride you book.
              </p>
            </motion.div>

             <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: false }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl flex flex-col gap-2 justify-center items-center"
            >
                <FaLayerGroup  className="text-4xl text-yellow-400" />

              <h3
                class="text-xl font-semibold text-center
             text-gray-900 dark:text-gray-100 mb-2"
              >
                Wide Range of Cars
              </h3>

              <p
                class="text-sm text-left pl-0
            text-gray-600 dark:text-gray-300"
              >
                Clean, serviced cars for a smooth and comfortable journey.
              </p>
            </motion.div>
             <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.5, ease: "easeOut"  }}
              viewport={{ once: false }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl flex flex-col gap-2 justify-center items-center"
            >
                <FaMapMarkedAlt  className="text-4xl text-yellow-400" />
              <h3
                class="text-xl font-semibold text-center
             text-gray-900 dark:text-gray-100 mb-2"
              >
                Easy Booking
              </h3>

              <p
                class="text-sm text-left pl-0
            text-gray-600 dark:text-gray-300"
              >
                Book your car quickly with a simple and fast process.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.5, ease: "easeOut" , delay:0.2 }}
              viewport={{ once: false}}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl flex flex-col gap-2 justify-center items-center"
            >
                <FaCarSide  className="text-4xl text-yellow-400" />
              <h3
                class="text-xl font-semibold text-center
             text-gray-900 dark:text-gray-100 mb-2"
              >
                Maintained Vehicles
              </h3>

              <p
                class="text-sm text-left pl-0
            text-gray-600 dark:text-gray-300"
              >
                Clean, serviced cars for a smooth and comfortable journey.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.5, ease: "easeOut" ,delay:0.2 }}
              viewport={{ once: false}}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl flex flex-col gap-2 justify-center items-center"
            >
                <FaHeadset  className="text-4xl text-yellow-400"/>
              <h3
                class="text-xl font-semibold text-center
             text-gray-900 dark:text-gray-100 mb-2"
              >
                24/7 Support
              </h3>

              <p
                class="text-sm text-left pl-0
            text-gray-600 dark:text-gray-300"
              >
                Get help anytime with our always-available support team.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.5, ease: "easeOut" , delay:0.2 }}
              viewport={{ once: false}}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl flex flex-col gap-2 justify-center items-center"
            >
                <FaSlidersH className="text-4xl text-yellow-400"/>
              <h3
                class="text-xl font-semibold text-center
             text-gray-900 dark:text-gray-100 mb-2"
              >
                Flexible Plans
              </h3>

              <p
                class="text-sm text-left pl-0
            text-gray-600 dark:text-gray-300"
              >
                Choose hourly or daily plans that fit your travel needs.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
