import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

interface PricingDialogProps {
  children: React.ReactNode;
}

export default function PricingDialog({ children }: PricingDialogProps) {
  const pricingPlans = [
    {
      name: "Mini Projects",
      price: "₹2,999",
      description: "Perfect for learning and portfolio building",
      features: [
        "Complete source code",
        "Documentation included",
        "Basic UI/UX design",
        "1-2 weeks delivery",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Internship Projects",
      price: "₹4,999",
      description: "Professional-level projects for career growth",
      features: [
        "Industry-standard code",
        "Complete documentation",
        "Professional UI/UX",
        "Database integration",
        "2-4 weeks delivery",
        "Priority email support"
      ],
      popular: true
    },
    {
      name: "Major Projects",
      price: "₹7,999",
      description: "Full-stack enterprise applications",
      features: [
        "Production-ready code",
        "Comprehensive documentation",
        "Advanced UI/UX design",
        "Full-stack architecture",
        "Authentication & security",
        "API integrations",
        "4-8 weeks delivery",
        "Phone & email support"
      ],
      popular: false
    }
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Project Pricing</DialogTitle>
          <DialogDescription>
            Choose the perfect project type for your needs. All projects include complete source code and documentation.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg' : 'border-border'}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-primary">{plan.price}</div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Order {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-secondary rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Custom Projects</h3>
          <p className="text-muted-foreground mb-4">
            Need something specific? Get a custom quote for your unique requirements.
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Custom pricing starts from ₹10,000</strong> based on complexity, features, and timeline.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}