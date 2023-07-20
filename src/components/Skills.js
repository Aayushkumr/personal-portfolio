import React from 'react'
import { motion } from 'framer-motion'


const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full
            font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute '
            whileHover={{ scale: 1.1 }}
            initial={{x:0,y:0}}
            whileInView={{ x:x, y:y }}
            transition={{duration: 1.5}}
            viewport={{once:true}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
                <motion.div className='flex items-center justify-center rounded-full
            font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'
                    whileHover={{ scale: 1.1 }}
                    transition={{duration:1}}
                >
                    Web/ML
                    </motion.div>
                    <Skill name="C/C++" x="-5vw" y="-10vw" />
                    <Skill name="Git" x="20vw" y="6vw" />
                    <Skill name="JavaScript" x="20vw" y="6vw" />
                    <Skill name="Java" x="-22vw" y="4vw" />
                    <Skill name="NextJs" x="-20vw" y="-15vw" />
                    <Skill name="NodeJs" x="15vw" y="-12vw" />
                    <Skill name="TensorFlow" x="32vw" y="-5vw" />
                    <Skill name="CSS" x="0vw" y="-19vw" />
                    <Skill name="Regression Techniques" x="-22vw" y="18vw" />
                    <Skill name="OOPS" x="18vw" y="18vw" />
                    <Skill name="Data Analysis" x="-27vw" y="-5vw" />
                    <Skill name="Data Structures and Algorithms" x="0vw" y="12vw" />
                    <Skill name="DBMS" x="-4vw" y="22vw" />
                    <Skill name="Numpy" x="37vw" y="-18vw" />
                    <Skill name="Pandas" x="24vw" y="-21vw" />
                    <Skill name="Python" x="10vw" y="-4vw" />
                    <Skill name="ReactJs" x="-30vw" y="10vw" />
                    <Skill name="UI/UX" x="-8vw" y="5vw" />
            </div>
        </>
    )
}

export default Skills