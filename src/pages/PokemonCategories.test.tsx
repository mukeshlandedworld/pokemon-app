
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonCategories from './PokemonCategories';

describe('PokemonCategories Component', () => {
  it('renders without crashing', () => {
    render(<PokemonCategories />);
  });

  it('matches snapshot', () => {
    const { container } = render(<PokemonCategories />);
    expect(container).toMatchSnapshot();
  });
});

// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import { usePokemonCategories } from '@/queries/usePokemonCategories';
// import PokemonCategories from './PokemonCategories';

// // Mock usePokemonCategories hook
// jest.mock('@/queries/usePokemonCategories', () => ({
//   usePokemonCategories: jest.fn(),
// }));

// const mockHandleCategoryClick = jest.fn();
// const mockHandleSearch = jest.fn();
// const mockCloseModal = jest.fn();

// beforeEach(() => {
//   usePokemonCategories.mockReturnValue({
//     categories: [
//       { name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/' },
//       { name: 'fire', url: 'https://pokeapi.co/api/v2/type/10/' },
//     ],
//     isLoading: false,
//     isError: false,
//     selectedCategory: null,
//     pokemonList: [],
//     handleCategoryClick: mockHandleCategoryClick,
//     handleSearch: mockHandleSearch,
//     closeModal: mockCloseModal,
//   });
// });

// test('renders Pokémon categories', async () => {
//   render(<PokemonCategories />);

//   await waitFor(() => {
//     expect(screen.getByText('grass')).toBeInTheDocument();
//     expect(screen.getByText('fire')).toBeInTheDocument();
//   });
// });

// test('handles category click', async () => {
//   render(<PokemonCategories />);

//   fireEvent.click(screen.getByText('grass'));

//   await waitFor(() => {
//     expect(mockHandleCategoryClick).toHaveBeenCalledWith('grass');
//   });
// });

// test('handles search input', async () => {
//   render(<PokemonCategories />);

//   const searchInput = screen.getByPlaceholderText('Search for a category...');
//   fireEvent.change(searchInput, { target: { value: 'fire' } });

//   await waitFor(() => {
//     expect(mockHandleSearch).toHaveBeenCalledWith('fire');
//   });
// });

// test('renders modal when category is selected', async () => {
//   render(<PokemonCategories />);

//   usePokemonCategories.mockReturnValue({
//     ...usePokemonCategories(),
//     selectedCategory: 'grass',
//   });

//   await waitFor(() => {
//     expect(screen.getByText('Close')).toBeInTheDocument();
//     expect(screen.getByText('grass Pokémon')).toBeInTheDocument();
//   });
// });
