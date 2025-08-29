import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface ColorSwatchProps {
  name: string;
  value: string;
  description: string;
  usage: string;
  className?: string;
}

function ColorSwatch({ name, value, description, usage, className = '' }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`group border rounded-lg overflow-hidden hover:shadow-md transition-shadow ${className}`}>
      <div
        className="h-24 w-full cursor-pointer relative"
        style={{ backgroundColor: value }}
        onClick={copyToClipboard}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-black/20 rounded-full p-2">
            {copied ? (
              <Check size={16} className="text-white" />
            ) : (
              <Copy size={16} className="text-white" />
            )}
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium">{name}</h4>
          <code className="text-xs bg-secondary px-2 py-1 rounded">{value}</code>
        </div>
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        <p className="text-xs text-auto-steel">
          <strong>Usage:</strong> {usage}
        </p>
      </div>
    </div>
  );
}

export function ColorPalette() {
  const primaryColors = [
    {
      name: 'Rouge Français pastel vif',
      value: '#e62727',
      description: 'Rouge primaire inspiré du drapeau français',
      usage: 'Éléments sélectionnés, accents de marque, alertes importantes'
    },
    {
      name: 'Blanc',
      value: '#ffffff',
      description: 'Blanc pur pour les arrière-plans et contrastes',
      usage: 'Arrière-plans, cartes, texte sur surfaces sombres'
    },
    {
      name: 'Bleu Français pastel',
      value: '#0055A4',
      description: 'Bleu foncé français pour les éléments primaires',
      usage: 'Boutons primaires, en-têtes, navigation principale'
    },
    {
      name: 'Bleu Clair',
      value: '#3498db',
      description: 'Bleu clair pour les états hover et interactions',
      usage: 'États hover, liens secondaires, accents interactifs'
    }
  ];

  const automotiveColors = [
    {
      name: 'Acier',
      value: '#6c757d',
      description: 'Gris neutre représentant les pièces métalliques',
      usage: 'Texte secondaire, bordures, éléments subtils'
    },
    {
      name: 'Moteur',
      value: '#495057',
      description: 'Gris foncé pour les composants automobiles',
      usage: 'Sous-titres, texte important, éléments UI sombres'
    },
    {
      name: 'Huile',
      value: '#212529',
      description: 'Noir profond pour un aspect premium',
      usage: 'Arrière-plans premium, mode sombre, texte sur surface claire'
    },
    {
      name: 'Alerte',
      value: '#f39c12',
      description: 'Orange pour les avertissements et notifications',
      usage: 'États d\'alerte, éléments d\'attention'
    },
    {
      name: 'Succès',
      value: '#27ae60',
      description: 'Vert pour les confirmations et succès',
      usage: 'Messages de succès, états complétés'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-6 text-brand-bleu">Palette Tricolore Française</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {primaryColors.map((color) => (
            <ColorSwatch key={color.name} {...color} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-brand-bleu">Palette Automobile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {automotiveColors.map((color) => (
            <ColorSwatch key={color.name} {...color} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-brand-bleu">Système de Couleurs des Boutons</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border rounded-lg p-6">
            <h4 className="text-brand-bleu mb-4">État Normal</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-brand-bleu"></div>
                <div>
                  <p className="text-sm font-medium">Bleu Français</p>
                  <code className="text-xs text-muted-foreground">#0055A4</code>
                </div>
              </div>
              <p className="text-sm text-auto-steel">
                Couleur par défaut des boutons primaires
              </p>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h4 className="text-brand-bleu mb-4">État Hover</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-brand-bleu-light"></div>
                <div>
                  <p className="text-sm font-medium">Bleu Clair</p>
                  <code className="text-xs text-muted-foreground">#3498db</code>
                </div>
              </div>
              <p className="text-sm text-auto-steel">
                Couleur au survol des boutons primaires
              </p>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h4 className="text-brand-bleu mb-4">État Sélectionné</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-brand-rouge"></div>
                <div>
                  <p className="text-sm font-medium">Rouge Français</p>
                  <code className="text-xs text-muted-foreground">#e62727</code>
                </div>
              </div>
              <p className="text-sm text-auto-steel">
                Couleur pour les éléments actifs/sélectionnés
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary/30 p-6 rounded-lg">
        <h3 className="mb-4 text-brand-bleu">Guidelines d'Accessibilité</h3>
        <div className="space-y-2 text-sm">
          <p>• Toutes les combinaisons de couleurs respectent les standards WCAG 2.1 AA (ratio de contraste 4.5:1 minimum)</p>
          <p>• Rouge Français (#e62727) offre un contraste suffisant sur arrière-plans blancs</p>
          <p>• Bleu Français (#0055A4) assure une excellente lisibilité pour le texte principal</p>
          <p>• Ne jamais utiliser la couleur seule pour transmettre une information - toujours associer avec des icônes ou du texte</p>
          <p>• Tester les designs avec des outils de simulation de daltonisme avant déploiement</p>
        </div>
      </div>

      <div className="bg-card border rounded-lg p-6">
        <h3 className="mb-4 text-brand-bleu">Variables CSS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-auto-engine mb-3">Couleurs Principales</h4>
            <div className="space-y-2 text-sm font-mono">
              <div className="flex justify-between">
                <span>--brand-rouge:</span>
                <span className="text-brand-rouge">#e62727</span>
              </div>
              <div className="flex justify-between">
                <span>--brand-blanc:</span>
                <span>#ffffff</span>
              </div>
              <div className="flex justify-between">
                <span>--brand-bleu:</span>
                <span className="text-brand-bleu">#0055A4</span>
              </div>
              <div className="flex justify-between">
                <span>--brand-bleu-light:</span>
                <span className="text-brand-bleu-light">#3498db</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-auto-engine mb-3">Couleurs Automobiles</h4>
            <div className="space-y-2 text-sm font-mono">
              <div className="flex justify-between">
                <span>--auto-steel:</span>
                <span className="text-auto-steel">#6c757d</span>
              </div>
              <div className="flex justify-between">
                <span>--auto-engine:</span>
                <span className="text-auto-engine">#495057</span>
              </div>
              <div className="flex justify-between">
                <span>--auto-oil:</span>
                <span>#212529</span>
              </div>
              <div className="flex justify-between">
                <span>--auto-warning:</span>
                <span className="text-auto-warning">#f39c12</span>
              </div>
              <div className="flex justify-between">
                <span>--auto-success:</span>
                <span className="text-auto-success">#27ae60</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
