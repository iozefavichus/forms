import React from 'react';
import ErrorMessageWrapper from './ErrorMessage';

interface ISelectProps {
  localRef: React.RefObject<HTMLSelectElement>;
  countryErrMsg: string;
}

export default class Country extends React.Component<ISelectProps> {
  render() {
    const { localRef, countryErrMsg } = this.props;
    return (
      <ErrorMessageWrapper message={countryErrMsg}>
        <label>
          Choose a country:{' '}
          <select ref={localRef}>
            <option value="">Select country</option>
            <option value="Russia">Russia</option>
            <option value="Belarus">Belarus</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Somewhere else">Somewhere else</option>
          </select>
        </label>
      </ErrorMessageWrapper>
    );
  }
}