import * as React from 'react';
import { mount } from '../../../enzyme';
import { ChatAppComponent } from '../ChatApp.component';
import { MessagesState } from '../../../redux/chat/messages/mssages.reducer';
import { ChannelState } from '../../../redux/chat/channels/channels.reducer';
import { Channel } from '../../../redux/chat/channels/channels.types';
import store from '../../../store';
import { Provider } from 'react-redux';
import { Message } from '../../../redux/chat/messages/messages.types';
import { ReactWrapper } from 'enzyme';

describe('ChatAppComponent', () => {
  const selectedChannel: Channel = { id: '2', fullname: 'Claire' };
  let channelState: ChannelState;
  let messagesState: MessagesState;
  let chatComp: ReactWrapper;
  const msg1: Message = {
    from: { id: '1', fullname: 'Me' },
    to: selectedChannel,
    msg: 'First!',
    id: 'msg-1',
  };

  beforeEach(() => {
    channelState = {
      loading: false,
      channels: [],
      // selected: undefined,
      // error: undefined,
    };
    messagesState = {
      loading: false,
      messages: {},
      // error: undefined,
    };
  });

  const mountChatComp = () => mount(
    <Provider store={store}>
      <ChatAppComponent channelState={channelState} messagesState={messagesState} />
    </Provider>
  );

  it('renders', () => {
    chatComp = mountChatComp()
    expect(chatComp.find('[data-head]').at(0).text()).toEqual('CHAT');
    expect(chatComp.find('[data-loader]')).toHaveLength(0)
  });

  it('displays as loading', () => {
    channelState.selected = selectedChannel;
    messagesState.loading = true;
    chatComp = mountChatComp();
    expect(chatComp.find('[data-loader]').at(0).text()).toContain('Loading...');
  });

  // it('displays', () => {
  //   channelState.selected = selectedChannel
  //   messagesState.messages[selectedChannel.id] = [msg1]
  //   chatComp = mountChatComp();
  //   expect(chatComp.find('[data-msg]').map((node: any) => node.text())).toEqual(['First!', 'Second!']);
  //   // expect(chatComp.find('[data-message-app]').children()).toHaveLength(0);
  // })

  // it('', () => {
  // });

})
