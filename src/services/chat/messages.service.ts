import { Message } from "../../redux/chat/messages/messages.types";

export const sendMessage = (msg: string): Promise<Message> => {
  const promise = new Promise<Message>((resolve) => {
    setTimeout(() => {
      const message: Message = {
        msg,
      };
      resolve(message)
    }, 500)
  });

  return promise;
}
