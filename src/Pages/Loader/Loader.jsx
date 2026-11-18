import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="grid h-[100svh] place-items-center bg-zinc-950">
      <div className="flex flex-col items-center gap-5">
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 font-mono text-lg font-bold text-zinc-950"
        >
          AM
        </motion.span>
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="size-1.5 rounded-full bg-zinc-500"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
