import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../redux/reducers';
import { ChatAppComponent } from './ChatApp.component';

const mapStateToProps = (state: State) => ({
  messagesState: state.messagesState,
});

const mapDispatchToProps = (dispatch) => ({
});

export const ChatAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatAppComponent);
