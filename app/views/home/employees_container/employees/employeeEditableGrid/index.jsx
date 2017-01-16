import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Button from 'views/shared/button';

import styles from './styles.scss';


export default class EmployeeEditableGrid extends Component {
  static get propTypes() {
    return {
      className: PropTypes.string,
      employees: PropTypes.array.isRequired,
      onEdit: PropTypes.func.isRequired
    };
  }

  handleEditEmployee(id) {
    this.props.onEdit(id);
  }

  renderEmployees() {
    if (this.props.employees.length > 0) {
      return this.props.employees.map((item, index) => {
        return (
          <div key={index} className={classNames(styles.tableRow, styles.body)}>
            <div className={classNames(styles.cell, styles.firstNameCell)}>{item.firstName}</div>
            <div className={classNames(styles.cell, styles.lastNameCell)}>{item.lastName}</div>
            <div className={classNames(styles.cell, styles.initialsCell)}>{item.initials}</div>
            <div className={classNames(styles.cell, styles.officeCell)}>{item.officeName}</div>
            <div className={classNames(styles.cell, styles.editCell)}>
              <Button
                className={styles.editBtn}
                style='link'
                onClick={this.handleEditEmployee.bind(this, item.id)}
              >
                Edit
              </Button>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className={classNames(styles.tableRow, styles.body)}>
          <div className={classNames(styles.cell, styles.emptyEmployee)}>
            There are no employees availables
          </div>
        </div>
      );
    }
  }

  renderHeader() {
    return (
      <div className={classNames(styles.tableRow, styles.header)}>
        <div className={classNames(styles.firstNameCell, styles.cell)}>First Name</div>
        <div className={classNames(styles.cell, styles.lastNameCell)}>Last Name</div>
        <div className={classNames(styles.cell, styles.initialsCell)}>Initials</div>
        <div className={classNames(styles.cell, styles.officeCell)}>Office</div>
        <div className={classNames(styles.cell, styles.editCell)}></div>
      </div>
    );
  }

  render() {
    return (
      <div className={classNames(styles.content, this.props.className)}>
        {this.renderHeader()}
        {this.renderEmployees()}
      </div>
    );
  }
}
