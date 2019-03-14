import Home from '../../components/Home';
import { connect } from 'react-redux';
import updateResults from '../actions/updateResults';

const mapStateToProps = state => {
  return {
    currentCoords: state.currentCoords,
    currentPlace: state.currentPlace,
    data: state.data
  }
};

const mapDispatchToProps = {
  updateResults
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;