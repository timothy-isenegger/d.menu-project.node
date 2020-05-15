import {Body, Controller, Post} from '@nestjs/common';
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
}
