import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonCategoryCard from '../components/PokemonCategoryCard';

// Mock the onClick function
const mockOnClick = jest.fn();

// Mock the category data
const mockCategory = {
  id: 1,
  name: 'Grass',
};

describe('PokemonCategoryCard Component', () => {
  it('renders category name correctly', () => {
    const { getByText } = render(
      <PokemonCategoryCard category={mockCategory} onClick={mockOnClick} />
    );

    expect(getByText('Grass')).toBeInTheDocument();
  });

  it('calls onClick function when card is clicked', () => {
    const { getByTestId } = render(
      <PokemonCategoryCard category={mockCategory} onClick={mockOnClick} />
    );

    fireEvent.click(getByTestId('pokemon-category-card'));

    expect(mockOnClick).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    const { container } = render(
      <PokemonCategoryCard category={mockCategory} onClick={mockOnClick} />
    );

    expect(container).toMatchSnapshot();
  });
});
