import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Ingredient} from "./ingredient.entity";
import {Repository} from "typeorm";
import {CreateIngredientDto} from "../dto/create-ingredient.dto";
import {Recipe} from "../recipes/recipes.entity";

@Injectable()
export class IngredientsService {
    constructor(
        @InjectRepository(Ingredient)
        private ingredientRepository: Repository<Ingredient>,
        @InjectRepository(Recipe)
        private recipeRepository: Repository<Recipe>
    ) {}

    create(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
        const ingredient = new Ingredient();
        ingredient.title = createIngredientDto.title;
        ingredient.recipe = this.recipeRepository.findOne(createIngredientDto.recipeId)
            .then(recipe => {return recipe})
            .catch(error => { console.error(error); return null;});

        return this.ingredientRepository.save(ingredient);
    }

    findAll(): Promise<Ingredient[]> {
        return this.ingredientRepository.find();
    }

    findOne(id: string): Promise<Ingredient> {
        return this.ingredientRepository.findOne(id);
    }
}
