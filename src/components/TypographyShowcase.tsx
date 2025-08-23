import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function TypographyShowcase() {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="mb-6 text-brand-bleu">Hiérarchie Typographique</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Headings Column */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h1 className="mb-3">Titre Principal (H1)</h1>
                <p className="text-auto-steel mb-3">
                  Le titre principal donne le ton à toute la page. Il doit être impactant et clair,
                  représentant l'essence de Services Auto 78 avec autorité et professionnalisme.
                </p>
                <div className="bg-secondary/30 p-3 rounded text-sm space-y-1 mb-3">
                  <div><strong>Taille:</strong> 40px / 2.5rem</div>
                  <div><strong>Poids:</strong> 600 (Semi-Bold)</div>
                  <div><strong>Interlignage:</strong> 1.2</div>
                  <div><strong>Espacement lettres:</strong> -0.025em</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Utilisé pour:</strong> Titres de pages d'accueil, sections héro,
                  titres principaux d'articles, noms de services majeurs
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h2 className="mb-3">En-têtes de Section (H2)</h2>
                <p className="text-auto-steel mb-3">
                  Les en-têtes de section structurent le contenu et guident l'utilisateur
                  à travers les différentes parties de l'interface.
                </p>
                <div className="bg-secondary/30 p-3 rounded text-sm space-y-1 mb-3">
                  <div><strong>Taille:</strong> 32px / 2rem</div>
                  <div><strong>Poids:</strong> 600 (Semi-Bold)</div>
                  <div><strong>Interlignage:</strong> 1.3</div>
                  <div><strong>Espacement lettres:</strong> -0.025em</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Utilisé pour:</strong> Titres de catégories principales,
                  en-têtes de sections de contenu, titres de services
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-3">Sous-titres (H3)</h3>
                <p className="text-auto-steel mb-3">
                  Les sous-titres organisent le contenu en sous-sections logiques,
                  facilitant la navigation et la compréhension.
                </p>
                <div className="bg-secondary/30 p-3 rounded text-sm space-y-1 mb-3">
                  <div><strong>Taille:</strong> 24px / 1.5rem</div>
                  <div><strong>Poids:</strong> 600 (Semi-Bold)</div>
                  <div><strong>Interlignage:</strong> 1.4</div>
                  <div><strong>Espacement lettres:</strong> -0.025em</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Utilisé pour:</strong> Sous-catégories de produits,
                  titres de cartes, sections de formulaires
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h4 className="mb-3">Titres de Composants (H4)</h4>
                <p className="text-auto-steel mb-3">
                  Ces titres identifient des éléments spécifiques et des composants
                  individuels de l'interface utilisateur.
                </p>
                <div className="bg-secondary/30 p-3 rounded text-sm space-y-1 mb-3">
                  <div><strong>Taille:</strong> 20px / 1.25rem</div>
                  <div><strong>Poids:</strong> 600 (Semi-Bold)</div>
                  <div><strong>Interlignage:</strong> 1.4</div>
                  <div><strong>Espacement lettres:</strong> Normal</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Utilisé pour:</strong> Noms de produits, titres de widgets,
                  en-têtes de cartes de produits
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h5 className="mb-3">Petits Titres (H5)</h5>
                <p className="text-auto-steel mb-3">
                  Parfaits pour des éléments plus discrets nécessitant une hiérarchie
                  claire sans dominer l'interface.
                </p>
                <div className="bg-secondary/30 p-3 rounded text-sm space-y-1 mb-3">
                  <div><strong>Taille:</strong> 18px / 1.125rem</div>
                  <div><strong>Poids:</strong> 600 (Semi-Bold)</div>
                  <div><strong>Interlignage:</strong> 1.5</div>
                  <div><strong>Espacement lettres:</strong> Normal</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Utilisé pour:</strong> Titres de sidebar, labels de sections,
                  titres de tableaux
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h6 className="mb-3">Micro-titres (H6)</h6>
                <p className="text-auto-steel mb-3">
                  Les plus petits titres pour des détails précis et des éléments
                  de navigation fine.
                </p>
                <div className="bg-secondary/30 p-3 rounded text-sm space-y-1 mb-3">
                  <div><strong>Taille:</strong> 16px / 1rem</div>
                  <div><strong>Poids:</strong> 600 (Semi-Bold)</div>
                  <div><strong>Interlignage:</strong> 1.5</div>
                  <div><strong>Espacement lettres:</strong> Normal</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Utilisé pour:</strong> Labels de formulaires, titres de composants mineurs,
                  en-têtes de colonnes
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Body Text Column */}
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-3">
                  <p>Texte de Corps (Paragraphe)</p>
                </div>
                <p className="text-auto-steel mb-3">
                  Le texte principal pour tout le contenu descriptif. Optimisé pour une lecture
                  confortable sur tous les appareils, il transmet l'information avec clarté
                  et professionnalisme. Ce texte constitue la majorité du contenu visible.
                </p>
                <div className="bg-secondary/30 p-3 rounded text-sm space-y-1 mb-3">
                  <div><strong>Taille:</strong> 16px / 1rem</div>
                  <div><strong>Poids:</strong> 400 (Regular)</div>
                  <div><strong>Interlignage:</strong> 1.6</div>
                  <div><strong>Espacement lettres:</strong> Normal</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Utilisé pour:</strong> Descriptions de produits, contenu d'articles,
                  texte informatif, instructions d'utilisation
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-3">
                  <p className="caption">Texte de Légende (Caption)</p>
                </div>
                <p className="text-auto-steel mb-3">
                  Informations complémentaires et métadonnées qui supportent le contenu principal.
                  Plus discret que le texte de corps mais reste parfaitement lisible.
                </p>
                <div className="bg-secondary/30 p-3 rounded text-sm space-y-1 mb-3">
                  <div><strong>Taille:</strong> 14px / 0.875rem</div>
                  <div><strong>Poids:</strong> 400 (Regular)</div>
                  <div><strong>Interlignage:</strong> 1.5</div>
                  <div><strong>Espacement lettres:</strong> Normal</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Utilisé pour:</strong> Légendes d'images, métadonnées de produits,
                  informations complémentaires, dates et heures
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-3">
                  <p className="small">Petit Texte (Small)</p>
                </div>
                <p className="text-auto-steel mb-3">
                  Texte minimal pour les contraintes d'espace tout en préservant la lisibilité.
                  Utilisé avec parcimonie pour les mentions légales et détails secondaires.
                </p>
                <div className="bg-secondary/30 p-3 rounded text-sm space-y-1 mb-3">
                  <div><strong>Taille:</strong> 12px / 0.75rem</div>
                  <div><strong>Poids:</strong> 400 (Regular)</div>
                  <div><strong>Interlignage:</strong> 1.5</div>
                  <div><strong>Espacement lettres:</strong> Normal</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Utilisé pour:</strong> Mentions légales, copyright,
                  texte de fine print, annotations mineures
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-3">
                  <label className="block">Labels de Formulaire</label>
                </div>
                <p className="text-auto-steel mb-3">
                  Étiquettes claires et précises pour tous les champs de formulaire.
                  Poids medium pour une meilleure visibilité et guidance utilisateur.
                </p>
                <div className="bg-secondary/30 p-3 rounded text-sm space-y-1 mb-3">
                  <div><strong>Taille:</strong> 14px / 0.875rem</div>
                  <div><strong>Poids:</strong> 500 (Medium)</div>
                  <div><strong>Interlignage:</strong> 1.5</div>
                  <div><strong>Espacement lettres:</strong> Normal</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Utilisé pour:</strong> Labels de champs de saisie,
                  titres d'options, instructions de formulaires
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-3">
                  <button className="bg-brand-bleu text-white px-4 py-2 rounded font-medium">
                    Texte de Bouton
                  </button>
                </div>
                <p className="text-auto-steel mb-3">
                  Texte d'action clair et facilement lisible pour tous les éléments interactifs.
                  Poids medium pour assurer la visibilité des actions importantes.
                </p>
                <div className="bg-secondary/30 p-3 rounded text-sm space-y-1 mb-3">
                  <div><strong>Taille:</strong> 14px / 0.875rem</div>
                  <div><strong>Poids:</strong> 500 (Medium)</div>
                  <div><strong>Interlignage:</strong> 1.5</div>
                  <div><strong>Espacement lettres:</strong> Normal</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong>Utilisé pour:</strong> Boutons d'action, liens de navigation,
                  éléments interactifs, calls-to-action
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-brand-bleu">Typographie en Contexte</h2>
        <Card className="p-8">
          <h1 className="text-brand-rouge mb-4">Pièces Automobiles Premium</h1>
          <h2 className="text-brand-bleu mb-6">Moteur & Performance</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="mb-3">Filtres à Huile</h3>
              <p className="mb-4">
                Découvrez notre gamme complète de filtres à huile de haute qualité,
                conçus pour maintenir la performance optimale de votre moteur.
                Compatibles avec toutes les marques françaises et européennes.
              </p>
              <p className="caption text-muted-foreground">
                Compatible: Peugeot, Citroën, Renault, et plus
              </p>
            </div>

            <div>
              <h4 className="mb-3">Spécifications Techniques</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Diamètre:</span>
                  <span>76mm</span>
                </div>
                <div className="flex justify-between">
                  <span>Hauteur:</span>
                  <span>123mm</span>
                </div>
                <div className="flex justify-between">
                  <span>Filetage:</span>
                  <span>M20 x 1.5</span>
                </div>
              </div>
              <p className="small text-muted-foreground mt-3">
                *Vérifiez la compatibilité avec votre véhicule avant l'achat
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <h2 className="mb-6 text-brand-bleu">Guidelines Typographiques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="text-brand-bleu mb-4">Police Principale</h4>
            <p className="mb-4">
              <strong>Rubik</strong> - Une police sans-serif moderne aux coins arrondis,
              parfaite pour l'identité automobile avec son aspect à la fois
              professionnel et accessible.
            </p>
            <div className="bg-secondary/20 p-3 rounded">
              <code className="text-sm">
                'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
              </code>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="text-brand-bleu mb-4">Caractéristiques de Rubik</h4>
            <ul className="space-y-2 text-sm text-auto-steel">
              <li>• <strong>Moderne & Approchable:</strong> Coins arrondis créent une sensation amicale</li>
              <li>• <strong>Excellente Lisibilité:</strong> Formes de lettres claires à toutes les tailles</li>
              <li>• <strong>Attrait Professionnel:</strong> Équilibre chaleur et crédibilité industrielle</li>
              <li>• <strong>Support Multilingue:</strong> Jeu de caractères étendu pour le français</li>
            </ul>
          </Card>

          <Card className="p-6">
            <h4 className="text-brand-bleu mb-4">Poids de Police Utilisés</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-normal">Regular (400)</span>
                <span className="text-sm text-muted-foreground">Texte de corps, paragraphes</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Medium (500)</span>
                <span className="text-sm text-muted-foreground">Labels, boutons</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Semi-Bold (600)</span>
                <span className="text-sm text-muted-foreground">Tous les titres (H1-H6)</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="text-brand-bleu mb-4">Principes d'Usage</h4>
            <ul className="space-y-2 text-sm text-auto-steel">
              <li>• Maintenir des interlignages cohérents pour une lisibilité optimale</li>
              <li>• Utiliser l'espacement des lettres avec parcimonie</li>
              <li>• Assurer des ratios de contraste suffisants (WCAG 2.1 AA)</li>
              <li>• Tester la typographie sur différentes tailles d'écran</li>
              <li>• Éviter plus de 3 poids de police dans une interface</li>
              <li>• Exploiter la chaleur naturelle de Rubik pour le contenu client</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
