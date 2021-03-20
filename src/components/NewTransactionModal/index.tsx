import React, { useState } from "react";
import ReactModal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { Container, RadioBox, TransactionTypeContainer } from "./styles";
ReactModal.setAppElement("#root");

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal = (props: NewTransactionModalProps) => {
  const { isOpen, onRequestClose } = props;
  const [type, setType] = useState("deposit");

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />

        <TransactionTypeContainer>
          <RadioBox
            isActive={type === "deposit"}
            onClick={() => setType("deposit")}
            type="button"
            activeColor="green"
          >
            <img src={incomeImg} alt="entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            isActive={type === "withdraw"}
            onClick={() => setType("withdraw")}
            type="button"
            activeColor="red"
          >
            <img src={outcomeImg} alt="saida" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
};

export default NewTransactionModal;
