import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function SocialLinks() {
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/Suryavanshii",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "http://www.linkedin.com/in/rajkumar-suryavanshi-963703254",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://instagram.com/krajsuryavanshi",
      label: "Instagram",
      color: "hover:text-pink-600"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "#",
      label: "Twitter",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <div className="flex justify-center lg:justify-start space-x-6">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-600 dark:text-gray-400 ${link.color} transform hover:scale-110 transition-all duration-300`}
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
