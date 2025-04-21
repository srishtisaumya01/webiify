
import { AnimatedText } from "@/components/AnimatedText";

export default function Team() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      bio: "John has over 15 years of experience in web development and has led numerous successful projects for clients across various industries.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      },
      delay: 0
    },
    {
      name: "Emily Johnson",
      role: "Lead Designer",
      bio: "Emily brings creative vision and user experience expertise to every project, ensuring our websites are not just functional but beautiful.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        dribbble: "#"
      },
      delay: 100
    },
    {
      name: "Michael Chen",
      role: "Full Stack Developer",
      bio: "Michael is a MERN stack expert with a passion for creating efficient, scalable web applications that deliver exceptional user experiences.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      },
      delay: 200
    },
    {
      name: "Sarah Rodriguez",
      role: "UX/UI Specialist",
      bio: "Sarah specializes in creating intuitive user interfaces and seamless user experiences that help our clients connect with their audience.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        dribbble: "#"
      },
      delay: 300
    },
    {
      name: "David Wilson",
      role: "Backend Developer",
      bio: "David is our backend wizard, crafting robust server-side solutions and APIs that power our clients' web applications.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      },
      delay: 400
    },
    {
      name: "Lisa Wang",
      role: "Frontend Developer",
      bio: "Lisa specializes in creating responsive, accessible, and performant user interfaces using the latest frontend technologies.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      },
      delay: 500
    },
    {
      name: "Robert Garcia",
      role: "DevOps Engineer",
      bio: "Robert ensures smooth deployment and operation of our projects, managing our infrastructure and continuous integration processes.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      },
      delay: 600
    },
    {
      name: "Olivia Turner",
      role: "Project Manager",
      bio: "Olivia keeps our projects on track, ensuring timely delivery while maintaining constant communication with our clients.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
      socialLinks: {
        twitter: "#",
        linkedin: "#"
      },
      delay: 700
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-webiify-purple animate-fade-in font-medium mb-4">Our Team</p>
            <AnimatedText 
              text="Meet the Talented Team Behind Webiify" 
              element="h1" 
              className="text-3xl md:text-5xl font-bold mb-6"
              gradient="default"
              animation="fade"
            />
            <p className="text-foreground/80 text-lg animate-fade-in animate-delay-100">
              Our diverse team of experts brings passion, creativity, and technical excellence to every project.
            </p>
          </div>
        </div>
      </section>
      
      {/* Team Grid Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden card-hover animate-fade-in animate-delay-${member.delay}`}
              >
                <div className="relative group">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-center space-x-4">
                        {member.socialLinks.twitter && (
                          <a href={member.socialLinks.twitter} className="text-white hover:text-webiify-blue transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        )}
                        {member.socialLinks.linkedin && (
                          <a href={member.socialLinks.linkedin} className="text-white hover:text-webiify-blue transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        )}
                        {member.socialLinks.github && (
                          <a href={member.socialLinks.github} className="text-white hover:text-webiify-blue transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                          </a>
                        )}
                        {member.socialLinks.dribbble && (
                          <a href={member.socialLinks.dribbble} className="text-white hover:text-webiify-blue transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073a42.153 42.153 0 00-.767-1.68c2.31-1 4.165-2.358 5.548-4.082a9.863 9.863 0 012.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68a46.287 46.287 0 00-3.488-5.438A9.894 9.894 0 0112 2.087c2.275 0 4.368.779 6.043 2.072zM7.527 3.166a44.59 44.59 0 013.537 5.381c-2.43.715-5.331 1.082-8.684 1.105a9.931 9.931 0 015.147-6.486zM2.087 12l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48A9.865 9.865 0 012.087 12zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027a39.137 39.137 0 012.043 7.46c-3.349 1.291-6.953.666-9.641-1.433zm11.586.43a41.098 41.098 0 00-1.92-6.897c1.876-.265 3.94-.196 6.199.196a9.923 9.923 0 01-4.279 6.701z" clipRule="evenodd" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-webiify-purple dark:text-webiify-purple/80 mb-4">{member.role}</p>
                  <p className="text-foreground/70">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Our Team Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-webiify-purple to-webiify-blue opacity-90 -z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText 
              text="Join Our Growing Team" 
              element="h2" 
              className="text-white text-2xl md:text-4xl font-bold mb-6"
              gradient="none"
              animation="fade"
            />
            <p className="text-white/80 text-lg mb-8 animate-fade-in animate-delay-100">
              We're always looking for talented individuals to join our team. If you're passionate about web development and creating exceptional digital experiences, we'd love to hear from you.
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in animate-delay-200">
              <a 
                href="#" 
                className="bg-white text-webiify-blue py-3 px-6 rounded-md font-medium hover:bg-white/90 transition-colors"
              >
                View Open Positions
              </a>
              <a 
                href="#" 
                className="bg-transparent text-white border border-white py-3 px-6 rounded-md font-medium hover:bg-white/10 transition-colors"
              >
                Send Speculative Application
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
