import React from 'react';
import logo from '~/assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenNewTransactionModal }) => (
  <Container>
    <Content>
      <img src={logo} alt="dt money" />
      <button onClick={onOpenNewTransactionModal} type="button">Nova transação</button>
    </Content>
  </Container>
);
