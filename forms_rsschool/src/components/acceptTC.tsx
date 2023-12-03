import React from 'react';
import ErrorMessageWrapper from './ErrorMessage';

interface IGenderPickerProps {
  acceptRef: React.RefObject<HTMLInputElement>;
  acceptErrMsg?: string;
}

export default class AcceptTC extends React.Component<IGenderPickerProps> {
  render() {
    const { acceptErrMsg, acceptRef } = this.props;
    return (
      <ErrorMessageWrapper message={acceptErrMsg}>
          <label htmlFor="radio-two">Please accept terms and conditions: </label>
          <input type="checkbox" id="accept" name="accept" ref={acceptRef} />
      </ErrorMessageWrapper>
    );
  }
}