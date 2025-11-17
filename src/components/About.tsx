import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "5+ years of virtual assistance experience",
  "Proficient in multiple business tools and platforms",
  "Detail-oriented with strong organizational skills",
  "Excellent communication and problem-solving abilities",
  "Proven track record of improving business efficiency",
  "Adaptable to various industries and work styles",
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a dedicated Executive Virtual Assistant based in Nairobi, Kenya, passionate about 
                helping businesses thrive through efficient and professional support services.
              </p>
              <p>
                With expertise spanning from creative graphic design to strategic lead generation, 
                I bring a comprehensive skill set that adapts to your unique business needs. My goal 
                is to free up your time so you can focus on growing your business while I handle the 
                essential tasks that keep everything running smoothly.
              </p>
              <p>
                I pride myself on attention to detail, clear communication, and a proactive approach 
                to problem-solving. Whether you need help managing your calendar, crafting compelling 
                marketing content, or conducting thorough market research, I'm here to support your success.
              </p>
            </div>
          </div>
          
          <Card className="p-8 bg-secondary/50 border-primary/20">
            <h3 className="text-2xl font-bold mb-6">Key Highlights</h3>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base">{highlight}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
