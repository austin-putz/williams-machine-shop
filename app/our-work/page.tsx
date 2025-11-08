import Link from 'next/link';

export default function OurWork() {
  const projectCategories = [
    {
      title: 'Farm Equipment Repair & Modification',
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
      <section className="bg-primary text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Examples of projects and services we've completed for our customers throughout Iowa and beyond
          </p>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary">What We've Built</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Over 30 years of experience in steel fabrication and machining. Every project receives
              the same attention to detail and commitment to quality.
            </p>
          </div>

          <div className="space-y-12">
            {projectCategories.map((category, index) => (
              <div
                key={category.title}
                className={`${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } p-8 rounded-lg shadow-md`}
              >
                <h3 className="text-2xl font-bold mb-3 text-primary">{category.title}</h3>
                <p className="text-lg text-gray-700 mb-6">{category.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.examples.map((example) => (
                    <div key={example} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-0.5"
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
                      <span className="text-gray-700">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Recognition Section */}
          <div className="mt-16 bg-accent text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Recognized Excellence</h2>
            <p className="text-xl mb-4">
              2017 Albaugh Awards Recipient
            </p>
            <p className="text-lg opacity-90">
              We're proud to have been recognized for our quality work and service to the community
            </p>
          </div>

          {/* Social Media Gallery CTA */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary">See More of Our Work</h2>
            <p className="text-lg text-gray-700 mb-6">
              Follow us on social media to see photos and videos of our latest projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.facebook.com/williamsmachineshop"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-light text-white font-bold py-3 px-8 rounded-lg transition inline-flex items-center justify-center"
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
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch on YouTube
              </a>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-primary text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl mb-6 text-gray-200">
              Let's discuss how we can help bring your vision to life
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
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
