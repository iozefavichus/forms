import React from 'react';


export interface ICard {
  id:number;
  name: string;
  age: number;
  email: string;
  password:string;
  gender: string;
  country: string;
}

export interface ICardProps {
  cardData: ICard;
}

export class Card extends React.Component<ICardProps, unknown> {
  constructor(props: ICardProps) {
    super(props);
    this.state = {};
  }

  render() {
    const { cardData } = this.props;
    const { name, age, email, password, gender, country } = cardData;
    // const userImg = getUserImg(username);
    return (
      <div className="card" role="listitem">
        {/* <img className="card-img" src={userImg} alt={`${username}`} /> */}
        <p>{name}</p>
        <p>{age}</p>
        <p>{email}</p>
        <p>{password}</p>
        <p>{gender}</p>
        <p>{country}</p>
      </div>
    );
  }
}