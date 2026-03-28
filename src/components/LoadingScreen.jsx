import React from "react"
import "./LoadingScreen.css"

const LoadingScreen = ({ progress }) => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1 className="loading-title">
          <span>L</span>
          <span>o</span>
          <span>a</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </h1>
        <p className="loading-percent">{progress}%</p>
        <div className="loading-bar">
          <div
            className="loading-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
