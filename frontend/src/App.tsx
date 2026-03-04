import HeroSection from "./components/sections/heroSection/Herosection"
import './App.css'
import { Work } from "./components/sections/work/Work";
import { AboutMe } from "./components/sections/about/AboutMe";

function App() {

  
  return (
    <div className={`container mainBackgroundColor`}>
      <HeroSection/>
      <Work/>
      <AboutMe/>

      {/* work */}
      {/* about */}
      {/* contact */}
      {/* footer */}
    </div>
  )
}

export default App
