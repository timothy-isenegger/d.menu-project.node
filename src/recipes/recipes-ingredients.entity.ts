import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Ingredient} from "../ingredients/ingredient.entity";
import {Recipe} from "./recipes.entity";

const unit = {
    GRAMM: "gr",
    KILOGRAMM: "kg",
    DEZILITER: "dl",
    LITER: "l",
}

@Entity()
export class RecipesIngredients {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(type => Ingredient, ingredient => ingredient.id)
    ingredient: Ingredient

    @ManyToOne(type => Recipe, recipe => recipe.ingredientForRecipe)
    recipe: Recipe

    @Column()
    amount: number

    @Column()
    unit: string
}
