import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  ShoppingCart, Heart, Star, Search, User, 
  Settings, Wrench, Fuel, Battery, Filter
} from 'lucide-react';
import { AutomotiveIcon } from './AutomotiveIcons';

export function UIComponentsShowcase() {
  const [activeTab, setActiveTab] = useState('buttons');
  const [selectedCategory, setSelectedCategory] = useState('');

  const ButtonShowcase = () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-brand-bleu">Primary Buttons - Bleu Foncé</h3>
        <div className="flex flex-wrap gap-4">
          <Button>
            Ajouter au Panier
          </Button>
          <Button size="lg">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Commander Maintenant
          </Button>
          <Button size="sm">
            Acheter
          </Button>
        </div>
        <p className="text-sm text-auto-steel mt-3">
          Boutons primaires en bleu foncé (#0055A4) avec hover en bleu clair (#3498db)
        </p>
      </div>

      <div>
        <h3 className="mb-4 text-brand-bleu">Secondary Buttons - Outline</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline">
            En Savoir Plus
          </Button>
          <Button variant="outline" size="lg">
            <Heart className="mr-2 h-4 w-4" />
            Favoris
          </Button>
          <Button variant="ghost">
            Comparer
          </Button>
        </div>
        <p className="text-sm text-auto-steel mt-3">
          Boutons secondaires avec bordure bleu foncé, hover en bleu clair
        </p>
      </div>

      <div>
        <h3 className="mb-4 text-brand-bleu">Automotive Action Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-auto-success hover:bg-auto-success/90">
            <AutomotiveIcon name="service" className="mr-2 h-4 w-4" />
            Planifier Service
          </Button>
          <Button variant="outline" className="border-auto-warning text-auto-warning hover:bg-auto-warning hover:text-white">
            <AutomotiveIcon name="diagnostics" className="mr-2 h-4 w-4" />
            Diagnostic
          </Button>
          <Button variant="outline" className="border-auto-steel text-auto-steel hover:bg-auto-steel hover:text-white">
            <AutomotiveIcon name="tools" className="mr-2 h-4 w-4" />
            Installation
          </Button>
        </div>
        <p className="text-sm text-auto-steel mt-3">
          Boutons d'action spécialisés avec couleurs automobiles pour des contextes spécifiques
        </p>
      </div>

      <div>
        <h3 className="mb-4 text-brand-bleu">États des Boutons</h3>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button>État Normal</Button>
            <Button disabled>État Désactivé</Button>
            <Button data-state="active">État Sélectionné (Rouge)</Button>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline">Outline Normal</Button>
            <Button variant="outline" disabled>Outline Désactivé</Button>
            <Button variant="outline" data-state="active">Outline Sélectionné</Button>
          </div>
        </div>
        <p className="text-sm text-auto-steel mt-3">
          Démonstration des différents états : normal (bleu foncé), hover (bleu clair), sélectionné (rouge), désactivé
        </p>
      </div>
    </div>
  );

  const CardShowcase = () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-brand-bleu">Product Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <AutomotiveIcon name="filters" size={32} className="text-brand-rouge" />
                <Badge className="bg-auto-success text-white">En Stock</Badge>
              </div>
              <CardTitle className="text-brand-bleu">Filtre à Huile Premium</CardTitle>
              <CardDescription>
                Compatible Peugeot 208, 308, 3008
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-brand-rouge">24,90€</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-current text-auto-warning" />
                  <Star className="h-4 w-4 fill-current text-auto-warning" />
                  <Star className="h-4 w-4 fill-current text-auto-warning" />
                  <Star className="h-4 w-4 fill-current text-auto-warning" />
                  <Star className="h-4 w-4 text-muted-foreground" />
                  <span className="ml-1 text-sm text-muted-foreground">(128)</span>
                </div>
              </div>
              <Button className="w-full">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Ajouter au Panier
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <AutomotiveIcon name="brakes" size={32} className="text-brand-rouge" />
                <Badge variant="outline" className="border-auto-warning text-auto-warning">Stock Faible</Badge>
              </div>
              <CardTitle className="text-brand-bleu">Plaquettes de Frein</CardTitle>
              <CardDescription>
                Système de freinage Renault Clio V
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-brand-rouge">45,90€</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-current text-auto-warning" />
                  <Star className="h-4 w-4 fill-current text-auto-warning" />
                  <Star className="h-4 w-4 fill-current text-auto-warning" />
                  <Star className="h-4 w-4 fill-current text-auto-warning" />
                  <Star className="h-4 w-4 fill-current text-auto-warning" />
                  <span className="ml-1 text-sm text-muted-foreground">(89)</span>
                </div>
              </div>
              <Button className="w-full">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Ajouter au Panier
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <AutomotiveIcon name="battery" size={32} className="text-brand-rouge" />
                <Badge className="bg-brand-rouge text-white">Nouveau</Badge>
              </div>
              <CardTitle className="text-brand-bleu">Batterie 12V</CardTitle>
              <CardDescription>
                Batterie haute performance, garantie 3 ans
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-brand-rouge">89,90€</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-current text-auto-warning" />
                  <Star className="h-4 w-4 fill-current text-auto-warning" />
                  <Star className="h-4 w-4 fill-current text-auto-warning" />
                  <Star className="h-4 w-4 fill-current text-auto-warning" />
                  <Star className="h-4 w-4 fill-current text-auto-warning" />
                  <span className="ml-1 text-sm text-muted-foreground">(156)</span>
                </div>
              </div>
              <Button className="w-full">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Ajouter au Panier
              </Button>
            </CardContent>
          </Card>
        </div>
        <p className="text-sm text-auto-steel mt-4">
          Cartes produit avec boutons d'achat utilisant le nouveau système de couleurs bleu foncé
        </p>
      </div>
    </div>
  );

  const FormShowcase = () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-brand-bleu">Search & Filters</h3>
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="search">Rechercher des pièces</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="search"
                  placeholder="Ex: filtre à huile Peugeot 308"
                  className="pl-10"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="brand">Marque</Label>
              <select className="w-full px-3 py-2 border border-border rounded-md bg-input-background">
                <option>Tous</option>
                <option>Peugeot</option>
                <option>Citroën</option>
                <option>Renault</option>
                <option>BMW</option>
                <option>Mercedes</option>
              </select>
            </div>
            <div>
              <Label htmlFor="category">Catégorie</Label>
              <select className="w-full px-3 py-2 border border-border rounded-md bg-input-background">
                <option>Toutes</option>
                <option>Moteur</option>
                <option>Freinage</option>
                <option>Électrique</option>
                <option>Filtres</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button>
              <Search className="mr-2 h-4 w-4" />
              Rechercher
            </Button>
          </div>
        </Card>
      </div>

      <div>
        <h3 className="mb-4 text-brand-bleu">Contact Form</h3>
        <Card className="p-6 max-w-md">
          <CardHeader className="px-0 pt-0">
            <CardTitle className="text-brand-bleu">Demande de Devis</CardTitle>
            <CardDescription>
              Obtenez un devis personnalisé pour vos pièces
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0 space-y-4">
            <div>
              <Label htmlFor="name">Nom complet</Label>
              <Input id="name" placeholder="Jean Dupont" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="jean.dupont@email.com" />
            </div>
            <div>
              <Label htmlFor="vehicle">Véhicule</Label>
              <Input id="vehicle" placeholder="Peugeot 308 - 2019" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <textarea 
                id="message"
                className="w-full px-3 py-2 border border-border rounded-md bg-input-background min-h-20"
                placeholder="Décrivez vos besoins..."
              />
            </div>
            <Button className="w-full">
              Envoyer la Demande
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <h3 className="mb-4 text-brand-bleu">Form Actions</h3>
        <Card className="p-6">
          <div className="flex flex-wrap gap-4">
            <Button>Valider</Button>
            <Button variant="outline">Annuler</Button>
            <Button variant="ghost">Réinitialiser</Button>
            <Button size="sm">Sauvegarder</Button>
            <Button size="lg">Confirmer la Commande</Button>
          </div>
          <p className="text-sm text-auto-steel mt-3">
            Actions de formulaire avec le système de couleurs cohérent
          </p>
        </Card>
      </div>
    </div>
  );

  const NavigationShowcase = () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-brand-bleu">Main Navigation</h3>
        <Card className="p-6">
          <nav className="flex flex-wrap gap-6">
            <a href="#" className="text-brand-bleu hover:text-brand-rouge transition-colors font-medium">
              Accueil
            </a>
            <a href="#" className="text-brand-bleu hover:text-brand-rouge transition-colors font-medium">
              Pièces Auto
            </a>
            <a href="#" className="text-brand-bleu hover:text-brand-rouge transition-colors font-medium">
              Services
            </a>
            <a href="#" className="text-brand-bleu hover:text-brand-rouge transition-colors font-medium">
              Marques
            </a>
            <a href="#" className="text-brand-bleu hover:text-brand-rouge transition-colors font-medium">
              Contact
            </a>
          </nav>
        </Card>
      </div>

      <div>
        <h3 className="mb-4 text-brand-bleu">Category Navigation</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'engine', label: 'Moteur' },
            { name: 'brakes', label: 'Freinage' },
            { name: 'electrical', label: 'Électrique' },
            { name: 'filters', label: 'Filtres' }
          ].map((item) => (
            <Card 
              key={item.name} 
              className={`p-4 hover:shadow-md transition-all cursor-pointer group ${
                selectedCategory === item.name ? 'ring-2 ring-brand-rouge' : ''
              }`}
              onClick={() => setSelectedCategory(selectedCategory === item.name ? '' : item.name)}
            >
              <div className="text-center">
                <AutomotiveIcon 
                  name={item.name as any} 
                  size={32} 
                  className={`mx-auto mb-2 transition-colors ${
                    selectedCategory === item.name 
                      ? 'text-brand-rouge' 
                      : 'text-brand-bleu group-hover:text-brand-bleu-light'
                  }`}
                />
                <p className="font-medium text-brand-bleu">{item.label}</p>
              </div>
            </Card>
          ))}
        </div>
        <p className="text-sm text-auto-steel mt-4">
          Navigation par catégorie avec icônes : bleu foncé par défaut, hover en bleu clair, rouge lorsque sélectionné
        </p>
      </div>

      <div>
        <h3 className="mb-4 text-brand-bleu">Breadcrumb Navigation</h3>
        <Card className="p-4">
          <nav className="flex text-sm">
            <a href="#" className="text-brand-bleu hover:text-brand-rouge">Accueil</a>
            <span className="mx-2 text-muted-foreground">/</span>
            <a href="#" className="text-brand-bleu hover:text-brand-rouge">Pièces Auto</a>
            <span className="mx-2 text-muted-foreground">/</span>
            <a href="#" className="text-brand-bleu hover:text-brand-rouge">Moteur</a>
            <span className="mx-2 text-muted-foreground">/</span>
            <span className="text-muted-foreground">Filtres à Huile</span>
          </nav>
        </Card>
      </div>

      <div>
        <h3 className="mb-4 text-brand-bleu">Navigation Buttons</h3>
        <Card className="p-6">
          <div className="flex flex-wrap gap-4">
            <Button variant="nav" data-state="active">Accueil</Button>
            <Button variant="nav">Catalogue</Button>
            <Button variant="nav">Services</Button>
            <Button variant="nav">Contact</Button>
          </div>
          <p className="text-sm text-auto-steel mt-3">
            Boutons de navigation avec état actif en rouge selon le système de design
          </p>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-brand-bleu mb-4">Composants UI - Services Auto 78</h2>
        <p className="text-auto-steel">
          Bibliothèque de composants avec le nouveau système de couleurs : 
          boutons primaires en bleu foncé qui deviennent bleu clair au hover, rouge pour les états sélectionnés.
        </p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="buttons">Boutons</TabsTrigger>
          <TabsTrigger value="cards">Cartes</TabsTrigger>
          <TabsTrigger value="forms">Formulaires</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
        </TabsList>
        
        <TabsContent value="buttons" className="mt-8">
          <ButtonShowcase />
        </TabsContent>
        
        <TabsContent value="cards" className="mt-8">
          <CardShowcase />
        </TabsContent>
        
        <TabsContent value="forms" className="mt-8">
          <FormShowcase />
        </TabsContent>
        
        <TabsContent value="navigation" className="mt-8">
          <NavigationShowcase />
        </TabsContent>
      </Tabs>
    </div>
  );
}