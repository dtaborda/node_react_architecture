import createAsyncActionsTypes from './utils/create_async_actions_types';

const AsyncTypes = createAsyncActionsTypes([
  'GET_EMPLOYEES',
  'GET_EMPLOYEE',
  'DELETE_EMPLOYEE',
  'SAVE_EMPLOYEE',
  'EDIT_EMPLOYEE'
]);

export default { ...AsyncTypes };
