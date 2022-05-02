/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-unused-vars */
import React, {
  createContext, ReactNode, useEffect, useState,
} from 'react';
import { api } from './services/api';
import { Transaction } from './types';

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
}

export const TransactionContext = createContext({} as TransactionContextData);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const createTransaction = async (formInfo: TransactionInput) => {
    try {
      const response = await api.post('transactions', formInfo);
      setTransactions([...transactions, response.data.transaction]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const callAPI = async () => {
      const response = await api.get('transactions');
      setTransactions(response.data.transactions);
    };
    callAPI();
  }, []);
  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}
