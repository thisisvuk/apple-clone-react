import React from 'react'
import '../css/tradein.css'
import TradeinLogo from "../assets/tradein_logo.png"

export default function TradeIn() {
  return (
    <div className="container-tradein">
      <div className="description-tradein">
      <img src={ TradeinLogo } alt="TradeinLogo" />
        <h3>Get $180-$620 in credit when you trade in iPhone 11 or higher.</h3>
        <div className="link">
          <a href="/apple-vision-pro/">See what your device is worth</a>
          <i className="gg-chevron-right"></i>
        </div>
      </div>
    </div>
  )
}
