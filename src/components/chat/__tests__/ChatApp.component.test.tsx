import React from 'react';
import { setUp } from '../../../enzyme';
import { MessagesState } from '../../../redux/chat/messages/mssages.reducer';
import { ChannelState } from '../../../redux/chat/channels/channels.reducer';
import { Channel } from '../../../redux/chat/channels/channels.types';
import { Message } from '../../../redux/chat/messages/messages.types';
import { ShallowWrapper } from 'enzyme';

describe('ChatAppComponent', () => {
  const selectedChannel: Channel = { id: '2', fullname: 'Claire' };
  const channelState: ChannelState = {
    loading: false,
    channels: [],
    // selected: undefined,
    // error: undefined,
  };
  const messagesState: MessagesState = {
    loading: false,
    messages: {},
    // error: undefined,
  };
  let chatComp: ShallowWrapper;
  const msg1: Message = {
    from: { id: '1', fullname: 'Me' },
    to: selectedChannel,
    msg: 'First!',
    id: 'msg-1',
  };

  it('renders', () => {
    chatComp = setUp()
    expect(chatComp.find('[data-head]').at(0).text()).toEqual('CHAT');
    expect(chatComp.find('[data-loader]')).toHaveLength(0)
  });

  it('displays as loading', () => {
    chatComp = setUp({
      channelState: {
        ...channelState,
        selected: selectedChannel,
      },
      messagesState: {
        ...messagesState,
        loading: true,
      },
    });
    expect(chatComp.find('[data-loader]').at(0).prop('loading')).toBeTruthy()
  });

  // chatComp = setUp({
  //   channelState: {
  //     ...channelState,
  //     selected: selectedChannel,
  //   },
  //   messagesState: {
  //     ...messagesState,
  //     messages: {
  //       ...messagesState.messages,
  //       [selectedChannel.id]: [msg1],
  //     },
  //   },
  // });

})
