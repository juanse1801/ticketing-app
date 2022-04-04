import { Message } from "node-nats-streaming";
import {
  Listener,
  Subjects,
  TickerCreatedEvent,
} from "@tickets-juanse1801/common";

export class TicketCreatedListener extends Listener<TickerCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = "payments-service";

  onMessage(data: TickerCreatedEvent["data"], msg: Message) {
    console.log("Event Data", data);

    console.log(data.id);
    console.log(data.title);
    console.log(data.price);

    msg.ack();
  }
}
