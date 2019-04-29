import * as React from 'react';
import styled from 'styled-components';

import { MessagesState } from '../../redux/chat/messages/mssages.reducer';
import { FillLoading } from '../utils/loading/Loading.component';
import { RoomListerContainer } from './room-lister/RoomLister.container'
import { MessageListerContainer } from './message-lister/MessageLister.container';
import { MessageInputContainer } from './message-input/MessageInput.container';

type Props = {
  messagesState: MessagesState
}

export const ChatAppComponent: React.FC<Props> = ({messagesState}) => (
  <StyledWrapper>
    <StyledHead>CHAT</StyledHead>
    <ChatWrapper>
      <RoomListerContainer />
      <MessageApp>
        <MessageListerContainer />
        <MessageInputContainer />
      </MessageApp>
    </ChatWrapper>
    <FillLoading loading={messagesState.loading} />
  </StyledWrapper>
)

const StyledWrapper = styled.div`
  width: 400px;
  margin: 20px auto;
  position: relative;
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
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f2f3f7;
`;
