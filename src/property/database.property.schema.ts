import * as Joi from '@hapi/joi';

export enum DATABASE_TYPES {
    MYSQL_DATABASE_TYPE = 'mysql',
    MARIADB_DATABASE_TYPE = 'mariadb',
}

export const DATABASE_PROPERTY_SCHEMA: Joi.SchemaMap = {
    DATABASE_TYPE: Joi.string().valid(Object.values(DATABASE_TYPES)).required(),
    DATABASE_HOST: Joi.string().required(),
    DATABASE_PORT: Joi.number().required(),
    DATABASE_USERNAME: Joi.string().required(),
    DATABASE_PASSWORD: Joi.string().required(),
    DATABASE_NAME: Joi.string().required(),
    DATABASE_SYNCHRONIZE: Joi.boolean().default(false),
};
