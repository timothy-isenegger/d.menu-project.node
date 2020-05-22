import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {StepService} from "./step.service";
import {CreateStepDto} from "../dto/create-step.dto";
import {Step} from "./step.entity";

@Controller('step')
export class StepController {
    constructor(private stepService: StepService) {
    }

    @Post()
    create(@Body() createStepDto: CreateStepDto): Promise<Step> {
        return this.stepService.create(createStepDto);
    }

    @Get()
    findAll() {
        return this.stepService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id) : Promise<Step> {
        return this.stepService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id): Promise<void> {
        return this.stepService.remove(id);
    }
}
