'use client';

import { usePanier } from '@/context/CartContext';
import { useState } from 'react';

export default function PanierPage() {
  const { panier, retirerDuPanier } = usePanier();

  const [prixUnitaire] = useState(40); // Prix fixe par œuvre, par exemple

  const total = panier.length * prixUnitaire;

  return (
    <div className="p-8 max-w-3xl mx-auto min-h-screen bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Votre panier</h1>

      {panier.length === 0 ? (
        <p className="text-gray-500">Votre panier est vide.</p>
      ) : (
        <>
          <div className="space-y-4">
            {panier.map((item, i) => (
              <div key={`${item.slug}-${item.format}`} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.titre}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-semibold">{item.titre}</h4>
                    <p className="text-sm text-gray-600">Format : {item.format}</p>
                    <p className="text-sm text-gray-700">Prix : {prixUnitaire}€</p>
                  </div>
                </div>
                <button
                  onClick={() => retirerDuPanier(item.slug, item.format)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Retirer
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <p className="text-lg font-semibold">
              Total : <span className="text-black">{total} €</span>
            </p>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition">
              Procéder au paiement
            </button>
          </div>
        </>
      )}
    </div>
  );
}
