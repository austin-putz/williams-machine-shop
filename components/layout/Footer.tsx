import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Williams Machine Shop, Inc.</h3>
            <p className="text-gray-300 mb-2">Quality steel fabrication and machining since 1991</p>
            <p className="text-gray-300">Lacona, Iowa</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>21563 G76 Highway</p>
              <p>Lacona, Iowa 50139</p>
              <p>Phone: <a href="tel:641-534-3030" className="hover:text-accent">641-534-3030</a></p>
              <p>Fax: 641-534-1304</p>
              <p>Email: <a href="mailto:orders@williamsmachineshop.com" className="hover:text-accent">orders@williamsmachineshop.com</a></p>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Quick Links</h3>
            <div className="space-y-2 text-gray-300 mb-6">
              <Link href="/what-we-do" className="block hover:text-accent">What We Do</Link>
              <Link href="/products" className="block hover:text-accent">Products</Link>
              <Link href="/our-work" className="block hover:text-accent">Our Work</Link>
              <Link href="/contact" className="block hover:text-accent">Contact Us</Link>
              <Link href="/apply" className="block hover:text-accent">Apply With Us</Link>
              <Link href="/about" className="block hover:text-accent">About Us</Link>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/williamsmachineshop"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UCkD7P_BjyisZ99bQD00TyXw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="mailto:orders@williamsmachineshop.com"
                className="hover:text-accent transition"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Williams Machine Shop, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
