import * as React from 'react';
import { mount } from '../../../../enzyme';
import { Message } from '../../../../redux/chat/messages/messages.types';
import { MessageListerComponent } from '../MessageLister.component';

describe('MessageInputComponent', () => {
  let channelMessanges = [] as Message[];

  const msg1: Message = {
    from: { id: '1', fullname: 'Me' },
    to: { id: '2', fullname: 'Claire' },
    msg: 'First!',
    id: 'msg-1',
  };

 const msg2: Message = {
    from: msg1.to,
    to: msg1.from,
    msg: 'Second!',
    id: 'msg-2',
  };

  it('renders a list of messages', () => {
    channelMessanges = [msg1, msg2];
    const msgComp = mount(<MessageListerComponent channelMessanges={channelMessanges} />);
    expect(msgComp.find('[data-msg]').map(node => node.text())).toEqual(['First!', 'Second!']);
  })

})
