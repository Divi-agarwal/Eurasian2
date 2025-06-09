import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import '@/styles/globals.css'
import '@/styles/pricing-card.css';
interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  pricePeriod?: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
}

export default function PricingCard({ title, description, price, pricePeriod = "/ month", features, buttonText, highlighted = false }: PricingCardProps) {
  return (
    <Card className={`pricing-card${highlighted ? ' pricing-card--highlighted' : ''}`}>
      <CardHeader className="pricing-card-header">
        <CardTitle className={`pricing-card-title${highlighted ? ' pricing-card-title--highlighted' : ''}`}>{title}</CardTitle>
        <CardDescription className="pricing-card-desc">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pricing-card-content">
        <div className="pricing-card-price-row">
          <span className="pricing-card-price">{price}</span>
          <span className="pricing-card-period">{pricePeriod}</span>
        </div>
        <ul className="pricing-card-features">
          {features.map((feature, index) => (
            <li key={index} className="pricing-card-feature">
              <CheckIcon className={`pricing-card-check${highlighted ? ' pricing-card-check--highlighted' : ''}`} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="pricing-card-btn" variant={highlighted ? 'default' : 'outline'}>
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}
