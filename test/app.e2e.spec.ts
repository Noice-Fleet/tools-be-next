import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import * as request from 'supertest'
import { ApplicationModule } from '../src/app.module'

describe('AppController (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [ApplicationModule],
    }).compile()

    app = moduleFixture.createNestApplication()

    await app.init()
  })

  afterAll(async () => {
    app.close()
  })

  it('/post /graphql', async () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `{
          users {
            id
          }
        }`,
      })
      .expect(200)
      .expect('{"data":{"users":[{"id":"635ec400-2bba-4b86-8da8-e539286f19c6"}]}}\n')
  })
})
