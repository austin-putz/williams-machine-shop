import Link from 'next/link';

export default function Home() {
  const services = [
    { name: 'Machine & Design', icon: '⚙️', href: '/what-we-do#machine-design', description: 'Custom machining and precision design services' },
    { name: 'Repair & Fabrication', icon: '🔧', href: '/what-we-do#repair-fabrication', description: 'Expert repair and custom fabrication' },
    { name: 'Custom Duct Work', icon: '🏭', href: '/what-we-do#duct-work', description: 'Industrial ductwork solutions' },
    { name: 'Powder Coating', icon: '🎨', href: '/what-we-do#powder-coating', description: 'Durable powder coating finishes' },
    { name: 'Laser Engraving', icon: '✨', href: '/what-we-do#laser-engraving', description: 'Precision laser engraving' },
    { name: 'Purchase Metal', icon: '🏗️', href: '/what-we-do#purchase-metal', description: 'Quality metal materials' },
    { name: 'Tank Exchange', icon: '⛽', href: '/what-we-do#tank-exchange', description: 'Convenient tank services' },
    { name: 'Supplies & Accessories', icon: '🛠️', href: '/what-we-do#supplies', description: 'Tools and equipment' },
    { name: 'Sand Blasting', icon: '💨', href: '/what-we-do#sand-blasting', description: 'Professional sand blasting' },
    { name: 'Portable Welding', icon: '🔥', href: '/what-we-do#portable-welding', description: 'On-site welding services' },
  ];

  const features = [
    {
      number: '30+',
      title: 'Years of Experience',
      description: 'Serving the community since 1991 with quality craftsmanship and reliable service',
      icon: '📅'
    },
    {
      number: '10+',
      title: 'Service Offerings',
      description: 'From machining to fabrication, powder coating to welding - we do it all',
      icon: '⚡'
    },
    {
      number: '100%',
      title: 'Quality Focused',
      description: 'Built our reputation on quality work and word-of-mouth referrals',
      icon: '🏆'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-modern text-white">
        {/* Background Logo */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <img
            src="/images/williams-logo.png"
            alt=""
            className="w-full max-w-4xl opacity-5 scale-150"
          />
        </div>

        <div className="relative container-custom text-center px-4">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 glass rounded-full text-sm font-semibold animate-fade-in-up">
              Est. 1991 • Family Owned & Operated
            </div>
            <h1 className="font-bold mb-6 text-white animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="block text-5xl md:text-6xl lg:text-7xl mb-4">Williams</span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-gradient-accent">Machine Shop</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-6 text-white/90 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Quality Steel Fabrication & Machining
            </p>
            <p className="text-base md:text-lg lg:text-xl mb-12 max-w-3xl mx-auto text-white/80 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Located in Lacona, Iowa, we specialize in farm equipment repair, custom fabrication,
              and a wide range of steel machining services with over 30 years of expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link href="/contact" className="btn-primary">
                Get a Quote
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/what-we-do" className="btn-secondary">
                Explore Services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 left-0 right-0 hidden lg:block">
          <div className="container-custom">
            <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="glass rounded-2xl p-6 text-center animate-fade-in-up"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="text-4xl font-bold text-white mb-1">{feature.number}</div>
                  <div className="text-sm text-white/80 font-semibold">{feature.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4">
              <span className="text-gradient">Our Services</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive steel fabrication and machining services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 stagger-children">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="service-card-modern p-6 text-center"
              >
                <div className="relative z-10">
                  <div className="service-icon text-5xl mb-4 transition-all duration-300 inline-block">
                    {service.icon}
                  </div>
                  <h3 className="service-content font-bold text-lg mb-2 text-slate-900 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="service-content text-sm text-slate-600 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/what-we-do" className="btn-primary">
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4 text-slate-900">Why Choose Us</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Three decades of excellence in steel fabrication and machining
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="feature-card">
                <div className="feature-icon text-white">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4 text-slate-900">How We Work</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Our streamlined process ensures quality results every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Discuss your project requirements and get expert advice', icon: '💬' },
              { step: '02', title: 'Planning', description: 'We create detailed plans and provide accurate estimates', icon: '📋' },
              { step: '03', title: 'Fabrication', description: 'Our skilled team brings your project to life', icon: '⚙️' },
              { step: '04', title: 'Delivery', description: 'Quality inspection and timely delivery of your project', icon: '✅' }
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="card-modern p-6 text-center h-full">
                  <div className="text-6xl font-bold text-slate-200 mb-4">{item.step}</div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative section-padding bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="relative container-custom text-center">
          <h2 className="font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Contact us today for a consultation or visit our shop in Lacona, Iowa
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
              Send a Message
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
