import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Ingredient} from "../ingredients/ingredient.entity";

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @OneToMany(type => Ingredient, ingredient => ingredient.recipe, {eager: true})
    ingredients: Ingredient[];
}
