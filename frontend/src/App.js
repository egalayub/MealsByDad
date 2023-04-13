import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import RecipeSearchBar from './components/FindRecipe/RecipeSearchBar';
import Slider1 from './components/Resources/Slider1';
import Footer from './components/Footer/Footer';
import ShoppingList from './ShoppingList/ShoppingList';
import Search from './components/FindRecipe/Search';
import RecipesList from './components/RecipeCard/RecipesList';




function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <RecipeSearchBar />
      <Search/>
      <Slider1 />
      <ShoppingList />
      <RecipesList />
      <Footer />


    </div>
  );
}

export default App;
