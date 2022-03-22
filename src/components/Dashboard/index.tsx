import React from 'react';
import { Summary } from '../Summary';

import { Container } from './styles';

export const Dashboard: React.FC = () => (
  <Container>
    <h1>dashboard</h1>
    <Summary />
  </Container>
);
