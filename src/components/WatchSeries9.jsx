import React from 'react'
import '../css/watchseries9.css'
import WatchSeries9Logo from '../assets/watch_series_9_logo.png'

export default function WatchSeries9() {
  return (
    <div className="container-watchseries9">
      <div className="description-watchseries9">
      <img src={ WatchSeries9Logo } alt="WatchSeries9Logo" />
        <h3>Smarter.Brighter.Mighter.</h3>
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
