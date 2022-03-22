import React from 'react';
import { TransactionsTable } from '~/components/TransactionsTable';
import { Summary } from '../Summary';

import { Container } from './styles';

export const Dashboard: React.FC = () => (
  <Container>
    <Summary />
    <TransactionsTable />
  </Container>
);
