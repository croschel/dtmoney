import React, { useState } from 'react';
import { Header } from '~/components/Header';
import { Dashboard } from '~/components/Dashboard';
import { NewTransactionModal } from '~/components/NewTransactionModal';
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
      <NewTransactionModal
        isOpen={isNewTransactionOpened}
        onRequestClose={handleCloseTransactionModal}
      />
    </>
  );
}
