import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonModal from '../components/PokemonModal';

// Mock the onClose function
const mockOnClose = jest.fn();

describe('PokemonModal Component', () => {
  it('renders without crashing', () => {
    render(<PokemonModal isOpen onClose={mockOnClose} />);
  });

  it('calls onClose function when close button is clicked', () => {
    const { getByTestId } = render(<PokemonModal isOpen onClose={mockOnClose} />);
    fireEvent.click(getByTestId('close-button'));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('matches snapshot', () => {
    const { container } = render(<PokemonModal isOpen onClose={mockOnClose} />);
    expect(container).toMatchSnapshot();
  });
});
