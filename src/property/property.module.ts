import { Module, Global } from '@nestjs/common';
import { DatabaseProperty } from './database.property';
import { PropertyService } from './property.service';

@Global()
@Module({
    providers: [
        {
            provide: PropertyService,
            useValue: new PropertyService(`${process.env.PROPERTY_FILE}`),
        },
        DatabaseProperty,
    ],
    exports: [
        DatabaseProperty,
    ],
})
export class PropertyModule { }
