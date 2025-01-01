import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
const App = () => {

  return (
      <>
          <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
              <Header/>
              <Hero/>
              <Benefits/>
          </div>
          <ButtonGradient/>
      </>
  )
}

export default App
