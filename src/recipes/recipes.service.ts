import {Inject, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Recipe} from "./recipes.entity";
import {Repository} from "typeorm";
import {CreateRecipeDto} from "../dto/create-recipe.dto";
import {RecipeDto} from "../dto/recipe.dto";
import {IngredientsService} from "../ingredients/ingredients.service";
import {Ingredient} from "../ingredients/ingredient.entity";
import {CreateIngredientDto} from "../dto/create-ingredient.dto";
import {CreateStepDto} from "../dto/create-step.dto";
import {Step} from "../step/step.entity";
import {StepService} from "../step/step.service";

@Injectable()
export class RecipesService {
    constructor(
        @InjectRepository(Recipe)
        private recipeRepository: Repository<Recipe>,
        @Inject(IngredientsService)
        private ingredientsService: IngredientsService,
        @Inject(StepService)
        private stepService: StepService
    ) {
    }

    async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
        const tempRecipe = new Recipe();
        tempRecipe.title = createRecipeDto.title;
        tempRecipe.description = createRecipeDto.description;
        const savedRecipe = await this.recipeRepository.save(tempRecipe);
        const savedIngredients = await this.addIngredientsToRecipe(createRecipeDto.ingredients, savedRecipe.id);
        const savedSteps = await this.addStepsToRecipe(createRecipeDto.steps, savedRecipe.id);

        return savedRecipe;
    }

    private addIngredientsToRecipe(ingredients: CreateIngredientDto[], recipeId: number): Ingredient[] {
        const tempArray: Ingredient[] = [];
        ingredients.forEach(async ingredientDto => {
            ingredientDto.recipeId = recipeId;

            await this.ingredientsService.create(ingredientDto)
                .then(savedIngredient => {
                    tempArray.push(savedIngredient);
                })
                .catch(error => {
                    console.error(error);
                });
        })
        return tempArray;
    }

    private addStepsToRecipe(steps: CreateStepDto[], recipeId: number): Step[] {
        const tempArray: Step[] = [];

        steps.forEach(async stepDto => {
            stepDto.recipeId = recipeId;

            await this.stepService.create(stepDto)
                .then(savedStep => {
                    tempArray.push(savedStep);
                })
                .catch(error => {
                    console.error(error);
                })
        })
        return tempArray;
    }

    async findAll(): Promise<Recipe[]> {
        return await this.recipeRepository.find({ relations: ["ingredients", "steps"] });
    }

    async findOne(id: number): Promise<Recipe> {
        return await this.recipeRepository.findOne(id, { relations: ["ingredients", "steps"] });
    }

    async update(id: number, recipeDto: RecipeDto): Promise<Recipe> {
        return await this.recipeRepository.save({...recipeDto, id: id});
    }

    async remove(id: string): Promise<void> {
        await this.recipeRepository.delete(id);
    }
}

