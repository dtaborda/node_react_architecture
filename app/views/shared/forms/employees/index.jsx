import React, { PropTypes, Component } from 'react';
import Form from 'react-jsonschema-form';

import styles from './styles.scss';


export default class EmployeesForm extends Component {
  static get propTypes() {
    return {
      children: PropTypes.node,
      className: PropTypes.string,
      employee: PropTypes.object,
      offices: PropTypes.array,
      onSubmit: PropTypes.func
    };
  }

  handleSubmit(form) {
    this.props.onSubmit(form.formData);
  }

  render() {
    const officesId = [], OfficesNames = [];
    this.props.offices.map((item, index) => {
      officesId.push(item.id);
      OfficesNames.push(item.name);
    });

    const schema = {
      type: 'object',
      required: ['firstName', 'lastName', 'initials'],
      properties: {
        firstName: { type: 'string', title: 'First Name' },
        lastName: { type: 'string', title: 'Last Name' },
        initials: { type: 'string', title: 'Initials' },
        officeId: {
          title: 'Office',
          type: 'number',
          enum: officesId,
          enumNames: OfficesNames
        }
      }
    };

    const uiSchema = {
      firstName: {
        classNames: styles.inputWrap
      },
      lastName: {
        classNames: styles.inputWrap
      },
      initials: {
        classNames: styles.inputWrap
      },
      officeId: {
        classNames: styles.inputWrap
      }
    };

    return (
      <Form
        className={styles.content}
        schema={schema}
        uiSchema={uiSchema}
        formData={this.props.employee}
        onSubmit={this.handleSubmit.bind(this)}
      >
        {this.props.children}
      </Form>
    );
  }
}
