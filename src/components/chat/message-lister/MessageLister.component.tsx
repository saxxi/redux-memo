import * as React from 'react';
import styled from 'styled-components';
import ScrollToBottom from 'react-scroll-to-bottom';

import { Message } from '../../../redux/chat/messages/messages.types';

type Props = {
  channelMessanges?: Message[]
}

export const MessageListerComponent: React.FC<Props> = ({channelMessanges}) => (
  <StyledMessageLister>
    {channelMessanges && channelMessanges.map(message => (
      <div data-msg key={message.id}>{message.msg}</div>
    ))}
  </StyledMessageLister>
)

const StyledMessageLister = styled(ScrollToBottom)`
  flex: 1;
  overflow: auto;
  padding: 10px 15px;
`
