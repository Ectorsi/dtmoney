import entradas from '../../assets/income.svg';
import saidas from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { Card } from '../Card';
import * as S from './styles';


export const Summary = () => {

    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.transactionType === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    const formatToCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', { 
            style: 'currency',
            currency: 'BRL'
        }).format(value)
    }

    return (
        <S.Wrapper>
            <S.Content>
                <Card cardDescription='Entradas' icon={entradas} value={formatToCurrency(summary.deposits)}/>
                <Card cardDescription='Saidas' icon={saidas} value={formatToCurrency(summary.withdraws)}/>
                <Card cardDescription='Total' icon={total} cardType='secondary' value={formatToCurrency(summary.total)}/>
            </S.Content>
        </S.Wrapper>
    );
}