import React, { useEffect } from 'react';
import { TransactionsTable } from '~/components/TransactionsTable';
import { api } from '~/services/api';
import { Summary } from '../Summary';

import { Container } from './styles';

export const Dashboard: React.FC = () => {
  useEffect(() => {
    const callAPI = async () => {
      const transactions = await api.get('transactions');
      console.log(transactions.data);
      return transactions;
    };
    callAPI();
  }, []);
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
};
