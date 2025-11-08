import Link from 'next/link';

export default function Products() {
  const productCategories = [
    {
      name: 'Metal Materials',
      description: 'Quality steel and metal products in various grades and sizes',
      items: ['Steel sheets and plates', 'Metal bars and rods', 'Structural steel', 'Custom cut materials'],
    },
    {
      name: 'Welding Supplies',
      description: 'Complete range of welding equipment and consumables',
      items: ['Welding rods and wire', 'Gas and regulators', 'Safety equipment', 'Welding accessories'],
    },
    {
      name: 'Shop Tools & Equipment',
      description: 'Professional tools and equipment for your projects',
      items: ['Hand tools', 'Power tools', 'Measuring equipment', 'Safety gear'],
    },
    {
      name: 'Industrial Supplies',
      description: 'Essential supplies for industrial and agricultural applications',
      items: ['Fasteners and hardware', 'Lubricants and fluids', 'Abrasives', 'Shop supplies'],
    },
    {
      name: 'Propane & Tanks',
      description: 'Propane tank sales and exchange services',
      items: ['Propane tank exchange', 'New tank sales', 'Various tank sizes', 'Refills available'],
    },
    {
      name: 'Custom Fabricated Products',
      description: 'Made-to-order custom metal products and components',
      items: ['Custom parts', 'Agricultural equipment', 'Replacement components', 'Specialty items'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Quality materials, tools, and supplies for your industrial and agricultural needs
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <div
                key={category.name}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <h2 className="text-2xl font-bold mb-3 text-primary">{category.name}</h2>
                <p className="text-gray-600 mb-4">{category.description}</p>

                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start text-gray-700">
                      <svg
                        className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5"
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
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-primary text-center">Product Information</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 mb-6">
                We stock a wide variety of products and materials. If you don't see what you're looking for,
                we can likely source it for you or create a custom solution.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div>
                  <div className="text-accent text-3xl mb-2">✓</div>
                  <h3 className="font-bold mb-2">Quality Products</h3>
                  <p className="text-gray-600 text-sm">Only the best materials and supplies</p>
                </div>
                <div>
                  <div className="text-accent text-3xl mb-2">⚡</div>
                  <h3 className="font-bold mb-2">Quick Turnaround</h3>
                  <p className="text-gray-600 text-sm">Fast service on stock and custom items</p>
                </div>
                <div>
                  <div className="text-accent text-3xl mb-2">💰</div>
                  <h3 className="font-bold mb-2">Competitive Pricing</h3>
                  <p className="text-gray-600 text-sm">Fair prices on all our products</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-primary text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Looking for Something Specific?</h2>
            <p className="text-xl mb-6 text-gray-200">
              Contact us for product availability, pricing, and custom orders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:641-534-3030"
                className="bg-accent hover:bg-accent-light text-white font-bold py-3 px-8 rounded-lg transition"
              >
                Call: 641-534-3030
              </a>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-lg transition"
              >
                Send an Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
