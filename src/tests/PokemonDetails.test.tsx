
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonDetails from '../pages/PokemonDetails';

// Mock the useParams hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));

describe('PokemonDetails Component', () => {
  it('renders without crashing', () => {
    render(<PokemonDetails pokemon={{
      name: '',
      category: ''
    }} />);
  });

  it('matches snapshot', () => {
    const { container } = render(<PokemonDetails pokemon={{
      name: '',
      category: ''
    }} />);
    expect(container).toMatchSnapshot();
  });
});

// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import { usePokemonDetailsQuery } from '@/queries/queries';
// import PokemonDetails from './PokemonDetails';
// import '@testing-library/jest-dom/extend-expect'

// // Mock usePokemonDetailsQuery hook
// jest.mock('@/queries/queries', () => ({
//   usePokemonDetailsQuery: jest.fn(),
// }));

// const mockCloseModal = jest.fn();

// beforeEach(() => {
//   usePokemonDetailsQuery.mockReturnValue({
//     data: {
//       name: 'bulbasaur',
//       stats: [
//         { stat: { name: 'hp' }, base_stat: 45 },
//         { stat: { name: 'attack' }, base_stat: 49 },
//       ],
//       firmness: { name: 'soft' },
//       growth_time: 5,
//       max_harvest: 10,
//       size: 6,
//       smoothness: 7,
//       soil_dryness: 8,
//       natural_gift_power: 9,
//       natural_gift_type: { name: 'grass' },
//       item: { name: 'item' },
//       flavors: [
//         { flavor: { name: 'sweet' }, potency: 10 },
//         { flavor: { name: 'spicy' }, potency: 5 },
//       ],
//     },
//     isLoading: false,
//     isError: false,
//   });
// });

// test('renders Pokémon details', async () => {
//   render(<PokemonDetails pokemon={{ name: 'bulbasaur', category: 'grass' }} />);

//   await waitFor(() => {
//     expect(screen.getByText('bulbasaur Berry Details')).toBeInTheDocument();
//     expect(screen.getByText('Name: bulbasaur')).toBeInTheDocument();
//     expect(screen.getByText('Firmness: soft')).toBeInTheDocument();
//     expect(screen.getByText('Growth Time: 5 days')).toBeInTheDocument();
//     expect(screen.getByText('Max Harvest: 10')).toBeInTheDocument();
//     expect(screen.getByText('Size: 6 mm')).toBeInTheDocument();
//     expect(screen.getByText('Smoothness: 7')).toBeInTheDocument();
//     expect(screen.getByText('Soil Dryness: 8')).toBeInTheDocument();
//     expect(screen.getByText('Natural Gift Power: 9')).toBeInTheDocument();
//     expect(screen.getByText('Natural Gift Type: grass')).toBeInTheDocument();
//     expect(screen.getByText('Item: item')).toBeInTheDocument();
//     expect(screen.getByText('Flavors:')).toBeInTheDocument();
//     expect(screen.getByText('sweet: 10')).toBeInTheDocument();
//     expect(screen.getByText('spicy: 5')).toBeInTheDocument();
//   });
// });

// test('renders chart when data is available', async () => {
//   render(<PokemonDetails pokemon={{ name: 'bulbasaur', category: 'grass' }} />);

//   await waitFor(() => {
//     expect(screen.getByTestId('pokemon-chart')).toBeInTheDocument();
//   });
// });

// test('renders error message when there is an error', async () => {
//   usePokemonDetailsQuery.mockReturnValue({
//     ...usePokemonDetailsQuery(),
//     isError: true,
//   });

//   render(<PokemonDetails pokemon={{ name: 'bulbasaur', category: 'grass' }} />);

//   await waitFor(() => {
//     expect(screen.getByText('Error fetching Pokémon details. Please try again later.')).toBeInTheDocument();
//   });
// });
