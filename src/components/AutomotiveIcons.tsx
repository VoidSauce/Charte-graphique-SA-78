import React from 'react';
import { 
  Settings, Wrench, Zap, Fuel, Gauge, 
  Car, Truck, CircleDot, Disc, Battery,
  Filter, Lightbulb, Shield, Thermometer, Clock,
  Hammer, Cog, Sliders, CircuitBoard, Fan
} from 'lucide-react';

export const automotiveIcons = {
  // Engine & Performance
  engine: Settings,
  transmission: Cog,
  exhaust: Fan,
  turbo: CircuitBoard,
  performance: Gauge,
  
  // Electrical & Lighting  
  battery: Battery,
  alternator: Zap,
  starter: CircuitBoard,
  lighting: Lightbulb,
  electrical: Zap,
  
  // Braking & Suspension
  brakes: Disc,
  suspension: Sliders,
  wheels: CircleDot,
  tires: CircleDot,
  
  // Maintenance & Tools
  tools: Hammer,
  maintenance: Wrench,
  diagnostics: Gauge,
  filters: Filter,
  fluids: Fuel,
  
  // Cooling & Climate
  cooling: Thermometer,
  hvac: Fan,
  radiator: Thermometer,
  
  // Body & Interior
  body: Shield,
  interior: Car,
  exterior: Truck,
  
  // Services & Time
  service: Clock,
  installation: Hammer,
  repair: Wrench
};

interface AutomotiveIconProps {
  name: keyof typeof automotiveIcons;
  size?: number;
  className?: string;
}

export function AutomotiveIcon({ name, size = 24, className = '' }: AutomotiveIconProps) {
  const IconComponent = automotiveIcons[name];
  return <IconComponent size={size} className={className} />;
}

interface IconShowcaseProps {
  category?: string;
}

export function IconShowcase({ category }: IconShowcaseProps) {
  const iconCategories = {
    'Engine & Performance': ['engine', 'transmission', 'exhaust', 'turbo', 'performance'],
    'Electrical & Lighting': ['battery', 'alternator', 'starter', 'lighting', 'electrical'],
    'Braking & Suspension': ['brakes', 'suspension', 'wheels', 'tires'],
    'Maintenance & Tools': ['tools', 'maintenance', 'diagnostics', 'filters', 'fluids'],
    'Cooling & Climate': ['cooling', 'hvac', 'radiator'],
    'Body & Interior': ['body', 'interior', 'exterior'],
    'Services': ['service', 'installation', 'repair']
  };

  const categoriesToShow = category 
    ? { [category]: iconCategories[category as keyof typeof iconCategories] }
    : iconCategories;

  return (
    <div className="space-y-8">
      {Object.entries(categoriesToShow).map(([categoryName, icons]) => (
        <div key={categoryName}>
          <h3 className="mb-4 text-brand-bleu">{categoryName}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {icons?.map((iconName) => (
              <div key={iconName} className="border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
                <div className="flex justify-center gap-4 mb-3">
                  <div className="flex flex-col items-center">
                    <AutomotiveIcon 
                      name={iconName as keyof typeof automotiveIcons} 
                      size={28} 
                      className="text-brand-rouge mb-1" 
                    />
                    <span className="text-xs text-brand-rouge font-medium">Rouge</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <AutomotiveIcon 
                      name={iconName as keyof typeof automotiveIcons} 
                      size={28} 
                      className="text-brand-bleu mb-1" 
                    />
                    <span className="text-xs text-brand-bleu font-medium">Bleu</span>
                  </div>
                </div>
                <div className="text-center">
                  <span className="text-sm text-auto-steel capitalize font-medium">{iconName}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      <div className="bg-secondary/30 p-6 rounded-lg">
        <h3 className="mb-4 text-brand-bleu">Guidelines d'Usage des Icônes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-brand-rouge mb-3">Rouge Français</h4>
            <ul className="space-y-1 text-sm text-auto-steel">
              <li>• Actions principales et boutons CTA</li>
              <li>• Éléments interactifs importants</li>
              <li>• Indicateurs d'urgence ou d'alerte</li>
              <li>• Navigation principale</li>
            </ul>
          </div>
          <div>
            <h4 className="text-brand-bleu mb-3">Bleu Marine</h4>
            <ul className="space-y-1 text-sm text-auto-steel">
              <li>• Informations et contenus secondaires</li>
              <li>• Navigation de support</li>
              <li>• Icônes décoratives et informatives</li>
              <li>• États neutres et professionnels</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 bg-background rounded border-l-4 border-brand-rouge">
          <p className="text-sm text-auto-steel">
            <strong>Conseil:</strong> Utilisez le rouge pour attirer l'attention et le bleu pour informer. 
            Évitez de mélanger les deux couleurs dans un même groupe d'icônes pour maintenir la cohérence visuelle.
          </p>
        </div>
      </div>
    </div>
  );
}