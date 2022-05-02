import React from 'react';

import IncomeImg from '~/assets/income.svg';
import OutcomeImg from '~/assets/outcome.svg';
import TotalImg from '~/assets/total.svg';
import { useTransaction } from '~/hooks/useTransaction';
import { GenericLoader } from '../Loader';
import { Container } from './styles';

export const Summary: React.FC = () => {
  const { transactions, loadingTransactions } = useTransaction();

  const summaryCalculator = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposit += transaction.value;
      acc.total += transaction.value;
    } else {
      acc.withdraw += transaction.value;
      acc.total -= transaction.value;
    }

    return acc;
  }, {
    deposit: 0,
    withdraw: 0,
    total: 0,
  });
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="entradas" />
        </header>
        {loadingTransactions ? <GenericLoader /> : (
          <strong>
            {Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              style: 'currency',
            }).format(summaryCalculator.deposit)}
          </strong>
        )}
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="saidas" />
        </header>
        {loadingTransactions ? <GenericLoader /> : (
          <strong>
            {Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              style: 'currency',
            }).format(summaryCalculator.withdraw)}
          </strong>
        )}
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={TotalImg} alt="total" />
        </header>
        {loadingTransactions ? <GenericLoader /> : (
          <strong>
            {Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              style: 'currency',
            }).format(summaryCalculator.total)}
          </strong>
        )}
      </div>
    </Container>
  );
};
