import React from 'react';
import ErrorMessageWrapper from './ErrorMessage';

interface IFullnameProps {
    localRef: React.RefObject<HTMLInputElement>;
    message?: string;
  }

  export default class Email extends React.Component<IFullnameProps> {
    render() {
      const { localRef, message } = this.props;
      return (
        <ErrorMessageWrapper message={message}>
          <label htmlFor="email">
            Email:{' '}
            <input
              type="text"
              placeholder="Email"
              ref={localRef}
              name="email"
              id="email"
            />
          </label>
        </ErrorMessageWrapper>
      );
    }
  }