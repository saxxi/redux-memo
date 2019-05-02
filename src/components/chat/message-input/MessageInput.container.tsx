import { Dispatch } from 'react';
import { connect } from 'react-redux';

import { State } from '../../../redux/reducers';
import { sendMessageAsync } from '../../../redux/chat/messages/messages.actions';
import { MessageInputComponent } from './MessageInput.component';
import { StartMessage } from '../../../redux/chat/messages/messages.types';

const mapStateToProps = (state: State) => ({
  userState: state.userState,
  channelstate: state.channelState,
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  sendMessage: (msg: StartMessage) => dispatch(sendMessageAsync.request(msg))
})

export const MessageInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInputComponent);
