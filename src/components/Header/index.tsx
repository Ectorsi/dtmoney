import logo from '../../assets/logo.svg';
import * as S from './styles';

export const Header = () => {
    return (
        <S.Wrapper>
            <S.Content>
                <S.Logo src={logo} alt="dt money" />
                <S.Button>
                    Nova Transação
                </S.Button>
            </S.Content>
        </S.Wrapper>
    );
};