import { connect } from 'react-redux';

import Header from '../components/Header.jsx';

const mapStateToProps = state => ({ session: state.session });

const connectedHeader = connect(mapStateToProps)(Header);

export default connectedHeader;
