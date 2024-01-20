import React from 'react'
import '../css/fitness.css'
import FitnessLogo from '../assets/fitness_plus_logo.png'

export default function Fitness() {
  return (
    <div className="container-fitness">
      <div className="description-fitness">
      <img src={ FitnessLogo } alt="FitnessLogo" />
        <h3>From HIIT to Yoga. From 5 to 45 minutes. There’s something for everyone.</h3>
        <div className="links">
          <div className="link">
            <a href="/">Learn more</a>
            <i className="gg-chevron-right"></i>
          </div>
          <div className="link">
            <a href="/">Try it free</a>
            <i className="gg-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
