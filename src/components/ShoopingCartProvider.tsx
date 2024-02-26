import { useState, ReactNode } from 'react';
import { Product } from '../ts/interface/global_interfaces';
import { ShoppingCartContext } from './ShoppingCartContext';

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const currentCart = cart;
    const isProductInCart = currentCart.some((item) => item.id === product.id) 
    if(!isProductInCart) {
      product.amount = 1;
      setCart([...cart, product]);
    } else {
      product.amount++
      setCart([...cart]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <ShoppingCartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
