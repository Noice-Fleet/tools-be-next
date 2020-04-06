import { Recipe } from '../../entities/recipe.entity'
import { User } from '../../../users/entities/user.entity'

export class RecipeUpdatedEvent {
  constructor(public readonly recipe: Recipe, public readonly user: User) {}
}
