import Logo from "./Logo";
import { FaFacebookF, FaInstagram,
     FaLinkedinIn,FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
     const Footer = () => {
  return (
    <footer className="bg-indigo-200 text-black mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
         <Logo/>
          <p className="text-sm mt-3">
            Trusted baby sitting & elderly care service platform.  
            Making caregiving safe, simple, and accessible.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold
           text-purple-800 mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm underline">
            <li>FAQ</li>
            <li>Services</li>
            <li>Support Center</li>
            <li>contact us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold
           text-purple-800 mb-3">
            Contact
          </h4>
          <p className="text-sm">Email: 
        <span className="text-blue-700">    support@care.xyz</span>
            </p>
          <p className="text-sm">Phone: +880 1234-567890</p>
          
          <h3 className="text-lg mt-3
        
    text-blue-500 font-semibold
     text-purple-800 mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-400 rounded-full
               hover:bg-sky-500 hover:text-gray-900 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-400 rounded-full
               hover:bg-pink-500 hover:text-gray-900 transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-400 rounded-full
               hover:bg-sky-400 hover:text-gray-900 transition"
            >
              <FaXTwitter size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-400 rounded-full
               hover:bg-blue-600 hover:text-gray-900 transition"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-400 rounded-full
               hover:bg-red-500 hover:text-gray-900 transition"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center
       text-sm py-4  ">
        © {new Date().getFullYear()} Care
      <span className="font-bold text-purple-500">.xyz _</span>
        All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
