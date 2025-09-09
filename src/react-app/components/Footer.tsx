import SocialLinks from './SocialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#pricing', label: 'Services' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Rajkumar Suryavanshi
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Data Scientist & Web Developer specializing in machine learning, 
              data analysis, and AI-powered solutions. Let's build something amazing together.
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:rajkumarsuryaaa@gmail.com"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                rajkumarsuryaaa@gmail.com
              </a>
              <a
                href="tel:+918889595159"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                +91 8889595159
              </a>
              <a
                href="http://www.linkedin.com/in/rajkumar-suryavanshi-963703254"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Rajkumar Suryavanshi. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Crafted with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
