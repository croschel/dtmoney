import React, { FormEvent, useContext, useState } from 'react';
import ReactModal from 'react-modal';
import CloseImg from '~/assets/close.svg';
import IncomeImg from '~/assets/income.svg';
import OutcomeImg from '~/assets/outcome.svg';
import { TransactionContext } from '~/TransactionContext';

import { Container, NewTransactionTypeContainer, RadioBox } from './styles';

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

// eslint-disable-next-line max-len
export const NewTransactionModal: React.FC<TransactionModalProps> = ({ isOpen, onRequestClose }) => {
  const { createTransaction } = useContext(TransactionContext);
  const [formInfo, setFormInfo] = useState({
    title: '',
    value: 0,
    category: '',
    type: 'deposit',
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await createTransaction(formInfo);
    onRequestClose();
    setFormInfo({
      title: '',
      value: 0,
      category: '',
      type: 'deposit',
    });
  };

  return (
    <ReactModal
      onRequestClose={onRequestClose}
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose}>
        <img
          className="react-modal-close"
          src={CloseImg}
          alt="close-x-btn"
        />
      </button>
      <Container onSubmit={handleSubmit}>
        <h2>cadastrar transação</h2>
        <input placeholder="Título" value={formInfo.title} onChange={({ target }) => setFormInfo({ ...formInfo, title: target.value })} />
        <input placeholder="Valor" type="number" value={formInfo.value} onChange={({ target }) => setFormInfo({ ...formInfo, value: Number(target.value) })} />
        <NewTransactionTypeContainer>
          <RadioBox onClick={() => setFormInfo({ ...formInfo, type: 'deposit' })} isActive={formInfo.type === 'deposit'} activeColor="green" type="button">
            <img src={IncomeImg} alt="Income" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox onClick={() => setFormInfo({ ...formInfo, type: 'withdraw' })} isActive={formInfo.type === 'withdraw'} activeColor="red" type="button">
            <img src={OutcomeImg} alt="Outcome" />
            <span>Saída</span>
          </RadioBox>
        </NewTransactionTypeContainer>
        <input placeholder="Categoria" value={formInfo.category} onChange={({ target }) => setFormInfo({ ...formInfo, category: target.value })} />
        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
};
