import {Inject, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Recipe} from "./recipes.entity";
import {Repository} from "typeorm";
import {CreateRecipeDto} from "../dto/create-recipe.dto";
import {RecipeDto} from "../dto/recipe.dto";
import {RecipesIngredients} from "./recipes-ingredients.entity";
import {CreateRecipesIngredientsDto} from "../dto/create-recipes-ingredients.dto";
import {IngredientsService} from "../ingredients/ingredients.service";
import {Ingredient} from "../ingredients/ingredient.entity";

@Injectable()
export class RecipesService {
    constructor(
        @InjectRepository(Recipe)
        private recipeRepository: Repository<Recipe>,
        @InjectRepository(RecipesIngredients)
        private recipeIngredientRepository: Repository<RecipesIngredients>,
        @Inject(IngredientsService)
        private ingredientsService: IngredientsService
    ) {
    }

    async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
        const recipe = new Recipe();
        recipe.title = createRecipeDto.title;
        recipe.description = createRecipeDto.description;
        recipe.ingredientForRecipe = await this.transformLukasIdee(createRecipeDto.recipesIngredients, recipe);

        return await this.recipeRepository.save(recipe);
    }

    private transformLukasIdee(recipesIngredients: CreateRecipesIngredientsDto[], recipe: Recipe): RecipesIngredients[] {
        const tempArray: RecipesIngredients[] = [];
        recipesIngredients.forEach(async item => {
            const recipesIngredients = new RecipesIngredients();
            recipesIngredients.recipe = recipe;
            recipesIngredients.amount = item.amount;
            recipesIngredients.unit = item.unit;
            recipesIngredients.ingredient = await this.ingredientsService.findOne(item.ingredientId)
                .then((ingredient: Ingredient) => {
                    return ingredient
                })
                .catch(error => {
                    console.error(error);
                    return null;
                });

            this.recipeIngredientRepository.save(recipesIngredients)
                .then(item => {
                tempArray.push(recipesIngredients);
            });
        })
        return tempArray;
    }

    async findAll(): Promise<Recipe[]> {
        return await this.recipeRepository.find({ relations: ["ingredientForRecipe"] });
    }

    async findOne(id: string): Promise<Recipe> {
        return await this.recipeRepository.findOne(id, { relations: ["ingredientForRecipe"] });
    }

    async update(id: string, recipeDto: RecipeDto): Promise<Recipe> {
        return this.recipeRepository.save({...recipeDto, id: Number(id)});
    }

    async remove(id: string): Promise<void> {
        await this.recipeRepository.delete(id);
    }
}

