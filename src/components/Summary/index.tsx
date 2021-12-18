import { Card } from '../Card';
import * as S from './styles';


export const Summary = () => {
    return (
        <S.Wrapper>
            <S.Content>
                <Card cardDescription='Entradas' />
            </S.Content>
        </S.Wrapper>
    );
}