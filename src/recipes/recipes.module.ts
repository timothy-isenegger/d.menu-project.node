import { Module } from '@nestjs/common';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Recipe} from "./recipes.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])],
  exports: [TypeOrmModule],
  controllers: [RecipesController],
  providers: [RecipesService]
})
export class RecipesModule {}
