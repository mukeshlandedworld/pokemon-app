import PokemonCategoryCard from '@/components/PokemonCategoryCard';
import PokemonModal from '@/components/PokemonModal';
import { usePokemonCategories } from '@/queries/usePokemonCategories';
import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  padding: 2rem;
  background-color: #f3f4f6;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333333;
  text-transform: uppercase;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const PokemonCategories = () => {
  const {
    categories,
    isLoading,
    isError,
    selectedCategory,
    pokemonList,
    handleCategoryClick,
    handleSearch,
    closeModal,
  } = usePokemonCategories();

  if (isLoading) return <Container>Loading...</Container>;

  if (isError) {
    return (
      <Container>
        <Title>Error fetching data</Title>
        <p>There was an error fetching the Pokémon categories. Please try again later.</p>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Pokemon Categories</Title>
      <SearchInput
        type="text"
        placeholder="Search for a category..."
        onChange={(e) => handleSearch(e.target.value)}
      />
      <GridContainer>
        {categories.map((category) => (
          <PokemonCategoryCard
            key={category.name}
            category={category}
            onClick={() => handleCategoryClick(category.name)}
          />
        ))}
      </GridContainer>

      {selectedCategory && <PokemonModal category={selectedCategory} onClose={closeModal} />}
    </Container>
  );
};

export default PokemonCategories;
