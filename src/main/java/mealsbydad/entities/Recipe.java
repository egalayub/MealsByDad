package mealsbydad.entities;

import jakarta.persistence.*;

import java.util.Collection;
import java.util.HashSet;
import java.util.Objects;

@Entity
public class Recipe {

    @Id
    @GeneratedValue()
    private int id;
    private String name;
    @Lob
    private String description;
    @Lob
    private String ingredients;
    @Lob
    private String instructions;
    @ManyToMany
    @JoinTable
    private Collection<User> userLikes = new HashSet<>();
    @ManyToOne
    private User author;


    public Recipe() {
    }

    public Recipe(User author, String name, String description, String ingredients, String instructions) {
        this.author = author;
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.instructions = instructions;

    }

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return this.id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDescription() {
        return this.description;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getIngredients() {
        return this.ingredients;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public String getInstructions() {
        return this.instructions;
    }

    public void setUserLikes(User user) {
        userLikes.add(user);
    }

    public Collection<User> getUserLikes() {
        return this.userLikes;
    }

    public User getAuthor() {
        return this.author;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Recipe recipe = (Recipe) o;
        return id == recipe.id && Objects.equals(name, recipe.name) && Objects.equals(description, recipe.description) && Objects.equals(ingredients, recipe.ingredients) && Objects.equals(instructions, recipe.instructions) && Objects.equals(userLikes, recipe.userLikes) && Objects.equals(author, recipe.author);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description, ingredients, instructions, userLikes, author);
    }
}
