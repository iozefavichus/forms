import React from 'react';
import ErrorMessageWrapper from './ErrorMessage';

interface IGenderPickerProps {
  maleRef: React.RefObject<HTMLInputElement>;
  femaleRef: React.RefObject<HTMLInputElement>;
  switchErrMsg?: string;
}

export default class Gender extends React.Component<IGenderPickerProps> {
  render() {
    const { switchErrMsg, maleRef, femaleRef } = this.props;
    return (
      <ErrorMessageWrapper message={switchErrMsg}>
        <fieldset className="switch-field">
          <legend>Select gender:</legend>
          <input type="radio" id="radio-one" name="switcher" value="male" ref={maleRef} />
          <label htmlFor="radio-one">Male</label>
          <input type="radio" id="radio-two" name="switcher" value="female" ref={femaleRef} />
          <label htmlFor="radio-two">Female</label>
        </fieldset>
      </ErrorMessageWrapper>
    );
  }
}