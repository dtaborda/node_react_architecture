let DB;
const service = {};
let employeesIndex = 1;

const getOfficeName = (officeId) => {
  let officeName = '';
  DB.offices.map((item, index) => {
    if (item.id == officeId) {
      officeName = item.name;
    }
  });

  return officeName;
};

const generateListOfEmployee = () => {
  return DB.employees.map((item, index) => {
    return {
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      initials: item.initials,
      officeName: getOfficeName(item.officeId)
    };
  });
};

service.setDB = (db) => {
  console.log('Setting DB in Services');
  DB = db;
};

service.getEmployees = () => {
  const p = new Promise((resolve, reject) => {
    if (DB.employees) {
      resolve(generateListOfEmployee());
    } else {
      reject('error');
    }
  });
  return p;
};

service.getEmployee = (id) => {
  const p = new Promise((resolve, reject) => {
    if (DB.employees) {
      DB.employees.map((item, index) => {
        if (item.id == id) {
          resolve(item);
        }
      });
      reject("Employee dosn't exit");
    } else {
      reject('error');
    }
  });
  return p;
};

service.deleteEmployee = (id) => {
  const p = new Promise((resolve, reject) => {
    if (DB.employees) {
      DB.employees = DB.employees.filter((item) => item.id != id);
      resolve(`The employee with ${id} was deleted`);
    } else {
      reject('error');
    }
  });
  return p;
};

service.saveEmployee = (newEmployee) => {
  const p = new Promise((resolve, reject) => {
    if (newEmployee) {
      newEmployee.id = newEmployee.id ? newEmployee.id : employeesIndex++;
      DB.employees.push(newEmployee);
      resolve('new Employee was added');
    } else {
      reject('error');
    }
  });
  return p;
};

service.updateEmployee = (id, newEmployee) => {
  const p = new Promise((resolve, reject) => {
    if (newEmployee) {
      DB.employees.map((item, index) => {
        if (item.id == id) {
          item.firstName = newEmployee.firstName;
          item.lastName = newEmployee.lastName;
          item.initials = newEmployee.initials;
          item.officeId = newEmployee.officeId;
          resolve(`Employee ${newEmployee.firstName} ${newEmployee.lastName} was updated`);
        }
      });
      reject("Employee dosn't exit");
    } else {
      reject('error');
    }
  });
  return p;
};

service.getOffices = () => {
  const p = new Promise((resolve, reject) => {
    if (DB.offices) {
      resolve(DB.offices);
    } else {
      reject('error');
    }
  });
  return p;
};

module.exports = service;
