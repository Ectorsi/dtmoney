import entradas from '../../assets/income.svg';
import saidas from '../../assets/outcome.svg';
import total from '../../assets/total.svg';
import { Card } from '../Card';
import * as S from './styles';


export const Summary = () => {
    return (
        <S.Wrapper>
            <S.Content>
          <Card cardDescription='Entradas' icon={entradas} value={500}/>
          <Card cardDescription='Saidas' icon={saidas} value={500}/>
          <Card cardDescription='Total' icon={total} cardType='secondary' value={500}/>
            </S.Content>
        </S.Wrapper>
    );
}