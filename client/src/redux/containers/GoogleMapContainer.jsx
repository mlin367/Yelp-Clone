import GoogleMap from '../../components/GoogleMap';
import { connect } from 'react-redux';
import updateCoords from '../actions/updateCoords';

const mapStateToProps = state => {
  return {
    currentPlace: state.currentPlace,
    data: state.data
  }
};

const mapDispatchToProps = {
  updateCoords
};

const GoogleMapContainer = connect(mapStateToProps, mapDispatchToProps)(GoogleMap);

export default GoogleMapContainer;