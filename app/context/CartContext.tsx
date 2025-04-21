'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type ItemPanier = {
  slug: string;
  titre: string;
  format: string;
  image: string;
};

type CartContextType = {
  panier: ItemPanier[];
  ajouterAuPanier: (item: ItemPanier) => void;
  retirerDuPanier: (slug: string, format: string) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [panier, setPanier] = useState<ItemPanier[]>([]);

  const ajouterAuPanier = (item: ItemPanier) => {
    setPanier((prev) => [...prev, item]);
  };

  const retirerDuPanier = (slug: string, format: string) => {
    setPanier((prev) =>
      prev.filter((i) => !(i.slug === slug && i.format === format))
    );
  };

  return (
    <CartContext.Provider value={{ panier, ajouterAuPanier, retirerDuPanier }}>
      {children}
    </CartContext.Provider>
  );
}

export function usePanier() {
  const context = useContext(CartContext);
  if (!context) throw new Error('usePanier doit être utilisé dans CartProvider');
  return context;
}
