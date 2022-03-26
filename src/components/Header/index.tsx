import logo from '../../assets/logo.svg';
import * as S from './styles';

type HeaderProps = {
    onOpenNewTransactionModal: () => void;
}

export const Header = ({onOpenNewTransactionModal }: HeaderProps) => {
    return (
        <S.Wrapper>
            <S.Content>
                <S.Logo src={logo} alt="dt money" />
                <S.Button onClick={onOpenNewTransactionModal} >
                    Nova Transação
                </S.Button>
            </S.Content>
        </S.Wrapper>
    );
};