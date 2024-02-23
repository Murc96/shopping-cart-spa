import { useShoppingCartContext } from './ShoppingCartContext'; // Importieren Sie den Context-Hook

export default function ShoppingCartPage() {
  const { cart, removeFromCart } = useShoppingCartContext(); // Verwenden Sie den Context-Hook

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(product => (
            <div key={product.id}>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))}
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
}


