import type { JSX } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import Home from './pages/Home/Home';
import Sandwich from './pages/Sandwich/Sandwich';

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="sandwich" element={<Sandwich />} />
          <Route path="create-employee" element={<CreateEmployee />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
