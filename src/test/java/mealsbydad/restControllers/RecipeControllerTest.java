package mealsbydad.restControllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import mealsbydad.entities.Recipe;
import mealsbydad.entities.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.hamcrest.Matchers.equalTo;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD) // reset the database for each test
@AutoConfigureMockMvc
class RecipeControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    public void getRecipe() throws Exception {

        mvc.perform(MockMvcRequestBuilders.get("/api/recipes").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.content().string(equalTo("[]")));
    }

    @Test
    public void addRecipe() throws Exception {
        User user = new User("Darry", "Darry", "Parks", "FFFFF");
        Recipe recipe = new Recipe(user, "Recipe Name", "Recipe Description", "Recipe Ingredients", "Recipe Instructions");

//        mvc.perform(MockMvcRequestBuilders.post("/api/recipe").accept(MediaType.APPLICATION_JSON)
//                .contentType(MediaType.APPLICATION_JSON)
//                .content(getJsonContent(recipe)))
//                .andExpect(status().isOk());
        mvc.perform(MockMvcRequestBuilders.post("/api/recipe")
                        .accept(MediaType.APPLICATION_JSON) // I'm expecting JSON back because I'm a program and want recordized date
                        .contentType(MediaType.APPLICATION_JSON) // I'm a program and sending you JSON-encoded data
                        .content(getJsonContent(recipe)))
                .andExpect(status().isOk());
    }
    private static String getJsonContent(Object o) throws JsonProcessingException {
        return new ObjectMapper().writeValueAsString(o);
    }
}