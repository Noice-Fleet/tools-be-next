import { ObjectType, Field } from '@nestjs/graphql'
import { User } from '../../users/entities/user.entity'

@ObjectType()
export class UserWithToken {
  @Field()
  public token: string

  @Field(() => User)
  public user: User
}
