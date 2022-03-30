import Modal from "react-modal";
import * as S from './styles';
import closeImg from '../../assets/close.svg'
import incomeImg from  '../../assets/income.svg';
import outcomeImg from  '../../assets/outcome.svg';
import { FormEvent, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";

Modal.setAppElement('#root'); // Para questões de acessibilidade usa-se isso para o modal

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewTransactionModal = ({isOpen, onRequestClose }: NewTransactionModalProps) => {

    const { createTransaction } = useTransactions();

    const [transactionType, setTransactionType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState(0);

    const handleCreateNewTransaction = async (event: FormEvent) => {
        event.preventDefault();

       await createTransaction({
            title,
            amount,
            category,
            transactionType,
        });

        setTitle('');
        setCategory('');
        setAmount(0)
        onRequestClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <S.Container onSubmit={handleCreateNewTransaction} >
                <h2>Cadastrar transação</h2>
                <input 
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input 
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <S.TransectionTypeContainer>
                    <S.RadioBox 
                    type="button"
                    onClick={() => setTransactionType('deposit')}
                    isActive={transactionType === 'deposit'}
                    activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </S.RadioBox>
                    <S.RadioBox 
                    type="button" 
                    onClick={() => setTransactionType('withdraw')}
                    isActive={transactionType === 'withdraw'}
                    activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </S.RadioBox>
                </S.TransectionTypeContainer>
                <input 
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
                
            </S.Container>
        </Modal>
    )
}