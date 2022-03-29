import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import * as S from './styles';

type Transaction = {
    id: number;
    title: string;
    value: number;
    type: string;
    category: string;
    amount: number;
    createdAt: string;
}

export const TransactionTable = () => {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))

    }, []);

    return (
        <S.Wrapper>
            <S.Table>
                <S.Thead>
                    <S.Tr>
                        <S.Th>Título</S.Th>
                        <S.Th>Preço</S.Th>
                        <S.Th>Categoria</S.Th>
                        <S.Th>Data</S.Th>
                    </S.Tr>
                </S.Thead>
                <S.Tbody>
                    {transactions.map(transaction => {
                        const {id, title, amount, category, createdAt, type} = transaction;
                        return (
                            <S.Tr key={id}>
                                <S.Td>{title}</S.Td>
                                <S.Td 
                                className={type}
                                >
                                    R$ {type === 'withdraw' ? `- ${amount.toFixed(2)}` : amount.toFixed(2)}
                                </S.Td>
                                <S.Td>{category}</S.Td>
                                <S.Td>{createdAt}</S.Td>
                            </S.Tr>
                        )
                    })}
                </S.Tbody>
            </S.Table>
        </S.Wrapper>
    );
}