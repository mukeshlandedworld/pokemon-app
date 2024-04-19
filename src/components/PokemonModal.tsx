// PokemonModal.tsx
import PokemonList from '@/pages/PokemonList';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
`;

type PokemonModalProps = {
  category: string;
  onClose: () => void;
};

const PokemonModal: React.FC<PokemonModalProps> = ({ category, onClose }) => {
  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <PokemonList category={category} onClose={onClose} />
      </ModalContent>
    </Modal>
  );
};

export default PokemonModal;
