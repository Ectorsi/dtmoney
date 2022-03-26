import { useEffect } from 'react';
import { api } from '../../services/api';
import * as S from './styles';

export const TransactionTable = () => {

    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);

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
                    <S.Tr>
                        <S.Td>Desenvolvimento de Site</S.Td>
                        <S.Td>R$ 12.000,00</S.Td>
                        <S.Td>Venda</S.Td>
                        <S.Td>13/04/2021</S.Td>
                    </S.Tr>
                    <S.Tr>
                        <S.Td>Desenvolvimento de Site</S.Td>
                        <S.Td>R$ 12.000,00</S.Td>
                        <S.Td>Venda</S.Td>
                        <S.Td>13/04/2021</S.Td>
                    </S.Tr>
                </S.Tbody>
            </S.Table>
        </S.Wrapper>
    );
}