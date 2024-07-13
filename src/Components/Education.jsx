import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const EducationSkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger animation when section is 50% in view
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  useEffect(() => {
    if (inView) {
      // Additional actions when section comes into view can be triggered here
    }
  }, [inView]);

  return (
    <div ref={ref} className="my-5">
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1., ease: 'easeOut' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <motion.div
          variants={variants}
          transition={{ duration: 2.6, delay: 0.2, ease: 'easeOut' }}
          className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Education</h3>
            <div className="mb-2">
              <h4 className="text-base font-medium">University of Lahore</h4>
              <p className="text-sm text-gray-600">BSc in Computer Science - Intermediate</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={variants}
          transition={{ duration: 2.6, delay: 0.4, ease: 'easeOut' }}
          className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside text-sm">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Node.js</li>
              <li>React.js</li>
              <li>MySQL</li>
              <li>Tailwind CSS</li>
              <li>Next.js</li>
              <li>Express.js</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          variants={variants}
          transition={{ duration: 2.6, delay: 0.6, ease: 'easeOut' }}
          className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Additional Courses</h3>
            <ul className="list-disc list-inside text-sm">
              <li>Python Crash Course - Google</li>
              <li>Python with Operating System - Google</li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EducationSkillsSection;
