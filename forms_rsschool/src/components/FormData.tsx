import React from 'react';

export interface IFormCard {
  name: string;
  age: string;
  email: string;
  password: string;
  gender: string;
  country: string;
  // imgURL: string;
  id?: number;
}

export default class FormCard extends React.Component<IFormCard> {
  render() {
    const { name, age, email, password, gender, country } = this.props;
    return (
      <div className="card">
        {/* <img className="card-img" src={imgURL} alt="" /> */}
        <p className="card-name">{name}</p>
        <p className="card-general">{age}</p>
        <p className="card-general">{email}</p>
        <p className="card-general">{password}</p>
        <p className="card-general">{gender}</p>
        <p className="card-general">{country}</p>
      </div>
    );
  }
}