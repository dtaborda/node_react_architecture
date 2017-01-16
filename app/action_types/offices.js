import createAsyncActionsTypes from './utils/create_async_actions_types';

const AsyncTypes = createAsyncActionsTypes([
  'GET_OFFICES'
]);

export default { ...AsyncTypes };
