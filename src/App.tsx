import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

function App() {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    const handleOpenNewTransactionModal = () => {
        setIsNewTransactionModalOpen(true)
    }

    const handleCloseNewTransactionModal = () => {
        setIsNewTransactionModalOpen(false)
    }
    return (
        <div className="App">
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
            <Dashboard />
            <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
            <GlobalStyle />
        </div>
        
    );
}

export default App;
