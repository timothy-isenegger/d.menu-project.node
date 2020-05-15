import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Recipe} from "./recipes.entity";
import {Repository} from "typeorm";
import {CreateRecipeDto} from "../dto/create-recipe.dto";

@Injectable()
export class RecipesService {
    constructor(
        @InjectRepository(Recipe)
        private recipeRepository: Repository<Recipe>,
    ) {}

    create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
        const recipe = new Recipe();
        recipe.title = createRecipeDto.title;
        recipe.description = createRecipeDto.description;

        return this.recipeRepository.save(recipe);
    }

    findAll(): Promise<Recipe[]> {
        return this.recipeRepository.find();
    }

    findOne(id: string): Promise<Recipe> {
        return this.recipeRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.recipeRepository.delete(id);
    }
}

