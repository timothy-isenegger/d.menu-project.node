import { Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Recipe} from "./recipes.entity";
import {IngredientsService} from "../ingredients/ingredients.service";
import {Ingredient} from "../ingredients/ingredient.entity";
import {Step} from "../step/step.entity";
import {StepService} from "../step/step.service";

@Module({
  imports: [
      TypeOrmModule.forFeature([Recipe]),
      TypeOrmModule.forFeature([Ingredient]),
      TypeOrmModule.forFeature([Step])
  ],
  exports: [TypeOrmModule],
  controllers: [RecipesController],
  providers: [RecipesService, IngredientsService, StepService]
})
export class RecipesModule {}
