'use client';

import Link from 'next/link';
import { usePanier } from '../context/CartContext';

export default function Navigation() {
  const { panier } = usePanier();

  return (
    <header className="p-6 shadow-md flex justify-between items-center sticky top-0 bg-white z-50">
      <h1 className="text-2xl font-bold">
        <Link href="/">ArtGallery</Link>
      </h1>
      <nav className="space-x-4 text-sm">
        <Link href="/#artists" className="hover:underline">
          Artistes
        </Link>
        <Link href="/#gallery" className="hover:underline">
          Galerie
        </Link>
        <Link href="/panier" className="hover:underline">
          Panier ({panier.length})
        </Link>
      </nav>
    </header>
  );
}
