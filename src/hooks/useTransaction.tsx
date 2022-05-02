/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import React, {
  createContext, ReactNode, useContext, useEffect, useState,
} from 'react';
import { api } from '~/services/api';
import { Transaction } from '~/types';

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionInput {
  title: string,
  value: number,
  category: string,
  type: string,
}

interface TransactionContextData {
  transactions: Transaction[],
  createTransaction: (formInfo: TransactionInput) => Promise<void>;
  loadingTransactions: boolean;
  loadingCreateTr: boolean;
}

const TransactionContext = createContext({} as TransactionContextData);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loadingTransactions, setLoadingTransactions] = useState(false);
  const [loadingCreateTr, setLoadingCreateTr] = useState(false);

  const createTransaction = async (formInfo: TransactionInput) => {
    setLoadingCreateTr(true);
    try {
      const response = await api.post('transactions', formInfo);
      setTransactions([...transactions, response.data.transaction]);
    } catch (error) {
      console.log(error);
    }
    setLoadingCreateTr(false);
  };

  useEffect(() => {
    const callAPI = async () => {
      setLoadingTransactions(true);
      try {
        const response = await api.get('transactions');
        setTransactions(response.data.transactions);
      } catch (error) {
        console.log(error);
      }
      setLoadingTransactions(false);
    };
    callAPI();
  }, []);
  return (
    <TransactionContext.Provider value={{
      transactions, createTransaction, loadingCreateTr, loadingTransactions,
    }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export const useTransaction = () => {
  const context = useContext(TransactionContext);
  return context;
};
