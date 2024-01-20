import React from 'react'
import '../css/watchunity.css'
import WatchUnityLogo from "../assets/watch_unity_logo.png"

export default function WatchUnity() {
  return (
    <div className="container-watchunity">
      <div className="description-watchunity">
      <img src={ WatchUnityLogo } alt="WatchUnityLogo" />
        <h3>Unity in bloom</h3>
        <div className="link">
          <a href="/apple-vision-pro/">Explore the new Black Unity Sport Band</a>
          <i className="gg-chevron-right"></i>
        </div>
      </div>
    </div>
  )
}
