import React from 'react'
import ohm from '../../img/ohmslaw.jpg'
import './css/all.css'
import YoutubeEmbed from './YoutubeEmbed'
const Ohm = () => {
  return (
    <div className='cont'>
        <h2>OHM's LAW</h2>
        <img src={ohm} alt="" />
        <h2>Resource</h2>
        <YoutubeEmbed embedId="oFTj9LWkmm8" />
    </div>
  )
}

export default Ohm
