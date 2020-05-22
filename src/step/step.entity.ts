import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Recipe} from "../recipes/recipes.entity";

@Entity()
export class Step {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    title: string;

    @Column()
    instruction: string;

    @ManyToOne(type => Recipe, recipe => recipe.id)
    recipe: number;
}
