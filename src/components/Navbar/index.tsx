import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import useAuth from 'hooks/useAuth';

function Navbar() {
  const { isLoggedIn } = useAuth();

  const onClick = useCallback(() => {}, []);

  return (
    <nav className="flex items-center justify-between bg-red-400 p-4">
      <NavLink to="/">My Spotify Stats</NavLink>
      <ul className="flex items-center gap-6">
        <li>
          <NavLink to="/artists">Artists</NavLink>
        </li>
        <li>
          <NavLink to="/tracks">Tracks</NavLink>
        </li>
        <li>
          <NavLink to="/genres">Genres</NavLink>
        </li>
        <button onClick={onClick}>
          {isLoggedIn ? 'Account' : 'Se connecter'}
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
