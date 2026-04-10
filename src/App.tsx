import HeroSection from "./components/sections/heroSection/Herosection"
import { Work } from "./components/sections/work/Work";
import { AboutMe } from "./components/sections/about/AboutMe";
import Footer from "./components/sections/footer/Footer";
import Cursor from "./Cursor";
import './App.css'
import { useState } from "react";
import Loader from "./Loader";

function App() {

  const [loading, setLoading] = useState(true);
  const [exit, setExit] = useState(false);

  const handleDoneTyping = () => {
    setExit(true);

    setTimeout(() => {
      setLoading(false);
    }, 900); // match your CSS transition time
  };

  return (
    <>
      <div className={`container`}>
        <Cursor/>
        <HeroSection/>
        <Work/>
        <AboutMe/>
        <Footer/>
      </div>
      {loading && (
        <Loader isExiting={exit} done={handleDoneTyping} />
      )}
    </>
  );
}

export default App
