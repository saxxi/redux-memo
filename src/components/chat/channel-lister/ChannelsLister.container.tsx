import { Dispatch } from 'react';
import { connect } from 'react-redux';

import { State } from '../../../redux/reducers';
import { loadChannelsAsync, selectChannel } from '../../../redux/chat/channels/channels.actions';
import { Channel } from '../../../redux/chat/channels/channels.types';
import { ChannelsListerComponent } from './ChannelsLister.component';

const mapStateToProps = (state: State) => ({
  channelstate: state.channelState,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  loadChannels: () => dispatch(loadChannelsAsync.request()),
  selectChannel: (channel: Channel) => dispatch(selectChannel(channel)),
});

export const ChannelsListerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelsListerComponent)
