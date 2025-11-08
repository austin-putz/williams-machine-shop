import Link from 'next/link';

export default function Products() {
  const productCategories = [
    {
      name: 'Metal Materials',
      icon: '🏗️',
      description: 'Quality steel and metal products in various grades and sizes',
      items: ['Steel sheets and plates', 'Metal bars and rods', 'Structural steel', 'Custom cut materials'],
    },
    {
      name: 'Welding Supplies',
      icon: '🔥',
      description: 'Complete range of welding equipment and consumables',
      items: ['Welding rods and wire', 'Gas and regulators', 'Safety equipment', 'Welding accessories'],
    },
    {
      name: 'Shop Tools & Equipment',
      icon: '🛠️',
      description: 'Professional tools and equipment for your projects',
      items: ['Hand tools', 'Power tools', 'Measuring equipment', 'Safety gear'],
    },
    {
      name: 'Industrial Supplies',
      icon: '⚙️',
      description: 'Essential supplies for industrial and agricultural applications',
      items: ['Fasteners and hardware', 'Lubricants and fluids', 'Abrasives', 'Shop supplies'],
    },
    {
      name: 'Propane & Tanks',
      icon: '⛽',
      description: 'Propane tank sales and exchange services',
      items: ['Propane tank exchange', 'New tank sales', 'Various tank sizes', 'Refills available'],
    },
    {
      name: 'Custom Fabricated Products',
      icon: '🔧',
      description: 'Made-to-order custom metal products and components',
      items: ['Custom parts', 'Agricultural equipment', 'Replacement components', 'Specialty items'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-modern text-white min-h-[60vh]">
        <div className="relative container-custom text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bold mb-6 text-white animate-fade-in-up">Our Products</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Quality materials, tools, and supplies for your industrial and agricultural needs
            </p>
            <div className="inline-block glass rounded-2xl px-6 py-3 text-lg font-semibold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              6 Product Categories
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <div
                key={category.name}
                className="card-modern p-8 group"
              >
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-primary transition-colors duration-300">
                      {category.name}
                    </h2>
                    <div className="h-1 w-12 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Items List */}
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <svg
                        className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Information Box */}
          <div className="mt-16 card-modern p-12">
            <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">Product Information</h2>
            <p className="text-lg text-slate-600 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
              We stock a wide variety of products and materials. If you don't see what you're looking for,
              we can likely source it for you or create a custom solution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2 text-slate-900">Quality Products</h3>
                <p className="text-slate-600">Only the best materials and supplies</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2 text-slate-900">Quick Turnaround</h3>
                <p className="text-slate-600">Fast service on stock and custom items</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2 text-slate-900">Competitive Pricing</h3>
                <p className="text-slate-600">Fair prices on all our products</p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-primary text-white p-12 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking for Something Specific?</h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Contact us for product availability, pricing, and custom orders
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:641-534-3030"
                  className="inline-flex items-center justify-center px-8 py-4 font-semibold text-slate-900 bg-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: 641-534-3030
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 border-2 border-white/30 hover:bg-white/10"
                >
                  Send an Inquiry
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
