import { User } from '../../redux/user/user.types';
import { Channel, UserGroup } from '../../redux/chat/channels/channels.types';

import uuid from 'uuid/v4';

export const loadChannels = (): Promise<Channel[]> => {
  const promise = new Promise<Channel[]>((resolve) => {
    setTimeout(() => {
      const pierre: User = {
        id: uuid(),
        fullname: 'Pierre',
      }
      const albert: User = {
        id: uuid(),
        fullname: 'Albert',
      }
      const bffFriends: UserGroup = {
        id: uuid(),
        fullname: 'Special Friends',
      }
      const family: UserGroup = {
        id: uuid(),
        fullname: 'Family Group',
      }
      const channels: Channel[] = [albert, pierre, bffFriends, family];
      resolve(channels)
    }, 300)
  });

  return promise;
};
