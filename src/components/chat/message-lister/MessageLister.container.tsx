import { connect } from 'react-redux';
import { State } from '../../../redux/reducers';
import { MessageListerComponent } from './MessageLister.component';

const mapStateToProps = (state: State) => {
  const selectedChannel = state.channelState.selected
  const channelMessanges = selectedChannel ? state.messagesState.messages[selectedChannel.id] : undefined
  return {
    channelMessanges,
  }
};

const mapDispatchToProps = () => ({
});

export const MessageListerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageListerComponent);
