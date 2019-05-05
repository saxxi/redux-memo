import { Message } from '../../../redux/chat/messages/messages.types';
import { User } from '../../../redux/user/user.types';
import { sendMessage } from '../messages.service';

jest.mock('../messages.service')

describe('#sendMessage () test mocks', () => {

  const randomUser: User = { id: '1', fullname: 'Me' }
  const message: Message = {
    id: 'msg-123',
    from: randomUser,
    to: randomUser,
    msg: 'Hello!',
  }

  it('sends a message (using promise)', (done) => {
    sendMessage(message)
    .then((serverMessage: Message) => {
      expect(serverMessage).toBeDefined();
      expect(serverMessage.id).toBeDefined();
      expect(serverMessage.msg).toEqual('Hello!');
      done();
    })
  })

  it('send a message (using async/await)', async () => {
    const data = await sendMessage(message)
    expect(data).toBeDefined()
    expect(data.msg).toEqual('Hello!')
  })
})
