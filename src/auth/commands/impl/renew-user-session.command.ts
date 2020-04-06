import { Payload } from '../../dto/payload'

export class RenewUserSessionCommand {
  constructor(public readonly payload: Payload) {}
}
