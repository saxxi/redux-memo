import * as React from 'react';
import styled from 'styled-components';
import ScrollToBottom from 'react-scroll-to-bottom';

import { MessagesState } from '../../../redux/chat/messages/mssages.reducer';

type Props = {
  messagesState: MessagesState
}

export const MessageListerComponent: React.FC<Props> = ({messagesState}) => (
  <StyledMessageLister>
    {messagesState.messages.map(message => (
      <div key={message.id}>{message.msg}</div>
    ))}
  </StyledMessageLister>
)

const StyledMessageLister = styled(ScrollToBottom)`
  flex: 1;
  overflow: auto;
  padding: 10px 15px;
`
