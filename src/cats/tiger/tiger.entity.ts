import { Entity, Column, ManyToOne, Index } from 'typeorm';
import { GenericEntity } from '../generic.entity';
import { IsString, IsNotEmpty } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class Tiger extends GenericEntity {
    @Column({ nullable: false })
    @IsNotEmpty({ groups: [CREATE, UPDATE] })
    @IsString({always: true })
    name: string;
}
