import { useEffect, useState, type JSX } from 'react';
import { Link, useParams } from 'react-router-dom';
// import style from './ProductPage.module.css';
import type Product from '../../components/Products/types';

export default function ProductPage(): JSX.Element {
  const { productId } = useParams();
  // useParams() позволяет получить параметры из URL.
  // Он возвращает объект, содержащий параметры маршрута,
  //  заданные в маршруте через :
  const [product, setProduct] = useState<Product | undefined>(undefined);
  async function fetchProduct(): Promise<void> {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const obj = await res.json();
    setProduct(obj);
  }
  useEffect(() => {
    fetchProduct();
  }, [productId]);
  return (
    <div className="flex flex-col items-center gap-2.5 w-1/2 my-10 mx-auto p-5 border border-solid bg-lime-100 rounded-2xl font-bold text-cyan-700 hover:shadow-2xl">
      <h1>Product Page</h1>
      <h3 className=" flex-1">{product?.title}</h3>
      <div className="h-48 w-48">
        <img src={product?.image} alt="" className="size-full object-contain" />
      </div>
      <p>{product?.price}$</p>
      <p>{product?.description}</p>
      <Link
        to="../products"
        className="py-1.5 px-4 border border-solid border-cyan-700 rounded-2xl hover:bg-cyan-600 hover:text-cyan-100"
      >
        To products
      </Link>
    </div>
  );
}
// {
/* <li
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
</li>; */
// }/
