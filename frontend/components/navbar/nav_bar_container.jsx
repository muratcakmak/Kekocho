import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import NavBar from './nav_bar';
import { logout } from '../../actions/session';

const mapStateToProps = (state, ownProps) => {
  return{
    user: state.session.currentUser,
    path: ownProps.location.pathname,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { logout: () => dispatch(logout()) };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));
