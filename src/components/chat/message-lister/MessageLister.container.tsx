import { connect } from 'react-redux';
import { State } from '../../../redux/reducers';
import { MessageListerComponent } from './MessageLister.component';

const mapStateToProps = (state: State) => ({
  messagesState: state.messagesState,
  channelState: state.channelState,
});

const mapDispatchToProps = () => ({
});

export const MessageListerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageListerComponent);
