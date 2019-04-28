export type Message = {
  id: string,
  msg: string,
}

export const actionIds = {
  SEND_MESSAGE: '@/chat/messages/SEND_MESSAGE',
  ADD_MESSAGE: '@/chat/messages/ADD_MESSAGE',
}
