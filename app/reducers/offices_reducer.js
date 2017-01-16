import Types          from 'action_types/offices';
import matchesAction  from './utils/matches_action';

const initialState = {
  gettingOffices: false,
  officesError: null,
  offices: []
};

export default function officesReducer(state = initialState, action) {
  // Get List of Office
  if (matchesAction(action, Types.GET_OFFICES.request)) {
    state = {
      ...state,
      gettingOffices: true
    };
  }

  if (matchesAction(action, Types.GET_OFFICES.done)) {
    state = {
      ...state,
      gettingOffices: false,
      offices: action.apiResponse
    };
  }

  if (matchesAction(action, Types.GET_OFFICES.fail)) {
    state = {
      ...state,
      gettingOffices: false,
      officesError: action.apiError
    };
  }

  return state;
}
