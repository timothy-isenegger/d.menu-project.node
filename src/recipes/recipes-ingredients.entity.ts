import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Recipe} from "./recipes.entity";
import {Ingredient} from "../ingredients/ingredient.entity";

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

    @ManyToOne(type => Recipe, recipe => recipe.ingredients)
    recipe: Recipe

    @ManyToOne(type => Ingredient, ingredient => ingredient.recipe)
    ingredient: Ingredient

    @Column()
    amount: number

    @Column()
    unit: string
}
