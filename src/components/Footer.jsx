
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4">QUICK LINK</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Track Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Your Vaping Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                FAQs | All You Need To Know
              </a>
            </li>
          </ul>
        </div>

        {/* Subscription Form */}
        <div>
          <h4 className="text-xl font-bold mb-4">SUBSCRIBE FOR BEST OFFERS!</h4>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 mb-4 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded text-white"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-4">CONTACT US</h4>
          <p>For any information please email us:</p>
          <a
            href="mailto:support@yoyovapes.com"
            className="text-gray-400 hover:text-gray-300"
          >
            support@yoyovapes.com
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
        <p>Copyright 2024 © YOYO VAPES</p>
      
      </div>
    </footer>
  );
};

export default Footer;
