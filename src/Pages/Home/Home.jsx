import Sidebar from "../../Components/Sidebar";
import ThemeSwitcher from "../../Components/ThemeSwitcher";
import './home.css'
const Home = () => {

  return (
    <>
      <ThemeSwitcher />
      <Sidebar/>
      {/* <div className="z-[2] bg-gradient-to-b from-blue-700 to-slate-800 dark:from-cyan-600 dark:to-cyan-400 h-3/4 w-5/5 sm:w-4/5 md:w-4/5 lg:w-3/3 xl:w-4/4 flex justify-center items-center rounded-sm blur-3xl animate-pulse duration-500 mx-auto absolute -top-2/3 left-0 right-0 ">
        &nbsp;
      </div>
       */}

      <svg xmlns='http://www.w3.org/2000/svg' width='100%' className=" bg-transparent z-[1] opacity-30 dark:opacity-10 absolute h-full">
        <defs><linearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%' gradientTransform='rotate(240)'><stop offset='0' stop-color='#ffffff' /><stop offset='1' stop-color='#4FE' /></linearGradient><pattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'><g fill-opacity='0.1'><polygon fill='#444' points='90 150 0 300 180 300' /><polygon points='90 150 180 0 0 0' /><polygon fill='#AAA' points='270 150 360 0 180 0' /><polygon fill='#DDD' points='450 150 360 300 540 300' /><polygon fill='#999' points='450 150 540 0 360 0' /><polygon points='630 150 540 300 720 300' /><polygon fill='#DDD' points='630 150 720 0 540 0' /><polygon fill='#444' points='810 150 720 300 900 300' /><polygon fill='#FFF' points='810 150 900 0 720 0' /><polygon fill='#DDD' points='990 150 900 300 1080 300' /><polygon fill='#444' points='990 150 1080 0 900 0' /><polygon fill='#DDD' points='90 450 0 600 180 600' /><polygon points='90 450 180 300 0 300' /><polygon fill='#666' points='270 450 180 600 360 600' /><polygon fill='#AAA' points='270 450 360 300 180 300' /><polygon fill='#DDD' points='450 450 360 600 540 600' /><polygon fill='#999' points='450 450 540 300 360 300' /><polygon fill='#999' points='630 450 540 600 720 600' /><polygon fill='#FFF' points='630 450 720 300 540 300' /><polygon points='810 450 720 600 900 600' /><polygon fill='#DDD' points='810 450 900 300 720 300' /><polygon fill='#AAA' points='990 450 900 600 1080 600' /><polygon fill='#444' points='990 450 1080 300 900 300' /><polygon fill='#222' points='90 750 0 900 180 900' /><polygon points='270 750 180 900 360 900' /><polygon fill='#DDD' points='270 750 360 600 180 600' /><polygon points='450 750 540 600 360 600' /><polygon points='630 750 540 900 720 900' /><polygon fill='#444' points='630 750 720 600 540 600' /><polygon fill='#AAA' points='810 750 720 900 900 900' /><polygon fill='#666' points='810 750 900 600 720 600' /><polygon fill='#999' points='990 750 900 900 1080 900' /><polygon fill='#999' points='180 0 90 150 270 150' /><polygon fill='#444' points='360 0 270 150 450 150' /><polygon fill='#FFF' points='540 0 450 150 630 150' /><polygon points='900 0 810 150 990 150' /><polygon fill='#222' points='0 300 -90 450 90 450' /><polygon fill='#FFF' points='0 300 90 150 -90 150' /><polygon fill='#FFF' points='180 300 90 450 270 450' /><polygon fill='#666' points='180 300 270 150 90 150' /><polygon fill='#222' points='360 300 270 450 450 450' /><polygon fill='#FFF' points='360 300 450 150 270 150' /><polygon fill='#444' points='540 300 450 450 630 450' /><polygon fill='#222' points='540 300 630 150 450 150' /><polygon fill='#AAA' points='720 300 630 450 810 450' /><polygon fill='#666' points='720 300 810 150 630 150' /><polygon fill='#FFF' points='900 300 810 450 990 450' /><polygon fill='#999' points='900 300 990 150 810 150' /><polygon points='0 600 -90 750 90 750' /><polygon fill='#666' points='0 600 90 450 -90 450' /><polygon fill='#AAA' points='180 600 90 750 270 750' /><polygon fill='#444' points='180 600 270 450 90 450' /><polygon fill='#444' points='360 600 270 750 450 750' /><polygon fill='#999' points='360 600 450 450 270 450' /><polygon fill='#666' points='540 600 630 450 450 450' /><polygon fill='#222' points='720 600 630 750 810 750' /><polygon fill='#FFF' points='900 600 810 750 990 750' /><polygon fill='#222' points='900 600 990 450 810 450' /><polygon fill='#DDD' points='0 900 90 750 -90 750' /><polygon fill='#444' points='180 900 270 750 90 750' /><polygon fill='#FFF' points='360 900 450 750 270 750' /><polygon fill='#AAA' points='540 900 630 750 450 750' /><polygon fill='#FFF' points='720 900 810 750 630 750' /><polygon fill='#222' points='900 900 990 750 810 750' /><polygon fill='#222' points='1080 300 990 450 1170 450' /><polygon fill='#FFF' points='1080 300 1170 150 990 150' /><polygon points='1080 600 990 750 1170 750' /><polygon fill='#666' points='1080 600 1170 450 990 450' /><polygon fill='#DDD' points='1080 900 1170 750 990 750' /></g></pattern></defs><rect x='0' y='0' fill='url(#a)' width='100%' height='100%' /><rect x='0' y='0' fill='url(#b)' width='100%' height='100%' />
      </svg>
      <div className="bg-gray-300 dark:bg-slate-950 h-screen flex flex-col py-14 px-6 bg">
  
        <div className="flex flex-col lg:flex-row relative top-0 ">
          <div id="left" className="  lg:w-3/5">
            <div className="flex py-20 flex-col items-center justify-center antialiased my-2">
              <h1 className=" lg:text-4xl xl:text-5xl dark:text-white my-2">Hi I'm Ali Murtaza</h1>
              <p className="text-center w-[70%] lg:text-xl xl:text-2xl dark:text-white">A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
            </div>
          </div>
          <div id="right" className="z-[10]  lg:w-2/5">
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
