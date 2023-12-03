import React, { PropsWithChildren } from 'react';

import styles from '../styles/error.module.css';

interface IErrorMessageWrapper {
  message?: string;
}

export default class ErrorMessageWrapper extends React.Component<
  PropsWithChildren<IErrorMessageWrapper>
> {
  render() {
    const { children, message } = this.props;
    return (
      <>
        {children}
        {message && <p className={styles.errors}>{message}</p>}
      </>
    );
  }
}