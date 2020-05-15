import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Recipe} from "../recipes/recipes.entity";

@Entity()
export class Ingredient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    recipe: Recipe
}
