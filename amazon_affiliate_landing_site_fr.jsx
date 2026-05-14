export default function AmazonAffiliateSite() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-black text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Mon Shop Affilié</h1>
          <nav className="space-x-4 text-sm md:text-base">
            <a href="#produits" className="hover:text-gray-300">Produits</a>
            <a href="#apropos" className="hover:text-gray-300">À propos</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Découvrez les meilleurs produits tendance
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Retrouvez une sélection premium de vêtements, accessoires et produits populaires disponibles sur Amazon.
        </p>
        <a
          href="https://www.amazon.com"
          target="_blank"
          className="bg-black text-white px-8 py-4 rounded-2xl text-lg shadow-lg hover:scale-105 transition"
        >
          Voir les produits
        </a>
      </section>

      {/* Produits */}
      <section id="produits" className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-4xl font-bold text-center mb-12">Produits populaires</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Produit 1 */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop"
              alt="Hoodie Nike"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-3">Nike Tech Fleece Hoodie</h4>
              <p className="text-gray-600 mb-4">
                Sweat à capuche homme tendance avec confort premium et style streetwear moderne.
              </p>
              <a
                href="https://www.amazon.com"
                target="_blank"
                className="inline-block bg-black text-white px-5 py-3 rounded-xl hover:opacity-90"
              >
                Acheter maintenant
              </a>
            </div>
          </div>

          {/* Produit 2 */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
              alt="Chaussures"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-3">Sneakers Homme</h4>
              <p className="text-gray-600 mb-4">
                Des chaussures modernes parfaites pour le sport et le quotidien.
              </p>
              <a
                href="https://www.amazon.com"
                target="_blank"
                className="inline-block bg-black text-white px-5 py-3 rounded-xl hover:opacity-90"
              >
                Acheter maintenant
              </a>
            </div>
          </div>

          {/* Produit 3 */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop"
              alt="Mode Homme"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h4 className="text-2xl font-semibold mb-3">Mode Homme Premium</h4>
              <p className="text-gray-600 mb-4">
                Découvrez les dernières tendances fashion et streetwear homme.
              </p>
              <a
                href="https://www.amazon.com"
                target="_blank"
                className="inline-block bg-black text-white px-5 py-3 rounded-xl hover:opacity-90"
              >
                Découvrir
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* A propos */}
      <section id="apropos" className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">À propos</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Ce site présente une sélection de produits recommandés via le programme Amazon Associates. Certains liens sont des liens affiliés et peuvent générer une commission sans coût supplémentaire pour vous.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 max-w-3xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-8">Contact</h3>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full border p-4 rounded-xl"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="w-full border p-4 rounded-xl"
            />
            <textarea
              placeholder="Votre message"
              rows="5"
              className="w-full border p-4 rounded-xl"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-8 py-4 rounded-2xl hover:opacity-90"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center p-6 mt-10">
        <p>© 2026 Mon Shop Affilié — Amazon Associates</p>
      </footer>
    </div>
  );
}
