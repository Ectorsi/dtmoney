import entradas from '../../assets/income.svg';
import saidas from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import * as S from './styles';

type CardProps = {
    cardDescription : 'Entradas' | 'Saídas' | 'Total';
}

export const Card = ({ cardDescription }: CardProps) => {
    return (
        <S.Wrapper>
            <header>
                {cardDescription}
                {cardDescription === 'Entradas'
                    ? <img src={entradas} alt="Entradas" />
                    : <img src={saidas} alt="saidas" />
                    ?? <img src={total} alt="total" />
                }
            </header>
            <strong>17.000,00</strong>
        </S.Wrapper>
    );
}