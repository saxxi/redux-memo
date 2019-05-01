import { connect } from 'react-redux';
import { State } from '../../../redux/reducers';
import { MessageInputComponent } from './MessageInput.component';
import { sendMessageAsync } from '../../../redux/chat/messages/messages.actions';
import { Dispatch } from 'react';

const mapStateToProps = (state: State) => ({
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  sendMessage: (message: string) => dispatch(sendMessageAsync.request(message))
})

export const MessageInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInputComponent);
