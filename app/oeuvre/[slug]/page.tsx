'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { usePanier } from '@/context/CartContext'; // corrigé avec alias @

export default function OeuvrePage() {
  const params = useParams();
  const { ajouterAuPanier } = usePanier();
  const [ajouté, setAjouté] = useState(false);

  const œuvres = [
    {
      titre: 'Forêt brumeuse',
      slug: 'foret-brumeuse',
      image: '/images_site_test/oeuvre-foret.png',
      artiste: 'Bob',
      formats: ['A4', 'A3', '30x40cm']
    },
    {
      titre: 'Portrait féminin',
      slug: 'portrait-feminin',
      image: '/images_site_test/oeuvre-portrait.png',
      artiste: 'Alice',
      formats: ['A4', 'A3']
    },
  ];

  const slug = params.slug?.toString(); // 🔧 correction ici
  const œuvre = œuvres.find((o) => o.slug === slug);
  const [formatChoisi, setFormatChoisi] = useState(œuvre?.formats[0]);

  if (!œuvre) return <p className="text-center text-red-500 mt-10">Œuvre introuvable</p>;

  const handleAjout = () => {
    ajouterAuPanier({ slug: œuvre.slug, titre: œuvre.titre, format: formatChoisi, image: œuvre.image });
    setAjouté(true);
    setTimeout(() => setAjouté(false), 2000);
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <img src={œuvre.image} alt={œuvre.titre} className="w-full h-96 object-cover rounded-xl mb-6" />
      <h1 className="text-3xl font-bold mb-2">{œuvre.titre}</h1>
      <p className="text-gray-600 mb-4">Par {œuvre.artiste}</p>

      <label htmlFor="format" className="block text-sm font-medium mb-2">Choisir un format :</label>
      <select
        id="format"
        value={formatChoisi}
        onChange={(e) => setFormatChoisi(e.target.value)}
        className="mb-4 p-2 border rounded-md w-full"
      >
        {œuvre.formats.map((f) => (
          <option key={f} value={f}>{f}</option>
        ))}
      </select>

      <button
        onClick={handleAjout}
        className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition"
      >
        Ajouter au panier
      </button>

      {ajouté && (
        <div className="mt-4 p-3 text-green-800 bg-green-100 rounded-md border border-green-300">
          ✔️ Ajouté au panier
        </div>
      )}

      <div className="mt-8">
        <a href="/" className="inline-block px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 text-sm">← Retour à la galerie</a>
      </div>
    </div>
  );
}
