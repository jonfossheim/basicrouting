import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PKMN_URL } from '../utils/constants';

const Pkmn = () => {
  const { pkmn } = useParams();
  const [char, setChar] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(PKMN_URL + pkmn);
      const data = await res.json();

      console.log(data);

      setChar(data);
    };

    fetchPokemon();
  }, []);

  if (!char) {
    return <p>data not found</p>;
  }

  return (
    <>
      <h1>{char.name}</h1>
      <img src={char.sprites.back_default} alt={char.name} />
      <p>BaseEXP: {char.base_experience}</p>
    </>
  );
};

export default Pkmn;
