import { bindActionCreators } from 'redux';
import * as userActions from './userActions';
import * as workoutActions from './workoutActions';
import * as workoutCreatorActions from './workoutCreatorActions';

export default function mapDispatchToProps(dispatch) {
  return {
      userActions: bindActionCreators(userActions, dispatch),
      workoutActions: bindActionCreators(workoutActions, dispatch),
      workoutCreatorActions: bindActionCreators(workoutCreatorActions, dispatch),
      dispatch: dispatch
  };
}