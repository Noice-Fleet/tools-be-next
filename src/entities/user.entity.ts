import * as bcrypt from 'bcrypt'
import { Entity, Column, BeforeInsert } from 'typeorm'
import { Exclude } from 'class-transformer'
import { IsEmail } from 'class-validator'
import { AbstractEntity } from './abstract.entity'

@Entity()
export class UserEntity extends AbstractEntity {
  @Column()
  @IsEmail()
  email: string

  @Column()
  username: string

  @Column({ default: '' })
  bio: string

  @Column()
  address: string

  @Column({ default: null, nullable: true })
  image: string | null

  @Column()
  @Exclude()
  password: string

  // TODO: role: fleet | company | driver

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10)
  }
}
