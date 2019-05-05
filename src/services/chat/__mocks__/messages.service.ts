import { Message, StartMessage } from '../../../redux/chat/messages/messages.types';

export const sendMessage = (startMessage: StartMessage): Promise<Message> => {
  const message: Message = {
    ...startMessage,
    id: 'msg-123',
  }
  return Promise.resolve(message);
}
