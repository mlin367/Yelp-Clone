import NavBar from '../../components/NavBar';
import { connect } from 'react-redux';
import updateCurrentPlace from '../actions/updateCurrentPlace';

const mapStateToProps = state => {
  return {
    currentCoords: state.currentCoords
  };
};

const mapDispatchToProps = {
  updateCurrentPlace
};

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;