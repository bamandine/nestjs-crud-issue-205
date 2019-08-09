import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Tiger } from './tiger.entity';
import { TigerService } from './tiger.service';

@Crud({
    model: {
        type: Tiger,
    },
    validation: {
        forbidUnknownValues: true,
    },
})
@Controller('tigers')
export class TigerController {
    constructor(public service: TigerService) {}
}
