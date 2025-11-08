import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-slate-900 opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>

      <div className="relative container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white rounded-lg p-1.5 shadow-lg">
                <img
                  src="/images/williams-logo.png"
                  alt="Williams Machine Shop Logo"
                  className="h-10 w-auto"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Williams</h3>
                <p className="text-sm text-white/70">Machine Shop</p>
              </div>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">
              Quality steel fabrication and machining services since 1991. Family-owned and operated in Lacona, Iowa.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/williamsmachineshop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCkD7P_BjyisZ99bQD00TyXw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="mailto:orders@williamsmachineshop.com"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div>21563 G76 Highway</div>
                  <div>Lacona, Iowa 50139</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:641-534-3030" className="hover:text-white transition-colors">
                  641-534-3030
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:orders@williamsmachineshop.com" className="hover:text-white transition-colors break-all">
                  orders@williamsmachineshop.com
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Get Started</h4>
            <p className="text-white/80 mb-4">
              Ready to start your project? Contact us today for a consultation.
            </p>
            <div className="space-y-3">
              <Link
                href="/contact"
                className="block text-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all duration-200 border border-white/20 hover:border-white/40"
              >
                Contact Us
              </Link>
              <Link
                href="/apply"
                className="block text-center px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 bg-gradient-to-r from-accent to-secondary"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Williams Machine Shop, Inc. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Made with
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              in Iowa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
