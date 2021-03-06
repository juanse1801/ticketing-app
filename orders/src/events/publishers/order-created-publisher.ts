import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@tickets-juanse1801/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
