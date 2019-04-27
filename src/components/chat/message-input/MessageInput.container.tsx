import { connect } from 'react-redux';
import { State } from '../../../redux/reducers';
import { MessageInputComponent } from './MessageInput.component';
import { sendMessageStartAction } from '../../../redux/chat/messages/messages.actions';

const mapStateToProps = (state : State) => ({
})

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (message: string) => dispatch(sendMessageStartAction(message))
})

export const MessageInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInputComponent);
