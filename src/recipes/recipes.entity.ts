import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Ingredient} from "../ingredients/ingredient.entity";
import {RecipesIngredients} from "./recipes-ingredients.entity";

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    ingredients: string;

    // @OneToMany(type => RecipesIngredients, recipeIngredient => recipeIngredient.recipe)
    // ingredients: Ingredient[]
}
