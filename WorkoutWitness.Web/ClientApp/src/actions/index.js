import { bindActionCreators } from 'redux';
import * as userActions from './userActions';
import * as workoutActions from './workoutActions';

export default function mapDispatchToProps(dispatch) {
  return {
      userActions: bindActionCreators(userActions, dispatch),
      workoutActions: bindActionCreators(workoutActions, dispatch)
  };
}