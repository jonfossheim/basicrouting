import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Pkmn from './pages/Pkmn';
import PkmnList from './pages/PkmnList';

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/pokemon-list'>Pokemon List</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokemon-list' element={<PkmnList />} />
        <Route path='/pokemon/:pkmn' element={<Pkmn />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
