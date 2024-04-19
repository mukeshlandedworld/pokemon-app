// PokemonCategoryCard.tsx
import { Category } from '@/types/types';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const CategoryName = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #555555;
`;

type PokemonCategoryCardProps = {
  category: Category;
  onClick: () => void;
};

const PokemonCategoryCard: React.FC<PokemonCategoryCardProps> = ({ category, onClick }) => {
  return (
    <Card onClick={onClick}>
      <CategoryName>{category.name}</CategoryName>
    </Card>
  );
};

export default PokemonCategoryCard;
