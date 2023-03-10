import { useContext, useEffect } from 'react';
import { PokeContext } from '../context/PokemonContext';
import { PKMN_URL } from '../utils/constants';
import Item from '../components/Item';

const PkmnList = () => {
  const { pkmn, setPkmn } = useContext(PokeContext);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(PKMN_URL);
      const data = await res.json();
      setPkmn(data.results);
    };

    fetchPokemon();
  }, []);

  return (
    <>
      <h1>List of Pokemon</h1>
      <ul>
        {pkmn
          ? pkmn.map((element, idx) => {
              return <Item key={idx} pkmn={element} />;
            })
          : 'data not found'}
      </ul>
    </>
  );
};

export default PkmnList;
