import React from 'react';
import ErrorMessageWrapper from './ErrorMessage';

interface IFullnameProps {
    localRef: React.RefObject<HTMLInputElement>;
    message?: string;
  }

  export default class PasswordRepeat extends React.Component<IFullnameProps> {
    render() {
      const { localRef, message } = this.props;
      return (
        <ErrorMessageWrapper message={message}>
          <label htmlFor="passwordRepeat">
            Repeat password:{' '}
            <input
              type="text"
              placeholder="PasswordRepeat"
              ref={localRef}
              name="passwordRepeat"
              id="passwordRepeat"
            />
          </label>
        </ErrorMessageWrapper>
      );
    }
  }