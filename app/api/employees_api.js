export default class EmployeesApi {

  constructor(api) {
    this.api = api;
  }

  getEmployees() {
    return this.api.get({
      path: '/employees',
      ignoreAuthFailure: true
    });
  }

  getEmployee(id) {
    return this.api.get({
      path: `/employees/${id}`,
      ignoreAuthFailure: true
    });
  }

  deleteEmployee(id) {
    return this.api.delete({
      path: `/employees/${id}`,
      ignoreAuthFailure: true
    });
  }

  saveEmployee(newEmployees) {
    return this.api.post({
      path: '/employees/',
      body: newEmployees,
      ignoreAuthFailure: true
    });
  }

  editEmployee(id, employees) {
    return this.api.put({
      path: `/employees/${id}`,
      body: employees,
      ignoreAuthFailure: true
    });
  }
}
