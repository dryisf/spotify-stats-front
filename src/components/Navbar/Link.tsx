import { FC } from 'react';
import { NavLink } from 'react-router-dom';

type ComponentProps = {
  to: string;
  title: string;
};

const Link: FC<ComponentProps> = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `hover:text-white ${isActive ? 'text-white' : ''}`
      }
    >
      {title}
    </NavLink>
  );
};

export default Link;
