import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Ingredient} from "./ingredient.entity";
import {Repository} from "typeorm";
import {CreateIngredientDto} from "../dto/create-ingredient.dto";

@Injectable()
export class IngredientsService {
    constructor(
        @InjectRepository(Ingredient)
        private ingredientRepository: Repository<Ingredient>
    ) {}

    async create(createIngredientDto: CreateIngredientDto): Promise<Ingredient> {
        const ingredient = new Ingredient();
        ingredient.title = createIngredientDto.title;

        return this.ingredientRepository.save(ingredient);
    }

    findAll(): Promise<Ingredient[]> {
        return this.ingredientRepository.find();
    }

    async findOne(id: number): Promise<Ingredient> {
        return this.ingredientRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.ingredientRepository.delete(id);
    }
}
