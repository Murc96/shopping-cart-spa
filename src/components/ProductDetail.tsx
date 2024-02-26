import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../handleProducts';
import { Product } from '../ts/interface/global_interfaces';
import { useShoppingCartContext } from './ShoppingCartContext';

export default function ProductDetail() {
    const { productId } = useParams<{ productId?: string }>(); // Produkt-ID aus den Routenparametern nehmen
    const [product, setProduct] = useState<Product>();
    const { addToCart } = useShoppingCartContext();

    const handleAddToCart = (product: Product) => {
        addToCart(product);
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                if (productId) {
                    const parsedProductId = parseInt(productId, 10);
                    const product = await getProduct(parsedProductId);
                    setProduct(product);
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-detail">
            <div className="product-detail-product">
                <h2 className="product-detail-title">{product.title}</h2>
                <img className="product-detail-img" src={product.image} alt={product.title} />
                <p className="product-detail-description">{product.description}</p>
                <p className="product-detail-price">Preis: {product.price} €</p>
                <button className="add-btn-detail" onClick={() => handleAddToCart(product)}>Add to cart</button>
            </div>
            
        </div>
    );
}
