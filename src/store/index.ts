import { createStore } from "@rahulrawat03/mustate";
import { Transaction, TransactionType } from "@/src/types";
import { months } from "@/src/utils";

class Store {
  private static _instance: Store;

  public static get instance(): Store {
    if (!this._instance) {
      this._instance = createStore(new Store());
    }

    return this._instance;
  }

  public transactions: Transaction[] = [];
  private transactionsKey = "__finance_dashboard_transactions";

  public title: string = "";
  public amount: number = 0;
  public currentDate: { day: string; month: string; year: string };

  private constructor() {
    const now = new Date();
    this.currentDate = {
      day: now.getDate().toString(),
      month: months[now.getMonth()].toString(),
      year: now.getFullYear().toString(),
    };
  }

  public get earnings() {
    return this.transactions.filter(
      (transaction) => transaction.type === TransactionType.earning
    );
  }

  public get expenses() {
    return this.transactions.filter(
      (transaction) => transaction.type === TransactionType.expense
    );
  }

  public loadInitialData() {
    try {
      const transactions: (Transaction & { date: string })[] = JSON.parse(
        localStorage.getItem(this.transactionsKey) ?? "[]"
      );

      this.transactions = transactions.map((transaction) => ({
        ...transaction,
        date: new Date(transaction.date),
      }));
    } catch (ex: unknown) {
      console.error("Failed to load the existing transactions!");
      localStorage.removeItem(this.transactionsKey);
      this.transactions = [];
    }
  }

  public add(type: TransactionType) {
    if (!(this.title && this.currentDate && !isNaN(this.amount))) {
      console.error("Transaction could not be added!");
      return;
    }

    const transaction: Transaction = {
      id: this.nextTransactionId,
      title: this.title,
      amount: this.amount,
      date: new Date(
        parseInt(this.currentDate.year),
        months.indexOf(this.currentDate.month),
        parseInt(this.currentDate.day)
      ),
      type,
    };

    this.transactions = [...this.transactions, transaction];

    // Add to Local Storage too
    localStorage.setItem(
      this.transactionsKey,
      JSON.stringify(this.transactions)
    );
  }

  public delete(id: number) {
    this.transactions = this.transactions.filter(
      (transaction) => transaction.id !== id
    );

    // Add to Local Storage too
    localStorage.setItem(
      this.transactionsKey,
      JSON.stringify(this.transactions)
    );
  }

  private get nextTransactionId() {
    if (this.transactions.length === 0) {
      return 1;
    }

    return this.transactions[this.transactions.length - 1].id + 1;
  }
}

export const store = Store.instance;
