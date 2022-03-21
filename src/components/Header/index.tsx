import React from 'react';
import logo from '~/assets/logo.svg';
import { Container, Content } from './styles';

export const Header: React.FC = () => (
  <Container>
    <Content>

      <img src={logo} alt="dt money" />
      <button type="button">Nova transação</button>
    </Content>
  </Container>
);
