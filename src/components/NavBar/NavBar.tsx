import type { JSX } from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar(): JSX.Element {
  return (
    <nav className={'bg-slate-900 min-h-24 border-20 border-slate-700 sticky top-0'}>
      <ul className={'p-5 size-full flex gap-5 justify-center items-center flex-wrap list-none'}>
        <li>
          <NavLink to="/home" className={'text-white no-underline text-4xl hover:text-amber-600 hover:underline'}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={'text-white no-underline text-4xl hover:text-amber-600 hover:underline'}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/sandwich" className={'text-white no-underline text-4xl hover:text-amber-600 hover:underline'}>
            Sandwich
          </NavLink>
        </li>
        <li>
          <NavLink to="/carshop" className={'text-white no-underline text-4xl hover:text-amber-600 hover:underline'}>
            CarShop
          </NavLink>
        </li>

        <li>
          <NavLink to="/playground" className={'text-white no-underline text-4xl hover:text-amber-600 hover:underline'}>
            Playground
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create-employee"
            className={'text-white no-underline text-4xl hover:text-amber-600 hover:underline'}
          >
            Create Employee
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
