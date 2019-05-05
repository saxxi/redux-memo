import * as React from 'react';
import { mount } from '../../../../enzyme';
import { MessageInputComponent } from '../MessageInput.component';
import { User } from '../../../../redux/user/user.types';
import { StartMessage } from '../../../../redux/chat/messages/messages.types';
import { Channel } from '../../../../redux/chat/channels/channels.types';

describe('MessageInputComponent', () => {

  let currentUser: User;
  let selectedChannel: Channel;
  let sendMessage: any;
  let inputComp: any;

  beforeEach(() => {
    currentUser = { id: '1', fullname: 'Me' };
    selectedChannel = { id: '2', fullname: 'Claire' };
    sendMessage = jest.fn((message: StartMessage) => message);
    inputComp = mount(
      <MessageInputComponent
        sendMessage={sendMessage}
        currentUser={currentUser}
        selectedChannel={selectedChannel} />
    )
  });

  afterEach(() => {
    inputComp.unmount();
  });

  it('renders', () => {
    expect(inputComp.contains('SEND')).toBeTruthy();
  });

  it('sends a message when has a selectedChannel', () => {
    inputComp.find('input').simulate('change', { target: { value: 'Hello World!' } });
    // expect(inputComp.find('input').at(0).props().value).toEqual('Hello World!'); // valid but useless, just for memo
    inputComp.find('form').simulate('submit');
    const respValue: StartMessage = sendMessage.mock.calls[0][0]
    expect(sendMessage.mock.calls.length).toBe(1);
    expect(respValue.msg).toEqual('Hello World!');
    expect(respValue.from).toEqual(currentUser);
    expect(respValue.to).toEqual(selectedChannel);
  })

});
