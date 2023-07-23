import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React, { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Article1 from "../../public/images/articles/1.png";
import Article2 from "../../public/images/articles/2.jpeg";
import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);


const MovingImg = ({ title, img, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-25);
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }


    return (
        <Link href={link} target="_blank"

            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}

        >
            <h2 className='capitalize text-xl font-semibold dark:text-light hover:underline'>{title}</h2>
            <FramerImage
                style={{ x: x, y: y }}
                initial={{opacity:0}}
                whileInView={{opacity:1, transition:{duration:0.3}}}
                ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden' 
                priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
        </Link>
    );
}

const Article = ({ img, title, date, link }) => {
    return (
        <motion.li 
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{once:true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark dark:bg-dark dark:text-light first:mt-0 
        border border-solid border-dark dark:border-light border-r-4 border-b-4'>
            <MovingImg title={title} img={img} link={link} />
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    );

}

// const FeaturedProject = ({ type, title, summary, img, link, github }) => {
//     return (
//         <article className='p-12 w-full relative flex items-center justify-between
//         rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl'>
//             <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[1.9rem] bg-dark rounded-br-3xl' />



//  <Link href={link} target='_blank'
//                 className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
//                 <FramerImage src={img} alt={title} className="w-full h-auto" 
//                 whileHover={{scale:1.05}}
//                 transition={{duration:0.2}}
//                 />
//             </Link>
//             <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
//                 <span className='text-primary font-medium text-xl'>
//                     {type}
//                 </span>
//                 <Link href={link} target='_blank'
//                     className='hover:underline underline-offset-2'>
//                     <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
//                 </Link>
//                 <p className='my-2 font-medium text-dark'> {summary}</p>
//                 <div className='mt-2 flex items-center'>
//                     <Link href={github} target='_blank' className='w-10'> <GithubIcon /> </Link>
//                     <Link href={link} target='_blank'
//                         className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'
//                     > Visit Project </Link>
//                 </div>
//             </div>
//         </article>
//     )
// }


const FeaturedArticles = ({ img, title, time, summary, link }) => {
    return (

        <li className='relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl border-r-4 border-b-4'>
             <div className='absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[1.9rem] bg-dark rounded-br-3xl' />

            <Link href={link} target='_blank'
                className='w-full inline-block cursor-pointer overflow-hidden rounded-lg dark:text-light'>
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover: underline dark:text-light xs:text-lg'>{title}</h2>
            </Link>
            <p className='text-sm mb-2 dark:text-light'>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>Aayush Kumar | About Page</title>
                <meta name="description" content='any description' />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 items-center justify-center overflow-hidden dark:text-light'>
                <Layout>
                    <AnimatedText text="And I write sometimes..." className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16'>
                        <FeaturedArticles
                            title="Will I ever write something that isn't sad"
                            summary="A Time in my Life. "
                            time="10 min read"
                            link="https://medium.com/@aayushkumr25/will-i-ever-write-something-that-isnt-sad-498731fe2752"
                            img={Article1}
                        />
                        <FeaturedArticles
                            title="Why Looks Matter?"
                            summary="While confidence is undoubtedly important, it would be misleading to claim that looks don't matter at all. In reality, both confidence and appearance can play significant roles in various aspects of life."
                            time="15 min read"
                            link="https://medium.com/@aayushkumr25/will-i-ever-write-something-that-isnt-sad-498731fe2752"
                            img={Article2}
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full dark:text-light text-center my-16 mt-32'>All Articles</h2>
                    <ul>
                        <Article title="Why Looks Matter?"
                            date="July 23, 2023"
                            link="/"
                            img={Article2}
                        />
                        <Article title="Will I ever write something that isn't sad"
                            date="18 March, 2023"
                            link="https://medium.com/@aayushkumr25/will-i-ever-write-something-that-isnt-sad-498731fe2752"
                            img={Article1}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles