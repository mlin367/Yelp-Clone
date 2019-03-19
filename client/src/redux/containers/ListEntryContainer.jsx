import updateCurrentPlace from '../actions/updateCurrentPlace';
import updateResults from '../actions/updateResults';
import { connect } from 'react-redux';
import ListEntry from '../../components/ListEntry';

const mapDispatchToProps = {
  updateCurrentPlace,
  updateResults
};

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

const ListEntryContainer = connect(mapStateToProps, mapDispatchToProps)(ListEntry);

export default ListEntryContainer;