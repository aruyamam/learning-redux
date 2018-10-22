import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login } from '../actions';

import Login from '../components/Login.jsx';

const mapStateToProps = (state, props) => ({ error: state.error && state.error.message });

const mapDispatchToProps = (dispatch, props) => bindActionCreators({ login }, dispatch);

const ConnectedLogin = connect(
   mapStateToProps,
   mapDispatchToProps,
)(Login);

export default ConnectedLogin;
