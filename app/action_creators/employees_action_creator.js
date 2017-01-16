import Types from 'action_types/employees';

export function getEmployees() {
  return {
    type: Types.GET_EMPLOYEES,
    callAPI: (api) => api.employees.getEmployees()
  };
}

export function getEmployee(id) {
  return {
    type: Types.GET_EMPLOYEE,
    callAPI: (api) => api.employees.getEmployee(id)
  };
}

export function deleteEmployee(id) {
  return {
    type: Types.DELETE_EMPLOYEE,
    callAPI: (api) => api.employees.deleteEmployee(id)
  };
}

export function saveEmployee(newEmployees) {
  return {
    type: Types.SAVE_EMPLOYEE,
    callAPI: (api) => api.employees.saveEmployee(newEmployees)
  };
}

export function editEmployee(id, employees) {
  return {
    type: Types.EDIT_EMPLOYEE,
    callAPI: (api) => api.employees.editEmployee(id, employees)
  };
}
