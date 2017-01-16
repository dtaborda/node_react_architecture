import EmployeesApi from './employees_api';
import OfficesApi from './offices_api';
import Api from './api';

export default class ApiFacade {

  constructor(req) {
    const api = new Api(req);
    this.employeesApi = new EmployeesApi(api);
    this.officesApi = new OfficesApi(api);
  }

  get employees() {
    return this.employeesApi;
  }

  get offices() {
    return this.officesApi;
  }
}
