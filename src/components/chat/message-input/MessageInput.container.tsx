import { Dispatch } from 'react';
import { connect } from 'react-redux';

import { State } from '../../../redux/reducers';
import { sendMessageAsync } from '../../../redux/chat/messages/messages.actions';
import { MessageInputComponent } from './MessageInput.component';

const mapStateToProps = (state: State) => ({
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  sendMessage: (msg: string) => dispatch(sendMessageAsync.request(msg))
})

export const MessageInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInputComponent);
