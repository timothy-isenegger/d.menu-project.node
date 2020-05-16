import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { RecipesModule } from './recipes/recipes.module';
import {Recipe} from "./recipes/recipes.entity";
import { IngredientsModule } from './ingredients/ingredients.module';
import {Ingredient} from "./ingredients/ingredient.entity";
import {RecipesIngredients} from "./recipes/recipes-ingredients.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'recipes_nest',
      entities: [Recipe, Ingredient, RecipesIngredients],
      synchronize: true,
      autoLoadEntities: true,
    }),
    RecipesModule,
    IngredientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
