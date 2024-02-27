import { useState, ReactNode } from "react";
import { Product } from "../ts/interface/global_interfaces";
import { ShoppingCartContext } from "./ShoppingCartContext";
import { produce } from "immer";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const currentCart = cart;
    const isProductInCart = currentCart.some((item) => item.id === product.id);
    if (!isProductInCart) {
      product.amount = 1;
      setCart([...cart, product]);
    } else {
      product.amount++;
      setCart([...cart]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const total = (products: Product[]) => {
    let sum = 0;
    products.map((product) => {
      sum += product.price;
    });
    return sum;
  };

  const increaseAmount = (product: Product) => {
    const nextState = produce(cart, (draft) => {
      const index = draft!.findIndex((p) => p.id === product.id);
      draft![index].amount++;
    });
    setCart(nextState!);
  };

  const decreaseAmount = (product: Product) => {
    const nextState = produce(cart, (draft) => {
      const index = draft!.findIndex((p) => p.id === product.id);
      if (product.amount > 1) draft![index].amount--;
    });
    setCart(nextState!);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        total,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
