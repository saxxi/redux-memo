import React, { useEffect } from 'react';
import styled from 'styled-components';

import { ChannelState } from '../../../redux/chat/channels/channels.reducer';
import { Channel } from '../../../redux/chat/channels/channels.types';
import { ItemChannel } from './ItemChannel.component';

type Props = {
  channelstate: ChannelState
  loadChannels: () => void;
  selectChannel: (channel: Channel) => void;
}

export const ChannelsListerComponent: React.FC<Props> = ({channelstate, loadChannels, selectChannel}) => {
  useEffect(() => {
    loadChannels();
  }, []);

  return (
    <StyledChannelsLister>
      {channelstate.channels.length > 0 && <FormGroup>
        <StyledTitle>Channels</StyledTitle>
        <div>
          {channelstate.channels.map(channel => (
            <ItemChannel
              key={channel.id}
              channel={channel}
              select={selectChannel}
              selected={channelstate.selected}
              />
          ))}
        </div>
      </FormGroup>}
    </StyledChannelsLister>
  );
}

const StyledChannelsLister = styled.div`
  overflow: auto;
  min-width: 150px;
  padding: 10px 0px 10px 15px;
`

const StyledTitle = styled.h3`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 10px;
`

const FormGroup = styled.div `
  margin-bottom: 30px;
`
