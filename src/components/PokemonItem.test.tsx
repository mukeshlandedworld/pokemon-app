import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonItem from './PokemonItem';

// Mock the pokemon data
const mockPokemon = {
  id: 1,
  name: 'Bulbasaur',
  image: 'bulbasaur.png',
};

describe('PokemonItem Component', () => {
  it('renders pokemon name correctly', () => {
    const { getByText } = render(<PokemonItem pokemon={mockPokemon} onClick={function (): void {
      throw new Error('Function not implemented.');
    } } />);
    expect(getByText('Bulbasaur')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { container } = render(<PokemonItem pokemon={mockPokemon} onClick={function (): void {
      throw new Error('Function not implemented.');
    } } />);
    expect(container).toMatchSnapshot();
  });
});
