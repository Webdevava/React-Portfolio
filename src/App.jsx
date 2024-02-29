import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import About from "./pages/About";

import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

const App = () => {

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <BottomNav/>
      <Footer/>
    </div>
  );
};

export default App;
