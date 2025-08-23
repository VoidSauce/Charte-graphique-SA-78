import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { BrandLogo } from './components/BrandLogo';
import { FullServiceLogo } from './components/FullServiceLogo';
import { ColorPalette } from './components/ColorPalette';
import { TypographyShowcase } from './components/TypographyShowcase';
import { IconShowcase } from './components/AutomotiveIcons';
import { UIComponentsShowcase } from './components/UIComponentsShowcase';
import {
  Palette, Type, Grid, Layers, Code,
  Download, ExternalLink, Star, Users,
  Smartphone, Monitor, Tablet
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const navigation = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: Grid },
    { id: 'brand', label: 'Identité', icon: Star },
    { id: 'colors', label: 'Couleurs', icon: Palette },
    { id: 'typography', label: 'Typographie', icon: Type },
    { id: 'icons', label: 'Iconographie', icon: Layers },
    { id: 'components', label: 'Composants', icon: Code },
  ];

  const OverviewSection = () => (
    <div className="space-y-12">
      <div className="text-center py-12">
        <BrandLogo variant="stacked" size="xl" className="mb-8" />
        <h1 className="mb-4">
          <span className="text-brand-rouge">SERVICES </span>
          <span className="text-brand-bleu">AUTO 78</span>
          <span className="text-brand-bleu"> - Charte graphique</span>
        </h1>
        <p className="text-xl text-auto-steel max-w-2xl mx-auto mb-8">
          Cette identité visuelle associe une palette principale inspirée des couleurs nationales à une palette secondaire issue de l'imaginaire automobile afin de fournir une interface accessible écrite dans un langage graphique alliant précision technique et convivialité. Par l'équilibre entre lignes droite et les angles arrondis, j'ai voulu méler à la fois la rigueur professionnelle de la mécanique automobile et la simplicité d'usage de la boutique en ligne, unifiant ainsi tous les points de contact autour d'une identité cohérente et rassurante.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Badge className="bg-brand-rouge text-white">Tricolore Français</Badge>
          <Badge variant="outline" className="border-brand-bleu text-brand-bleu">Services Auto</Badge>
          <Badge variant="outline" className="border-auto-steel text-auto-steel">Responsive</Badge>
          <Badge variant="outline" className="border-auto-success text-auto-success">Accessible</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Palette className="h-8 w-8 text-brand-rouge mb-2" />
            <CardTitle className="text-brand-bleu">Palette Tricolore</CardTitle>
            <CardDescription>
              Couleurs inspirées du drapeau français avec des nuances automobiles professionnelles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-brand-rouge"></div>
              <div className="w-8 h-8 rounded bg-brand-blanc border"></div>
              <div className="w-8 h-8 rounded bg-brand-bleu"></div>
              <div className="w-8 h-8 rounded bg-auto-steel"></div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveSection('colors')}
            >
              Voir la Palette
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Type className="h-8 w-8 text-brand-rouge mb-2" />
            <CardTitle className="text-brand-bleu">Typographie</CardTitle>
            <CardDescription>
              Hiérarchie typographique claire avec Rubik pour une approche moderne et accessible
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 mb-4">
              <div className="h-3 bg-brand-bleu rounded w-full"></div>
              <div className="h-2 bg-auto-steel rounded w-3/4"></div>
              <div className="h-2 bg-muted rounded w-1/2"></div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveSection('typography')}
            >
              Voir la Typo
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Layers className="h-8 w-8 text-brand-rouge mb-2" />
            <CardTitle className="text-brand-bleu">Iconographie</CardTitle>
            <CardDescription>
              Bibliothèque d'icônes automobiles cohérente et reconnaissable
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-2 mb-4">
              <div className="aspect-square bg-secondary rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-brand-rouge rounded"></div>
              </div>
              <div className="aspect-square bg-secondary rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-brand-rouge rounded"></div>
              </div>
              <div className="aspect-square bg-secondary rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-brand-rouge rounded"></div>
              </div>
              <div className="aspect-square bg-secondary rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-brand-rouge rounded"></div>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveSection('icons')}
            >
              Voir les Icônes
            </Button>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="mb-6 text-brand-bleu">Principes de Design</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-brand-bleu mb-4">Accessibilité</h3>
            <ul className="space-y-2 text-auto-steel">
              <li>• Contraste WCAG 2.1 AA (4.5:1 minimum)</li>
              <li>• Navigation au clavier complète</li>
              <li>• Textes alternatifs pour les images</li>
              <li>• Support des lecteurs d'écran</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-brand-bleu mb-4">Responsive Design</h3>
            <div className="flex gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-brand-rouge" />
                <span className="text-sm">Mobile</span>
              </div>
              <div className="flex items-center gap-2">
                <Tablet className="h-4 w-4 text-brand-rouge" />
                <span className="text-sm">Tablet</span>
              </div>
              <div className="flex items-center gap-2">
                <Monitor className="h-4 w-4 text-brand-rouge" />
                <span className="text-sm">Desktop</span>
              </div>
            </div>
            <p className="text-auto-steel text-sm">
              Interface adaptative pour tous les appareils avec approche mobile-first
            </p>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-brand-bleu">Guidelines d'Utilisation</h2>
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-brand-bleu mb-3">À Faire</h4>
              <ul className="space-y-2 text-auto-steel text-sm">
                <li>✓ Utiliser les couleurs tricolores avec parcimonie</li>
                <li>✓ Maintenir les contrastes d'accessibilité</li>
                <li>✓ Utiliser Rubik comme police principale</li>
                <li>✓ Suivre la hiérarchie typographique</li>
                <li>✓ Tester sur différentes tailles d'écran</li>
                <li>✓ Utiliser les icônes automobiles spécialisées</li>
              </ul>
            </div>
            <div>
              <h4 className="text-brand-rouge mb-3">À Éviter</h4>
              <ul className="space-y-2 text-auto-steel text-sm">
                <li>✗ Surcharger l'interface de rouge</li>
                <li>✗ Utiliser plus de 3 polices de poids différents</li>
                <li>✗ Négliger l'espacement entre éléments</li>
                <li>✗ Créer des icônes personnalisées sans cohérence</li>
                <li>✗ Ignorer les états hover et focus</li>
                <li>✗ Utiliser la couleur seule pour l'information</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const BrandSection = () => (
    <div className="space-y-12">
      <div>
        <h2 className="mb-6 text-brand-bleu">Variations du Logo Principal</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-8 text-center">
            <BrandLogo variant="horizontal" size="lg" className="mb-4" />
            <h4 className="text-brand-bleu mb-2">Horizontal</h4>
            <p className="text-sm text-auto-steel">
              Usage principal pour les en-têtes et signatures
            </p>
          </Card>

          <Card className="p-8 text-center">
            <BrandLogo variant="stacked" size="lg" className="mb-4" />
            <h4 className="text-brand-bleu mb-2">Empilé</h4>
            <p className="text-sm text-auto-steel">
              Pour les espaces carrés et la communication verticale
            </p>
          </Card>

          <Card className="p-8 text-center">
            <BrandLogo variant="icon" size="lg" className="mb-4" />
            <h4 className="text-brand-bleu mb-2">Icône Seule</h4>
            <p className="text-sm text-auto-steel">
              Pour les favicons, applications mobiles et petits espaces
            </p>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-brand-bleu">Logo Services Complet</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 text-center">
            <FullServiceLogo variant="horizontal" size="lg" className="mb-4" />
            <h4 className="text-brand-bleu mb-2">Services Auto 78 - Horizontal</h4>
            <p className="text-sm text-auto-steel">
              Version complète pour la signalétique et les documents officiels
            </p>
          </Card>

          <Card className="p-8 text-center">
            <FullServiceLogo variant="stacked" size="lg" className="mb-4" />
            <h4 className="text-brand-bleu mb-2">Services Auto 78 - Empilé</h4>
            <p className="text-sm text-auto-steel">
              Version compacte pour les cartes de visite et petits formats
            </p>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-brand-bleu">Tailles du Logo</h2>
        <Card className="p-8">
          <div className="space-y-8">
            <div className="flex items-center gap-8">
              <BrandLogo variant="horizontal" size="sm" />
              <span className="text-sm text-auto-steel">Petit (navigation mobile)</span>
            </div>
            <div className="flex items-center gap-8">
              <BrandLogo variant="horizontal" size="md" />
              <span className="text-sm text-auto-steel">Moyen (navigation desktop)</span>
            </div>
            <div className="flex items-center gap-8">
              <BrandLogo variant="horizontal" size="lg" />
              <span className="text-sm text-auto-steel">Grand (en-têtes de page)</span>
            </div>
            <div className="flex items-center gap-8">
              <BrandLogo variant="horizontal" size="xl" />
              <span className="text-sm text-auto-steel">Très grand (pages d'accueil)</span>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <h2 className="mb-6 text-brand-bleu">Détails du Logo Vectoriel</h2>
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-brand-bleu mb-4">Éléments du Design</h4>
              <ul className="space-y-2 text-auto-steel text-sm">
                <li>• <strong>Carrosserie:</strong> Bleu français (#0055A4)</li>
                <li>• <strong>Accent dynamique:</strong> Rouge français (#e74c3c)</li>
                <li>• <strong>Roues:</strong> Noir avec jantes acier (#6c757d)</li>
                <li>• <strong>Détails:</strong> Blanc pour les phares et vitres</li>
                <li>• <strong>Style:</strong> Silhouette moderne et reconnaissable</li>
              </ul>
            </div>
            <div>
              <h4 className="text-brand-bleu mb-4">Applications</h4>
              <ul className="space-y-2 text-auto-steel text-sm">
                <li>• Interface web et mobile</li>
                <li>• Signalétique d'atelier</li>
                <li>• Documents commerciaux</li>
                <li>• Réseaux sociaux</li>
                <li>• Packaging et étiquettes</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <h2 className="mb-6 text-brand-bleu">Règles d'Usage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="text-auto-success mb-4">✓ Bonnes Pratiques</h4>
            <ul className="space-y-2 text-auto-steel text-sm">
              <li>• Maintenir un espace libre égal à la hauteur du logo</li>
              <li>• Utiliser sur des fonds blancs ou très clairs</li>
              <li>• Respecter les proportions originales</li>
              <li>• Utiliser la version appropriée selon l'espace</li>
              <li>• Préserver la lisibilité du logo vectoriel</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h4 className="text-destructive mb-4">✗ À Éviter</h4>
            <ul className="space-y-2 text-auto-steel text-sm">
              <li>• Déformer ou étirer le logo</li>
              <li>• Modifier les couleurs du logo</li>
              <li>• Utiliser sur des fonds complexes</li>
              <li>• Placer trop près d'autres éléments</li>
              <li>• Diminuer en dessous de 16px de hauteur</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection />;
      case 'brand':
        return <BrandSection />;
      case 'colors':
        return <ColorPalette />;
      case 'typography':
        return <TypographyShowcase />;
      case 'icons':
        return <IconShowcase />;
      case 'components':
        return <UIComponentsShowcase />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <BrandLogo variant="horizontal" size="md" />

          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-brand-bleu text-sm">Navigation</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Button
                        key={item.id}
                        variant="nav"
                        onClick={() => setActiveSection(item.id)}
                        data-state={activeSection === item.id ? 'active' : 'inactive'}
                        className="w-full justify-start"
                      >
                        <Icon className="h-4 w-4 mr-3" />
                        {item.label}
                      </Button>
                    );
                  })}
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {renderContent()}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-card mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <p className="text-sm text-auto-steel">
                © 2025 - Elie Fezandelle
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
