import * as S from './styles';
import { Summary } from '../Summary/index';
import { TransactionTable } from '../TransactionTable/index';

export const Dashboard = () => {
    return (
        <S.Wrapper>
            <Summary />
            <TransactionTable />
        </S.Wrapper>
    );
}