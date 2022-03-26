import Modal from "react-modal";
import * as S from './styles';
import closeImg from '../../assets/close.svg'

Modal.setAppElement('#root'); // Para questões de acessibilidade usa-se isso para o modal

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewTransactionModal = ({isOpen, onRequestClose }: NewTransactionModalProps) => {
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
            <S.Container>
                <h2>Cadastrar transação</h2>
                <input 
                    placeholder="Título"
                />
                <input 
                    placeholder="Valor"
                />
                <input 
                    placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>
                
            </S.Container>
        </Modal>
    )
}