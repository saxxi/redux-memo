import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import { withAutcompleteOff } from '../../utils/hoc/Input'
import { StartMessage } from '../../../redux/chat/messages/messages.types';
import { ChannelState } from '../../../redux/chat/channels/channels.reducer';
import { UserState } from '../../../redux/user/user.reducer';

interface Props {
  userState: UserState,
  channelstate: ChannelState,
  sendMessage: (message: StartMessage) => void;
}

export const MessageInputComponent: React.FC<Props> = (props: Props) => {
  const [msg, setMsg] = useState('');
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!props.channelstate.selected) return
    const startMessage: StartMessage = {
      from: props.userState.user,
      to: props.channelstate.selected,
      msg,
    }
    props.sendMessage(startMessage);
    setMsg('');
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  }
  return (
    <StyledForm onSubmit={onSubmit}>
      <InputBox type="text"
        placeholder="Type here..."
        onChange={onChange}
        value={msg}
        />
      <StyledButton
        type="submit"
      >SEND</StyledButton>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  padding: 10px 15px;
  display: flex;
  padding: 10px;
`

const InputBox = withAutcompleteOff(styled.input`
  flex: 1;
  border: none;
  border-radius: 5px 0px 0px 5px;
  padding: 10px 15px;
  font-size: 0.8em;
`)

const StyledButton = styled.button`
  border: none;
  background: #506086;
  color: #fff;
  padding: 5px 10px;
  border-radius: 0px 5px 5px 0px;
`
