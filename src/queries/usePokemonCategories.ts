// usePokemonCategories.ts
import { useState, useEffect } from 'react';
import { useCategoriesQuery } from './queries';
import { Category, Pokemon } from '../types/types';

export const usePokemonCategories = () => {
  const { data: categories, isLoading, isError } = useCategoriesQuery();
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    setFilteredCategories(categories || []);
  }, [categories]);

  // Fetch Pokemon by category
  useEffect(() => {
    const fetchPokemonByCategory = async (categoryName: string) => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/${categoryName}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const uniquePokemon = data.results.filter(
          (pokemon: any, index: number, self: any[]) =>
            index === self.findIndex((p: any) => p.name === pokemon.name)
        );
        setPokemonList((prevList) => [...prevList, ...uniquePokemon]);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    if (selectedCategory) {
      setPokemonList([]); // Clear previous Pokemon list
      fetchPokemonByCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());

    const filtered = categories?.filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    ) || [];

    setFilteredCategories(filtered);
  };

  const closeModal = () => {
    setSelectedCategory(null);
  };

  return {
    categories: filteredCategories,
    isLoading,
    isError,
    selectedCategory,
    pokemonList,
    handleCategoryClick,
    handleSearch,
    closeModal,
  };
};
