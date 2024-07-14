import { motion } from 'framer-motion';

const ContactMe = () => {
  return (
    <motion.div
      className="bg-indigo-200/50 dark:bg-slate-950 py-16 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      id="contactme"
    >
      <h1 className="text-black dark:text-white text-4xl font-semibold font-OpenSans mb-8 text-center">Contact Me</h1>
      <div className="flex items-center justify-center flex-col md:flex-row gap-12 w-full">
        <div className="text-center">
          <div className="text-lg dark:text-gray-300">
            Email me at <span className="font-bold">syedalimurtaza36@gmail.com</span>
          </div>
        </div>

        <div className="md:border-r-[1px] md:h-[20rem] border-b-[1px] w-[20rem] md:border-b-0 md:w-0 dark:border-white border-black">&nbsp;</div>
        <div className='text-lg dark:text-gray-300 flex flex-col items-center justify-center gap-2'><span>Or</span>
        <span>
          Send message 
          </span></div>
        <form className="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md dark:shadow-lg transition-colors duration-500">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Name:</label>
            <input type="text" id="name" name="name" className="shadow appearance-none border dark:border-gray-700 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 transition-colors duration-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" name="email" className="shadow appearance-none border dark:border-gray-700 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 transition-colors duration-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Message:</label>
            <textarea id="message" name="message" className="resize-none shadow appearance-none border dark:border-gray-700 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 h-24 transition-colors duration-500"></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactMe;
