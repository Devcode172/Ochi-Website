import React, { useEffect, useState } from 'react'
import './Eyes.css'
const Eyes = () => {
    const [rotat, setRotate] = useState(0)
    useEffect(() => {
        const handleMouseMove = (e) => {
            // console.log(e.clientX , e.clientY)
            let mouseX = e.clientX
            let mouseY = e.clientY

            let deltaX = mouseX - window.innerWidth / 2
            let deltaY = mouseY - window.innerHeight / 2

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
            setRotate(angle - 180)
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <>
            <div data-scroll data-scroll-speed='-.8' className='circle-container'>
                <div className='left-circle'>
                    <div className='inner-left'>
                        <div className="eye-line" style={{ transform: `rotate(${rotat}deg)` }}>
                            <div className="eye-ball"></div>
                        </div>
                    </div>
                </div>


                <div className='right-circle'>
                    <div className='inner-right'>
                        <div className="eye-line" style={{ transform: `rotate(${rotat}deg)` }}>
                            <div className="eye-ball"></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Eyes
