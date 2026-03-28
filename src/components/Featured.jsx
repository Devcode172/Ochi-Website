import React from 'react'
import './Featured.css'
const Featured = () => {
  return (
    <>
      <section  data-scroll data-scroll-speed='.1' data-scroll-enable-touch-speed className='featured-main-container'>
      <div className='featured-heading'> 
        <h1>Featured Projects</h1>
      </div>

      <div className="cards-container">
      <div className="card1"></div>
      <div className="card2"></div>
      </div>
      </section>
    </>
  )
}

export default Featured
