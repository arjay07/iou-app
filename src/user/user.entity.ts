import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryColumn()
    username: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
}
