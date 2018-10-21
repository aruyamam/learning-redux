import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CreatPost from '../components/CreatePost.jsx';
import { createPost } from '../actions';

const mapStateToProps = (state, props) => ({
   error: state.error && state.error.message,
});

const mapDispatchToProps = (dispatch, props) => bindActionCreators({ createPost }, dispatch);

const ConnectedCreatePost = connect(
   mapStateToProps,
   mapDispatchToProps,
)(CreatPost);

export default ConnectedCreatePost;
