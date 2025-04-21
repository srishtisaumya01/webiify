
import { AnimatedText } from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function WhyUs() {
  const advantages = [
    {
      title: "Expertise",
      description: "Our team consists of skilled developers with deep knowledge in the latest web technologies and best practices.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      delay: 0
    },
    {
      title: "Quality",
      description: "We never compromise on quality, ensuring that every project meets the highest standards of performance and usability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      delay: 100
    },
    {
      title: "Innovation",
      description: "We stay ahead of the curve, implementing cutting-edge technologies and approaches to deliver modern, innovative solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      delay: 200
    },
    {
      title: "Reliability",
      description: "We take pride in our reliability, meeting deadlines and delivering projects exactly as promised, every time.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      delay: 300
    },
    {
      title: "Client-Focused",
      description: "Your satisfaction is our priority. We work closely with you to ensure your vision is brought to life exactly as you imagined.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      delay: 400
    },
    {
      title: "Support",
      description: "Our relationship doesn't end at project delivery. We provide ongoing support and maintenance to ensure your website stays up-to-date.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-webiify-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      delay: 500
    },
  ];

  const testimonials = [
    {
      quote: "Webiify transformed our online presence completely. Their team understood our vision perfectly and delivered a website that exceeded our expectations.",
      author: "Sarah Johnson",
      company: "Innovate Solutions",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      delay: 0
    },
    {
      quote: "Working with Webiify was a game-changer for our business. Their attention to detail and technical expertise helped us increase our conversion rate by 40%.",
      author: "Mark Reynolds",
      company: "Growth Ventures",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      delay: 100
    },
    {
      quote: "I've worked with many web developers before, but none matched the level of professionalism and skill that Webiify brings to the table.",
      author: "Lisa Chen",
      company: "TechForward",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      delay: 200
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-webiify-purple animate-fade-in font-medium mb-4">Why Choose Us</p>
            <AnimatedText 
              text="What Sets Us Apart" 
              element="h1" 
              className="text-3xl md:text-5xl font-bold mb-6"
              gradient="default"
              animation="fade"
            />
            <p className="text-foreground/80 text-lg animate-fade-in animate-delay-100">
              Discover the Webiify difference and why businesses trust us with their digital presence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Advantages Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-webiify-blue font-medium mb-4 animate-fade-in">Our Advantages</p>
            <AnimatedText 
              text="Why Clients Choose Webiify" 
              element="h2" 
              className="text-2xl md:text-4xl font-bold mb-6"
              gradient="default"
              animation="fade"
            />
            <p className="text-foreground/80 animate-fade-in animate-delay-100">
              At Webiify, we offer more than just web development. We provide a complete partnership to help your business thrive online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center card-hover animate-fade-in animate-delay-${advantage.delay}`}
              >
                <div className="flex justify-center mb-6">{advantage.icon}</div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-foreground/70">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-webiify-purple font-medium mb-4 animate-fade-in">The Comparison</p>
            <AnimatedText 
              text="Why Webiify Stands Out" 
              element="h2" 
              className="text-2xl md:text-4xl font-bold mb-6"
              gradient="default"
              animation="fade"
            />
            <p className="text-foreground/80 animate-fade-in animate-delay-100">
              See how we compare to other web development agencies and why Webiify is the right choice for your next project.
            </p>
          </div>
          
          <div className="overflow-x-auto animate-fade-in animate-delay-200">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 text-left bg-white dark:bg-gray-900 rounded-tl-lg">Features</th>
                  <th className="py-4 px-6 text-center bg-webiify-blue text-white font-bold">
                    <span className="text-lg">Webiify</span>
                  </th>
                  <th className="py-4 px-6 text-center bg-white dark:bg-gray-900 rounded-tr-lg">Others</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Expert MERN Stack Development", webiify: true, others: "Limited" },
                  { feature: "Responsive Design", webiify: true, others: true },
                  { feature: "Performance Optimization", webiify: true, others: "Basic" },
                  { feature: "Custom UI/UX Design", webiify: true, others: "Template-based" },
                  { feature: "Ongoing Support", webiify: true, others: "Additional Cost" },
                  { feature: "SEO Optimization", webiify: true, others: "Basic" },
                  { feature: "Transparent Pricing", webiify: true, others: "Hidden Fees" },
                  { feature: "Quick Turnaround", webiify: true, others: "Varies" },
                ].map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-800" : "bg-white dark:bg-gray-900"}>
                    <td className="py-4 px-6 font-medium">{item.feature}</td>
                    <td className="py-4 px-6 text-center bg-webiify-blue/5">
                      {item.webiify === true ? (
                        <svg className="w-6 h-6 text-webiify-green mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      ) : (
                        item.webiify
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {item.others === true ? (
                        <svg className="w-6 h-6 text-webiify-green mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      ) : (
                        <span className="text-foreground/70">{item.others}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-webiify-green font-medium mb-4 animate-fade-in">Testimonials</p>
            <AnimatedText 
              text="What Our Clients Say" 
              element="h2" 
              className="text-2xl md:text-4xl font-bold mb-6"
              gradient="green"
              animation="fade"
            />
            <p className="text-foreground/80 animate-fade-in animate-delay-100">
              Don't just take our word for it. Hear what our clients have to say about working with Webiify.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-8 card-hover animate-fade-in animate-delay-${testimonial.delay}`}
              >
                <svg className="w-10 h-10 text-webiify-purple mb-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-foreground/90 italic mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-foreground/70 text-sm">{testimonial.company}</p>
                  </div>
                </div>
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
              text="Ready to Experience the Webiify Difference?" 
              element="h2" 
              className="text-white text-2xl md:text-4xl font-bold mb-6"
              gradient="none"
              animation="fade"
            />
            <p className="text-white/80 text-lg mb-8 animate-fade-in animate-delay-100">
              Let's discuss your project and show you why we're the right partner for your web development needs.
            </p>
            <Button variant="default" size="lg" className="bg-white text-webiify-blue hover:bg-white/90 animate-fade-in animate-delay-200" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
