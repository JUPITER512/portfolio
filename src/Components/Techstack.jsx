import { motion } from "framer-motion";
const Techstack = () => {
    return <motion.div
        className="bg-indigo-200/50 dark:bg-slate-950 flex flex-col items-center py-16 px-6 bg "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        id="TechStack"
    >
        <div className="">

        </div>
    </motion.div>;
};

export default Techstack;
