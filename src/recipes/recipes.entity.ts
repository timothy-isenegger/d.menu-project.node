import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Ingredient} from "../ingredients/ingredient.entity";
import {Step} from "../step/step.entity";

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

    @OneToMany(type => Step, step => step.recipe, {eager: true})
    steps: Step[];
}
