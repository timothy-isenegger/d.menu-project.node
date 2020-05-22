import {Ingredient} from "../ingredients/ingredient.entity";
import {Step} from "../step/step.entity";

export class RecipeDto {
    title: string;
    description: string;
    ingredients: Ingredient[];
    steps: Step[];
}
