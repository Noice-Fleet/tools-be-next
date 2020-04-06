import { IsString, MinLength, MaxLength, NotContains, IsDefined, IsEmail } from 'class-validator'
import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class LoginUserInput {
  @Field()
  @IsString()
  @IsDefined()
  @MinLength(8)
  public username: string

  @Field()
  @IsString()
  @MinLength(8)
  @MaxLength(24)
  @NotContains(' ', { message: 'No spaces allowed' })
  @IsDefined()
  public password: string
}
