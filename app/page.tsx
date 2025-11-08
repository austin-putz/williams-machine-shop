import Link from 'next/link';

export default function Home() {
  const services = [
    { name: 'Machine & Design', icon: '⚙️', href: '/what-we-do#machine-design' },
    { name: 'Repair & Fabrication', icon: '🔧', href: '/what-we-do#repair-fabrication' },
    { name: 'Custom Duct Work', icon: '🏭', href: '/what-we-do#duct-work' },
    { name: 'Powder Coating', icon: '🎨', href: '/what-we-do#powder-coating' },
    { name: 'Laser Engraving', icon: '✨', href: '/what-we-do#laser-engraving' },
    { name: 'Purchase Metal', icon: '🏗️', href: '/what-we-do#purchase-metal' },
    { name: 'Tank Exchange', icon: '⛽', href: '/what-we-do#tank-exchange' },
    { name: 'Supplies & Accessories', icon: '🛠️', href: '/what-we-do#supplies' },
    { name: 'Sand Blasting', icon: '💨', href: '/what-we-do#sand-blasting' },
    { name: 'Portable Welding', icon: '🔥', href: '/what-we-do#portable-welding' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-white py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Williams Machine Shop, Inc.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Quality Steel Fabrication & Machining Since 1991
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300">
            Located in Lacona, Iowa, we specialize in farm equipment repair, custom fabrication,
            and a wide range of steel machining services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-light text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Contact Us
            </Link>
            <Link
              href="/what-we-do"
              className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-lg transition"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary">What We Do</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We offer comprehensive steel fabrication and machining services to meet all your needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="service-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl text-center"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-lg text-primary">{service.name}</h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/what-we-do"
              className="inline-block bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Why Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                30+
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Years of Experience</h3>
              <p className="text-gray-600">
                Serving the community since 1991 with quality craftsmanship and reliable service
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Versatile Capabilities</h3>
              <p className="text-gray-600">
                From machining to fabrication, powder coating to welding - we do it all
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🏆
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Quality Workmanship</h3>
              <p className="text-gray-600">
                Built our reputation on quality work and word-of-mouth referrals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Contact us today for a consultation or visit our shop in Lacona, Iowa
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
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
