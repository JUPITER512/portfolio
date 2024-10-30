// @pages/Loader/Loader.js

import { motion } from 'framer-motion';
import './Loader.css'; // Import your CSS for the loader

const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="loader"
        initial={{ scale: 0.5 }}
        animate={{ scale: [1, 0.8, 1] }}
        transition={{ duration: 0.6, repeat: Infinity }}
      >
        <motion.div
          className="dot"
          initial={{ y: 0 }}
          animate={{ y: [-10, 0, -10] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="dot"
          initial={{ y: 0 }}
          animate={{ y: [-10, 0, -10] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="dot"
          initial={{ y: 0 }}
          animate={{ y: [-10, 0, -10] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
        />
      </motion.div>
      <motion.p
        className="loading-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default Loader;
