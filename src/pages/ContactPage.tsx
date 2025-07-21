import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Youtube, Phone } from "lucide-react";

const ContactPage = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/sai-chandan-fx", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sai-chandan-susarla-96baa5279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/@wargod_007?si=RPizSHwQGmJ0PBZH", label: "YouTube" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-600 via-emerald-950 to-gray-950 text-white">
      <div className="container mx-auto py-16 px-4">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Let's Get in Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Feel free to reach out for collaborations, inquiries, or just a friendly chat!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Owner Information */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src="/Contents/profile.jpg"
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white shadow-2xl shadow-gray-500/10 hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">S. Sai Chandan</h2>
                <p className="text-gray-200 font-medium text-lg">VFX Compositor</p>
              </div>
              
              <p className="text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0">
                I'm available for projects, advice, or general conversation! I specialize in creating 
                immersive digital experiences through VFX, 3D modeling, and interactive design.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-white">
                <Mail className="w-5 h-5" />
                <span className="text-lg">chandansusarla@gmail.com </span>
              </div>
              
                <Button 
                  size="lg" 
                  className="bg-green-800 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => {
                  navigator.clipboard.writeText("9000057462");
                  window.alert("Phone number copied to clipboard!");
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Make a Call
                </Button>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-semibold text-center text-white mb-8">
              Connect With Me
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-6 rounded-2xl bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm hover:bg-gray-800/80 hover:border-blue-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/5"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300">
                    <social.icon className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>

{/* Call to Action */}
            <div className="text-center pt-8">
              <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Ready to Work Together?
                </h4>
                <p className="text-muted-foreground mb-6">
                  Let's create something amazing together!
                </p>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                  onClick={() => window.open('mailto:alex.johnson@example.com', '_self')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
