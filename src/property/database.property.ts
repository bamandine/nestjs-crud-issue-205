import { Injectable } from '@nestjs/common';
import { PropertyService } from './property.service';
import { DATABASE_TYPES } from './database.property.schema';

@Injectable()
export class DatabaseProperty {
    constructor(
        private readonly propertyService: PropertyService,
    ) { }

    get type(): DATABASE_TYPES {
        return this.propertyService.properties.DATABASE_TYPE as DATABASE_TYPES;
    }

    get host(): string {
        return this.propertyService.properties.DATABASE_HOST;
    }

    get port(): number {
        return Number(this.propertyService.properties.DATABASE_PORT);
    }

    get username(): string {
        return this.propertyService.properties.DATABASE_USERNAME;
    }

    get password(): string {
        return this.propertyService.properties.DATABASE_PASSWORD;
    }

    get name(): string {
        return this.propertyService.properties.DATABASE_NAME;
    }

    get synchronize(): boolean {
        return Boolean(this.propertyService.properties.DATABASE_USERNAME);
    }
}
