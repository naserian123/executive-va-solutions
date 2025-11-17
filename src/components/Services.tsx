import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Share2, Search, Database } from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Strategic content creation and scheduling to grow your online presence and engage your audience effectively.",
  },
  {
    icon: Search,
    title: "Market Research",
    description: "In-depth analysis of market trends, competitors, and opportunities to inform your business decisions.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Creating visually stunning designs that capture your brand's essence and communicate effectively with your audience.",
  },
  {
    icon: Database,
    title: "Data Entry",
    description: "Accurate and efficient data management to keep your business information organized and accessible.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Services I Offer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive virtual assistant solutions tailored to elevate your business operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
