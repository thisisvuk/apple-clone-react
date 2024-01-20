import React from 'react'
import '../css/watchultra2.css'
import WatchUltra2Logo from '../assets/watch_ultra2_logo.png'

export default function WatchUltra2() {
  return (
    <div className="container-watchultra2">
      <div className="description-watchultra2">
      <img src={ WatchUltra2Logo } alt="WatchUltra2Logo" />
        <h3>Next level adventure.</h3>
        <div className="links">
          <div className="link">
            <a href="/">Learn more</a>
            <i className="gg-chevron-right"></i>
          </div>
          <div className="link">
            <a href="/">Buy</a>
            <i className="gg-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
