import * as React from 'react';
import { Channel } from "../../../redux/chat/channels/channels.types";
import styled from 'styled-components';

type Props = {
  channel: Channel
  selected?: Channel
  select: (channel: Channel) => void
}
export const ItemChannel: React.FC<Props> = ({channel, select, selected}) => (
  <StyledItemChannel
    onClick={() => select(channel)}
    className={selected === channel ? 'selected': ''}
    >{channel.fullname}</StyledItemChannel>
)

const StyledItemChannel = styled.a`
  display: block;
  margin-bottom: 5px;
  padding: 6px 0 6px 15px;
  &:hover,
  &.selected {
    border-radius: 5px 0 0 5px;
    background: #506086;
    color: #fff;
  }
`
