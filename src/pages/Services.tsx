
import { AnimatedText } from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "MERN Stack Development",
      description: "Full-stack JavaScript solutions with MongoDB, Express, React, and Node.js for powerful, scalable web applications.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: [
        "Custom API development",
        "Single page applications",
        "Real-time data processing",
        "Database architecture",
        "State management solutions",
      ],
      delay: 0
    },
    {
      id: 2,
      title: "Responsive Web Design",
      description: "Mobile-friendly websites that look and function perfectly across all devices and screen sizes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        "Mobile-first approach",
        "Cross-browser compatibility",
        "Touch-friendly interfaces",
        "Adaptive layouts",
        "Performance optimization",
      ],
      delay: 100
    },
    {
      id: 3,
      title: "E-Commerce Solutions",
      description: "Complete online shopping experiences with secure payment gateways, product management, and order processing.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      features: [
        "Secure payment integration",
        "Inventory management",
        "Shopping cart functionality",
        "Product catalog design",
        "Order tracking systems",
      ],
      delay: 200
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Intuitive and engaging user interfaces that enhance user experience and drive conversion.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      features: [
        "User-centered design",
        "Wireframing & prototyping",
        "Interaction design",
        "Usability testing",
        "Visual design systems",
      ],
      delay: 300
    },
    {
      id: 5,
      title: "Web Performance Optimization",
      description: "Speed up your website with advanced optimization techniques for faster loading and better user experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        "Image optimization",
        "Code minification",
        "Lazy loading",
        "Caching strategies",
        "Core Web Vitals improvement",
      ],
      delay: 400
    },
    {
      id: 6,
      title: "Custom Web Applications",
      description: "Tailored web applications designed to meet your specific business needs and workflows.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      features: [
        "Bespoke functionality",
        "Integration with existing systems",
        "Automated workflows",
        "User authentication",
        "Data visualization",
      ],
      delay: 500
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-webiify-purple animate-fade-in font-medium mb-4">Our Services</p>
            <AnimatedText 
              text="Web Solutions That Drive Results" 
              element="h1" 
              className="text-3xl md:text-5xl font-bold mb-6"
              gradient="default"
              animation="fade"
            />
            <p className="text-foreground/80 text-lg animate-fade-in animate-delay-100">
              From concept to deployment, we offer comprehensive web development services tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className={`bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 card-hover animate-fade-in animate-delay-${service.delay}`}
              >
                <div className="p-8">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-foreground/70 mb-6">{service.description}</p>
                  
                  <h4 className="font-medium mb-3">Key Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-webiify-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-webiify-blue font-medium mb-4 animate-fade-in">Our Process</p>
            <AnimatedText 
              text="How We Bring Your Vision To Life" 
              element="h2" 
              className="text-2xl md:text-4xl font-bold mb-6"
              gradient="default"
              animation="fade"
            />
            <p className="text-foreground/80 animate-fade-in animate-delay-100">
              Our streamlined development process ensures efficient delivery of high-quality web solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We start by understanding your business, goals, target audience, and project requirements.",
                delay: 0
              },
              {
                number: "02",
                title: "Planning & Design",
                description: "We create wireframes, mockups, and prototypes to visualize the final product before development.",
                delay: 100
              },
              {
                number: "03",
                title: "Development",
                description: "Our skilled developers bring the designs to life with clean, efficient, and maintainable code.",
                delay: 200
              },
              {
                number: "04",
                title: "Testing & Launch",
                description: "We rigorously test across devices and browsers before deploying your project to production.",
                delay: 300
              },
            ].map((step, index) => (
              <div 
                key={index} 
                className={`relative bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md animate-fade-in animate-delay-${step.delay}`}
              >
                <span className="absolute -top-5 -left-5 bg-gradient-to-br from-webiify-blue to-webiify-purple text-white text-3xl font-bold w-14 h-14 rounded-full flex items-center justify-center">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold mb-3 mt-5">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-webiify-blue to-webiify-purple opacity-90 -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <AnimatedText 
              text="Ready to Start Your Project?" 
              element="h2" 
              className="text-white text-2xl md:text-4xl font-bold mb-6"
              gradient="none"
              animation="fade"
            />
            <p className="text-white/80 text-lg mb-8 animate-fade-in animate-delay-100">
              Contact us today to discuss your requirements and get a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animate-delay-200">
              <Button variant="default" size="lg" className="bg-gradient-to-r from-webiify-teal to-webiify-green text-white" asChild>
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10" size="lg" asChild>
                <Link to="/why-us">Why Choose Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
