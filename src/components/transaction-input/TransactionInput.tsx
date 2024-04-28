import { Input } from "./Input";
import { DatePicker } from "./DatePicker";
import { Save } from "./Save";
import { TransactionType } from "@/src/types";

interface TransactionInputProps {
  transactionType: TransactionType;
}

export function TransactionInput({
  transactionType,
}: Readonly<TransactionInputProps>) {
  return (
    <div className="flex flex-col m-2 md:w-full">
      <Input
        type="title"
        placeholder={
          transactionType === TransactionType.earning
            ? "Earnings ..."
            : "Expenses ..."
        }
      />
      <Input type="amount" placeholder={"Amount ..."} />
      <DatePicker />
      <Save transactionType={transactionType} />
    </div>
  );
}
