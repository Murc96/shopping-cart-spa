import { useLoaderData, Link } from 'react-router-dom';
import { Product } from '../ts/interface/global_interfaces';
import { getProducts } from '../handleProducts';
import { useShoppingCartContext } from './ShoppingCartContext'; 

export async function loader() {
  const products = await getProducts();
  return { products };
}

export default function Shop() {
  const { products } = useLoaderData() as { products: Product[] };
  const { addToCart } = useShoppingCartContext(); 

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div className="container">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <Link to={`/products/${product.id}`}>
            <img className="cardImg" src={product.image} alt={product.title} />
            <p className='shop-product-title'>{product.title}</p>
            <p className='shop-product-price'>{product.price} €</p>
          </Link>
          <button className="add-btn" onClick={() => handleAddToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}



