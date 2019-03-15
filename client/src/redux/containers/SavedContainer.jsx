import Saved from '../../components/Saved';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    currentCoords: state.currentCoords,
    currentPlace: state.currentPlace,
  }
};

const SavedContainer = connect(mapStateToProps)(Saved);

export default SavedContainer;