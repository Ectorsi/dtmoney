import entradas from '../../assets/income.svg';
import saidas from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import * as S from './styles';

type CardProps = {
    cardDescription: 'Entradas' | 'Saidas' | 'Total';
}

export const Card = ({ cardDescription }: CardProps) => {
    const entrada = cardDescription === 'Entradas' && <img src={entradas} alt="Entradas" />;
    const saida = cardDescription === 'Saidas' && <img src={saidas} alt="Saidas" />;
    const Stotal = cardDescription === 'Total' && <img src={total} alt="Total" />;

    return (
        <S.Wrapper>
            <S.Header>
                {cardDescription}
                {!!entrada && entrada}
                {!!saida && saida}
                {!!Stotal && Stotal}
            </S.Header>
            <S.Value>17.000,00</S.Value>
        </S.Wrapper>
    );
}