import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Step} from "./step.entity";
import {StepController} from "./step.controller";
import {StepService} from "./step.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Step])
    ],
    exports: [TypeOrmModule],
    controllers: [StepController],
    providers: [StepService]
})
export class StepModule {
}
