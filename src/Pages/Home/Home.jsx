import Sidebar from "../../Components/Sidebar";
import ThemeSwitcher from "../../Components/ThemeSwitcher";
import "./home.css";
import "animate.css";

import {  motion } from "framer-motion";
import { slideInFromLeft } from "../../utils/Motion";
import { Button } from "../../Components/MovingBorder";
const Home = () => {
  const { theme, toggleTheme, SwitcherComponent } = ThemeSwitcher();

  return (
    <>
      {SwitcherComponent}
      <Sidebar />
      <motion.div
        className="bg-gray-300 dark:bg-slate-950 flex flex-col items-center py-16 px-6 bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center justify-center lg:flex-row relative top-0 w-full h-auto lg:w-auto">
          <div id="left" className="lg:w-3/5">
            <div className="flex items-center justify-center">
              <Button
                className="bg-slate-500 dark:bg-slate-900 mx-auto text-gray-100 py-2 px-2 dark:text-white border-neutral-200 dark:border-slate-800 relative rounded-full"
              >
                Full Stack Developer Profile
              </Button>
            </div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex py-20 flex-col items-center justify-center antialiased my-2"
            >
              <motion.h1
                className="text-3xl lg:text-4xl xl:text-5xl dark:text-white my-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Hi I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-cyan-500 ml-2">
                  Ali Murtaza
                </span>
              </motion.h1>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-center w-[70%] text-lg lg:text-xl xl:text-2xl dark:text-white"
              >
                A Result-Oriented Web Developer building and managing Websites
                and Web Applications that leads to the success of the overall
                product
              </motion.p>
            </motion.div>
          </div>
          <div id="right" className="z-10 lg:w-2/5 mt-10 lg:mt-0">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{ y: 10, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex justify-center"
            >
              <img
                src={theme === 'light' ? 'src/assets/mainIcons.svg' : 'src/assets/mainIconsDark.svg'}
                alt="img"
                className="animate-pulse duration-150 max-w-full w-[100%] sm:w-[90%] md:w-[80%] lg:w-[90%] xl:w-[80%]"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

    </>
  );
};

export default Home;
