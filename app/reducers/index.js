import { combineReducers } from 'redux';

import employees from './employees_reducer';
import offices from './offices_reducer';

const rootReducer = combineReducers({
  employees,
  offices
});

export default rootReducer;
