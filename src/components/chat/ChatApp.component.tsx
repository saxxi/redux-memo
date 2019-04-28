import * as React from 'react';
import { RoomListerContainer } from './room-lister/RoomLister.container'
import { MessageListerContainer } from './message-lister/MessageLister.container';
import { MessageInputContainer } from './message-input/MessageInput.container';
import styled from 'styled-components';

export const ChatAppComponent: React.FC = () => {
  return (
    <>
      <StyledWrapper>
        <StyledHead>CHAT</StyledHead>
        <ChatWrapper>
          <RoomListerContainer />
          <MessageApp>
            <MessageListerContainer />
            <MessageInputContainer />
          </MessageApp>
        </ChatWrapper>
      </StyledWrapper>
    </>
  )
}

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
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f2f3f7;
`;