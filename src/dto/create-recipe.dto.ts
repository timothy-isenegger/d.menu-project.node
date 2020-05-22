import {CreateIngredientDto} from "./create-ingredient.dto";
import {CreateStepDto} from "./create-step.dto";

export class CreateRecipeDto {
    title: string;
    description: string;
    ingredients: CreateIngredientDto[];
    steps: CreateStepDto[];
}
