import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import CarCard from "./Components/Our-Cars/Our-Cars";
import Review from "./Components/Review/Review";
import Calltoact from "./Components/Calltoaction/calltoaction";
import Footer from "./Components/Footer/Footer";
function App() {


  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  useEffect(() => {

      console.log("theme changed to:", theme);

    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

     console.log("HTML classes:", document.documentElement.className);
  }, [theme]);

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />

      <Home />
      <About/>
      <Services />
      <CarCard />
      <Review/>
      <Calltoact/>
      <Footer/>

    </div>
  );
}

export default App;
