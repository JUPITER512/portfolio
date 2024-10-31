import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import {iconColors,icons} from '@data/SkillsData'
import { cn } from "@utils/utils"

function Card({ children, className, ...props }) {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`} {...props}>
      {children}
    </div>
  )
}

function CardContent({ children, className, ...props }) {
  return (
    <div className={`p-4 md:p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
}
export default function Skills() {
  const containerRef = useRef(null)
  const carouselRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const controls = useAnimation()
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const scrollWidth = carousel.scrollWidth
    const clientWidth = carousel.clientWidth

    const animate = () => {
      if (carousel.scrollLeft >= scrollWidth - clientWidth) {
        setDirection(-1)
      } else if (carousel.scrollLeft <= 0) {
        setDirection(1)
      }
      carousel.scrollLeft += direction
    }

    const animation = setInterval(animate, 20)

    return () => clearInterval(animation)
  }, [direction])

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
    <section id="skills" className="min-h-[40rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.1] bg-dot-black/[0.2]  flex items-center justify-center overflow-hidden py-10 sm:py-20">
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
          <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight text-center">
            Tech Skills
          </h2>
          <div 
            ref={carouselRef}
            className="overflow-hidden whitespace-nowrap py-4"
          >
            <div className="inline-flex gap-4 sm:gap-6 md:gap-8 animate-scroll">
              {[...icons, ...icons].map(({ Icon, name }, index) => (
                <motion.div key={`${name}-${index}`} variants={itemVariants} className="inline-block  overflow-y-hidden">
                  <Card className="group hover:shadow-lg transition-all duration-300 bg-white/10 dark:bg-grey/10 backdrop-blur-sm border-none w-32 sm:w-40">
                    <CardContent className="flex flex-col items-center justify-center p-4">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Icon
                          className={cn(
                            "h-12 w-12 sm:h-16 sm:w-16 mb-4 transition-all duration-300",
                            "group-hover:filter group-hover:drop-shadow-[0_0_0.75rem_var(--icon-color)]"
                          )}
                          style={{
                            color: iconColors[name],
                            "--icon-color": iconColors[name],
                          }}
                        />
                      </motion.div>
                      <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2 capitalize whitespace-normal text-center">
                        {name}
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}