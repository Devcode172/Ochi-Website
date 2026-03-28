import React from 'react'
import './LandingPage.css'
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from 'framer-motion';

const LandingPage = ({ isPageReady = true }) => {
    const { h1: MotionH1, div: MotionDiv } = motion
    const smoothEase = [0.22, 1, 0.36, 1]
    const headingVariants = {
        hidden: { y: 55, opacity: 0 },
        visible: (delay = 0) => ({
            y: 0,
            opacity: 1,
            transition: { duration: 0.9, ease: smoothEase, delay }
        })
    }

    return (
        <div data-scroll data-scroll-section data-scroll-speed='-0.5' data-scroll-enable-touch-speed className='main-container'>

            <div className='content'>
                <MotionH1
                    className='heading heading-1'
                    variants={headingVariants}
                    initial="hidden"
                    animate={isPageReady ? "visible" : "hidden"}
                    custom={0.05}
                >
                    WE CREATE
                </MotionH1>

                <div className='heading2-container'>
                    <MotionDiv
                        className='landing-box'
                        initial={{ width: 0, opacity: 0, scale: 0.85 }}
                        animate={isPageReady ? { width: 120, opacity: 1, scale: 1 } : { width: 0, opacity: 0, scale: 0.85 }}
                        transition={{ duration: 0.85, ease: smoothEase, delay: 0.15 }}
                    ></MotionDiv>
                    <MotionH1
                        className='heading heading-2'
                        variants={headingVariants}
                        initial="hidden"
                        animate={isPageReady ? "visible" : "hidden"}
                        custom={0.2}
                    >
                        EYE OPENING
                    </MotionH1>
                </div>

                <MotionH1
                    className='heading heading-3'
                    variants={headingVariants}
                    initial="hidden"
                    animate={isPageReady ? "visible" : "hidden"}
                    custom={0.32}
                >
                    PRESENTATIONS
                </MotionH1>
            </div>

            <MotionDiv
                className='line'
                initial={{ scaleX: 0, opacity: 0 }}
                animate={isPageReady ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                transition={{ duration: 0.8, ease: smoothEase, delay: 0.4 }}
                style={{ transformOrigin: "left center" }}
            ></MotionDiv>

            <MotionDiv
                className='subContent'
                initial={{ y: 35, opacity: 0 }}
                animate={isPageReady ? { y: 0, opacity: 1 } : { y: 35, opacity: 0 }}
                transition={{ duration: 0.85, ease: smoothEase, delay: 0.5 }}
            >
                <div className='subContent1'>Presentation and storytelling agency</div>
                <div className='subContent2'>For innovation teams and global brands</div>
                <MotionDiv className='subContent3' whileHover={{ y: -2 }}>
                    <div className='subContent3-content'>START THE PROJECT</div>
                    <MotionDiv className='icon' whileHover={{ rotate: -18, scale: 1.06 }} transition={{ type: 'spring', stiffness: 220, damping: 16 }}>
                        <MotionDiv
                            animate={{ x: [0, 1.5, 0], y: [0, -1.5, 0] }}
                            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <FaLocationArrow />
                        </MotionDiv>
                    </MotionDiv>
                </MotionDiv>
            </MotionDiv>


        </div>
    )
}

export default LandingPage
