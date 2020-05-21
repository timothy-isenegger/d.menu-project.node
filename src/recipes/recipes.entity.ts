import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {RecipesIngredients} from "./recipes-ingredients.entity";

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @OneToMany(type => RecipesIngredients, recipeIngredient => recipeIngredient.id)
    ingredientForRecipe: RecipesIngredients[];
}
