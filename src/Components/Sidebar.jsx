import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faHome, faTools, faProjectDiagram, faEnvelope, faForward, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    const [toggle, setToggle] = useState(true);

    function handleSidebarexpand() {
        setToggle(!toggle);
    }


    return (
        <div
            className={`z-[999] px-4 py-4 rounded-lg  border-2 absolute top-[50%] transform translate-y-[-50%] transition-all ease-in-out duration-300  bg-gray-900 border-gray-700 text-white  dark:bg-gray-100 dark:border-gray-300 ${toggle ? "left-0 w-48" : "left-0 w-16"
                }  dark:shadow-white shadow-sm`}
        > 
            <button onClick={handleSidebarexpand}>
                {toggle ? (
                    <FontAwesomeIcon
                        icon={faBackward}
                        className="absolute top-5 right-4  dark:text-gray-900 text-gray-100"
                    />
                ) : (
                    <FontAwesomeIcon
                        icon={faForward}
                            className="absolute top-5 right-4  dark:text-gray-900 text-gray-100"
                    />
                )}
            </button>
           
            <ul className="flex items-center flex-col justify-center gap-4 mt-8">
                <li className="flex items-center dark:text-gray-900 text-gray-100">
                    <FontAwesomeIcon icon={faHome} />
                    {toggle && <span className="ml-2">Home</span>}
                </li>
                <li className="flex items-center dark:text-gray-900 text-gray-100">
                    <FontAwesomeIcon icon={faTools} />
                    {toggle && <span className="ml-2">Skills</span>}
                </li>
                <li className="flex items-center dark:text-gray-900 text-gray-100">
                    <FontAwesomeIcon icon={faProjectDiagram} />
                    {toggle && <span className="ml-2">Previous Projects</span>}
                </li>
                <li className="flex items-center dark:text-gray-900 text-gray-100">
                    <FontAwesomeIcon icon={faEnvelope} />
                    {toggle && <span className="ml-2">Contact me</span>}
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
