import "./App.css";
import AboutUs from "./Components/About/AboutUs";
import Contact from "./Components/Contact/Contact";
import Landing from "./Components/LandingPage/LandingPage";
import Services from "./Components/Services/Services";
import Testymonials from "./Components/Testymonials/Testymonials";
import Footer from "./UI/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Landing />
      <AboutUs />
      <Services />
      <Testymonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
