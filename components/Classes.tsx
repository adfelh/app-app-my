'use client'
import Image from "next/image"
import {motion} from 'framer-motion'
import { fadeIn } from '@/lib/variants'
import CustomButtum from "./CustomButtum"

const classes = [
  {
    
    name: "Bodybuilding",
    image: "/assets/img/classes/bodybuilding.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
  },
  {
    
    name: "cardio",
    image: "/assets/img/classes/cardio.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
  },
  {
    
    name: "fitness",
    image: "/assets/img/classes/fitness.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
  },
  {
    
    name: "crossfit",
    image: "/assets/img/classes/crossfit.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
  },
]
const Classes = () => {
  return (
    <section  id='class'>
      <motion.div
       variants={fadeIn('up', 0.4)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once: false, amount: 0.2}}
       className="grid grid-cols-1 lg:grid-cols-2">
        {
          classes.map((item, index) => {
            return <div className="relative w-full h-[300px] lg:h-[480px] flex flex-col items-center justify-center" key={index}>
              <div className="bg-black/50 absolute w-full h-full top-0 z-10"></div>
              <Image src={item.image} fill className="opject-cover" alt=''/>
              <div className="z-30 max-w-[380px] text-center flex flex-col items-center justify-center gap-4">
                <motion.h3 
                variants={fadeIn('up', 0.8)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.3}}
                
                className="h3 text-accent ">{item.name}</motion.h3>
                <motion.p
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.1}}
                className="text-white z-20">{item.description}</motion.p>
                <motion.div
                variants={fadeIn('up', 1.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.4}}
                >
                <CustomButtum text='Get Started' containerStyles='w-[196px] h-[62px] mt-5 z-20' />

                </motion.div>
              </div>

            </div>
          })
        }
      </motion.div>
    </section>
  )
}

export default Classes
