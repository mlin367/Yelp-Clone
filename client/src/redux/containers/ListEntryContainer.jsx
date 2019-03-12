import updateCurrentPlace from '../actions/updateCurrentPlace';
import { connect } from 'react-redux';
import ListEntry from '../../components/ListEntry';

const mapDispatchToProps = {
  updateCurrentPlace
};

const ListEntryContainer = connect(null, mapDispatchToProps)(ListEntry);

export default ListEntryContainer;