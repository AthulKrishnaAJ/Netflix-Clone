import React from 'react'
import './Footer.css'
import youtubeIcon from '../../assets/youtube_icon.png'
import twitterIcon from '../../assets/twitter_icon.png'
import instagramIcon from '../../assets/instagram_icon.png'
import facebookIcon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebookIcon} alt="" />
        <img src={instagramIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={youtubeIcon} alt="" />
      </div>
      <ul>
        <li>FAQ</li>
        <li>Investor Relations</li>
        <li>Privacy</li>
        <li>Speed Test</li>
        <li>Help Center</li>
        <li>Jobs</li>
        <li>Cookie Preferences</li>
        <li>Leagal Notices</li>
        <li>Account</li>
        <li>Way to Watch</li>
        <li>Corporate Information</li>
        <li>Only on Netflix</li>
        <li>Media Centre</li>
        <li>Terms of Use</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>Copyright @ Netflix, Inc </p>
    </div>
  )
}

export default Footer
