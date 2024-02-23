import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../handleProducts';
import { Product } from '../ts/interface/global_interfaces';

export default function ProductDetail() {
    const { productId } = useParams<{ productId?: string }>(); // Nehmen Sie die Produkt-ID aus den Routenparametern
    const [product, setProduct] = useState<Product>();

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
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
}
