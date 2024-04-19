// PokemonItem.tsx
import { Pokemon } from '@/types/types';
import styled from 'styled-components';

const PokemonItemContainer = styled.div`
  display: block;
  padding: 1rem;
  margin-bottom: 0.5rem;
  background-color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
  }
`;

type PokemonItemProps = {
  pokemon: Pokemon;
  onClick: () => void;
};

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon, onClick }) => {
  return (
    <PokemonItemContainer onClick={onClick}>
      {pokemon.name}
    </PokemonItemContainer>
  );
};

export default PokemonItem;
