import { Product } from "../ts/interface/global_interfaces";
import { useLoaderData, Link } from "react-router-dom";
import { getTopProducts } from "../handleProducts";
import { useShoppingCartContext } from './ShoppingCartContext';

export async function loader() {
    const products = await getTopProducts();
    return { products };
}

export default function Home() {

    const { products } = useLoaderData() as { products: Product[] };
    const { addToCart } = useShoppingCartContext();

    const handleAddToCart = (product: Product) => {
        addToCart(product);
    };

    return (
        <div className="container">
            <h1 className="welcome"> Welcome to Scamazon </h1>
            <div>

                <h3>Our top selling products</h3>
                <div className="card-container">
                    {" "}
                    {(products as Product[]).map((product) => (
                        <div className="card" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img className="cardImg" src={product.image} />
                                <p>{product.title}</p>
                                <p>{product.price}</p>
                            </Link>
                            <button className="add-btn" onClick={() => handleAddToCart(product)}>Add to cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}