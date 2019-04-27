import * as React from 'react';
import { Message } from '../../../redux/chat/messages/messages.types';
import styled from 'styled-components';

type Props = {
  messages: Message[]
}

export const MessageListerComponent: React.FC<Props> = ({messages = []}) => (
  <StyledMessageLister>
    {messages.map(message => (
      <div key={message.msg}>{message.msg}</div>
    ))}
    <div>message last</div>
  </StyledMessageLister>
)

const StyledMessageLister = styled.div`
  background: #f2f3f7;
  flex: 1;
  overflow: auto;
`
