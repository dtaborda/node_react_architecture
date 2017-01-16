import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  getEmployees,
  getEmployee,
  saveEmployee,
  editEmployee,
  deleteEmployee
} from 'action_creators/employees_action_creator';
import { getOffices } from 'action_creators/offices_action_creator';
import Employees from './employees';

const select = (state) => ({
  gettingEmployees: state.employees.gettingEmployees,
  employeesError: state.employees.employeesError,
  employees: state.employees.employees,
  gettingEmployee: state.employees.gettingEmployee,
  employeeError: state.employees.employeeError,
  employee: state.employees.employee,
  storingEmployee: state.employees.storingEmployee,
  employeeStoredError: state.employees.employeeStoredError,
  employeeStored: state.employees.employeeStored,
  deletingEmployee: state.employees.deletingEmployee,
  employeeDelete: state.employees.employeeDelete,
  employeeDeleteError: state.employees.employeeDeleteError,
  gettingOffices: state.offices.gettingOffices,
  officesError: state.offices.officesError,
  offices: state.offices.offices
});

@connect(select)
export default class EmployeesContainer extends Component {
  static get propTypes() {
    return {
      dispatch: PropTypes.func.isRequired,
      gettingEmployees: PropTypes.bool,
      employeesError: PropTypes.string,
      employees: PropTypes.array,
      gettingEmployee: PropTypes.bool,
      employeeError: PropTypes.string,
      employee: PropTypes.object,
      storingEmployee: PropTypes.bool,
      employeeStoredError: PropTypes.string,
      employeeStored: PropTypes.string,
      deletingEmployee: PropTypes.bool,
      employeeDelete: PropTypes.string,
      employeeDeleteError: PropTypes.string,
      gettingOffices: PropTypes.bool,
      officesError: PropTypes.string,
      offices: PropTypes.array
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      isOpenModal: false,
      currentEmployee: null
    };
  }

  componentDidMount() {
    this.handleGetEmployees();
    this.handleGetOffices();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.employee !== nextProps.employee) {
      this.setState({
        currentEmployee: { ...nextProps.employee }
      });
    }
  }

  handleToggleModal() {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
      currentEmployee: null
    });
  }

  handleGetOffices() {
    const { dispatch } = this.props;
    dispatch(getOffices());
  }

  handleGetEmployees() {
    const { dispatch } = this.props;
    dispatch(getEmployees());
  }

  handleGetEmployee(id) {
    const { dispatch } = this.props;
    dispatch(getEmployee(id));
  }

  handleSaveEmployee(employeeForm) {
    const { dispatch } = this.props;
    dispatch(saveEmployee(employeeForm)).then(() => {
      this.handleToggleModal();
      this.handleGetEmployees();
    });
  }

  handleUpdateEmployee(employeeForm) {
    const { dispatch } = this.props;
    dispatch(editEmployee(employeeForm.id, employeeForm)).then(() => {
      this.handleToggleModal();
      this.handleGetEmployees();
    });
  }

  handleDeleteEmployee(id) {
    const { dispatch } = this.props;
    dispatch(deleteEmployee(id)).then(() => {
      this.handleToggleModal();
      this.handleGetEmployees();
    });
  }

  render() {
    const {
      employees,
      offices
    } = this.props;
    return (
      <Employees
        employees={employees}
        employee={this.state.currentEmployee}
        offices={offices}
        onGetEmployee={this.handleGetEmployee.bind(this)}
        onSaveEmployee={this.handleSaveEmployee.bind(this)}
        onUpdateEmployee={this.handleUpdateEmployee.bind(this)}
        onDeleteEmployee={this.handleDeleteEmployee.bind(this)}
        isOpenModal={this.state.isOpenModal}
        onToggleModal={this.handleToggleModal.bind(this)}
      />
    );
  }
}
