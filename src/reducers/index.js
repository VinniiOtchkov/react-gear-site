import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import equipment from './equipment';

const rootReducer = combineReducers({
  equipment,
  form: formReducer
});

export default rootReducer;
