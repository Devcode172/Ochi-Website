import React from 'react'
import './About.css'
const About = () => {
    return (
        <>
            <section data-scroll data-scroll-speed='0.1' className='about'>

                <div className='about-content'>
                    We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.
                </div>

                <div className='line'></div>

                <div className='about-lower'>
                    <div className='lower-content'>
                        <h1>How we can help:</h1>
                        <button>Read more  <div className='dot' ></div></button>
                    </div>
                    <div className='lower-img'>
                      <img  data-component="lazyload"  src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="image description"></img>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
