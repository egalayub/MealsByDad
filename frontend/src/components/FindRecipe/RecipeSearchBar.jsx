import React, { useState } from 'react';
import {  AiOutlineHeart } from "react-icons/ai";
import './findrecipe.css';
import Axios from 'axios';
import ShoppingList from '../../ShoppingList/ShoppingList';


function RecipeSearchBar() {
  const [query] = useState('');
  const [mealInfo, setMealInfo] = useState("")
  const [mealImg, setMealImg] = useState("")
  const [mealCategory, setMealCategory] = useState("")
  const [howToVideo, setHowtoVideo] = useState("")
  const [instructions, setInstructions] = useState("")
  const [foodOrigin, setFoodOrigin] = useState("")
  const [ing1, setIng1] = useState("")
  const [ing2, setIng2] = useState("")
  const [ing3, setIng3] = useState("")
  const [ing4, setIng4] = useState("")
  const [ing5, setIng5] = useState("")
  const [ing6, setIng6] = useState("")
  const [ing7, setIng7] =useState("")
  const [ing8, setIng8] =useState("")
  const [ing9, setIng9] =useState("")
  const [ing10, setIng10] =useState("")
  const [measurement1, setMeasurement1] =useState("")
  const [measurement2, setMeasurement2] =useState("")
  const [measurement3, setMeasurement3] =useState("")
  const [measurement4, setMeasurement4] =useState("")
  const [measurement5, setMeasurement5] =useState("")
  const [measurement6, setMeasurement6] =useState("")
  const [measurement7, setMeasurement7] =useState("")
  const [measurement8, setMeasurement8] =useState("")
  const [measurement9, setMeasurement9] =useState("")
  const [measurement10, setMeasurement10] =useState("")

  
  

 

  
  const [recipes] = useState([
    {
      name: 'Spaghetti Bolognese',
      ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onion', 'garlic'],
      directions: '1. Cook spaghetti according to package directions. 2. Brown ground beef in a large skillet over medium-high heat. 3. Add onion and garlic and cook until softened. 4. Add tomato sauce and simmer for 10 minutes. 5. Serve over spaghetti.',
      img: 'https://www.aheadofthyme.com/wp-content/uploads/2020/12/spaghetti-bolognese-4.jpg'
    },
    {
      name: 'Grilled Cheese Sandwich',
      ingredients: ['bread', 'cheddar cheese', 'butter'],
      directions: '1. Butter one side of each slice of bread. 2. Place cheese between slices of bread, with buttered sides facing out. 3. Cook in a skillet over medium heat until bread is toasted and cheese is melted, about 2-3 minutes per side.',
      img: 'https://natashaskitchen.com/wp-content/uploads/2021/08/Grilled-Cheese-Sandwich-SQ.jpg'
    },
    {
      name: 'Chocolate Chip Cookies',
      ingredients: ['flour', 'butter', 'sugar', 'brown sugar', 'eggs', 'vanilla extract', 'baking soda', 'salt', 'chocolate chips'],
      directions: '1. Preheat oven to 375 degrees F. 2. Cream butter and sugars in a large bowl until light and fluffy. 3. Beat in eggs and vanilla. 4. In a separate bowl, combine flour, baking soda, and salt. 5. Gradually add flour mixture to butter mixture and mix well. 6. Stir in chocolate chips. 7. Drop by rounded tablespoonfuls onto ungreased baking sheets. 8. Bake for 8-10 minutes or until lightly browned. 9. Cool on wire racks.',
      img: 'https://thebananadiaries.com/wp-content/uploads/2022/10/vegan-chocolate-chip-cookies_3014.jpg'
    },
    {
      name: 'Chicken Pot Pie',
      ingredients: ['hi,bye'],
      directions: '1.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2r3xCCV2BWI3VriIbnkBJ05uVhEE18iQJ_Q&usqp=CAU'
        

    },




  ]);


  


  

  const [selectedRecipe, setSelectedRecipe] = useState(null);
  
  const [count, setCount] = useState(0);


  const getMealInfo = () => {
    Axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((response) => {
      // const randomFood = Math.random() * 28 | 0;

      setMealInfo(response.data.meals[0].strMeal);
      setMealImg(response.data.meals[0].strMealThumb)
      setMealCategory(response.data.meals[0].strCategory)
      setHowtoVideo(response.data.meals[0].strYoutube)
      setInstructions(response.data.meals[0].strInstructions)
      setFoodOrigin(response.data.meals[0].strArea)
      setIng1(response.data.meals[0].strIngredient1)
      setIng2(response.data.meals[0].strIngredient2)
      setIng3(response.data.meals[0].strIngredient3)
      setIng4(response.data.meals[0].strIngredient4)
      setIng5(response.data.meals[0].strIngredient5)
      setIng6(response.data.meals[0].strIngredient6)
      setIng7(response.data.meals[0].strIngredient7)
      setIng8(response.data.meals[0].strIngredient8)
      setIng9(response.data.meals[0].strIngredient9)
      setIng10(response.data.meals[0].strIngredient10)
      
      setMeasurement1(response.data.meals[0].strMeasure1)
      setMeasurement2(response.data.meals[0].strMeasure2)
      setMeasurement3(response.data.meals[0].strMeasure3)
      setMeasurement4(response.data.meals[0].strMeasure4)
      setMeasurement5(response.data.meals[0].strMeasure5)
      setMeasurement6(response.data.meals[0].strMeasure6)
      setMeasurement7(response.data.meals[0].strMeasure7)
      setMeasurement8(response.data.meals[0].strMeasure8)
      setMeasurement9(response.data.meals[0].strMeasure9)
      setMeasurement10(response.data.meals[0].strMeasure10)

     

    })
  }

    

  function handleCount(){
    setCount(count + 1);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const matchingRecipes = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(query.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(query.toLowerCase())
      )
    );

    if (matchingRecipes) {
      setSelectedRecipe(matchingRecipes[0]);
    } else {

      setSelectedRecipe(null);
    }
  };

  

  return (
    
    <div className="Sub flex flex-col">
    <div className='w-1/2'>
    </div>
      
      <div className='flex place-content-center' id='recipes'>        
        <form  onSubmit={handleSubmit}>
          <button onClick={() => getMealInfo()} id='recipesButton'  type="submit">Click For Random Recipe</button>
        </form>
      </div>
      {selectedRecipe && (
       <div className='flex flex-wrap p-4'>
       <div className='flex flex-col w-full md:w-1/2'>
            <div className=''>
            <h2 id='whatYouNeed'>
                What You'll Need for {mealInfo}
              </h2>
              <ul>
                <li id='listItem'>
                  <span class="measurement">{measurement1}</span> {ing1} 
                </li>
                <li id='listItem'>
                  <span class="measurement">{measurement2}</span> {ing2} 
                </li>
                <li id='listItem'>
                  <span class="measurement">{measurement3}</span> {ing3}
                </li>
                <li id='listItem'>
                  <span class="measurement">{measurement4}</span> {ing4}
                </li>
                <li id='listItem'>
                  <span class="measurement">{measurement5}</span> {ing5}
                </li>
                <li id='listItem'>
                  <span class="measurement">{measurement6}</span> {ing6}
                </li>
                <li id='listItem'>
                  <span class="measurement">{measurement7}</span> {ing7}
                </li>
                <li id='listItem'>
                  <span class="measurement">{measurement8}</span> {ing8}
                </li>
                <li id='listItem'>
                  <span class="measurement">{measurement9}</span> {ing9}
                </li>
              </ul>
           </div>
</div>

        <div className='card'>
        <img id='foodimg' src={mealImg} alt="" />
        <div className='container'>
        <h1 id='foodtitle'>{mealInfo}</h1>
        <p id='foodInfoCat'>Category: {mealCategory} <br />  Origin: {foodOrigin} </p>
        <p id='foodinfoIns'>Instructions: <br />{instructions}</p>
        
        {/* <iframe src={howToVideo} frameborder="0"></iframe> */}
        {/* <iframe width="300" height="250" src={"https://www.youtube.com/embed/CrlTS1mJQMA"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>   */}
        <p id='foodinfo'> <a target="_blank" rel="noreferrer" href={howToVideo}> <button>Follow along</button> </a></p>
        </div>
        
          <p id='like'> {count} <button id='heartbutton' onClick={handleCount}><AiOutlineHeart id='icon'/></button> </p>
        </div>
        
        </div>
        
      )}

    </div>
    
  );
  
}


export default RecipeSearchBar;