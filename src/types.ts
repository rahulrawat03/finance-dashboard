export enum TransactionType {
  earning,
  expense,
  all,
}

export interface Transaction {
  id: number;
  title: string;
  amount: number;
  date: Date;
  type: TransactionType;
}
