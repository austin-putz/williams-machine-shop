export default function WhatWeDo() {
  const services = [
    {
      id: 'machine-design',
      name: 'Machine & Design',
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
      <section className="bg-primary text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive steel fabrication and machining services to meet all your needs.
            We like to think we can do just about anything with steel.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } p-8 rounded-lg shadow-md`}
              >
                <h2 className="text-3xl font-bold mb-4 text-primary">{service.name}</h2>
                <p className="text-lg text-gray-700 mb-6">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.details.map((detail) => (
                    <div key={detail} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-accent mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-primary text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
            <p className="text-xl mb-6 text-gray-200">
              Contact us to discuss your specific project requirements
            </p>
            <a
              href="tel:641-534-3030"
              className="inline-block bg-accent hover:bg-accent-light text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Call 641-534-3030
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
