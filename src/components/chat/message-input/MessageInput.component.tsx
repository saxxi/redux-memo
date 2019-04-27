import * as React from 'react';
import { useState } from 'react';

interface Props {
  sendMessage: (message: string) => void;
}

export const MessageInputComponent: React.FC<Props> = (props: Props) => {
  const [msg, setMsg] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    props.sendMessage(msg);
    setMsg('');
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input name="inpt-chat" type="text"
        onChange={onChange}
        value={msg}
        />
      <button
        type="submit"
      >Send</button>
    </form>
  )
}
