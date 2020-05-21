import {Ingredient} from "../ingredients/ingredient.entity";

export class RecipeDto {
    title: string;
    description: string;
    ingredients: Ingredient[];
}
