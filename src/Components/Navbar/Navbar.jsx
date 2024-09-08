import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profileImg from '../../assets/profile_img.png'
import caretIcon from '../../assets/caret_icon.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-left'>
            <img src={logo} alt="Netflix logo" />
            <ul>
                <li>Home</li>
                <li>Tv Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Languages</li>
            </ul>
        </div>
        <div className='nav-right'>
            <img src={searchIcon} alt="" className='icon'/>
          
            <img src={bellIcon} alt=""  className='icon'/>
            <div className='nav-profile'>
                <img src={profileImg} alt="" className='profile' />
                <img src={caretIcon} alt="" />
                <div className="dropdown">
                    <p>Sign out</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
