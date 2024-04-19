// export default Home;
'use client'
import styled from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import PokemonCategories from '@/pages/PokemonCategories';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledLink = styled.a`
  margin-top: 20px;
  cursor: pointer;
`;

const queryClient = new QueryClient();

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <HomeContainer>
      <PokemonCategories />
    </HomeContainer>
    </QueryClientProvider>
  );
};

export default Home;


