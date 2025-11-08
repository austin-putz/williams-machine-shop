export default function Apply() {
  const benefits = [
    { icon: '👨‍👩‍👧‍👦', title: 'Family-Run Business', description: 'Join a close-knit team where your contribution matters and you\'re treated like family' },
    { icon: '🎓', title: 'Learn & Grow', description: 'Develop your skills with hands-on experience in diverse fabrication and machining projects' },
    { icon: '🏆', title: 'Quality Work', description: 'Take pride in producing high-quality work for our valued customers across Iowa and beyond' },
    { icon: '📍', title: 'Great Location', description: 'Work in Lacona, Iowa at our spacious six-acre facility with modern equipment' }
  ];

  const positions = [
    {
      title: 'Welder / Fabricator',
      description: 'Seeking experienced welders and fabricators to join our team. Must have welding experience and ability to read blueprints. Farm equipment experience is a plus.',
      requirements: [
        'MIG/TIG welding experience preferred',
        'Metal fabrication skills',
        'Blueprint reading ability',
        'Self-motivated and detail-oriented'
      ]
    },
    {
      title: 'Machinist',
      description: 'Looking for skilled machinists with experience in precision machining and CNC operation.',
      requirements: [
        'CNC machine operation experience',
        'Precision measurement skills',
        'Blueprint and technical drawing interpretation',
        'Quality control mindset'
      ]
    },
    {
      title: 'Shop Helper / Entry Level',
      description: 'Entry-level positions available for motivated individuals looking to start a career in metal fabrication. Training provided.',
      requirements: [
        'Willingness to learn',
        'Strong work ethic',
        'Reliable and punctual',
        'Ability to work in a team'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-modern text-white min-h-[60vh]">
        <div className="relative container-custom text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bold mb-6 text-white animate-fade-in-up">Join Our Team</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Be part of a family-run business with over 30 years of excellence in steel fabrication and machining
            </p>
            <div className="inline-block glass rounded-2xl px-6 py-3 text-lg font-semibold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Now Hiring
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-6xl mx-auto">
          {/* Why Work With Us */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 text-center">Why Work at Williams Machine Shop?</h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              Join a team that values quality craftsmanship, continuous learning, and family values
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="card-modern p-8 group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <div className="h-1 w-12 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Positions */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 text-center">Open Positions</h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our growing team
            </p>

            <div className="space-y-6">
              {positions.map((position) => (
                <div key={position.title} className="card-modern p-8">
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">{position.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {position.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {position.requirements.map((requirement) => (
                      <div key={requirement} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-slate-700">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Apply */}
          <div className="card-modern p-12">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 text-center">How to Apply</h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our team. If you're interested in working with us, please reach out:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="card-modern p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Call Us</h3>
                <a href="tel:641-534-3030" className="text-secondary hover:text-accent font-semibold transition-colors">
                  641-534-3030
                </a>
              </div>

              <div className="card-modern p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Email Your Resume</h3>
                <a href="mailto:orders@williamsmachineshop.com?subject=Job Application" className="text-secondary hover:text-accent font-semibold break-all transition-colors">
                  orders@williamsmachineshop.com
                </a>
              </div>

              <div className="card-modern p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Visit In Person</h3>
                <p className="text-slate-700">21563 G76 Highway</p>
                <p className="text-slate-700">Lacona, Iowa 50139</p>
                <p className="text-sm text-slate-600 mt-2">Mon-Fri, 8:00 AM - 5:00 PM</p>
              </div>
            </div>

            <div className="border-t pt-8 border-slate-200">
              <h3 className="font-bold text-xl mb-4 text-slate-900">What to Include</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Current resume or work history',
                  'Relevant certifications or training',
                  'References (if available)',
                  'Brief description of your experience and interests'
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Equal Opportunity */}
          <div className="mt-8 text-center p-6 bg-slate-100 rounded-2xl">
            <p className="text-sm text-slate-600 leading-relaxed">
              Williams Machine Shop, Inc. is an equal opportunity employer. We celebrate diversity
              and are committed to creating an inclusive environment for all employees.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
