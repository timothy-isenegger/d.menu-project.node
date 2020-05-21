import {Module} from '@nestjs/common';
import {IngredientsController} from './ingredients.controller';
import {IngredientsService} from './ingredients.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Ingredient} from "./ingredient.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Ingredient])
    ],
    exports: [TypeOrmModule],
    controllers: [IngredientsController],
    providers: [IngredientsService]
})
export class IngredientsModule {
}
