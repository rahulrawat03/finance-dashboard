enum TransactionType {
  earning,
  expense,
}

interface Transaction {
  id: number;
  title: string;
  date: Date;
  type: TransactionType;
}
