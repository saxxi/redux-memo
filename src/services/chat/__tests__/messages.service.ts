import { sendMessage } from '../messages.service'
import { Message } from '../../../redux/chat/messages/messages.types';

jest.mock('../messages.service')

describe('#sendMessage () test mocks', () => {
  it('sends a message (using promise)', (done) => {
    sendMessage('Hello!')
    .then((message: Message) => {
      expect(message).toBeDefined();
      expect(message.id).toBeDefined();
      expect(message.msg).toEqual('Hello!');
      done();
    })
  })

  it('send a message (using async/await)', async () => {
    const data = await sendMessage('Hello world!')
    expect(data).toBeDefined()
    expect(data.msg).toEqual('Hello world!')
  })
})
