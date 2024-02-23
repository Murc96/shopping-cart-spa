import { createContext, useContext } from 'react';
import { Product } from '../ts/interface/global_interfaces';

interface ShoppingCartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}

// Export the context itself
export const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

// Custom hook to use the context
export const useShoppingCartContext = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('useShoppingCartContext must be used within a ShoppingCartProvider');
  }
  return context;
};


