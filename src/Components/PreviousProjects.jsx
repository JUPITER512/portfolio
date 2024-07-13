import { motion } from "framer-motion"

const PreviousProjects = () => {
  return (
      <motion.div
      className="bg-blue-300/55 dark:bg-slate-950 flex flex-col items-center py-16 px-6 bg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          id="PreviousProjects"
      >Techstack
      </motion.div>
  )
}

export default PreviousProjects