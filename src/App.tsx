import type { JSX } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CarShop from './CarShop/CarShop';
import Layout from './Layout/Layout';
import Home from './pages/Home/Home';
import Playground from './pages/Playground/Playground';
import Sandwich from './pages/Sandwich/Sandwich';
import ProductPage from './pages/ProductPage/ProductPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="sandwich" element={<Sandwich />} />
          <Route path="carshop" element={<CarShop />} />
          <Route path="playground" element={<Playground />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:productId" element={<ProductPage />} />
          <Route path="create-employee" element={<CreateEmployee />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
