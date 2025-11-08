export default function WhatWeDo() {
  const services = [
    {
      id: 'machine-design',
      name: 'Machine & Design',
      icon: '⚙️',
      description: 'Precision machining and custom design solutions tailored to your specific needs. Our experienced team can handle complex machining projects with accuracy and efficiency.',
      details: [
        'CNC machining services',
        'Custom design and engineering',
        'Precision manufacturing',
        'Prototype development',
      ],
    },
    {
      id: 'repair-fabrication',
      name: 'Repair & Fabrication',
      icon: '🔧',
      description: 'Expert repair services and metal fabrication. We specialize in farm and tractor equipment repair, and can fabricate custom metal solutions.',
      details: [
        'Farm equipment repair',
        'Tractor repair and maintenance',
        'Custom metal fabrication',
        'Structural steel work',
      ],
    },
    {
      id: 'duct-work',
      name: 'Custom Duct Work',
      icon: '🏭',
      description: 'Professional custom ductwork fabrication and installation for agricultural, commercial, and industrial applications.',
      details: [
        'Agricultural ventilation systems',
        'Industrial ductwork',
        'Custom duct fabrication',
        'Installation services',
      ],
    },
    {
      id: 'powder-coating',
      name: 'Powder Coating',
      icon: '🎨',
      description: 'Professional powder coating services providing durable, high-quality finishes for metal parts and equipment.',
      details: [
        'Wide range of colors available',
        'Durable protective finish',
        'Environmentally friendly process',
        'Parts preparation and finishing',
      ],
    },
    {
      id: 'laser-engraving',
      name: 'Laser Engraving',
      icon: '✨',
      description: 'Precision laser engraving services for custom marking, personalization, and identification on metal surfaces.',
      details: [
        'Custom text and graphics',
        'Logo engraving',
        'Parts marking and identification',
        'Personalization services',
      ],
    },
    {
      id: 'purchase-metal',
      name: 'Purchase Metal',
      icon: '🏗️',
      description: 'Quality metal sales for your projects. We stock a variety of metal materials and can source specialty items.',
      details: [
        'Steel and metal sales',
        'Various grades and sizes',
        'Cut to size available',
        'Specialty materials on request',
      ],
    },
    {
      id: 'tank-exchange',
      name: 'Tank Exchange',
      icon: '⛽',
      description: 'Convenient propane and gas tank exchange programs for residential and commercial customers.',
      details: [
        'Propane tank exchange',
        'Safe and convenient service',
        'Multiple tank sizes',
        'Competitive pricing',
      ],
    },
    {
      id: 'supplies',
      name: 'Supplies & Accessories',
      icon: '🛠️',
      description: 'Wide selection of industrial supplies, tools, and accessories for your shop and project needs.',
      details: [
        'Welding supplies',
        'Safety equipment',
        'Shop tools and accessories',
        'Industrial supplies',
      ],
    },
    {
      id: 'sand-blasting',
      name: 'Sand Blasting',
      icon: '💨',
      description: 'Professional sandblasting services for surface preparation, rust removal, and paint stripping.',
      details: [
        'Rust and paint removal',
        'Surface preparation',
        'Parts cleaning and restoration',
        'Various media options',
      ],
    },
    {
      id: 'portable-welding',
      name: 'Portable Welding',
      icon: '🔥',
      description: 'Mobile welding services bringing our expertise directly to your location for on-site repairs and fabrication.',
      details: [
        'On-site welding services',
        'Emergency repairs',
        'Farm and field welding',
        'Mobile service throughout the area',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-modern text-white min-h-[60vh]">
        <div className="relative container-custom text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bold mb-6 text-white animate-fade-in-up">
              What We Do
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Comprehensive steel fabrication and machining services to meet all your needs.
              We like to think we can do just about anything with steel.
            </p>
            <div className="inline-block glass rounded-2xl px-6 py-3 text-lg font-semibold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              10+ Specialized Services
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="card-modern p-8 scroll-mt-24 group"
              >
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-primary transition-colors duration-300">
                      {service.name}
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Details */}
                <div className="space-y-3">
                  {service.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-slate-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-primary text-white p-12 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need More Information?</h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Contact us to discuss your specific project requirements and get a free consultation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:641-534-3030"
                  className="inline-flex items-center justify-center px-8 py-4 font-semibold text-slate-900 bg-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 641-534-3030
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 border-2 border-white/30 hover:bg-white/10"
                >
                  Send a Message
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
