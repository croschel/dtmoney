import React, { useContext } from 'react';

import IncomeImg from '~/assets/income.svg';
import OutcomeImg from '~/assets/outcome.svg';
import TotalImg from '~/assets/total.svg';
import { TransactionContext } from '~/TransactionContext';
import { Container } from './styles';

export const Summary: React.FC = () => {
  const { transactions } = useContext(TransactionContext);

  console.log(transactions);
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImg} alt="entradas" />
        </header>
        <strong>
          R$1000,00
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={OutcomeImg} alt="saidas" />
        </header>
        <strong>
          R$200,00
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={TotalImg} alt="total" />
        </header>
        <strong>
          R$800,00
        </strong>
      </div>
    </Container>
  );
};
