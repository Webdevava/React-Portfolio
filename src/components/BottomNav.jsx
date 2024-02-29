import { Briefcase, Home, MessageSquare, Monitor, Moon, Sun, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useState } from "react";

const BottomNav = () => {
  const [white,setWhite] = useState(false)


  const handleTheme = () => {
    const currentTheme = document.body.style.getPropertyValue('--fn').trim();
    if (currentTheme === 'white') {
        document.body.style.setProperty('--fn', 'black');
        document.body.style.setProperty('--bg', 'white');
        setWhite(true)
    } else {
        document.body.style.setProperty('--fn', 'white');
        document.body.style.setProperty('--bg', 'black');
        setWhite(false)

    }
}



  return (
    <div className="w-full text-white fixed bottom-0 flex items-center justify-center p-4 z-20">
      <nav className="w-full lg:w-fit md:w-fit flex items-center justify-evenly gap-6 border border-zinc-600 rounded-xl py-2 bg-black opacity-70 px-6">
        <NavLink
          exact
          to="/"
          data-tooltip-id="Home"
          activeClassName="active"
          className="rounded-full hover:bg-white hover:text-black p-2 transition-all duration-500 ease-in-out  hover:scale-110"
        >
          <Home />
        </NavLink>
        <NavLink
          to="/projects"
          data-tooltip-id="Projects"
          activeClassName="active"
          className="rounded-full hover:bg-white hover:text-black p-2 transition-all duration-500 ease-in-out  hover:scale-110"
        >
          <Monitor />
        </NavLink>
        <button
        onClick={handleTheme}
          data-tooltip-id="Theme"
          className="rounded-full hover:bg-white hover:text-black p-2 transition-all duration-500 ease-in-out  hover:scale-110"
        >
          {white ? <Moon/> : <Sun/>}
        </button>
        <NavLink
          to="/about"
          data-tooltip-id="About"
          activeClassName="active"
          className="rounded-full hover:bg-white hover:text-black p-2 transition-all duration-500 ease-in-out  hover:scale-110"
        >
          <User />
        </NavLink>
        
        <NavLink
          to="/contact"
          data-tooltip-id="Contact"
          activeClassName="active"
          className="rounded-full hover:bg-white hover:text-black p-2 transition-all duration-500 ease-in-out  hover:scale-110"
        >
          <MessageSquare />
        </NavLink>
      </nav>
      <ReactTooltip id="Home" place="top" effect="solid" content="Home" />
      <ReactTooltip
        id="Projects"
        place="top"
        effect="solid"
        content="Projects"
      />
      <ReactTooltip id="About" place="top" effect="solid" content="About" />
      <ReactTooltip id="Theme" place="top" effect="solid" content="Theme" />
      <ReactTooltip id="Contact" place="top" effect="solid" content="Contact" />
    </div>
  );
};

export default BottomNav;
