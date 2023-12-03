import React from 'react';
import ErrorMessageWrapper from './ErrorMessage';

interface IFullnameProps {
    localRef: React.RefObject<HTMLInputElement>;
    message?: string;
  }

  export default class FullnameInput extends React.Component<IFullnameProps> {
    render() {
      const { localRef, message } = this.props;
      return (
        <ErrorMessageWrapper message={message}>
          <label htmlFor="name">
            Name:{' '}
            <input
              type="text"
              placeholder="Name"
              ref={localRef}
              name="name"
              id="name"
            />
          </label>
        </ErrorMessageWrapper>
      );
    }
  }