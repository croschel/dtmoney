import React, { useEffect, useState } from 'react';
import { api } from '~/services/api';
import { Transaction } from '~/types';
import { Container } from './styles';

// import { Container } from './styles';

export const TransactionsTable: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    const callAPI = async () => {
      const response = await api.get('transactions');
      setTransactions(response.data.transactions);
    };
    callAPI();
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tr) => (
            <tr key={tr.id}>
              <td>{tr.title}</td>
              <td className={tr.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(tr.value)}
              </td>
              <td>{tr.category}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(tr.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
