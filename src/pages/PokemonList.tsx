import React from "react";
import styled from "styled-components";
import PokemonDetails from "./PokemonDetails"; // Import the PokemonDetails component
import { PokemonListProps } from "@/types/types";
import { usePokemonList } from "@/queries/usePokemonList";
import PokemonItem from "@/components/PokemonItem";

// Styled Components
const PokemonListContainer = styled.div`
  margin-top: 2rem;
  position: relative; /* Add relative positioning */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0.5rem;
  background-color: #ff0000; /* Adjust the color as needed */
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  z-index: 10; /* Ensure a higher z-index */
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
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

const PokemonList: React.FC<PokemonListProps> = ({ category, onClose }) => {
  const {
    pokemonList,
    isLoading,
    isError,
    selectedPokemon,
    isModalOpen,
    handlePokemonClick,
    closeModal,
    closeModalModalOverlay,
  } = usePokemonList(category);

  if (isLoading) return <PokemonListContainer>Loading...</PokemonListContainer>;

  if (isError) {
    return (
      <PokemonListContainer>
        <p>Error fetching Pokémon category/type. Please try again later.</p>
      </PokemonListContainer>
    );
  }

  return (
    <>
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={onClose}>Close</CloseButton>
            <PokemonListContainer>
              {!selectedPokemon ? (
                <>
                  <h2>{category} Pokémon</h2>
                  <ul>
                    {pokemonList?.map((pokemon) => (
                      <li key={pokemon.name}>
                        <PokemonItem
                          pokemon={pokemon}
                          onClick={() => handlePokemonClick(pokemon.name)}
                        />
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Modal onClick={closeModal}>
                  <ModalContent onClick={(e) => e.stopPropagation()}>
                    <PokemonDetails
                      pokemon={{ name: selectedPokemon, category: category }}
                    />
                  </ModalContent>
                </Modal>
              )}
            </PokemonListContainer>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default PokemonList;