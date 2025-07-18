import type { JSX } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

export default function Layout(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <NavBar />
      </header>
      <main className="flex-1 bg-cyan-50">
        <Outlet />
      </main>
      <footer className="flex items-center justify-center min-h-30 bg-slate-700 text-cyan-50 text-4xl">Footer</footer>
    </div>
  );
}
