import React from 'react';
import ErrorMessageWrapper from './ErrorMessage';

interface IFileInputProps {
  localRef: React.RefObject<HTMLInputElement>;
  fileErrMsg: string;
}

export default class FileInput extends React.Component<IFileInputProps> {
  render() {
    const { fileErrMsg, localRef } = this.props;
    return (
      <ErrorMessageWrapper message={fileErrMsg}>
        <label htmlFor="file-input">
          Add picture <input type="file" name="file-input" id="file-input" ref={localRef} />
        </label>
      </ErrorMessageWrapper>
    );
  }
}