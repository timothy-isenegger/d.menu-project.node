import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {IngredientsService} from "./ingredients.service";
import {CreateIngredientDto} from "../dto/create-ingredient.dto";
import {Ingredient} from "./ingredient.entity";

@Controller('ingredients')
export class IngredientsController {
    constructor(private ingredientsService: IngredientsService) {
    }

    @Post()
    create(@Body() createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
        return this.ingredientsService.create(createIngredientDto);
    }

    @Get()
    findAll() {
        return this.ingredientsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id) : Promise<Ingredient> {
        return this.ingredientsService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id) : Promise<void> {
        return this.ingredientsService.remove(id);
    }
}
