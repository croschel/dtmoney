import React, { useContext } from 'react';
import { TransactionContext } from '~/TransactionContext';
import { Container } from './styles';

export const TransactionsTable: React.FC = () => {
  const { transactions } = useContext(TransactionContext);

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
