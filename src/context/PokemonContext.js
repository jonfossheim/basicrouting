import { createContext, useState } from 'react';
export const PokeContext = createContext();

const PokemonContext = (props) => {
  const [pkmn, setPkmn] = useState(null);
  return (
    <>
      <PokeContext.Provider value={{ pkmn, setPkmn }}>
        {props.children}
      </PokeContext.Provider>
    </>
  );
};

export default PokemonContext;
