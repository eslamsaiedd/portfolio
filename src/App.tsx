import HeroSection from "./components/sections/heroSection/Herosection"
import { Work } from "./components/sections/work/Work";
import { AboutMe } from "./components/sections/about/AboutMe";
import Footer from "./components/sections/footer/Footer";
import Cursor from "./Cursor";
import './App.css'

function App() {

  return (
    <div className={`container`}>
      <Cursor/>
      <HeroSection/>
      <Work/>
      <AboutMe/>
      <Footer/>
    </div>
  )
}

export default App
