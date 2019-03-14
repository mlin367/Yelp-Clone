import GoogleMap from '../../components/GoogleMap';
import { connect } from 'react-redux';
import updateCoords from '../actions/updateCoords';

const mapDispatchToProps = {
  updateCoords
};

const GoogleMapContainer = connect(null, mapDispatchToProps)(GoogleMap);

export default GoogleMapContainer;