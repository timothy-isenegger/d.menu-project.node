import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Recipe} from "../recipes/recipes.entity";

@Entity()
export class Ingredient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToOne(type => Recipe, recipe => recipe.ingredients)
    recipe: Recipe;
}
