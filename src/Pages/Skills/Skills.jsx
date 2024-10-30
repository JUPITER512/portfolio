import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import {iconColors,icons} from '@data/SkillsData'

export function Card({ children, className, ...props }) {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={`p-4 md:p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
}
export default function Skills() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const controls = useAnimation()
  const [hoveredSkill, setHoveredSkill] = useState(null)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div id='skills' className="min-h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.1] bg-dot-black/[0.2] flex items-center justify-center overflow-hidden py-10 sm:py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="jumbo absolute -inset-[10px] opacity-50"></div>
      </div>
      <div
        className="container mx-auto px-4 relative z-10"
        ref={containerRef}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <h2 className="bg-clip-text text-center text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Tech. Skills.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {icons.map(({ Icon, name }) => (
              <motion.div key={name} variants={itemVariants}>
                <Card
                  className="group hover:shadow-lg transition-shadow duration-300 bg-white/10 backdrop-blur-sm border-none outline-none"
                  onMouseEnter={() => setHoveredSkill(name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <CardContent className="flex flex-col items-center justify-center ">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Icon
                        className="h-12 w-12 sm:h-16 sm:w-16 mb-4"
                        style={{
                          color: iconColors[name],
                          filter: `drop-shadow(0 0 0.75rem ${iconColors[name]})`,
                        }}
                      />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                      {name.charAt(0).toUpperCase() + name.slice(1)}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  )
}
