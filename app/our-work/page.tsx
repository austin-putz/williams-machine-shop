import Link from 'next/link';

export default function OurWork() {
  const projectCategories = [
    {
      title: 'Farm Equipment Repair & Modification',
      icon: '🚜',
      description: 'Repairs and custom modifications for agricultural equipment',
      examples: [
        'Tractor component repair and replacement',
        'Harvester modifications',
        'Grain handling equipment repair',
        'Custom mounting brackets and attachments',
      ],
    },
    {
      title: 'Custom Fabrication Projects',
      icon: '🔨',
      description: 'Unique metal fabrication solutions designed and built to spec',
      examples: [
        'Custom steel structures',
        'Agricultural buildings and supports',
        'Equipment frames and chassis',
        'Industrial machinery components',
      ],
    },
    {
      title: 'Powder Coating Work',
      icon: '🎨',
      description: 'Professional finishing for a variety of metal products',
      examples: [
        'Farm equipment restoration',
        'Automotive parts finishing',
        'Industrial equipment coating',
        'Custom color applications',
      ],
    },
    {
      title: 'Precision Machining',
      icon: '⚙️',
      description: 'High-quality machined parts and components',
      examples: [
        'Custom bushings and bearings',
        'Shafts and spindles',
        'Replacement parts manufacturing',
        'Prototype development',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-modern text-white min-h-[60vh]">
        <div className="relative container-custom text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bold mb-6 text-white animate-fade-in-up">Our Work</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Examples of projects and services we've completed for our customers throughout Iowa and beyond
            </p>
            <div className="inline-block glass rounded-2xl px-6 py-3 text-lg font-semibold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              30+ Years of Excellence
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">What We've Built</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Over 30 years of experience in steel fabrication and machining. Every project receives
              the same attention to detail and commitment to quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectCategories.map((category) => (
              <div
                key={category.title}
                className="card-modern p-8 group"
              >
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                    <div className="h-1 w-16 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Examples */}
                <div className="space-y-3">
                  {category.examples.map((example) => (
                    <div key={example} className="flex items-start gap-3">
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
                      <span className="text-slate-700">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Recognition Section */}
          <div className="mt-16 card-modern p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Recognized Excellence</h2>
            <p className="text-xl mb-2 text-slate-700 font-semibold">
              2017 Albaugh Awards Recipient
            </p>
            <p className="text-lg text-slate-600">
              We're proud to have been recognized for our quality work and service to the community
            </p>
          </div>

          {/* Social Media Gallery CTA */}
          <div className="mt-16 card-modern p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">See More of Our Work</h2>
            <p className="text-lg text-slate-600 mb-8">
              Follow us on social media to see photos and videos of our latest projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.facebook.com/williamsmachineshop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 bg-[#1877F2]"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Visit our Facebook
              </a>
              <a
                href="https://www.youtube.com/channel/UCkD7P_BjyisZ99bQD00TyXw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 bg-[#FF0000]"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch on YouTube
              </a>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-primary text-white p-12 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
            <div className="relative text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Let's discuss how we can help bring your vision to life
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
                  Contact Us
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
