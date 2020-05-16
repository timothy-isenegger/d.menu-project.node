import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Recipe} from "./recipes.entity";
import {Repository} from "typeorm";
import {CreateRecipeDto} from "../dto/create-recipe.dto";
import {RecipeDto} from "../dto/recipe.dto";

@Injectable()
export class RecipesService {
    constructor(
        @InjectRepository(Recipe)
        private recipeRepository: Repository<Recipe>,
    ) {}

    async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
        const recipe = new Recipe();
        recipe.title = createRecipeDto.title;
        recipe.description = createRecipeDto.description;
        recipe.ingredients = createRecipeDto.ingredients;

        return await this.recipeRepository.save(recipe);
    }

    findAll(): Promise<Recipe[]> {
        return this.recipeRepository.find();
    }

    findOne(id: string): Promise<Recipe> {
        return this.recipeRepository.findOne(id);
    }

    async update(id: string, recipeDto: RecipeDto): Promise<Recipe> {
        return this.recipeRepository.save({... recipeDto, id: Number(id)});
    }

    async remove(id: string): Promise<void> {
        await this.recipeRepository.delete(id);
    }
}

