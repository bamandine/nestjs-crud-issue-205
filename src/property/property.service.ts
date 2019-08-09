import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from '@hapi/joi';
import { DATABASE_PROPERTY_SCHEMA } from './database.property.schema';

export class PropertyService {
    private readonly validatedProperties: { [key: string]: string };

    constructor(filePath: string) {
        const properties: { [key: string]: string } = dotenv.parse(fs.readFileSync(filePath));
        const globalPropertySchema: Joi.SchemaMap = {};
        Object.assign(
            globalPropertySchema,
            DATABASE_PROPERTY_SCHEMA,
        );
        const { error, value: validatedProperties } = Joi.validate(
            properties,
            Joi.object(globalPropertySchema),
        );
        if (error) {
            throw new Error(`Config validation error: ${error.message}`);
        }
        this.validatedProperties = validatedProperties;
    }

    get properties(): { [key: string]: string } {
        return this.validatedProperties;
    }
}
