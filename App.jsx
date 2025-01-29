import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </Router>
  );
};

export default App;
