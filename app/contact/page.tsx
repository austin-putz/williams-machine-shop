export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-modern text-white min-h-[60vh]">
        <div className="relative container-custom text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bold mb-6 text-white animate-fade-in-up">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Get in touch with Williams Machine Shop - we're here to help with your project needs
            </p>
            <div className="inline-block glass rounded-2xl px-6 py-3 text-lg font-semibold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Call Us Today: 641-534-3030
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-slate-900">Get In Touch</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="card-modern p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-slate-900">Phone</h3>
                      <a href="tel:641-534-3030" className="text-secondary hover:text-accent text-lg font-semibold transition-colors">
                        641-534-3030
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="card-modern p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-slate-900">Email</h3>
                      <a href="mailto:orders@williamsmachineshop.com" className="text-secondary hover:text-accent text-lg font-semibold break-all transition-colors">
                        orders@williamsmachineshop.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="card-modern p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-slate-900">Address</h3>
                      <p className="text-slate-700 text-lg">21563 G76 Highway</p>
                      <p className="text-slate-700 text-lg mb-3">Lacona, Iowa 50139</p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=21563+G76+Highway+Lacona+Iowa+50139"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-secondary hover:text-accent font-semibold transition-colors"
                      >
                        Get Directions
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Fax */}
                <div className="card-modern p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-slate-900">Fax</h3>
                      <p className="text-slate-700 text-lg">641-534-1304</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="card-modern p-6">
                  <h3 className="font-bold text-xl mb-4 text-slate-900">Connect With Us</h3>
                  <div className="flex gap-3">
                    <a
                      href="https://www.facebook.com/williamsmachineshop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-[#1877F2] hover:opacity-80 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
                      aria-label="Facebook"
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UCkD7P_BjyisZ99bQD00TyXw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-[#FF0000] hover:opacity-80 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
                      aria-label="YouTube"
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-slate-900">Send Us a Message</h2>

              <div className="card-modern p-8 mb-6">
                <form action="https://formsubmit.co/orders@williamsmachineshop.com" method="POST" className="space-y-6">
                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_subject" value="New inquiry from Williams Machine Shop website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-colors outline-none bg-white text-slate-900"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-colors outline-none bg-white text-slate-900"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-colors outline-none bg-white text-slate-900"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-900 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="_subject_custom"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-colors outline-none bg-white text-slate-900"
                      placeholder="How can we help?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-colors outline-none bg-white text-slate-900 resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-8 py-4 font-semibold text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 bg-gradient-to-r from-secondary to-accent"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <h2 className="text-4xl font-bold mb-8 text-slate-900">Visit Our Shop</h2>

              <div className="card-modern p-8 mb-6">
                <h3 className="font-bold text-2xl mb-6 text-slate-900">Business Hours</h3>
                <div className="space-y-4 text-slate-700">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="font-semibold text-lg">Monday - Friday:</span>
                    <span className="text-lg">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                    <span className="font-semibold text-lg">Saturday:</span>
                    <span className="text-lg">By Appointment</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">Sunday:</span>
                    <span className="text-lg">Closed</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-6 p-4 bg-slate-50 rounded-lg">
                  Call ahead for after-hours service or emergency repairs
                </p>
              </div>

              <div className="card-modern p-8 mb-6">
                <h3 className="font-bold text-2xl mb-6 text-slate-900">What to Expect</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Friendly, knowledgeable staff</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Free estimates and consultations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Quality workmanship guaranteed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700">Competitive pricing</span>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="card-modern overflow-hidden" style={{ height: '350px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.4!2d-93.4!3d41.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDEyJzAwLjAiTiA5M8KwMjQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Williams Machine Shop Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
