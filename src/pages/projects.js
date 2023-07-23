import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { GithubIcon } from '@/components/icons'
import project1 from "../../public/images/projects/potato.png";
import Image from 'next/image'
import project2 from "../../public/images/projects/Diabetes.jpg";
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='p-12 w-full relative flex items-center justify-between
        rounded-3xl rounded-br-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light  shadow-2xl
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[1.9rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />



 <Link href={link} target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full '>
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>
                    {type}
                </span>
                <Link href={link} target='_blank'
                    className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left dark:text-light text-4xl font-bold sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'> {summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'> <GithubIcon /> </Link>
                    <Link href={link} target='_blank'
                        className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'
                    > Visit Project </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light dark:bg-dark dark:border-light p-6 relative xs:p-4
        '>
            <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[1.9rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />

            <Link href={link} target='_blank'
                className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>
                    {type}
                </span>
                <Link href={link} target='_blank'
                    className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-2xl '>{title}</h2>
                </Link>
                <div className='mt-2 w-full flex items-center justify-between'>
                <Link href={link} target='_blank'
                        className='underline rounded-lg text-lg font-semibold md:text-base'
                    > Visit </Link>

                    <Link href={github} target='_blank' className='w-10 md:w-6'> <GithubIcon /> </Link>

                </div>
            </div>
        </article>
    )
}


const projects = () => {
    return (
        <>
            <Head>
                <title>Aayush Kumar | About Page</title>
                <meta name="description" content='any description' />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="I &#9825; Building Cool Shit!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <div className='grid grid-col-12 gap-24 gap-y-32
                    xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0
                    '>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Potato Disease Classification"
                                img={project1}
                                summary="Developed a highly accurate system with an accuracy of 99.8% for detecting potato diseases using VGG16 and VGG19 convolutional NN architectures.
                            - Created an interactive web page using React and Node.js to deploy the model.
                            - Used Technologies/Libraries - Python, TensorFlow, deep learning frameworks, scikit-image, and model evaluation libraries, React.js, Node.js. 
                            "
                                link="potato-disease-classifier.vercel.app"
                                type="Featured Project"
                                github="https://github.com/Aayushkumr/potato-disease-classification"
                            />
                        </div>
                        <div className='col-span-6 h-auto sm:col-span-12'>
                        <Project
                                title="Potato Disease Classification"
                                img={project1}
                                link="potato-disease-classifier.vercel.app"
                                type="Project 1"
                                github="https://github.com/Aayushkumr/potato-disease-classification"
                                
                                />
                        </div>
                        <div className='col-span-6 h-auto sm:col-span-12'>
                        <Project
                                title="Diabetes Prediction Model
                                "
                                img={project2}
                                link="/"
                                type="Project 2"
                                github="https://github.com/Aayushkumr/diabetes-prediction"
                            />
                        </div>
                        // <div className='col-span-12'>
                        //     Featured Project
                        // </div>
                        // <div className='col-span-6 sm:col-span-12'>
                        //     Project-3
                        // </div>
                        // <div className='col-span-6 sm:col-span-12'>
                        //     Project-4
                        // </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects
