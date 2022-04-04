import {
  Publisher,
  TickerCreatedEvent,
  Subjects,
} from "@tickets-juanse1801/common";

export class TicketCreatedPublisher extends Publisher<TickerCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
