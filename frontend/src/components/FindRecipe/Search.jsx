import React, {useState,useEffect} from 'react'
import Axios from 'axios';

const Search = () => {
    const [value,setValue] = useState ('');
    const [result,setResult] =useState([]);
    const [recipeName, setRecipeName] = useState("")
    const [recipeDescription, setRecipeDescription] = useState("")
    const [recipeIngredients, setRecipeIngredients] = useState("")
    const [recipeInstructions, setRecipeInstructions] = useState("")
    const [isHidden,setIsHidden] = useState("hidden")

   
    useEffect(() =>{
if(value.length >0){
    fetch("http://localhost:8080/api/recipes").then(
        response => response.json( )
    ).then(responseData => {
        setResult([])
        let searchQuery = value.toLowerCase();
        for(const key in responseData){
            let recipe =responseData[key].name.toLowerCase();
            if(recipe.slice(0, searchQuery.length).indexOf(searchQuery) !== -1) {
                    setResult(prevResult => {
                        return [...prevResult, responseData[key].name]
                    })
                    
                        // setRecipeId(responseData[key].id)

            }
        }
    }).catch(error =>{
        console.log(error);
    })
   
}else{
    setResult([])
}
    }, [value])

const getRecipe = (name) => {
    Axios.get(`http://localhost:8080/api/recipes`).then((response) => {
        for (const key in response.data) {
            if (name === response.data[key].name) {
                setRecipeName(response.data[key].name);
                setRecipeDescription(response.data[key].description)
                setRecipeIngredients(response.data[key].ingredients)
                setRecipeInstructions(response.data[key].instructions)
        
            }else{
                console.log("sorry that is not a option");
            }
        }
       
        
    })
    // setRecipe([recipeName,recipeDescription,recipeIngredients,recipeInstructions]);
   
  }
function handleRecipeClick (recipe) {
    getRecipe(recipe)
    setValue('')
    console.log(recipe)
    setIsHidden("text-white")
}
    

  return (
    <>
    <div className='h-24' id='search'>

    </div>
    <div className='flex flex-col justify-center items-center mt-12'>
        <h1 className="text-4xl text-[#AAAAAA] font-bold mb-10">Recipe Search</h1>
        <input type ='text' placeholder='Search for a Recipe...' className='searchBar text-bold  bg-white  text-3xl text-black  ' onChange={(event ) => setValue(event.target.value)} value={value} />
       
        <div className='searchBack flex flex-col justify-center items-center '>
    {result.map((recipe,index) => (
        <a href onClick={() => handleRecipeClick(recipe)} key={index} >
            

        <div className='  w-[250px] h-[30px] bg-white shadow-black overflow-hidden overflow-y-auto hover:bg-gray-300 cursor-pointer font-bold ' >
                {recipe}      
                
        </div>
        </a>   
        // ,console.log (recipe)
    ))}

    <div className='text-center text-white'>
    <br/>
    <h1 className=''>{recipeName}</h1>
    <br/>
<h2>{recipeDescription}</h2>
<br />
<h3 className = {isHidden}>Ingredients</h3>
<p>{recipeIngredients}</p>
<h3 className = {isHidden} >Instructions</h3>
<p>{recipeInstructions}</p>
    </div>
        </div>
    </div>
    </>
  )
}

export default Search