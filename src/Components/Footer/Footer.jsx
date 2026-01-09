import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { HiLocationMarker, HiPhone } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      {/* top */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 ">
        
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-serif text-black dark:text-white">
           Gadi-Wala
          </h2>
          <p className="text-sm leading-relaxed">
            Reliable and affordable car rentals for every journey. 
            Easy booking, well-maintained cars, and 24/7 support.
          </p>

          <div className="flex gap-4 text-xl">
            <FaInstagram className="hover:text-yellow-500 cursor-pointer" />
            <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-yellow-500 cursor-pointer" />
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-black dark:text-white">
            Important Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-500 cursor-pointer">Home</li>
            <li className="hover:text-yellow-500 cursor-pointer">About</li>
            <li className="hover:text-yellow-500 cursor-pointer">Cars</li>
            <li className="hover:text-yellow-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-black dark:text-white">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Daily Car Rental</li>
            <li>Outstation Trips</li>
            <li>Business Travel</li>
            <li>Airport Pickup</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-black dark:text-white">
            Contact Info
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <HiLocationMarker className="text-yellow-500 text-lg" />
              <span>Bhagalpur, Bihar</span>
            </div>
            <div className="flex items-center gap-2">
              <HiPhone className="text-yellow-500 text-lg" />
              <span>+91 7541840606</span>
            </div>
          </div>
        </div>

      </div>

      {/* bottom */}
      <div className="border-t border-gray-300 dark:border-gray-700 py-4 text-center text-sm">
        <p>
          © {new Date().getFullYear()} Car Rental.  
          <span className="block sm:inline">
            {" "}Designed & Developed by{" "}
            <span className="font-semibold text-yellow-500">
              Alok Kumar
            </span>
          </span>
        </p>
      </div>
    </footer>
  );
}
