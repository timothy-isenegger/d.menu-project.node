import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { RecipesModule } from './recipes/recipes.module';
import {Recipe} from "./recipes/recipes.entity";
import { IngredientsModule } from './ingredients/ingredients.module';
import {Ingredient} from "./ingredients/ingredient.entity";
import { StepController } from './step/step.controller';
import { StepService } from './step/step.service';
import {Step} from "./step/step.entity";
import { StepModule } from './step/step.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'recipes_nest',
      entities: [Recipe, Ingredient, Step],
      synchronize: true,
      autoLoadEntities: true,
    }),
    RecipesModule,
    IngredientsModule,
    StepModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
