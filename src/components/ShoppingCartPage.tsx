import { useShoppingCartContext } from './ShoppingCartContext'; // Importieren Sie den Context-Hook

export default function ShoppingCartPage() {
  const { cart, removeFromCart } = useShoppingCartContext(); // Verwenden Sie den Context-Hook

  return (
    <div className="container-cart">
      <h2 className='cart-headline'>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(product => (
            <div key={product.id} className='cart-product-container'>
              <img className="product-img" src={product.image} alt={product.title} />
              <p className='cart-product-title'>{product.title}</p>
              <p className="cart-product-price">{product.price}</p>
              <button onClick={() => removeFromCart(product.id)} className='remove-btn'>Remove</button>
            </div>
          ))}
          <button className='checkout-btn'>Checkout</button>
        </div>
      )}
    </div>
  );
}


