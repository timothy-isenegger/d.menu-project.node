import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Step} from "./step.entity";
import {Repository} from "typeorm";
import {CreateStepDto} from "../dto/create-step.dto";

@Injectable()
export class StepService {
    constructor(
        @InjectRepository(Step)
        private stepRepository: Repository<Step>
    ) {}

    async create(createStepDto: CreateStepDto): Promise<Step> {
        const step = new Step();
        step.title = createStepDto.title;
        step.instruction = createStepDto.instruction;
        step.recipe = createStepDto.recipeId;

        return this.stepRepository.save(step);
    }

    async findAll(): Promise<Step[]> {
        return await this.stepRepository.find();
    }

    async findOne(id: number): Promise<Step> {
        return await this.stepRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.stepRepository.delete(id);
    }
}
