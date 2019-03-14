import EntryDetail from '../../components/EntryDetail';
import { connect } from 'react-redux';
import updateCurrentPlace from '../actions/updateCurrentPlace';

const mapStateToProps = state => {
  return {
    currentPlace: state.currentPlace,
    currentCoords: state.currentCoords
  };
};

const mapDispatchToProps = {
  updateCurrentPlace
};

const EntryDetailContainer = connect(mapStateToProps, mapDispatchToProps)(EntryDetail);

export default EntryDetailContainer;