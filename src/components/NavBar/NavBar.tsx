import type { JSX } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar(): JSX.Element {
  return (
    <nav className={'bg-cyan-800 min-h-24 sticky top-0'}>
      <ul className={'p-5 size-full flex gap-10 justify-center items-center flex-wrap list-none'}>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `${isActive ? 'text-blue-300' : 'text-white'} no-underline text-4xl hover:text-amber-600 hover:underline`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create-employee"
            className={({ isActive }) =>
              `${isActive ? 'text-blue-300' : 'text-white'} no-underline text-4xl hover:text-amber-600 hover:underline`
            }
          >
            Create Employee
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sandwich"
            className={({ isActive }) =>
              `${isActive ? 'text-blue-300' : 'text-white'} no-underline text-4xl hover:text-amber-600 hover:underline`
            }
          >
            Sandwich
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
