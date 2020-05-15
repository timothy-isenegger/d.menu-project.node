import {Module} from '@nestjs/common';
import {IngredientsController} from './ingredients.controller';
import {IngredientsService} from './ingredients.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Ingredient} from "./ingredient.entity";
import {Recipe} from "../recipes/recipes.entity";
import {RecipesService} from "../recipes/recipes.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Ingredient]),
        TypeOrmModule.forFeature([Recipe])
    ],
    exports: [TypeOrmModule],
    controllers: [IngredientsController],
    providers: [IngredientsService, RecipesService]
})
export class IngredientsModule {
}
