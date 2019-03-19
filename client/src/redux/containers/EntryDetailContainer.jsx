import EntryDetail from '../../components/EntryDetail';
import { connect } from 'react-redux';
import updateCurrentPlace from '../actions/updateCurrentPlace';
import updateResults from '../actions/updateResults';

const mapStateToProps = state => {
  return {
    currentPlace: state.currentPlace,
    currentCoords: state.currentCoords,
    data: state.data
  };
};

const mapDispatchToProps = {
  updateCurrentPlace,
  updateResults
};

const EntryDetailContainer = connect(mapStateToProps, mapDispatchToProps)(EntryDetail);

export default EntryDetailContainer;