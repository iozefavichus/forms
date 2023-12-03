import React from 'react';

import { IFormCard } from './FormData';
import FormCard from './FormData';

interface IFormCardListProps {
  cards: IFormCard[];
}

export default class FormCardList extends React.Component<IFormCardListProps> {
  render() {
    const { cards } = this.props;
    return (
      <div className="card-list">
        {cards.map((card) => (
          <FormCard
            key={card.id}
            name={card.name}
            age={card.age}
            email={card.email}
            password={card.password}
            gender={card.gender}
            country={card.country}
            // imgURL={card.imgURL}
          />
        ))}
      </div>
    );
  }
}