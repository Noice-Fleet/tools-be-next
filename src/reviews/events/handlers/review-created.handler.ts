import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import clc from 'cli-color'
import { ReviewCreatedEvent } from '../impl/review-created.event'

@EventsHandler(ReviewCreatedEvent)
export class ReviewCreatedHandler implements IEventHandler<ReviewCreatedEvent> {
  handle(event: ReviewCreatedEvent) {
    console.log(clc.yellowBright('Async ReviewCreatedEvent...'))
  }
}
