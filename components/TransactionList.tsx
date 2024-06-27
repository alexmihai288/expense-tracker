import { Transcation } from "@prisma/client";
import { Transaction } from "@/types/transaction";

export const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions &&
          TransactionList.map((transaction: Transcation) => (
            <p>{transaction.text}</p>
          ))}
      </ul>
    </>
  );
};
