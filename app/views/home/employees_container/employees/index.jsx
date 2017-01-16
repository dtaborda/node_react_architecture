import React, { Component, PropTypes } from 'react';
import Button from 'views/shared/button';
import Modal from 'views/shared/modal';
import EmployeesForm from 'views/shared/forms/employees';
import EmployeeEditableGrid from './employeeEditableGrid';

import styles from './styles.scss';


export default class EmployeesContainer extends Component {
  static get propTypes() {
    return {
      employees: PropTypes.array.isRequired,
      employee: PropTypes.object,
      offices: PropTypes.array,
      isOpenModal: PropTypes.bool.isRequired,
      onGetEmployee: PropTypes.func.isRequired,
      onSaveEmployee: PropTypes.func.isRequired,
      onUpdateEmployee: PropTypes.func.isRequired,
      onDeleteEmployee: PropTypes.func.isRequired,
      onToggleModal: PropTypes.func.isRequired
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      titleModal: '',
      footerModal: null,
      handleSubmit: null
    };
  }

  handleNewEmployee() {
    this.props.onToggleModal();
    this.setState({
      titleModal: 'New Employee',
      footerModal: this.renderNewEmployeeFooterModal.bind(this),
      handleSubmit: this.props.onSaveEmployee
    });
  }

  handleEditEmployee(id) {
    const {
      onToggleModal,
      onGetEmployee
    } = this.props;

    onGetEmployee(id);
    onToggleModal();

    this.setState({
      titleModal: 'Edit Employee',
      footerModal: this.renderEditEmployeeFooterModal.bind(this),
      handleSubmit: this.props.onUpdateEmployee
    });
  }

  handleDeleteEmployee() {
    const {
      onDeleteEmployee
    } = this.props;

    onDeleteEmployee(this.props.employee.id);
  }

  handleCloseModal() {
    this.props.onToggleModal();
  }

  renderNewEmployeeFooterModal() {
    return (
      <div className={styles.wrapNewEmployeeFooterButton}>
        <Button onClick={this.handleCloseModal.bind(this)}>Cancel</Button>
        <Button
          className={styles.submitBtn}
          type='submit'
        >
          Add Employee
        </Button>
      </div>
    );
  }

  renderEditEmployeeFooterModal() {
    return (
      <div className={styles.wrapButton}>
        <Button
          style='danger'
          onClick={this.handleDeleteEmployee.bind(this)}
        >
          Delete Employee
        </Button>
        <div className={styles.wrapButtonCancelSave}>
          <Button onClick={this.handleCloseModal.bind(this)}>Cancel</Button>
          <Button
            className={styles.submitBtn}
            type='submit'
          >
            Save Employee
          </Button>
        </div>
      </div>
    );
  }

  renderEmployee() {
    const { employee, offices } = this.props;
    if (this.state.footerModal) {
      return (
        <div>
          <EmployeesForm
            employee={employee}
            offices={offices}
            onSubmit={this.state.handleSubmit}
          >
            {this.state.footerModal()}
          </EmployeesForm>
        </div>
      );
    }
  }

  renderModal() {
    const {
      isOpenModal,
      onToggleModal
    } = this.props;

    return (
      <Modal
        title={this.state.titleModal}
        isOpen={isOpenModal}
        onClose={onToggleModal}
      >
        {this.renderEmployee()}
      </Modal>
    );
  }

  render() {
    const { employees } = this.props;
    return (
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>Employees</h1>
          <Button onClick={this.handleNewEmployee.bind(this)}>New Employee</Button>
        </div>
        <EmployeeEditableGrid
          className={styles.table}
          employees={employees}
          onEdit={this.handleEditEmployee.bind(this)}
        />
        {this.renderModal()}
      </div>
    );
  }
}
