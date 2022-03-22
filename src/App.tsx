import React, { useState } from 'react';
import { Header } from '~/components/Header';
import { Dashboard } from '~/components/Dashboard';
import ReactModal from 'react-modal';
import { GlobalStyle } from './styles/global';
import '~/mock';

ReactModal.setAppElement('#root');

export function App() {
  const [isNewTransactionOpened, setIsNewTransactionOpened] = useState(false);

  const handleOpenTransactionModal = () => {
    setIsNewTransactionOpened(true);
  };

  const handleCloseTransactionModal = () => {
    setIsNewTransactionOpened(false);
  };
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      <ReactModal onRequestClose={handleCloseTransactionModal} isOpen={isNewTransactionOpened}>
        <h2>cadastrar transação</h2>
      </ReactModal>
    </>
  );
}
