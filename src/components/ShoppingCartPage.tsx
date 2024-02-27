import { useShoppingCartContext } from "./ShoppingCartContext";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function ShoppingCartPage() {
  const { cart, removeFromCart, total, increaseAmount, decreaseAmount } =
    useShoppingCartContext();

  return (
    <div className="container-cart">
      <h2 className="cart-headline">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cart-product-container">
              <img
                className="product-img"
                src={product.image}
                alt={product.title}
              />
              <p className="cart-product-title">{product.title}</p>
              <p className="cart-product-price">
                {product.price * product.amount}
              </p>
              <div className="amount-container">
                <IconButton onClick={() => decreaseAmount(product)}>
                  <RemoveCircleIcon />
                </IconButton>
                {product.amount}
                <IconButton onClick={() => increaseAmount(product)}>
                  <AddCircleIcon />
                </IconButton>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="remove-btn"
              >
                Remove
              </button>
            </div>
          ))}
          <p>Total: € {total(cart).toFixed(2)} </p>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
}
