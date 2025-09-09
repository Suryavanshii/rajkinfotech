import { useState } from 'react';
import { Mail, Phone, MapPin, Download, Send, ExternalLink } from 'lucide-react';
import SocialLinks from './SocialLinks';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create Google Form submission URL
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf_example_form_id/formResponse";
    
    // Open the form in a new tab (user will need to replace with actual form ID)
    window.open(googleFormUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! I will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "rajkumarsuryaaa@gmail.com",
      link: "mailto:rajkumarsuryaaa@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 8889595159",
      link: "tel:+918889595159"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Indore, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-blue-600 dark:text-blue-400 mr-4 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {info.details}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Resume Download */}
            <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
              <h4 className="text-xl font-semibold mb-3">Download My Resume</h4>
              <p className="mb-4 opacity-90">
                Get a detailed overview of my skills, experience, and projects.
              </p>
              <a 
                href="/resume.pdf" 
                download="Rajkumar_Suryavanshi_Resume.pdf"
                className="flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </div>

            {/* LinkedIn Profile */}
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Professional Profile
              </h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Connect with me on LinkedIn for professional networking and updates.
              </p>
              <a
                href="http://www.linkedin.com/in/rajkumar-suryavanshi-963703254"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View LinkedIn Profile
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <SocialLinks />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Note:</strong> This form will open a Google Form for secure message submission. 
                You can also reach me directly via email or LinkedIn for immediate contact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
