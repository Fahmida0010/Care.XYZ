const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Care.xyz
          </h3>
          <p className="text-sm">
            Trusted baby sitting & elderly care service platform.  
            Making caregiving safe, simple, and accessible.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Services</li>
            <li>My Bookings</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Contact
          </h4>
          <p className="text-sm">Email: support@care.xyz</p>
          <p className="text-sm">Phone: +880 1234-567890</p>
        </div>
      </div>

      <div className="text-center text-sm py-4 border-t border-gray-700">
        © {new Date().getFullYear()} Care.xyz — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
