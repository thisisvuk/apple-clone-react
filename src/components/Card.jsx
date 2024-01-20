import React from 'react'
import '../css/card.css'
import CardLogo from '../assets/card_logo.png'

export default function Card() {
  return (
    <div className="container-card">
      <div className="description-card">
      <img src={ CardLogo } alt="CardLogo" />
        <h3>Get up to 3% Daily Cash back with every purchase.</h3>
        <div className="links">
          <div className="link">
            <a href="/">Learn more</a>
            <i className="gg-chevron-right"></i>
          </div>
          <div className="link">
            <a href="/">Apply now</a>
            <i className="gg-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
