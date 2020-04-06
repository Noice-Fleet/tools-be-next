import { Field, InputType } from '@nestjs/graphql'
import { NewRecipeInput } from './new-recipe.input'

@InputType()
export class UpdateRecipeInput extends NewRecipeInput implements Partial<NewRecipeInput> {
  @Field()
  id: string
}
