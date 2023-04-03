package mealsbydad.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.Collection;
import java.util.HashSet;
import java.util.Optional;

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
    @JsonIgnore
    @ManyToMany
    @JoinTable
    private Collection<User> userLikes = new HashSet<>();
    @ManyToOne(cascade = CascadeType.ALL)
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

    public Recipe(String name, String description, String ingredients, String instructions) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.instructions = instructions;

    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getIngredients() {
        return this.ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getInstructions() {
        return this.instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public Collection<User> getUserLikes() {
        return this.userLikes;
    }

    public void setUserLikes(User user) {
        userLikes.add(user);
    }

    public User getAuthor() {
        return this.author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }
}
