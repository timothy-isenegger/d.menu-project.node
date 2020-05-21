import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Recipe} from "../recipes/recipes.entity";

@Entity()
export class Ingredient {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({nullable: true})
    amount: string;

    @ManyToOne(type => Recipe, recipe => recipe.id)
    recipe: number;
}
