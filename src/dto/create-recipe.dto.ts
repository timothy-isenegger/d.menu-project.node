import {CreateIngredientDto} from "./create-ingredient.dto";

export class CreateRecipeDto {
    title: string;
    description: string;
    ingredients: CreateIngredientDto[];
}
