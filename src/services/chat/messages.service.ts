import { StartMessage, Message } from '../../redux/chat/messages/messages.types';
import uuid from 'uuid/v4';

export const sendMessage = (startMessage: StartMessage): Promise<Message> => {
  const promise = new Promise<Message>((resolve) => {
    setTimeout(() => {
      const message: Message = {
        ...startMessage,
        id: uuid(),
      };
      resolve(message)
    }, 300)
  });

  return promise;
};
