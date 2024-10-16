import { useCallback } from 'react';

import useAuth from 'hooks/useAuth';
import Link from './Link';

function Navbar() {
  const { isLoggedIn } = useAuth();

  const onClick = useCallback(() => {}, []);

  return (
    <nav className="flex items-center justify-between bg-red-400 p-4">
      <Link to="/" title="My Spotify Stats" />
      <ul className="flex items-center gap-6">
        <li>
          <Link to="/artists" title="Artists" />
        </li>
        <li>
          <Link to="/tracks" title="Tracks" />
        </li>
        <li>
          <Link to="/genres" title="Genres" />
        </li>
        <button onClick={onClick}>
          {isLoggedIn ? 'Account' : 'Se connecter'}
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
