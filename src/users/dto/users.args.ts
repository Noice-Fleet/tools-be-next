import { Max, Min } from 'class-validator'
import { ArgsType, Field, Int } from '@nestjs/graphql'

@ArgsType()
export class UsersArgs {
  @Field(() => Int)
  @Min(0)
  skip: number = 0

  @Field(() => Int)
  @Min(1)
  @Max(50)
  take: number = 25
}
