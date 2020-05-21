import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Recipe} from "../recipes/recipes.entity";
import {RecipesIngredients} from "../recipes/recipes-ingredients.entity";

@Entity()
export class Ingredient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    // @OneToMany(type => RecipesIngredients, recipesIngredient => recipesIngredient.ingredient)
    // recipe: Recipe;
}
