import EntryDetail from '../../components/EntryDetail';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    currentPlace: state.currentPlace
  };
};

const EntryDetailContainer = connect(mapStateToProps)(EntryDetail);

export default EntryDetailContainer;