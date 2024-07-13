import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward, faHome, faTools, faProjectDiagram, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [toggle, setToggle] = useState(false);

    const handleSidebarexpand = () => {
        setToggle(!toggle);
    };

    const menuItems = [
        { icon: faHome, label: "Home" ,link:"home" },
        { icon: faTools, label: "Skills", link: "home" },
        { icon: faProjectDiagram, label: "Previous Projects", link: "home" },
        { icon: faEnvelope, label: "Contact me", link: "home" }
    ];

    return (
        <div
            className={`z-[999] px-4 py-4 rounded-lg fixed bottom-4 md:top-[50%] md:transform md:translate-y-[-50%] border-2 transition-all ease-in-out duration-300 bg-gray-900 border-gray-700 text-white dark:bg-gray-100 dark:border-gray-300 ${toggle ? "left-0 md:w-48" : "left-0 md:w-16"
                } dark:shadow-white shadow-sm backdrop-blur-lg bg-transparent w-[90%] left-[5%] md:left-4`}
        >
            <button
                onClick={handleSidebarexpand}
                className="hidden md:block focus:outline-none"
            >
                <FontAwesomeIcon
                    icon={toggle ? faBackward : faForward}
                    className="absolute top-5 right-4 dark:text-gray-900 text-gray-100"
                />
            </button>

            <ul className="flex items-center flex-row md:flex-col justify-center gap-14 md:gap-10 md:mt-24 ">
                {menuItems.map((item, index) => (
                    <li key={index} className="flex items-center dark:text-gray-900 text-gray-100" role="menuitem">
                        <FontAwesomeIcon icon={item.icon} />
                        {toggle && <span className="ml-2">{item.label}</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
