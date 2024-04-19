// queries.ts
import { useQuery } from 'react-query';
import { Category, CategoriesQueryResult, Pokemon, PokemonDetailsType } from '../types/types';

const fetchCategories = async (): Promise<Category[]> => {
  const response = await fetch('https://pokeapi.co/api/v2/');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return Object.keys(data).map((key) => ({
    name: key,
    url: data[key],
  }));
};

export const useCategoriesQuery = () => {
  return useQuery<CategoriesQueryResult, Error>('categories', fetchCategories);
};

const fetchPokemonByCategory = async (category: string): Promise<Pokemon[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/${category}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.results;
};

export const usePokemonQuery = (category: string) => {
  return useQuery<Pokemon[], Error>(['pokemon', category], () => fetchPokemonByCategory(category));
};

const fetchPokemonDetails = async (categoryName: string, pokemonName: string): Promise<PokemonDetailsType> => {
  const response = await fetch(`https://pokeapi.co/api/v2/${categoryName}/${pokemonName}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon details: ${response.status} ${response.statusText}`);
  }
  return response.json();
};

export const usePokemonDetailsQuery = (categoryName: string, pokemonName: string) => {
  return useQuery<PokemonDetailsType, Error>(['pokemonDetails', categoryName, pokemonName], () => fetchPokemonDetails(categoryName, pokemonName));
};
