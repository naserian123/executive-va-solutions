import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Calendar, TrendingUp, Search, Plane, Mail, PenTool } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Creating visually stunning designs that capture your brand's essence and communicate effectively with your audience.",
  },
  {
    icon: Calendar,
    title: "Calendar & Inbox Management",
    description: "Streamline your schedule and communications. Never miss an important meeting or email again with expert organization.",
  },
  {
    icon: TrendingUp,
    title: "Lead Generation",
    description: "Strategic prospecting and outreach to help grow your business with qualified leads and potential clients.",
  },
  {
    icon: Search,
    title: "Market Research",
    description: "In-depth analysis of market trends, competitors, and opportunities to inform your business decisions.",
  },
  {
    icon: Plane,
    title: "Travel Planning",
    description: "Comprehensive travel arrangements from flights to accommodations, ensuring smooth and efficient business trips.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Crafting compelling email campaigns that engage your audience and drive conversions.",
  },
  {
    icon: PenTool,
    title: "Copywriting",
    description: "Persuasive and engaging content that resonates with your target audience and achieves your goals.",
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
