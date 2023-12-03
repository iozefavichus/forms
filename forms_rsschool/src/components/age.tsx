import React from 'react';
import ErrorMessageWrapper from './ErrorMessage';

interface IFullnameProps {
    localRef: React.RefObject<HTMLInputElement>;
    message?: string;
  }

  export default class Age extends React.Component<IFullnameProps> {
    render() {
      const { localRef, message } = this.props;
      return (
        <ErrorMessageWrapper message={message}>
          <label htmlFor="age">
            Age:{' '}
            <input
              type="text"
              placeholder="Age"
              ref={localRef}
              name="age"
              id="age"
            />
          </label>
        </ErrorMessageWrapper>
      );
    }
  }