import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import profileImage from "@/assets/nelly-profile.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-muted -z-10" />
      
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                Available for Hire
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Nelly Naserian
            </h1>
            
            <p className="text-2xl md:text-3xl text-primary font-semibold">
              Executive Virtual Assistant
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Empowering businesses through expert virtual assistance. Specialized in streamlining operations, 
              creative design, and strategic support to help you focus on what matters most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2 group" asChild>
                <a href="#contact">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">View Services</a>
              </Button>
            </div>
            
            <div className="flex flex-col gap-2 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:nellylongesele175@gmail.com" className="hover:text-primary transition-colors">
                  nellylongesele175@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+254718371104" className="hover:text-primary transition-colors">
                  +254 718 371 104
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary rounded-3xl -rotate-6 opacity-20" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
                <img 
                  src={profileImage} 
                  alt="Nelly Naserian - Executive Virtual Assistant"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
