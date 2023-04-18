import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./navbar.css";
import "./logo.png";
import LoginForm from "./LoginForm";
import SignInButton from "./SignInButton";
import Register from "./Register";
import RegisterButton from "./RegisterButton";
import LogoutButton from "./LogoutButton";
import RecipeForm from '../AddUserRecipe/RecipeForm';
import AddRecipeButton from "./AddRecipeButton";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isShowLogin, setIsShowLogin] = useState(true);
  const [isShowRegister, setIsShowRegister] = useState(true);
  const [isShowRecipeForm, setIsShowRecipeForm] = useState(true);
  const [user, setUser] = useState();
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };
  const handleLogoutClick = () => {
    setUser();
  };
  const handleRegisterClick = () => {
    setIsShowRegister((isShowRegister) => !isShowRegister);
  };
  const handleAddRecipeClick = () => {
    setIsShowRecipeForm((isShowRecipeForm) => !isShowRecipeForm);
  };
  return (
    <div className="h-48" id="top">
      <nav className="app_navbar">
        <div className="app__navbar-logo">
          {/* <img src={require('./MBD.png')} alt="" /> */}
          {/* <img src="https://images.cooltext.com/5651464.png" alt="" /> */}
          <img src="https://images.cooltext.com/5650975.png" alt="logo" />
        </div>
        <ul className="app__navbar-links">
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>
          <li className="p__opensans">
            <a href="#recipes">Random Recipes</a>
          </li>
          <li className="p__opensans">
            <a href="#tools">Resources</a>
          </li>
          <li className="p__opensans">
            <a href="#contact">Contact</a>
          </li>
          <li className="p__opensans">
            <a href="#search">Search</a>
          </li>
          <li className="p__opensans">
            <a href="#ShoppingList">Shopping List</a>
          </li>
        </ul>
        <div className="app__navbar-login">
          <div className="navbar"></div>
          <div />
          {user && (
            <>
              <LogoutButton handleLogoutClick={handleLogoutClick} user={user} />
              <a href="/" className="p_opensans">
              </a>
              <AddRecipeButton handleAddRecipeClick={handleAddRecipeClick} />
            </>
          )}
          {!user && (
            <>
              <SignInButton handleLoginClick={handleLoginClick} />
              <RegisterButton handleRegisterClick={handleRegisterClick} />
            </>
          )}
        </div>
        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu
                className="overlay__close"
                fontSize={27}
                onClick={() => setToggleMenu(false)}
              />
              <ul className="app__nav-smallscreen_links">
                <li className="p__opensans">
                  <a onClick={() => setToggleMenu(false)} href="#home">
                    Home
                  </a>
                </li>
                <li className="p__opensans">
                  <a onClick={() => setToggleMenu(false)} href="#recipes">
                    Find Recipe
                  </a>
                </li>
                <li className="p__opensans">
                  <a onClick={() => setToggleMenu(false)} href="#resources">
                    Resources
                  </a>
                </li>
                <li className="p__opensans">
                  <a onClick={() => setToggleMenu(false)} href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <LoginForm
        isShowLogin={isShowLogin}
        setIsShowLogin={setIsShowLogin}
        user={user}
        setUser={setUser}
      />
      <Register
        isShowRegister={isShowRegister}
        isShowLogin={isShowLogin}
        setIsShowRegister={setIsShowRegister}
        setIsShowLogin={setIsShowLogin}
      />
      <RecipeForm
       isShowRecipeForm ={isShowRecipeForm}
       setIsShowRecipeForm ={setIsShowRecipeForm}
       user={user}
       />
    </div>
  );
};
export default Navbar;
