export default function About() {
  const milestones = [
    { year: '1991', title: 'Founded', description: 'Troy Williams established Williams Machine Shop' },
    { year: '1995', title: 'First Employee', description: 'Hired our first employee after 4 years of hard work' },
    { year: '2017', title: 'Albaugh Award', description: 'Received Albaugh Award for excellence' },
    { year: '2025', title: 'Today', description: 'Six-acre facility serving Iowa and beyond' }
  ];

  const values = [
    { icon: '⚙️', title: 'Diverse Capabilities', description: 'From machining to fabrication, powder coating to welding - comprehensive services under one roof' },
    { icon: '🌾', title: 'Agricultural Expertise', description: 'Deep understanding of farm equipment and agricultural needs, with tractor repair as a specialty' },
    { icon: '🏆', title: 'Quality Focus', description: 'Built our reputation on the quality and hard work of our team, earning trust through excellence' },
    { icon: '🏭', title: 'Modern Facility', description: 'Six-acre facility with state-of-the-art equipment and ample space for projects of all sizes' },
    { icon: '🏡', title: 'Local Roots', description: 'Proud to serve the Lacona community and surrounding areas, supporting local agriculture and industry' },
    { icon: '❤️', title: 'Customer First', description: 'We treat every customer like family and every project with the care it deserves' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-modern text-white min-h-[60vh]">
        <div className="relative container-custom text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bold mb-6 text-white animate-fade-in-up">About Us</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Quality steel fabrication and machining since 1991 - A family tradition of excellence
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="card-modern p-8">
                <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Story</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Williams Machine Shop was established in fall 1991 by Troy Williams in Lacona, Iowa.
                    What began as a one-man operation has grown into a thriving family-run business that
                    serves customers throughout Iowa and beyond.
                  </p>
                  <p>
                    In the early days, Troy worked tirelessly on his own, reinvesting profits into equipment
                    and tools to expand the shop's capabilities. After four years of dedication, he hired his
                    first employee, marking the beginning of the team that would help build the business's
                    reputation for quality work.
                  </p>
                  <p>
                    Today, Williams Machine Shop operates from a six-acre facility outside Lacona, equipped
                    with modern machinery and staffed by a skilled team of professionals. Despite our growth,
                    we've maintained the values that built our business: quality craftsmanship, honest service,
                    and treating every customer like family.
                  </p>
                </div>
              </div>

              <div className="card-modern p-8">
                <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Philosophy</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    "We like to think we can do just about anything with steel." This simple statement
                    captures our approach to metalworking. Rather than limiting ourselves to a narrow
                    specialty, we've built a diverse range of capabilities to serve our customers' varied needs.
                  </p>
                  <p>
                    Farm and tractor equipment repair remains a priority service for us, reflecting our
                    roots in the agricultural community. However, we've expanded to offer everything from
                    precision machining and custom fabrication to powder coating and portable welding.
                  </p>
                  <p>
                    Our reputation has been built on word-of-mouth referrals rather than extensive marketing.
                    We believe this speaks to the quality of our work and the relationships we've built with
                    customers over the years.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold mb-12 text-center text-slate-900">Our Journey</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="card-modern p-6 text-center">
                    <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">{milestone.title}</h3>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-4xl font-bold mb-4 text-center text-slate-900">What Sets Us Apart</h2>
              <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
                The values and principles that guide our work every day
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value) => (
                  <div key={value.title} className="feature-card">
                    <div className="feature-icon text-white">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding bg-gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="relative container-custom text-center">
          <h2 className="font-bold mb-6 text-white">Let's Work Together</h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Experience the Williams Machine Shop difference on your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
