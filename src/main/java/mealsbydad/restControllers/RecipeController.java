package mealsbydad.restControllers;

import mealsbydad.entities.Recipe;
import mealsbydad.respositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class RecipeController {

    final private RecipeRepository recipeRepository;

    public RecipeController(final @Autowired RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    @GetMapping("/api/recipes")
    public Iterable<Recipe> getRecipes() {
        return recipeRepository.findAll();
    }

    @PostMapping("/api/recipe")
    public Recipe postRecipe(final @RequestBody Recipe recipe) {return recipeRepository.save(recipe); }
}
