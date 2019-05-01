
// Untested
import * as api from '../../../../services/chat/messages.service';
import { Message } from '../messages.types';
import { requestSendMessage } from '../messages.sagas';
import { sendMessageAsync } from '../messages.actions';
import { recordSaga } from './sagaTestingUtils';

beforeEach(() => {
  jest.resetAllMocks();
});

it('should get profile from API and call success action if authenticated', async () => {
  const msgPayload = 'Hello World!';
  const helloMessage: Message = {
    id: 'mock-123',
    msg: msgPayload,
  };
  api.sendMessage.mockImplementation(() => helloMessage);

  const initialAction = sendMessageAsync.request(msgPayload);
  const dispatched = await recordSaga(
    requestSendMessage,
    initialAction
  );
  expect(api.sendMessage).toHaveBeenCalledWith(msgPayload);
  expect(dispatched).toContainEqual(sendMessageAsync.success(helloMessage));
});

export {
  // Use an empty export to please Babel's single file emit.
  // https://github.com/Microsoft/TypeScript/issues/15230
}
