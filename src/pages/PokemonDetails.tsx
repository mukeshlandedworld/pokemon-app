import PokemonChart from '@/components/PokemonChart';
import { usePokemonDetailsQuery } from '@/queries/queries';
import React from 'react';
import styled from 'styled-components';

// Styled Components
const ChartContainer = styled.div`
  margin-top: 2rem;
`;


const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure the modal is on top */
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 90%; /* Maximum width */
  max-height: 90%; /* Maximum height */
  overflow: auto; /* Enable scrolling if the content exceeds the maximum size */
`;

type PokemonDetailsProps = {
  pokemon?: {
    name: string;
    category: string;
  };
};

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemon }) => {
  const { name: pokemonName, category: categoryName } = pokemon ?? {};

  const { data: pokemonDetails, isLoading, isError } = usePokemonDetailsQuery(categoryName ?? '', pokemonName ?? '');

  if (isLoading) return <div>Loading Pokémon details...</div>;

  if (isError || !pokemonDetails) {
    return (
      <div>
        <p>Error fetching Pokémon details. Please try again later.</p>
      </div>
    );
  }

  const closeModal = () => {
    // Handle close modal
  };
  
  const prepareChartData = () => {
    const statsData = pokemonDetails?.stats?.map((stat) => ({
      x: stat?.stat?.name,
      y: stat?.base_stat,
    }));

    const chartOptions = {
      xaxis: {
        categories: statsData?.map((data) => data.x),
      },
    };

    const chartSeries = [
      {
        name: 'Base Stats',
        data: statsData?.map((data) => data.y),
      },
    ];

    return { chartOptions, chartSeries };
  };

  const { chartOptions, chartSeries } = prepareChartData();

  return (
    <>
        <ModalOverlay onClick={closeModal}>
          <ModalContent>
          <h3>{pokemon?.name} Berry Details</h3>
          <p>Name: {pokemonDetails?.name}</p>
          <p>Firmness: {pokemonDetails?.firmness?.name}</p>
          <p>Growth Time: {pokemonDetails?.growth_time} days</p>
          <p>Max Harvest: {pokemonDetails?.max_harvest}</p>
          <p>Size: {pokemonDetails?.size} mm</p>
          <p>Smoothness: {pokemonDetails?.smoothness}</p>
          <p>Soil Dryness: {pokemonDetails?.soil_dryness}</p>
          <p>Natural Gift Power: {pokemonDetails?.natural_gift_power}</p>
          <p>Natural Gift Type: {pokemonDetails?.natural_gift_type?.name}</p>
          <p>Item: {pokemonDetails?.item?.name}</p>
          <h4>Flavors:</h4>
          <ul>
            {pokemonDetails?.flavors?.length !== 0 && (
              pokemonDetails?.flavors?.map((flavor: any) => (
                <li key={flavor?.flavor?.name}>
                  {flavor?.flavor?.name}: {flavor?.potency}
                </li>
              ))
            )}
    </ul>
    {chartOptions?.xaxis?.categories?.length !== 0 &&
          chartOptions?.xaxis?.categories !== undefined &&
          chartSeries[0]?.data !== undefined &&
          chartOptions.xaxis?.categories?.length === chartSeries[0]?.data?.length ? (
            <ChartContainer>
              <PokemonChart 
                chartOptions={chartOptions} 
                chartSeries={chartSeries} 
              />
            </ChartContainer>
          ) : (
            <p>Chart data is not available or in the unexpected format.</p>
          )}
          </ModalContent>
        </ModalOverlay>
    </>
  );
  
};

export default PokemonDetails;
