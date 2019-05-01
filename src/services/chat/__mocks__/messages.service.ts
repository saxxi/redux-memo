import { Message } from "../../../redux/chat/messages/messages.types";

export const sendMessage = (msg: string): Promise<Message> => {
  const message = {
    id: 'msg-123',
    msg
  }
  return Promise.resolve(message);
}
