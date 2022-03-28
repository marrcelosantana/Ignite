import { Transaction } from "./transaction";
import { TransactionInput } from "./transactionInput";

export interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}