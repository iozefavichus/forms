import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from '../components/Form';
import { IFormCard } from '../components/FormData';
import FormCardList from '../components/FormCardList';

interface IFormPageProps {
  changeTitle(): void;
}

interface IFormPageState {
  cards: IFormCard[];
}

export default class FormPage extends React.Component<IFormPageProps, IFormPageState> {
  constructor(props: IFormPageProps) {
    super(props);
    this.state = { cards: [] };
    this.addCard = this.addCard.bind(this);
  }

  addCard(card: IFormCard) {
    const { cards } = this.state;
    this.setState({ cards: [...cards, { ...card, id: Date.now() }] });
    toast('Data has been saved', {
      position: 'top-center',
      autoClose: 3000,
    });
  }

  render() {
    const { cards } = this.state;
    return (
      <main>
        <Form addCard={this.addCard} />
        <FormCardList cards={cards} />
        <ToastContainer />
      </main>
    );
  }
}