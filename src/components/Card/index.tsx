import * as S from './styles';

export type CardProps = {
    cardDescription: 'Entradas' | 'Saidas' | 'Total';
    cardType?: 'primary' | 'secondary';
    icon: string;
    value: number | string;
}

export const Card = ({ cardDescription, cardType = 'primary', icon, value }: CardProps) => {
    return (
      <S.Wrapper cardType={cardType} >
            <S.Header>
                {cardDescription}
                {icon && <img src={icon} alt="Entradas" />}
            </S.Header>
          <S.Value>{value}</S.Value>
        </S.Wrapper>
    );
}