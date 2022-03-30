import { useTransactions } from '../../hooks/useTransactions';
import * as S from './styles';

export const TransactionTable = () => {

    const { transactions } = useTransactions();

    const formatToCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {  //Intl é uma lib nativa para formataçao de valores, como moeda e timezone
            style: 'currency',
            currency: 'BRL'
        }).format(value)
    }

    const formatDate = (date: string) => {
        return new Intl.DateTimeFormat('pt-BR').format(
            new Date(date)
        )
    }

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
                        const { id, title, amount, category, createdAt, transactionType} = transaction;
                        return (
                            <S.Tr key={id}>
                                <S.Td>{title}</S.Td>
                                <S.Td 
                                className={transactionType}
                                >
                                    {transactionType === 'withdraw' ? `- ${formatToCurrency(amount)}` : formatToCurrency(amount)}
                                </S.Td>
                                <S.Td>{category}</S.Td>
                                <S.Td>{formatDate(createdAt)}</S.Td>
                            </S.Tr>
                        )
                    })}
                </S.Tbody>
            </S.Table>
        </S.Wrapper>
    );
};