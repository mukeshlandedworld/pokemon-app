import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PokemonChart from './PokemonChart';

describe('PokemonChart Component', () => {
  it('renders without crashing', () => {
    render(<PokemonChart chartOptions={undefined} chartSeries={undefined} />);
  });

  it('matches snapshot', () => {
    const { container } = render(<PokemonChart chartOptions={undefined} chartSeries={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
