'use client';

import Link from 'next/link';

export default function HomePage() {
  const œuvres = [
    {
      titre: 'Portrait féminin',
      slug: 'portrait-feminin',
      image: '/images_site_test/oeuvre-portrait.png',
      categorie: 'illustration',
    },
    {
      titre: 'Forêt brumeuse',
      slug: 'foret-brumeuse',
      image: '/images_site_test/oeuvre-foret.png',
      categorie: 'photo',
    },
  ];

  const artistes = [
    {
      nom: 'Alice',
      bio: 'Portraits stylisés et paysages doux.',
      slug: 'alice',
      image: '/images_site_test/artiste-alice.png',
    },
    {
      nom: 'Bob',
      bio: 'Photographie de nature et macro.',
      slug: 'bob',
      image: '/images_site_test/artiste-bob.png',
    },
  ];

  return (
    <main className="p-8">
      <section className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Bienvenue sur ArtGallery</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Découvrez des œuvres artistiques uniques proposées par nos artistes partenaires.
        </p>
      </section>

      <section id="gallery" className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Œuvres à découvrir</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {œuvres.map((œuvre) => (
            <div key={œuvre.slug} className="border rounded-xl shadow hover:shadow-lg transition">
              <img
                src={œuvre.image}
                alt={œuvre.titre}
                className="rounded-t-xl w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{œuvre.titre}</h3>
                <p className="text-sm text-gray-500 capitalize">{œuvre.categorie}</p>
                <a
                  href={`/oeuvre/${œuvre.slug}`}
                  className="mt-2 inline-block px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 text-sm"
                >
                  Voir formats
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="artists" className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Nos artistes</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {artistes.map((artiste) => (
            <Link
              key={artiste.slug}
              href={`/artiste/${artiste.slug}`}
              className="border rounded-xl shadow hover:shadow-md transition block"
            >
              <img
                src={artiste.image}
                alt={artiste.nom}
                className="rounded-t-xl w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold">{artiste.nom}</h4>
                <p className="text-sm text-gray-500">{artiste.bio}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="pt-10 mt-10 border-t text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ArtGallery. Tous droits réservés.
      </footer>
    </main>
  );
}
