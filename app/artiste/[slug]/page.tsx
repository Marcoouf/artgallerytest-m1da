'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const MotionDiv = motion.div;

type Oeuvre = {
  titre: string;
  artiste: string;
  image: string;
};

const œuvres: Oeuvre[] = [
  {
    titre: 'Fleur',
    artiste: 'Alice',
    image: '/images_site_test/oeuvre-fleur.jpg',
  },
  {
    titre: 'Forêt',
    artiste: 'Alice',
    image: '/images_site_test/oeuvre-foret.jpg',
  },
  {
    titre: 'Portrait',
    artiste: 'Bob',
    image: '/images_site_test/oeuvre-portrait.jpg',
  },
  {
    titre: 'Paysage',
    artiste: 'Bob',
    image: '/images_site_test/oeuvre-paysage.jpg',
  },
];

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const nomArtiste = slug.charAt(0).toUpperCase() + slug.slice(1);

  const œuvresDeLArtiste = œuvres.filter((œuvre) =>
    œuvre.artiste.toLowerCase() === slug.toLowerCase()
  );

  if (œuvresDeLArtiste.length === 0) return notFound();

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <Link href="/" className="inline-block mb-4">
        <div className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition">
          ← Retour à la galerie
        </div>
      </Link>
      <h1 className="text-3xl font-bold mb-6">Œuvres de {nomArtiste}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {œuvresDeLArtiste.map((œuvre, i) => (
          <MotionDiv
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
          >
            <Image
              src={œuvre.image}
              alt={œuvre.titre}
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{œuvre.titre}</h2>
              <Link
                href={`/oeuvre/${encodeURIComponent(œuvre.titre.toLowerCase())}`}
                className="inline-block bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition"
              >
                Voir formats
              </Link>
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
