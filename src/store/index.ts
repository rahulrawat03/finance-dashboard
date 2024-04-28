class Store {
  private static _instance: Store;

  public static get instance(): Store {
    if (!this._instance) {
      this._instance = new Store();
    }

    return this._instance;
  }

  private transactions: Transaction[];
  private transactionsKey = "__finance_dashboard_transactions";

  private constructor() {
    try {
      this.transactions = JSON.parse(
        localStorage.getItem(this.transactionsKey) ?? "[]"
      ) as Transaction[];
    } catch (ex: unknown) {
      console.error("Failed to load the existing transactions!");
      localStorage.removeItem(this.transactionsKey);
      this.transactions = [];
    }
  }

  private add(title: string, date: Date, type: TransactionType) {
    const transaction: Transaction = {
      id: this.nextTransactionId,
      title,
      date,
      type,
    };

    this.transactions.push(transaction);

    // Add to Local Storage too
    localStorage.setItem(
      this.transactionsKey,
      JSON.stringify(this.transactions)
    );
  }

  private delete(id: number) {
    this.transactions = this.transactions.filter(
      (transaction) => transaction.id !== id
    );
  }

  private get nextTransactionId() {
    if (this.transactions.length === 0) {
      return 1;
    }

    return this.transactions[this.transactions.length].id + 1;
  }

  public addEarning(title: string, date: Date) {
    this.add(title, date, TransactionType.earning);
  }

  public addExpense(title: string, date: Date) {
    this.add(title, date, TransactionType.expense);
  }

  public get deleteEarning() {
    return this.delete;
  }

  public get deleteExpense() {
    return this.delete;
  }
}
