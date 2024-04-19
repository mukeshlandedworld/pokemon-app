// usePokemonList.ts
import { useState } from 'react';
import { usePokemonQuery } from './queries';

export const usePokemonList = (category: string) => {
  const { data: pokemonList, isLoading, isError } = usePokemonQuery(category);
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handlePokemonClick = (pokemonName: string) => {
    setSelectedPokemon(pokemonName);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  const closeModalModalOverlay = () => {
    setSelectedPokemon(null);
    setIsModalOpen(false);
  };

  return {
    pokemonList,
    isLoading,
    isError,
    selectedPokemon,
    isModalOpen,
    handlePokemonClick,
    closeModal,
    closeModalModalOverlay,
  };
};
