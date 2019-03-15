import Home from '../../components/Home';
import { connect } from 'react-redux';
import updateResults from '../actions/updateResults';
import updateCurrentPlace from '../actions/updateCurrentPlace';

const mapStateToProps = state => {
  return {
    currentCoords: state.currentCoords,
    currentPlace: state.currentPlace,
    data: state.data
  }
};

const mapDispatchToProps = {
  updateResults,
  updateCurrentPlace
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;