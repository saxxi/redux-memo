import { Message } from '../../redux/chat/messages/messages.types';
import { User } from '../../redux/user/user.types';
import uuid from 'uuid/v4';

export const sendMessage = (fromUser: User, toUser: User, msg: string): Promise<Message> => {
  const promise = new Promise<Message>((resolve) => {
    setTimeout(() => {
      const message: Message = {
        from: fromUser,
        to: toUser,
        id: uuid(),
        msg,
      };
      resolve(message)
    }, 300)
  });

  return promise;
};
