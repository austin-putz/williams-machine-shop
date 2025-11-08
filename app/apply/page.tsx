export default function Apply() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Be part of a family-run business with over 30 years of excellence in steel fabrication and machining
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Why Work With Us */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">Why Work at Williams Machine Shop?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-accent text-3xl mb-3">👨‍👩‍👧‍👦</div>
                <h3 className="font-bold text-xl mb-2 text-primary">Family-Run Business</h3>
                <p className="text-gray-700">
                  Join a close-knit team where your contribution matters and you're treated like family
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-accent text-3xl mb-3">🎓</div>
                <h3 className="font-bold text-xl mb-2 text-primary">Learn & Grow</h3>
                <p className="text-gray-700">
                  Develop your skills with hands-on experience in diverse fabrication and machining projects
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-accent text-3xl mb-3">🏆</div>
                <h3 className="font-bold text-xl mb-2 text-primary">Quality Work</h3>
                <p className="text-gray-700">
                  Take pride in producing high-quality work for our valued customers across Iowa and beyond
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-accent text-3xl mb-3">📍</div>
                <h3 className="font-bold text-xl mb-2 text-primary">Great Location</h3>
                <p className="text-gray-700">
                  Work in Lacona, Iowa at our spacious six-acre facility with modern equipment
                </p>
              </div>
            </div>
          </div>

          {/* Positions */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold mb-6 text-primary">Open Positions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl mb-2 text-primary">Welder / Fabricator</h3>
                <p className="text-gray-700 mb-3">
                  Seeking experienced welders and fabricators to join our team. Must have welding experience
                  and ability to read blueprints. Farm equipment experience is a plus.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>MIG/TIG welding experience preferred</li>
                  <li>Metal fabrication skills</li>
                  <li>Blueprint reading ability</li>
                  <li>Self-motivated and detail-oriented</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-2 text-primary">Machinist</h3>
                <p className="text-gray-700 mb-3">
                  Looking for skilled machinists with experience in precision machining and CNC operation.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>CNC machine operation experience</li>
                  <li>Precision measurement skills</li>
                  <li>Blueprint and technical drawing interpretation</li>
                  <li>Quality control mindset</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl mb-2 text-primary">Shop Helper / Entry Level</h3>
                <p className="text-gray-700 mb-3">
                  Entry-level positions available for motivated individuals looking to start a career in
                  metal fabrication. Training provided.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Willingness to learn</li>
                  <li>Strong work ethic</li>
                  <li>Reliable and punctual</li>
                  <li>Ability to work in a team</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Apply */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">How to Apply</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl mb-3 text-primary">Submit Your Application</h3>
                <p className="text-gray-700 mb-4">
                  We're always looking for talented individuals to join our team. If you're interested
                  in working with us, please reach out:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-accent text-white p-2 rounded mr-3 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">Call Us</p>
                      <a href="tel:641-534-3030" className="text-primary hover:text-accent">
                        641-534-3030
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-accent text-white p-2 rounded mr-3 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">Email Your Resume</p>
                      <a href="mailto:orders@williamsmachineshop.com?subject=Job Application" className="text-primary hover:text-accent break-all">
                        orders@williamsmachineshop.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-accent text-white p-2 rounded mr-3 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">Visit In Person</p>
                      <p className="text-gray-700">21563 G76 Highway, Lacona, Iowa 50139</p>
                      <p className="text-sm text-gray-600 mt-1">Monday - Friday, 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-lg mb-3">What to Include</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Current resume or work history</li>
                  <li>Relevant certifications or training</li>
                  <li>References (if available)</li>
                  <li>Brief description of your experience and interests</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Equal Opportunity */}
          <div className="mt-8 text-center text-gray-600">
            <p className="text-sm">
              Williams Machine Shop, Inc. is an equal opportunity employer. We celebrate diversity
              and are committed to creating an inclusive environment for all employees.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
