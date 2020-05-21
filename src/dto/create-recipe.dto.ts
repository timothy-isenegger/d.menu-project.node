import {CreateRecipesIngredientsDto} from "./create-recipes-ingredients.dto";

export class CreateRecipeDto {
    title: string;
    description: string;
    recipesIngredients: CreateRecipesIngredientsDto[];
}
