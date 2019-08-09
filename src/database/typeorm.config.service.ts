import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DatabaseProperty } from '../property/database.property';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(
        private readonly databaseProperty: DatabaseProperty,
    ) { }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: this.databaseProperty.type,
            host: this.databaseProperty.host,
            port: this.databaseProperty.port,
            username: this.databaseProperty.username,
            password: this.databaseProperty.password,
            database: this.databaseProperty.name,
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: this.databaseProperty.synchronize,
        };
    }
}
