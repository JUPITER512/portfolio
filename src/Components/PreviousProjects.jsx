import { motion } from "framer-motion"
import { Tabs } from "./AnimatedTabs"

const PreviousProjects = () => {

  const tabs = [
    {
      title: "Bitbash",
      value: "Bitbash.dev",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
          <p>Bitbash.dev</p>
          <DummyContent src={'./bitbash.mp4'} />
        </div>
      ),
    },
    {
      title: "Softquant",
      value: "softquant.io",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
          <p>Softquant.io</p>
          <DummyContent src={'./Softquant.mp4'} />
        </div>
      ),
    },
    {
      title: "WebxAi",
      value: "WebXAi",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-slate-700 to-slate-900">
          <p>WebX-Ai FullStack</p>
          <DummyContent src={'./webxai.mp4'} />
        </div>
      ),
    },

  ];
  return (
      <motion.div
      className="bg-blue-300/55 dark:bg-slate-950 flex flex-col items-center py-16 px-6 bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          id="PreviousProjects"
      >
        <h1 className="text-black dark:text-white text-4xl font-semibold font-OpenSans ">Previous Projects</h1>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
        <Tabs tabs={tabs} />
      </div>
      </motion.div>
  )
}

export default PreviousProjects

const DummyContent = ({ src }) => {
  return (
    <video
      controls
      muted
      alt="dummy video"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};
