// types.ts
export type Category = {
    name: string;
    url: string;
  };
  
  export type Pokemon = {
    name: string;
    url?: string;
    category?: string;
  };
  
  export type PokemonCategoryProps = {
    category: string;
    onClose: () => void;
  };
  
  export type PokemonListProps = {
    category: string;
    onClose: () => void;
  };
  
  export type Stat = {
    stat: {
      name: string;
    };
    base_stat: number;
  };
  
  export type PokemonDetailsType = {
    name: string;
    firmness?: { name: string };
    growth_time: number;
    max_harvest: number;
    size: number;
    smoothness: number;
    soil_dryness: number;
    natural_gift_power: number;
    natural_gift_type?: { name: string };
    item?: { name: string };
    flavors?: Array<{ flavor: { name: string }; potency: number }>;
    stats?: Stat[];
  };
  

  export type CategoriesQueryResult = Category[] | undefined;
  export type PokemonQueryResult = Pokemon[] | undefined;
  