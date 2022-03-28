import { createContext, ReactNode, useEffect, useState } from "react";
import { Transaction } from "./models/transaction";
import { TransactionInput } from "./models/transactionInput";
import { TransactionContextData } from "./models/transactionsContextData";
import { api } from "./services/api";

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({children} : TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput){
    api.post('/transactions', transaction);
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}