package mealsbydad.entities;

import jakarta.persistence.*;

import java.util.Collection;
import java.util.HashSet;
import java.util.Objects;

@Entity(name = "MyUsers")
public class User {

    public String getUserName() {
        return userName;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPassword() {
        return password;
    }

    public Collection<Recipe> getFavoriteRecipes() {
        return favoriteRecipes;
    }

    @Id
    @GeneratedValue()
    public long id;

    String userName;

    String firstName;

    String lastName;

    String password;
    @ManyToMany
    public Collection<Recipe> favoriteRecipes = new HashSet<>();

    @OneToMany(mappedBy = "author")
    private Collection<Recipe> authoredRecipes = new HashSet<>();


    public void addFavoriteRecipe(final Recipe favoriteRecipe) {
        favoriteRecipes.add(favoriteRecipe);
    }

    public void removeFavoriteRecipe(final Recipe favoriteRecipe) {
        favoriteRecipes.remove(favoriteRecipe);
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id && Objects.equals(userName, user.userName) && Objects.equals(firstName, user.firstName) && Objects.equals(lastName, user.lastName) && Objects.equals(password, user.password) && Objects.equals(favoriteRecipes, user.favoriteRecipes) && Objects.equals(authoredRecipes, user.authoredRecipes);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userName, firstName, lastName, password, favoriteRecipes, authoredRecipes);
    }

    public User(String userName, String firstName, String lastName, String password) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;


    }

}
