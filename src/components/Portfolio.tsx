import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import socialMediaSample from "@/assets/sample-social-media.jpg";
import marketResearchSample from "@/assets/sample-market-research.jpg";
import graphicDesignSample from "@/assets/sample-graphic-design.jpg";
import dataEntrySample from "@/assets/sample-data-entry.jpg";

const portfolioSamples = [
  {
    service: "Social Media Management",
    title: "Growing a Fitness Brand's Instagram",
    image: socialMediaSample,
    clientProblem: "A local fitness studio had only 200 followers and low engagement. They needed to reach more people in their area.",
    steps: [
      "Created a content calendar with 4 posts per week",
      "Designed eye-catching graphics with workout tips and client success stories",
      "Wrote engaging captions with relevant hashtags",
      "Responded to comments and messages within 2 hours",
      "Posted Instagram Stories daily to increase visibility"
    ],
    result: "In 3 months, followers grew from 200 to 1,500. Average engagement increased to 8%. The studio booked 45 new clients directly from Instagram."
  },
  {
    service: "Market Research",
    title: "Competitor Analysis for Online Store",
    image: marketResearchSample,
    clientProblem: "An online clothing store wanted to understand why competitors were getting more sales. They needed insights to improve their pricing and product offerings.",
    steps: [
      "Identified the top 10 competitors in the same market",
      "Analyzed their pricing, product range, and shipping policies",
      "Reviewed customer feedback on competitor websites",
      "Studied their social media strategies and engagement rates",
      "Created a detailed report with actionable recommendations"
    ],
    result: "Client adjusted pricing strategy and added 5 new product categories based on research. Sales increased by 35% in the following quarter."
  },
  {
    service: "Graphic Design",
    title: "Complete Brand Identity for Consulting Business",
    image: graphicDesignSample,
    clientProblem: "A new business consultant needed professional branding materials but had no logo, business cards, or presentation templates.",
    steps: [
      "Conducted discovery call to understand brand values and target audience",
      "Designed 3 logo concepts and refined the chosen one",
      "Created business card designs with contact information",
      "Developed branded PowerPoint and Google Slides templates",
      "Designed social media graphics templates for consistent branding"
    ],
    result: "Client received a complete brand package including logo files, 500 printed business cards, and reusable templates. They reported looking more professional to potential clients."
  },
  {
    service: "Data Entry",
    title: "Customer Database Organization",
    image: dataEntrySample,
    clientProblem: "A real estate agency had 3 years of client information scattered across emails, spreadsheets, and paper files. They couldn't find contact details quickly.",
    steps: [
      "Collected all customer information from various sources",
      "Created a standardized Excel template with required fields",
      "Entered 2,500+ client records with names, contacts, property interests, and dates",
      "Verified accuracy by cross-checking with original sources",
      "Organized data with filters and categories for easy searching"
    ],
    result: "Completed database with 2,500 organized client records. Search time reduced from 15 minutes to under 30 seconds. Client can now run targeted marketing campaigns."
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Work Samples</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real projects I've completed for clients, showing the quality and results you can expect
          </p>
        </div>
        
        <div className="space-y-8">
          {portfolioSamples.map((sample, index) => (
            <Card 
              key={index}
              className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src={sample.image} 
                  alt={sample.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="bg-muted/30">
                <Badge className="w-fit mb-2">{sample.service}</Badge>
                <CardTitle className="text-2xl">{sample.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-foreground">The Challenge</h4>
                  <p className="text-muted-foreground leading-relaxed">{sample.clientProblem}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-foreground">What I Did</h4>
                  <ul className="space-y-2">
                    {sample.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-lg mb-2 text-foreground">The Result</h4>
                  <p className="text-foreground leading-relaxed font-medium">{sample.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
