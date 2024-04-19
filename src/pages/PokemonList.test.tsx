import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonList from './PokemonList';

describe('PokemonList Component', () => {
  it('renders without crashing', () => {
    render(<PokemonList category={''} onClose={function (): void {
      throw new Error('Function not implemented.');
    } } />);
  });

  it('matches snapshot', () => {
    const { container } = render(<PokemonList category={''} onClose={function (): void {
      throw new Error('Function not implemented.');
    } } />);
    expect(container).toMatchSnapshot();
  });
});

// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import PokemonList from './PokemonList';
// import { usePokemonList } from '@/queries/usePokemonList';

// // Mock usePokemonList hook
// jest.mock('@/queries/usePokemonList', () => ({
//   usePokemonList: jest.fn(),
// }));

// const mockHandlePokemonClick = jest.fn();
// const mockCloseModal = jest.fn();
// const mockCloseModalModalOverlay = jest.fn();

// beforeEach(() => {
//   usePokemonList.mockReturnValue({
//     pokemonList: [
//       { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
//       { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
//     ],
//     isLoading: false,
//     isError: false,
//     selectedPokemon: null,
//     isModalOpen: true,
//     handlePokemonClick: mockHandlePokemonClick,
//     closeModal: mockCloseModal,
//     closeModalModalOverlay: mockCloseModalModalOverlay,
//   });
// });

// test('renders Pokémon list', async () => {
//   render(<PokemonList category="grass" onClose={jest.fn()} />);

//   await waitFor(() => {
//     expect(screen.getByText('bulbasaur')).toBeInTheDocument();
//     expect(screen.getByText('charmander')).toBeInTheDocument();
//   });
// });

// test('handles Pokémon click', async () => {
//   render(<PokemonList category="fire" onClose={jest.fn()} />);

//   fireEvent.click(screen.getByText('bulbasaur'));

//   await waitFor(() => {
//     expect(mockHandlePokemonClick).toHaveBeenCalledWith('bulbasaur');
//   });
// });

// test('renders modal when Pokémon is selected', async () => {
//   render(<PokemonList category="fire" onClose={jest.fn()} />);

//   fireEvent.click(screen.getByText('bulbasaur'));

//   await waitFor(() => {
//     expect(screen.getByText('Close')).toBeInTheDocument();
//     expect(screen.getByText('bulbasaur Berry Details')).toBeInTheDocument();
//   });
// });


