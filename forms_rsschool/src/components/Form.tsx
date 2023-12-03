import React from 'react';
import styles from '../styles/form.nodule.css';

import Name from "./name";
import Age from "./age";
import Email from "./email";
import Gender from "./gender";
import Password from "./password";
import PasswordRepeat from "./passwrodRepeat";
import AcceptTC from "./acceptTC";
import FileInput from "./fileInput";
import Country from "./country";
import validateForm from './ValidateForm';

import { IFormCard } from './FormData';

interface IFormPageProps {
    addCard(card: IFormCard): void;
  }

interface IFormPageState {
    nameErrMsg: string;
    ageErrMsg: string;
    emailErrMsg: string;
    passErrMsg: string;
    passRepeatErrMsg: string;
    genderErrMsg: string;
    acceptErrMsg: string;
    fileErrMsg: string;
    countryErrMsg: string;
  }

const INITIAL_STATE = {
    nameErrMsg: '',
    ageErrMsg: '',
    emailErrMsg: '',
    passErrMsg: '',
    passRepeatErrMsg: '',
    genderErrMsg: '',
    acceptErrMsg: '',
    fileErrMsg: '',
    countryErrMsg: '',
  };

  export default class Form extends React.Component<IFormPageProps, IFormPageState> {
    nameRef = React.createRef<HTMLInputElement>();
    ageRef = React.createRef<HTMLInputElement>();
    emailRef = React.createRef<HTMLInputElement>();
    passRef = React.createRef<HTMLInputElement>();
    passRepeatRef = React.createRef<HTMLInputElement>();
    genderRef = React.createRef<HTMLInputElement>();
    acceptRef = React.createRef<HTMLInputElement>();
    fileRef = React.createRef<HTMLInputElement>();
    countryRef = React.createRef<HTMLInputElement>();
    formRef = React.createRef<HTMLFormElement>();

    constructor(props: IFormPageProps) {
        super(props);
        this.state = INITIAL_STATE;
        this.onSubmit = this.onSubmit.bind(this);
      }

    onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const validationData = {
          name: this.nameRef.current?.value,
          age: this.ageRef.current?.value,
          email: this.emailRef.current?.value,
          password: this.passRef.current?.value,
          passwordRepeat: this.passRepeatRef.current?.value,
          gender:this.genderRef.current?.value,
          accept:this.acceptRef.current?.value,
          file:this.fileRef.current?.files,
          country:this.countryRef.current?.value,
        };
        const validateResults = validateForm(validationData);
        this.setState(validateResults.errorMsgs);
        if (validateResults.valid) {
            const cardData = {
                name: validationData.name!,
                age: validationData.age!,
                email: validationData.email!,
                password: validationData.password!,
                passwordRepeat: validationData.passwordRepeat!,
                gender: validationData.gender!,
                accept: validationData.accept!,
                file: validationData.file!,
                country: validationData.country!,
             };
            const { addCard } = this.props;
            addCard(cardData);
            this.formRef.current?.reset();
    }
  }

      render(){
        const { nameErrMsg, ageErrMsg, emailErrMsg, passErrMsg, passRepeatErrMsg, genderErrMsg, acceptErrMsg, fileErrMsg, countryErrMsg } = this.state;
        return (
          <div className="form-container">
            <form className="form" onSubmit={this.onSubmit} ref={this.formRef}>
              <Name localRef={this.nameRef} message={nameErrMsg} />
              <Age localRef={this.ageRef} ageErrMsg={ageErrMsg} />
              <Email localRef={this.emailRef} emailErrMsg={emailErrMsg} />
              <Password localRef={this.passRef} passErrMsg={passErrMsg}/>
              <PasswordRepeat localRef={this.passRepeatRef} passRepeatErrMsg={passRepeatErrMsg}/>
              <Gender localRef={this.genderRef} genderErrMsg={genderErrMsg}/>
              <AcceptTC localRef={this.acceptRef} acceptErrMsg={acceptErrMsg}/>
              <FileInput localRef={this.fileRef} fileErrMsg={fileErrMsg}/>
              <Country localRef={this.countryRef} countryErrMsg={countryErrMsg}/>
              <input className="btn-submit" type="submit" value="Submit" />
            </form>
          </div>
        );
      }
  }
