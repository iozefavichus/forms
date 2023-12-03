import React from 'react';
import ErrorMessageWrapper from './ErrorMessage';

interface IGenderPickerProps {
  localRef: React.RefObject<HTMLInputElement>;
  acceptErrMsg?: string;
}

export default class AcceptTC extends React.Component<IGenderPickerProps> {
  render() {
    const { localRef, acceptErrMsg } = this.props;
    return (
      <ErrorMessageWrapper message={acceptErrMsg}>
          <label htmlFor="accept">Please accept terms and conditions:
              <input type="checkbox" id="accept" name="accept" ref={localRef} />
          </label>
      </ErrorMessageWrapper>
    );
  }
}

