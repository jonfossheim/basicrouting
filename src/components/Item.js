import { Link } from 'react-router-dom';

const Item = ({ pkmn }) => {
  return (
    <li>
      <Link to={`/pokemon/${pkmn.name}`}>{pkmn.name}</Link>
    </li>
  );
};

export default Item;
