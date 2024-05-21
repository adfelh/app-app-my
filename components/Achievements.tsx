"use client"

import CountUp from "react-countup"
import {FaBriefcase, FaClock, FaTrophy} from "react-icons/fa"
import {ImUser} from "react-icons/im"

import { motion, useInView} from "framer-motion"
import { useRef } from "react"
import { fadeIn } from '@/lib/variants'


const stats = [
  {
    number: 19,
    icon: FaBriefcase,
    text: "traning courses",
  },
  {
    number: 879,
    icon: FaClock,
    text: "working hours",
  },
  {
    number: 150,
    icon: ImUser,
    text: "happy customers",
  },
  {
    number: 9,
    icon: FaTrophy,
    text: "international awards",
  },
  

]
const statsContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.5,
      ease: 'liner',
    },
  },
};
const statsItems = {

  hidden: {y: 20, opacity: 0},
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};


const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  
  return (
    <section>
      <div className="container mx-auto">
        <motion.div
    variants={fadeIn('up', 0.4)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.2}}
        
        
        className="grid grid-cols-2 md:grid-cols-4 gap-16 ">
          {
            stats.map((items, index) => {
              return (
                <motion.div
                 variants={statsItems}
                 
                 className="flex flex-col justify-center items-center hover:rotate-12" key={index}>
                  <div className="border hover:border-accent/90 duration-300 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6">
                    <div ref={ref} className="border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full hover:-rotate-12 duration-300 ">
                      {
                        isInView && (
                      <CountUp start={0} end={items.number} duration={6} />
              )  }
                    </div>

                  </div>
                  <div className="flex flex-col justify-center items-center text-center">
                    <items.icon className="text-5xl mb-2 border hover:border-accent/90 hover:rotate-12 duration-300 w-[140px] h-[140px]" />
                    <h4 className="h4">{items.text}</h4>
                  </div>
                </motion.div>
              )
            })  }
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements