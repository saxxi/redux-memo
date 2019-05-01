import { connect } from 'react-redux';
import { State } from '../../redux/reducers';
import { ChatAppComponent } from './ChatApp.component';

const mapStateToProps = (state: State) => ({
  channelState: state.channelState,
  messagesState: state.messagesState,
});

const mapDispatchToProps = () => ({
});

export const ChatAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatAppComponent);
