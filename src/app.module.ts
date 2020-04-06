import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module'
import { RecipesModule } from './recipes/recipes.module'
import { UsersModule } from './users/users.module'
import { AlertsModule } from './alerts/alerts.module'
import { DatabaseConnectionService } from './database_config.service'

const modules = [AlertsModule, AuthModule, RecipesModule, UsersModule]

@Module({
  imports: [
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService,
    }),
    ...modules,
  ],
})
export class ApplicationModule {}
