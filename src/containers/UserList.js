import { connect } from "react-redux";
import List from '../components/List';

function mapStateToProps(state) {
    const { User } = state;
    return { users : User };
}

export default connect(
    mapStateToProps,
    null
)(List);