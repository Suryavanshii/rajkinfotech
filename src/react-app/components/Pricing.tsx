import { Check, Star, Zap } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Static Website",
      price: "₹15,000",
      description: "Perfect for small businesses and personal websites",
      icon: <Star className="w-8 h-8" />,
      features: [
        "Responsive Design",
        "Up to 5 Pages",
        "Domain Name Included",
        "SSL Certificate",
        "Basic SEO Setup",
        "1 Year Hosting",
        "Mobile Optimization",
        "Contact Form Integration",
        "Social Media Links",
        "Google Analytics Setup"
      ],
      popular: false
    },
    {
      name: "Dynamic Website",
      price: "₹25,000",
      description: "Advanced websites with interactive features and CMS",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Everything in Static Plan",
        "Content Management System",
        "User Authentication",
        "Database Integration",
        "Admin Dashboard",
        "Dynamic Content Updates",
        "Contact Form with Database",
        "Newsletter Integration",
        "Advanced SEO",
        "Performance Optimization",
        "2 Rounds of Revisions"
      ],
      popular: true
    },
    {
      name: "Premium Solution",
      price: "₹50,000",
      description: "Complete digital solution with advanced features",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Everything in Dynamic Plan",
        "E-commerce Integration",
        "Payment Gateway Setup",
        "AI Chatbot Integration",
        "Advanced Analytics",
        "Third-party API Integration",
        "Multi-language Support",
        "Advanced Security Features",
        "Priority Support",
        "3 Months Free Maintenance",
        "Unlimited Revisions"
      ],
      popular: false
    }
  ];

  const additionalServices = [
    { service: "Logo Design", price: "₹3,000" },
    { service: "Content Writing", price: "₹500/page" },
    { service: "Monthly Maintenance", price: "₹2,000" },
    { service: "Social Media Integration", price: "₹1,500" },
    { service: "Advanced SEO Package", price: "₹8,000" },
    { service: "Mobile App Development", price: "₹2,00,000" }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Transparent pricing for quality web solutions
          </p>
        </div>

        {/* Main Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-8 ${
                plan.popular 
                  ? 'ring-4 ring-blue-500 scale-105 transform' 
                  : 'hover:shadow-2xl hover:scale-105'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {plan.description}
                </p>
                <div className="text-4xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:-translate-y-1'
                    : 'bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-500'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Additional Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {item.service}
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            All prices are in Indian Rupees (INR). Custom requirements available on request.
          </p>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Have questions? Contact me for a custom quote!
          </button>
        </div>
      </div>
    </section>
  );
}
