import Types          from 'action_types/employees';
import matchesAction  from './utils/matches_action';

const initialState = {
  gettingEmployees: false,
  employeesError: null,
  employees: [],
  gettingEmployee: false,
  employeeError: null,
  employee: {},
  storingEmployee: false,
  employeeStored: '',
  employeeStoredError: null,
  editingEmployee: false,
  employeeEditing: '',
  employeeEditingError: null,
  deletingEmployee: false,
  employeeDelete: '',
  employeeDeleteError: null
};

export default function employeesReducer(state = initialState, action) {
  // Get List of Employee
  if (matchesAction(action, Types.GET_EMPLOYEES.request)) {
    state = {
      ...state,
      gettingEmployees: true
    };
  }

  if (matchesAction(action, Types.GET_EMPLOYEES.done)) {
    state = {
      ...state,
      gettingEmployees: false,
      employees: action.apiResponse
    };
  }

  if (matchesAction(action, Types.GET_EMPLOYEES.fail)) {
    state = {
      ...state,
      gettingEmployees: false,
      employeesError: action.apiError
    };
  }

  // Get Employee
  if (matchesAction(action, Types.GET_EMPLOYEE.request)) {
    state = {
      ...state,
      gettingEmployee: true
    };
  }

  if (matchesAction(action, Types.GET_EMPLOYEE.done)) {
    state = {
      ...state,
      gettingEmployee: false,
      employee: action.apiResponse
    };
  }

  if (matchesAction(action, Types.GET_EMPLOYEE.fail)) {
    state = {
      ...state,
      gettingEmployee: false,
      employeeError: action.apiError
    };
  }

  // Save Employee
  if (matchesAction(action, Types.SAVE_EMPLOYEE.request)) {
    state = {
      ...state,
      storingEmployee: true
    };
  }

  if (matchesAction(action, Types.SAVE_EMPLOYEE.done)) {
    state = {
      ...state,
      storingEmployee: false,
      employeeStored: action.apiResponse
    };
  }

  if (matchesAction(action, Types.SAVE_EMPLOYEE.fail)) {
    state = {
      ...state,
      storingEmployee: false,
      employeeStoredError: action.apiError
    };
  }

  // Edit Employee
  if (matchesAction(action, Types.EDIT_EMPLOYEE.request)) {
    state = {
      ...state,
      editingEmployee: true
    };
  }

  if (matchesAction(action, Types.EDIT_EMPLOYEE.done)) {
    state = {
      ...state,
      editingEmployee: false,
      employeeEditing: action.apiResponse
    };
  }

  if (matchesAction(action, Types.EDIT_EMPLOYEE.fail)) {
    state = {
      ...state,
      editingEmployee: false,
      employeeEditingError: action.apiError
    };
  }

  // Delete Employee
  if (matchesAction(action, Types.DELETE_EMPLOYEE.request)) {
    state = {
      ...state,
      deletingEmployee: true
    };
  }

  if (matchesAction(action, Types.DELETE_EMPLOYEE.done)) {
    state = {
      ...state,
      deletingEmployee: false,
      employeeDelete: action.apiResponse
    };
  }

  if (matchesAction(action, Types.DELETE_EMPLOYEE.fail)) {
    state = {
      ...state,
      deletingEmployee: false,
      employeeDeleteError: action.apiError
    };
  }
  return state;
}
