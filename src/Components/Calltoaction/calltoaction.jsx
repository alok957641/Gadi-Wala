import calltoact from "../../assets/calltoact.jpg";

export default function calltoaction() {
  return (
    <div className=" min-h-[300px] bg-white dark:bg-gray-900  dark:text-gray-300">
    <div
      className="relative h-50 w-full  shadow-xl/20 bg-cover bg-center  "
      style={{ backgroundImage: `url(${calltoact})`, opacity:10 }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/80 "></div>

      {/* center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h2 className="text-white sm:text-4xl text-2xl font-bold">Ready to Book Your Ride?</h2>
           <button className=" text-gray-700 mt-8 bg-[#ffc727] px-5 py-2 rounded-md animate-bounce">
                  Book Now
                </button>
      </div>
    </div>
    </div>
  );
}
