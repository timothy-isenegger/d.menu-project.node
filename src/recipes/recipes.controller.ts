import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {Recipe} from "./recipes.entity";
import {RecipesService} from "./recipes.service";
import {CreateRecipeDto} from "../dto/create-recipe.dto";
import {RecipeDto} from "../dto/recipe.dto";

@Controller('recipes')
export class RecipesController {
    constructor(private recipeService: RecipesService) {
    }

    @Post()
    create(@Body() createRecipeDto: CreateRecipeDto): Promise<Recipe> {
        return this.recipeService.create(createRecipeDto);
    }

    @Get()
    findAll(): Promise<Recipe[]> {
        return this.recipeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Recipe> {
        return this.recipeService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id, @Body() recipeDto: RecipeDto): Promise<Recipe> {
        return this.recipeService.update(id, recipeDto);
    }

    @Delete(':id')
    remove(@Param('id') id): Promise<void> {
        return this.recipeService.remove(id);
    }

}
