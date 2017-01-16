import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Button from 'views/shared/button';

import styles from './styles.scss';

function addClassName(el, className) {
  const classes = el.className.split(' ');
  if (classes.indexOf(className) === -1) {
    el.className = classes.concat(className).join('');
  }
}

function removeClassName(el, className) {
  const classes = el.className.split(' ');
  el.className = classes.filter((c) => c !== className).join('');
}

export default class Modal extends Component {
  static get propTypes() {
    return {
      children: PropTypes.node,
      className: PropTypes.string,
      title: PropTypes.string,
      isOpen: PropTypes.bool.isRequired,
      onClose: PropTypes.func.isRequired
    };
  }

  handleClose() {
    removeClassName(document.body, styles.bodyWithOpenModal);
    this.props.onClose();
  }

  render() {
    const {
      title,
      className,
      children,
      isOpen
    } = this.props;
    console.log('isOpen', isOpen);
    if (isOpen) {
      addClassName(document.body, styles.bodyWithOpenModal);
      return (
        <div className={classNames(styles.overlay, className)}>
          <div className={styles.content}>
            <div className={styles.header}>
              <h1>{title}</h1>
              <Button
                className={styles.closeModal}
                style='link'
                onClick={this.handleClose.bind(this)}
              >X</Button>
            </div>
            <div className={styles.body}>
              {children}
            </div>
          </div>
        </div>
      );
    } else {
      removeClassName(document.body, styles.bodyWithOpenModal);
      return null;
    }
  }
}
