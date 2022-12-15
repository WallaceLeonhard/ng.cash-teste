import { useState } from 'react';
import { Button, Container, ContainerForm } from './styles'

import Modal from 'react-modal'

Modal.setAppElement('#root')

const NewTransactionsModal = () => {

  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  function handleTransactionModalOpen() {
    setIsTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsTransactionModalOpen(false)
  }

  return (
    <Container>
      <Button onClick={handleTransactionModalOpen}>
        Nova Transação
      </Button>

      <Modal
        isOpen={isTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <ContainerForm>
          <h2>Cadastrar transação</h2>
          <input type="text" placeholder='CashIn' />
          <input type="text" placeholder='CashOut' />
          <input type="text" placeholder='Valor' />
          <button>Confirmar</button>
        </ContainerForm>
      </Modal>

    </Container>
  )
}

export default NewTransactionsModal;
