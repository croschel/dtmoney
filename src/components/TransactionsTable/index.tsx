import React from 'react';
import { useTransaction } from '~/hooks/useTransaction';
import { GenericLoader } from '../Loader';
import { Container, LoaderContainer } from './styles';

export const TransactionsTable: React.FC = () => {
  const { transactions, loadingTransactions } = useTransaction();

  return loadingTransactions ? <LoaderContainer><GenericLoader size="large" /></LoaderContainer> : (
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
