export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Quality steel fabrication and machining since 1991
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
              <div className="space-y-4 text-gray-700">
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

            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Philosophy</h2>
              <div className="space-y-4 text-gray-700">
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
                  customers over the years. Williams Machine Shop contributes its success to the quality
                  and hard work put in by our employees throughout the years.
                </p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                30+
              </div>
              <h3 className="font-bold text-xl mb-2 text-primary">Years in Business</h3>
              <p className="text-gray-700">Established in 1991, serving the community for over three decades</p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                👨‍👩‍👧‍👦
              </div>
              <h3 className="font-bold text-xl mb-2 text-primary">Family-Run</h3>
              <p className="text-gray-700">Family-owned business with dedicated, skilled employees</p>
            </div>

            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🏆
              </div>
              <h3 className="font-bold text-xl mb-2 text-primary">Award-Winning</h3>
              <p className="text-gray-700">2017 Albaugh Awards recipient for excellence</p>
            </div>
          </div>

          {/* What Sets Us Apart */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">What Sets Us Apart</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <svg className="w-8 h-8 text-accent mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">Diverse Capabilities</h3>
                  <p className="text-gray-700">
                    From machining to fabrication, powder coating to welding - we offer comprehensive services
                    under one roof
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-8 h-8 text-accent mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">Agricultural Expertise</h3>
                  <p className="text-gray-700">
                    Deep understanding of farm equipment and agricultural needs, with tractor repair as a
                    specialty
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-8 h-8 text-accent mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">Quality Focus</h3>
                  <p className="text-gray-700">
                    Built our reputation on the quality and hard work of our team, earning trust through
                    excellence
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-8 h-8 text-accent mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">Modern Facility</h3>
                  <p className="text-gray-700">
                    Six-acre facility with state-of-the-art equipment and ample space for projects of all sizes
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-8 h-8 text-accent mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">Local Roots</h3>
                  <p className="text-gray-700">
                    Proud to serve the Lacona community and surrounding areas, supporting local agriculture
                    and industry
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-8 h-8 text-accent mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-primary">Customer First</h3>
                  <p className="text-gray-700">
                    We treat every customer like family and every project with the care it deserves
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Overview */}
          <div className="bg-primary text-white p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div>
                <div className="text-3xl mb-2">⚙️</div>
                <p className="text-sm">Machine & Design</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🔧</div>
                <p className="text-sm">Repair & Fabrication</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🏭</div>
                <p className="text-sm">Custom Duct Work</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🎨</div>
                <p className="text-sm">Powder Coating</p>
              </div>
              <div>
                <div className="text-3xl mb-2">✨</div>
                <p className="text-sm">Laser Engraving</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🏗️</div>
                <p className="text-sm">Metal Sales</p>
              </div>
              <div>
                <div className="text-3xl mb-2">⛽</div>
                <p className="text-sm">Tank Exchange</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🛠️</div>
                <p className="text-sm">Supplies</p>
              </div>
              <div>
                <div className="text-3xl mb-2">💨</div>
                <p className="text-sm">Sand Blasting</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🔥</div>
                <p className="text-sm">Portable Welding</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-accent text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl mb-6">
              Experience the Williams Machine Shop difference on your next project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:641-534-3030"
                className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-lg transition"
              >
                Call: 641-534-3030
              </a>
              <a
                href="/contact"
                className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-lg transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
