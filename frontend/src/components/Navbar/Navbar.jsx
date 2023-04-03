import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './navbar.css';
import './logo.png';
import LoginForm from "./LoginForm";
import SignSignInButton from "./SignInButton";
import SignInButton from './SignInButton';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [isShowLogin, setIsShowLogin] = useState(true);
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };


  return (
    <nav className="navbar">
      <div className='app__navbar-logo'>
        <img src="https://images.cooltext.com/5650975.png" alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#recipes">Find Recipes</a></li>
        <li className='p__opensans'><a href="#resources">Resources</a></li>
         <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar">
      <SignInButton handleLoginClick={handleLoginClick} />
      <LoginForm isShowLogin={isShowLogin} />
    </div>
{/*       <div className='app__navbar-smallscreen'> */}
{/*         <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} /> */}

{/*         {toggleMenu && ( */}
{/*           <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'> */}
{/*             <MdOutlineRestaurantMenu className='overlay__close' fontSize={27} onClick={() => setToggleMenu(false)} /> */}
{/*             <ul className='app__nav-smallscreen_links'> */}
{/*               <li className='p__opensans'><a href="#home">Home</a></li> */}
{/*               <li className='p__opensans'><a href="#recipe">Find Recipe</a></li> */}
{/*               <li className='p__opensans'><a href="#resources">Resources</a></li> */}
{/*               <li className='p__opensans'><a href="#contact">Contact</a></li> */}
{/*             </ul> */}
{/*           </div> */}
{/*         )} */}



{/*       </div> */}
    </nav>
  )
}

export default Navbar;
