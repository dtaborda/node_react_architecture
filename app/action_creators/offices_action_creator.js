import Types from 'action_types/offices';

export function getOffices() {
  return {
    type: Types.GET_OFFICES,
    callAPI: (api) => api.offices.getOffices()
  };
}
