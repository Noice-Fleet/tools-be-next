import { EventsHandler, IEventHandler } from '@nestjs/cqrs'
import clc from 'cli-color'
import { AlertSentEvent } from '../impl/alert-sent.event'

@EventsHandler(AlertSentEvent)
export class AlertSentHandler implements IEventHandler<AlertSentEvent> {
  handle(event: AlertSentEvent) {
    console.log(clc.yellowBright('Async AlertSentEvent...'))
  }
}
