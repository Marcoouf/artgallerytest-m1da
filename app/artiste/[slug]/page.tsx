'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function ArtistPage() {
  const params = useParams();
  const slug = (params?.slug as string) || 'alice';

  const artistes = {
    alice: {
      nom: 'Alice',
      bio: 'Alice est une illustratrice passionnée par les portraits stylisés et les paysages doux.',
      avatar: '/images_site_test/artiste-alice.jpg',
    },
    bob: {
      nom: 'Bob',
      bio: 'Bob est un photographe amateur de nature et de fleurs en macro.',
      avatar: '/images_site_test/artiste-bob.jpg',
    },
  };

  const œuvres = [
    { titre: 'Portrait féminin', artiste: 'Alice', image: '/images_site_test/oeuvre-portrait.jpg' },
    { titre: 'Forêt brumeuse', artiste: 'Bob', image: '/images_site_test/oeuvre-foret.jpg' },
    { titre: 'Paysage vallonné', artiste: 'Alice', image: '/images_site_test/oeuvre-paysage.jpg' },
    { titre: 'Fleur macro', artiste: 'Bob', image: '/images_site_test/oeuvre-fleur.jpg' },
  ];

  const artiste = artistes[slug];

  if (!artiste) {
    return <div className="p-10 text-center text-red-500">Artiste introuvable</div>;
  }

  const œuvresDeLArtiste = œuvres.filter(
    (o) => o.artiste.toLowerCase() === artiste.nom.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="p-10 text-center bg-gray-100">
        <img
          src={artiste.avatar}
          alt={artiste.nom}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-3xl font-bold">{artiste.nom}</h1>
        <p className="text-sm text-gray-600 max-w-xl mx-auto mt-2">{artiste.bio}</p>
      </section>

      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Œuvres de {artiste.nom}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {œuvresDeLArtiste.map((œuvre, i) => (
            <motion.div
              key={i}
              className="border rounded-2xl shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
            >
              <img src={œuvre.image} alt={œuvre.titre} className="rounded-t-2xl w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-bold">{œuvre.titre}</h4>
                <a
                  href={`/oeuvre/${œuvre.titre.toLowerCase().replaceAll(' ', '-').normalize('NFD').replace(/[̀-ͯ]/g, '')}`}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Voir formats
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="text-center my-12">
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-6 py-2 bg-gray-900 text-white rounded-2xl shadow hover:shadow-lg transition font-medium text-sm"
        >
          ← Retour à la galerie
        </motion.a>
      </div>
    </div>
  );
}
