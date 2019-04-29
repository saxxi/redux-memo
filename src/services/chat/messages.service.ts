import { Message } from "../../redux/chat/messages/messages.types";
import uuid from 'uuid/v4';

export const sendMessage = (msg: string): Promise<Message> => {
  const promise = new Promise<Message>((resolve) => {
    setTimeout(() => {
      const message: Message = {
        id: uuid(),
        msg,
      };
      resolve(message)
    }, 300)
  });

  return promise;
}
