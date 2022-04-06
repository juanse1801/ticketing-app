import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@tickets-juanse1801/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
