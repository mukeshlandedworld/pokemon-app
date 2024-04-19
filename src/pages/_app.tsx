import { QueryClient, QueryClientProvider } from 'react-query';
import PokemonCategories from './PokemonCategories';
import PokemonDetails from './PokemonDetails';
import PokemonList from './PokemonList';
import { ReactElement, ComponentType } from 'react';

const queryClient = new QueryClient();

type MyAppProps = {
  Component: ComponentType<any>; // You can replace `any` with the expected props type for your Component
  pageProps: any; // You can replace `any` with the expected props type for your pageProps
};

function MyApp({ Component, pageProps }: MyAppProps): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
