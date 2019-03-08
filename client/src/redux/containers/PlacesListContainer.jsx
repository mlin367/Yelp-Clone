import { connect } from 'react-redux';
import PlacesList from '../../components/PlacesList';

const mapStateToProps = state => {
  return {
    data: state.data
  }
};

const PlacesListContainer = connect(mapStateToProps)(PlacesList);

export default PlacesListContainer;