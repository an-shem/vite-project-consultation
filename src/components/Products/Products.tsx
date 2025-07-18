import { useEffect, useState, type JSX } from 'react';
import { Link } from 'react-router-dom';
import type Product from './types';

export const Products = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts(): Promise<void> {
    const res = await fetch('https://fakestoreapi.com/products');
    const arr = await res.json();
    setProducts(arr);
  }

  return (
    <div>
      <ul className="grid grid-cols-4 gap-5">
        {products.map((p) => (
          <li
            key={'product ' + p.id}
            className="flex flex-col items-center gap-2.5 p-5 border border-solid bg-lime-100 rounded-2xl font-bold text-cyan-700 hover:shadow-2xl hover:scale-98  hover:bg-lime-100/50"
          >
            <h3 className=" flex-1">{p.title}</h3>
            <div className="h-48 w-48">
              <img src={p.image} alt="product" className="size-full object-contain" />
            </div>
            <p>{p.price}$</p>
            <Link
              to={`/products/${p.id}`}
              className="py-1.5 px-4 border border-solid border-cyan-700 rounded-2xl hover:bg-cyan-600 hover:text-cyan-100"
            >
              To product
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
