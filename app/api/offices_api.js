export default class OfficesApi {

  constructor(api) {
    this.api = api;
  }

  getOffices(id) {
    return this.api.get({
      path: '/offices',
      ignoreAuthFailure: true
    });
  }
}
