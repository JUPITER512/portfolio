import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faForward,
  faHome,
  faTools,
  faProjectDiagram,
  faEnvelope,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import ThemeSwitcher from "./ThemeSwitcher";
const Sidebar = () => {
  const { SwitcherComponent } = ThemeSwitcher();

  const [toggle, setToggle] = useState(false);
  const [select, setSelect] = useState(localStorage.getItem('portfolioPage')||'home')
  const handleSidebarexpand = () => {
    setToggle(!toggle);
  };

  const menuItems = [
    { icon: faHome, label: "Home", link: "home" },
    { icon: faPerson, label: "About Me", link: "AboutMe" },
    // { icon: faTools, label: "Skills", link: "TechStack" },
    {
      icon: faProjectDiagram,
      label: "Previous Projects",
      link: "PreviousProjects",
    },
    { icon: faEnvelope, label: "Contact me", link: "contactme" },
  ];

 useEffect(()=>{
   localStorage.setItem("portfolioPage", select)
   const element = document.getElementById(select);
   element.scrollIntoView({ behavior: "smooth" });
 },[select])
  return (
    <div
      className={`z-[999] rounded-lg  md:rounded-r-lg fixed bottom-4 py-2 md:top-[50%] md:transform md:translate-y-[-50%] border-2 transition-all ease-in-out duration-300 bg-gray-900 border-gray-700 text-black dark:bg-gray-100 dark:border-gray-300 ${
        toggle ? "md:left-0 md:w-52" : "md:left-0 md:w-16"
      } dark:shadow-white shadow-sm backdrop-blur-lg bg-transparent w-[90%] left-[5%]`}
    >
      
      <button
        onClick={handleSidebarexpand}
        className="hidden md:block focus:outline-none"
      >
        <FontAwesomeIcon
          icon={toggle ? faBackward : faForward}
          className="absolute top-5 right-4 dark:text-gray-900 text-gray-700"
        />
      </button>


      <ul className="flex items-center flex-row md:flex-col justify-center gap-6 md:gap-10 md:my-14 ">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center dark:text-gray-900 text-gray-700 cursor-pointer select-none ${
              select==item.link ?  " border-b-[4px]  border-blue-500" : ""
            } hover:bg-blue-100 hover:scale-125  hover:rounded-lg px-2 py-1`}
            role="menuitem"
            onClick={() => {
              setSelect(item.link);
            }}
          >
            <FontAwesomeIcon icon={item.icon} />
            {toggle && <span className="ml-2">{item.label}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
