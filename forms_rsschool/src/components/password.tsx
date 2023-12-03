import React from 'react';
import ErrorMessageWrapper from './ErrorMessage';

interface IFullnameProps {
    localRef: React.RefObject<HTMLInputElement>;
    message?: string;
  }

  export default class Password extends React.Component<IFullnameProps> {
    render() {
      const { localRef, message } = this.props;
      return (
        <ErrorMessageWrapper message={message}>
          <label htmlFor="password">
            Password:{' '}
            <input
              type="text"
              placeholder="Password"
              ref={localRef}
              name="password"
              id="password"
            />
          </label>
        </ErrorMessageWrapper>
      );
    }
  }