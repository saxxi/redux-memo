import { connect } from 'react-redux';
import { State } from '../../../redux/reducers';
import { RoomListerComponent } from './RoomLister.component';

const mapStateToProps = (state: State) => ({
});

const mapDispatchToProps = () => ({
});

export const RoomListerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomListerComponent)
