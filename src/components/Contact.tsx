import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to streamline your operations and boost productivity? Get in touch today.
          </p>
        </div>
        
        <Card className="border-2 border-primary/10 shadow-xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl">Contact Information</CardTitle>
            <CardDescription className="text-base">
              Feel free to reach out through any of these channels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="mailto:nellylongesele175@gmail.com"
                className="flex items-start gap-4 p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold mb-1">Email</p>
                  <p className="text-sm text-muted-foreground break-all">nellylongesele175@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+254718371104"
                className="flex items-start gap-4 p-6 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Phone</p>
                  <p className="text-sm text-muted-foreground">+254 718 371 104</p>
                </div>
              </a>
            </div>
            
            <div className="flex items-start gap-4 p-6 rounded-lg bg-muted/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold mb-1">Location</p>
                <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
              </div>
            </div>
            
            <div className="pt-6 border-t">
              <Button 
                size="lg" 
                className="w-full gap-2 group" 
                asChild
              >
                <a href="mailto:nellylongesele175@gmail.com">
                  Send Me an Email
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
