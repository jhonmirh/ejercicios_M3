import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({
    name:"vehicles"
})
export class Vehicle{
    @PrimaryGeneratedColumn()
    id: number

    @Column({length:100})
    bannd: string

    @Column()
    color: string

    @Column()
    model: string

    @Column()
    year: number
}
