import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from "@tickets-juanse1801/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
