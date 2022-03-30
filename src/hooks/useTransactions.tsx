import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

type Transaction = {
    id: number;
    title: string;
    transactionType: string;
    category: string;
    amount: number;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

type TrasactionsProviderProps = {
    children: ReactNode;
}

type TransactionsContextData = {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);


export const TransactionProvider = ({ children }: TrasactionsProviderProps) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))

    }, []);

    const createTransaction = async (transactionInput: TransactionInput) => {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        });
        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction,
        ])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction}} >
            {children}
        </TransactionsContext.Provider>
    );
}

export const useTransactions = () => {
    const context = useContext(TransactionsContext);

    return context;
}