import { AnimatedText } from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen pt-28 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
        <div className="absolute inset-0 opacity-30 dark:opacity-10 -z-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=20 height=20 viewBox=0 0 20 20 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=%239C92AC fill-opacity=0.4 fill-rule=evenodd%3E%3Ccircle cx=3 cy=3 r=1/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '20px 20px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="text-webiify-purple animate-fade-in font-medium mb-4">Welcome to Webiify</p>
              <AnimatedText 
                text="Your Vision, Our Code" 
                element="h1" 
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6"
                gradient="default"
                animation="typing"
              />
              <p className="text-foreground/80 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in animate-delay-100">
                At Webiify, we don't just build websites—we craft powerful digital experiences tailored to your business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in animate-delay-200">
                <Button variant="default" size="lg" className="bg-gradient-to-r from-webiify-blue to-webiify-purple text-white" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-in-right">
              <img
                src="/lovable-uploads/ee58312e-1aa5-4ff1-8078-eb7f09290c75.png"
                alt="Webiify Logo"
                className="w-full max-w-md mx-auto lg:max-w-full animate-pulse"
              />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-webiify-blue via-webiify-purple to-webiify-green rounded-3xl blur-3xl opacity-20 dark:opacity-10 -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-webiify-blue font-medium mb-4 animate-fade-in">What We Do</p>
            <AnimatedText 
              text="Building Digital Experiences That Matter" 
              element="h2" 
              className="text-2xl md:text-4xl font-bold mb-6"
              gradient="default"
              animation="fade"
            />
            <p className="text-foreground/70 max-w-2xl mx-auto animate-fade-in animate-delay-100">
              We specialize in building fast, responsive, and scalable websites using the MERN stack.
              Whether you're launching a new business or upgrading an existing site, Webiify is your one-stop solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Responsive Web Design",
                description: "Mobile-friendly websites that look great on all devices and screen sizes.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-purple mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                delay: 0
              },
              {
                title: "MERN Stack Development",
                description: "Full-stack JavaScript solutions using MongoDB, Express, React, and Node.js.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                delay: 100
              },
              {
                title: "E-Commerce Solutions",
                description: "Custom online stores with secure payment gateways and inventory management.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-green mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                ),
                delay: 200
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`bg-gray-50 dark:bg-gray-800 p-8 rounded-xl text-center card-hover animate-fade-in animate-delay-${feature.delay}`}
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in animate-delay-300">
            <Button variant="default" size="lg" className="bg-gradient-to-r from-webiify-blue to-webiify-purple text-white" asChild>
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-webiify-purple to-webiify-blue opacity-90 -z-10"></div>
        <div className="absolute inset-0 opacity-10 -z-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=20 height=20 viewBox=0 0 20 20 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=%23FFF fill-opacity=0.4 fill-rule=evenodd%3E%3Ccircle cx=3 cy=3 r=1/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '20px 20px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <AnimatedText 
              text="Ready to Transform Your Digital Presence?" 
              element="h2" 
              className="text-white text-2xl md:text-4xl font-bold mb-6"
              gradient="none"
              animation="fade"
            />
            <p className="text-white/80 text-lg mb-8 animate-fade-in animate-delay-100">
              Let's turn your vision into reality. Contact us today to discuss your project and see how we can help you achieve your goals.
            </p>
            <Button variant="default" size="lg" className="bg-gradient-to-r from-webiify-teal to-webiify-green text-white animate-fade-in animate-delay-200" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
