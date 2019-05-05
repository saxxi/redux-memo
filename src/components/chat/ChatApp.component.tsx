import * as React from 'react';
import styled from 'styled-components';

import { MessagesState } from '../../redux/chat/messages/mssages.reducer';
import { FillLoading } from '../utils/loading/FillLoading.component';
import { ChannelsListerContainer } from './channel-lister/ChannelsLister.container'
import { MessageListerContainer } from './message-lister/MessageLister.container';
import { MessageInputContainer } from './message-input/MessageInput.container';
import { ChannelState } from '../../redux/chat/channels/channels.reducer';

type Props = {
  channelState: ChannelState
  messagesState: MessagesState
}

export const ChatAppComponent: React.FC<Props> = ({channelState, messagesState}) => (
  <StyledWrapper>
    <StyledHead data-head>CHAT</StyledHead>
    <ChatWrapper>
      <ChannelsListerContainer />
      <MessageApp data-message-app>
        {channelState.selected && (
          <>
            <MessageListerContainer />
            <MessageInputContainer />
            <FillLoading loading={messagesState.loading} />
          </>
        )}
      </MessageApp>
    </ChatWrapper>
  </StyledWrapper>
)

const StyledWrapper = styled.div`
  width: 400px;
  margin: 20px auto;
`

const StyledHead = styled.div`
  background: #506086;
  padding: 20px;
  color: #fff;
`

const ChatWrapper = styled.div`
  display: flex;
  height: 300px;
  overflow: hidden;
`;

const MessageApp = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f2f3f7;
  position: relative;
`;
