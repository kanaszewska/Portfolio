import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import './App.css';


function App() {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;