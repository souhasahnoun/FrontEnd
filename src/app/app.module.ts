import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ProduitComponent } from './produits/gestion produits/produit.component';
import { LoginComponent } from "./authentification/login/login.component";
import { FamilleComponent } from './produits/famille/famille/famille.component';
import { MarqueComponent } from './produits/marque/marque/marque.component';
import { CategorieComponent } from './produits/categorie/categorie/categorie.component';
import { CasiersComponent } from './casiers/casier/casiers.component';
import { LaCaisseComponent } from './vente a la caisse/vente a la caisse/listecaisses/listecaisses/la-caisse.component';
import { FournisseursComponent } from './achats/fournisseurs/fournisseurs/fournisseurs.component';
import { EntreecaisseComponent } from './vente a la caisse/entreecaisse/entreecaisse/entreecaisse.component';
import { RetraitcaisseComponent } from './vente a la caisse/retraitcaisse/retraitcaisse/retraitcaisse.component';
import { ListesticketsComponent } from './vente a la caisse/listestickets/listestickets.component';
import { JournalcaisseComponent } from './vente a la caisse/vente a la caisse/listecaisses/journalcaisse/journalcaisse/journalcaisse.component';

import { ClientsComponent } from './Ventes/clients/clients/clients.component';
import { BCClientComponent } from './Ventes/bcclient/bcclient/bcclient.component';
import { BCFournisseurComponent } from './achats/bcfournisseur/bcfournisseur/bcfournisseur.component';
import { DevisComponent } from './Ventes/Devis/devis/devis.component';
import { BEFournisseurComponent } from './achats/befournisseur/befournisseur/befournisseur.component';
import { BLClientComponent } from './Ventes/blc/blclient/blclient.component';
import { FacturationfComponent } from './achats/facturef/facturationf/facturationf.component';
import { FacturationfavoirComponent } from './achats/factureavoirf/facturationfavoir/facturationfavoir.component';
import { FacturationcComponent } from './Ventes/facturec/facturationc/facturationc.component';
import { FacturationcavoirComponent } from './Ventes/factureavoirc/facturationcavoir/facturationcavoir.component';
import { ReglementcComponent } from './Ventes/reglementc/reglementc/reglementc.component';
import { PaiementfComponent } from './achats/paiementf/paiementf/paiementf.component';
import { MouvementstockComponent } from './Stocks/mouvementstock/mouvementstock/mouvementstock.component';
import { EtatstockComponent } from './Stocks/etatsstocks//etatstock/etatstock.component';
import { InventaireComponent } from './Stocks/Inventaire/inventaire/inventaire.component';
import { MagasinsComponent } from './parametrage/magasin/magasins/magasins.component';
import { SocietesComponent } from './parametrage/societe/societes/societes.component';
import { BanquesComponent } from './parametrage/banque/banques/banques.component';

import { EtatjournalComponent } from './Etats/etatjournal/etatjournal.component';
import { EtatcomptecComponent } from './Etats/etatcomptec/etatcomptec/etatcomptec.component';
import { EtatcomptefComponent } from './Etats/etatscomptef/etatcomptef/etatcomptef.component';
import { EtatfacturecComponent } from './Etats/etatfacturec/etatfacturec/etatfacturec.component';
import { EtatfacturefComponent } from './Etats/etatfacturef/etatfacturef/etatfacturef.component';
import { EtatventesComponent } from './Etats/detailvente/etatventes/etatventes.component';
import { RegionsComponent } from './parametrage/region/regions/regions.component';
import { ListeproduitComponent } from './produits/listeproduit/listeproduit/listeproduit.component';
import { ListebcfComponent } from './achats/bcfournisseur/listebcf/listebcf/listebcf.component';
import { ListebefComponent } from './achats/befournisseur/listebef/listebef/listebef.component';
import { SaisiereglementComponent } from './achats/befournisseur/listebef/saisiereglement/saisiereglement.component';
import { SuivireglementComponent } from './achats/befournisseur/listebef/suivireglement/suivrereglement/suivireglement.component';
import { ListefacturefComponent } from './achats/facturef/listefacturef/listefacturef/listefacturef.component';
import { ListefactureavoirfComponent } from './achats/factureavoirf/listefactureavoirf/listefactureavoirf/listefactureavoirf.component';
import { ListebccComponent } from './Ventes/bcclient/listebcc/listebcc/listebcc.component';
import { ListeblcComponent } from './Ventes/blc/listeblc/listeblc/listeblc.component';
import { ListefacturecComponent } from './Ventes/facturec/listefacturec/listefacturec/listefacturec.component';
import { EtattpeComponent } from './Etats/etattpe/etattpe/etattpe.component';
import { EtatrecouvrementcComponent } from './Etats/etatrecouvrementc/etatrecouvrementc/etatrecouvrementc.component';
import { EtatrecouvrementfComponent } from './Etats/etatrecouvrementf/etatrecouvrementf/etatrecouvrementf.component';
import { FichegarentieComponent } from './produits/fichegarentie/fichegarentie/fichegarentie.component';
import { ListefichegarentieComponent } from './produits/fichegarentie/listefichegarentie/listefichegarentie/listefichegarentie.component';
import { PersonelsComponent } from './Personells/personels/personels/personels.component';
import { PaiementpersonelComponent } from './Personells/paiementpersonel/paiementpersonel/paiementpersonel.component';
import { ListepaiementpersonelComponent } from './Personells/paiementpersonel/listepaiementpersonel/listepaiementpersonel/listepaiementpersonel.component';
import { EtatchequesclientComponent } from './Etats Bancaires/etatchequec/etatchequesclient/etatchequesclient.component';
import { EtattraitesclientComponent } from './Etats Bancaires/etattraitec/etattraitesclient/etattraitesclient.component';
import { EtatchequesfournisseurComponent } from './Etats Bancaires/etatchequef/etatchequesfournisseur/etatchequesfournisseur.component';
import { EtattraitesfournisseurComponent } from './Etats Bancaires/etattraitef/etattraitesfournisseur/etattraitesfournisseur.component';
import { EtatordrepaiementComponent } from './Etats Bancaires/etatordrepaiement/etatordrepaiement/etatordrepaiement.component';
import { ListebordoreauComponent } from './Etats Bancaires/liste bordereaux/listebordoreau/listebordoreau.component';
import { EtatrecetteComponent } from './Etats/etatrecette/etatrecette/etatrecette.component';
import { FichereceptionComponent } from './fiche reception/fichereception/fichereception.component';
import { ListefichereceptionComponent } from './fiche reception/listefichereception/listefichereception/listefichereception.component';
import { TracabilitegeneralComponent } from './tracabilité/tracabilitégeneral/tracabilitegeneral/tracabilitegeneral.component';
import { EtatespecesclientComponent } from './Etats/etatespecesclient/etatespecesclient.component';
import { FactureproformaComponent } from './Ventes/factureproforma/factureproforma/factureproforma.component';
import { RetenuesourcefComponent } from './achats/RSF/retenuesourcef/retenuesourcef.component';
import { ListeretenuesourcefComponent } from './achats/RSF/listeRSF/listeretenuesourcef/listeretenuesourcef.component';
import { LignedevisComponent } from './Ventes/Devis/lignedevis/lignedevis.component';
import { ValiderrsComponent } from './achats/facturef/listefacturef/validerrs/validers/validerrs.component';
import { Saisiereglement1Component } from './achats/facturef/listefacturef/saisiereglement1/saisiereglement1.component';
import { Suivireglement1Component } from './achats/facturef/listefacturef/suivireglement1/suivrereglement1/suivireglement1.component';
import { LignefacturecComponent } from './Ventes/facturec/lignefacturec/lignefacturec.component';
import { LignecommandefComponent } from './achats/bcfournisseur/lignecommandef/lignecommandef.component';
import { LigneblcComponent } from './Ventes/blc/ligneblc/ligneblc.component';
import { LigneblfComponent } from './achats/befournisseur/ligneblf/ligneblf.component';
import { LignefacturefComponent } from './achats/facturef/lignefacturef/lignefacturef.component';
import { LignefactureproformaComponent } from './Ventes/factureproforma/lignefactureproforma/lignefactureproforma.component';
import { LignefactureavoircComponent } from './Ventes/factureavoirc/lignefactureavoirc/lignefactureavoirc.component';
import { LignefactureavoirfComponent } from './achats/factureavoirf/lignefactureavoirf/lignefactureavoirf.component';
import { LignecommandecComponent } from './Ventes/bcclient/lignecommandec/lignecommandec.component';
import { Saisiereglement2Component } from './achats/factureavoirf/listefactureavoirf/saisiereglement2/saisiereglement2.component';
import { Suivireglement2Component } from './achats/factureavoirf/listefactureavoirf/suivireglement2/suivrereglement2/suivireglement2.component';
import { Saisiereglement3Component } from './Ventes/blc/listeblc/saisiereglement3/saisiereglement3.component';
import { Suivireglement3Component } from './Ventes/blc/listeblc/suivireglement3/suivrereglement3/suivireglement3.component';
import { RetourBLComponent } from './Ventes/retour-bl/retour-bl.component';
import { Saisiereglement4Component } from './Ventes/facturec/listefacturec/saisiereglement4/saisiereglement4.component';
import { Suivireglement4Component } from './Ventes/facturec/listefacturec/suivireglement4/suivrereglement4/suivireglement4.component';
import { ListefactureavoircComponent } from './Ventes/factureavoirc/listefactureavoirc/listefactureavoirc/listefactureavoirc.component';
import { AnalyseventeComponent } from './dashboard/analysevente/analysevente.component';
import { InitialisercodeComponent } from './parametrage/initialisercode/initialisercode/initialisercode.component';
import { GestionsouchesComponent } from './parametrage/souche/gestionsouches/gestionsouches.component';
import { GerertvaComponent } from './parametrage/gerertva/gerertva/gerertva.component';
import { ModifierretraitcaisseComponent } from './vente a la caisse/retraitcaisse/modifierretraitcaisse/modifierretraitcaisse.component';
import { ModifierenraitcaisseComponent } from './vente a la caisse/entreecaisse/modifierenraitcaisse/modifierenraitcaisse.component';
import { ModifierpersonelComponent } from './Personells/personels/modifierpersonel/modifierpersonel.component';
import { ModifierpaiementpersonelComponent } from './Personells/paiementpersonel/listepaiementpersonel/modifierpaiementpersonel/modifierpaiementpersonel.component';
import { ModifiermarquesComponent } from './produits/marque/modifiermarques/modifiermarques.component';
import { ModifiercategoriesComponent } from './produits/categorie/modifiercategories/modifiercategories.component';
import { ModifierfamillesComponent } from './produits/famille/modifierfamilles/modifierfamilles.component';
import { Imprimerproduit1Component } from './produits/listeproduit/imprimerproduit1/imprimerproduit1.component';
import { Imprimerproduit2Component } from './produits/listeproduit/imprimerproduit2/imprimerproduit2.component';
import { Imprimerproduit3Component } from './produits/listeproduit/imprimerproduit3/imprimerproduit3.component';
import { Imprimerproduit4Component } from './produits/listeproduit/imprimerproduit4/imprimerproduit4.component';
import { ImprimermarqueComponent } from './produits/marque/imprimermarque/imprimermarque.component';
import { ImprimercategorieComponent } from './produits/categorie/imprimercategorie/imprimercategorie.component';
import { ImprimerfamilleComponent } from './produits/famille/imprimerfamille/imprimerfamille.component';
import { ImprimerfichegarentieComponent } from './produits/fichegarentie/listefichegarentie/modifierfichegarentie/imprimerfichegarentie/imprimerfichegarentie.component';
import { ImprimercasiersComponent } from './casiers/imprimercasiers/imprimercasiers.component';
import { ModifiersouchesComponent } from './parametrage/souche/modifiersouches/modifiersouches.component';
import { ModifiertvaComponent } from './parametrage/gerertva/modifiertva/modifiertva.component';
import { ModifierbanqueComponent } from './parametrage/banque/modifierbanque/modifierbanque.component';
import { ModifierutilisateurComponent } from './parametrage/utilisateurs/modifierutilisateur/modifierutilisateur.component';
import { ModifiersocieteComponent } from './parametrage/societe/modifiersociete/modifiersociete.component';
import { ModifierregionComponent } from './parametrage/region/modifierregion/modifierregion.component';
import { ModifiermagasinComponent } from './parametrage/magasin/modifiermagasin/modifiermagasin.component';
import { ModifierclientComponent } from './Ventes/clients/modifierclient/modifierclient.component';
import { ModifierfichegarentieComponent } from './produits/fichegarentie/listefichegarentie/modifierfichegarentie/modifierfichegarentie/modifierfichegarentie.component';
import { ModifierfournisseurComponent } from './achats/fournisseurs/modifierfournisseur/modifierfournisseur.component';
import { ModifierinitialisercodeComponent } from './parametrage/initialisercode/modifierinitialisercode/modifierinitialisercode.component';
import { ModifierproduitComponent } from './produits/listeproduit/modifierproduit/modifierproduit.component';
import { ModifierretenufComponent } from './achats/RSF/listeRSF/modifierretenuf/modifierretenuf.component';
import { ModifiercaisseComponent } from './vente a la caisse/vente a la caisse/listecaisses/modifiercaisse/modifiercaisse.component';
import { ImprimerfournisseurComponent } from './achats/fournisseurs/imprimerfournisseur/imprimerfournisseur.component';
import { ImprimerbcfComponent } from './achats/bcfournisseur/listebcf/imprimerbcf/imprimerbcf.component';
import { Imprimerbcf1Component } from './achats/bcfournisseur/listebcf/imprimerbcf1/imprimerbcf1.component';
import { ImprimerbefComponent } from './achats/befournisseur/listebef/imprimerbef/imprimerbef.component';
import { Imprimerbef1Component } from './achats/befournisseur/listebef/imprimerbef1/imprimerbef1.component';
import { Imprimerfacturef1Component } from './achats/facturef/listefacturef/imprimerfacturef1/imprimerfacturef1.component';
import { ImprimerfactureavoirfComponent } from './achats/factureavoirf/listefactureavoirf/imprimerfactureavoirf/imprimerfactureavoirf.component';
import { Imprimerdevis1Component } from './Ventes/Devis/imprimerdevis1/imprimerdevis1.component';
import { ImprimerbccComponent } from './Ventes/bcclient/listebcc/imprimerbcc/imprimerbcc.component';
import { Imprimerbcc1Component } from './Ventes/bcclient/listebcc/imprimerbcc1/imprimerbcc1.component';
import { Imprimerblc1Component } from './Ventes/blc/listeblc/imprimerblc1/imprimerblc1.component';
import { Imprimerfacturec1Component } from './Ventes/facturec/listefacturec/imprimerfacturec1/imprimerfacturec1.component';
import { ImprimerfactureavoircComponent } from './Ventes/factureavoirc/listefactureavoirc/imprimerfactureavoirc/imprimerfactureavoirc.component';
import { ImprimerfactureproformaComponent } from './Ventes/factureproforma/imprimerfactureproforma/imprimerfactureproforma.component';
import { ImprimerfichereceptionComponent } from './fiche reception/listefichereception/imprimerfichereception/imprimerfichereception.component';
import { ImprimerfacturefComponent } from './achats/facturef/listefacturef/imprimerfacturef/imprimerfacturef.component';
import { ImprimerrsfComponent } from './achats/RSF/listeRSF/imprimerrsf/imprimerrsf.component';
import { Imprimerrsf1Component } from './achats/RSF/listeRSF/imprimerrsf1/imprimerrsf1.component';
import { ImprimerpaiementfComponent } from './achats/paiementf/imprimerpaiementf/imprimerpaiementf.component';
import { ImprimermvstockComponent } from './Stocks/mouvementstock/imprimermvstock/imprimermvstock.component';
import { Imprimermvstock1Component } from './Stocks/mouvementstock/imprimermvstock1/imprimermvstock1.component';
import { Imprimeretatstock1Component } from './Stocks/etatsstocks/imprimeretatstock1/imprimeretatstock1.component';
import { Imprimeretatstock2Component } from './Stocks/etatsstocks/imprimeretatstock2/imprimeretatstock2.component';
import { Imprimeretatstock3Component } from './Stocks/etatsstocks/imprimeretatstock3/imprimeretatstock3.component';
import { Imprimeretatstock4Component } from './Stocks/etatsstocks/imprimeretatstock4/imprimeretatstock4.component';
import { Imprimeretatstock5Component } from './Stocks/etatsstocks/imprimeretatstock5/imprimeretatstock5.component';
import { ImprimerinventaireComponent } from './Stocks/Inventaire/imprimerinventaire/imprimerinventaire.component';
import { Imprimerinventaire1Component } from './Stocks/Inventaire/imprimerinventaire1/imprimerinventaire1.component';
import { Imprimerinventaire2Component } from './Stocks/Inventaire/imprimerinventaire2/imprimerinventaire2.component';
import { ImprimerclientComponent } from './Ventes/clients/imprimerclient/imprimerclient.component';
import { ImprimerdevisComponent } from './Ventes/Devis/imprimerdevis/imprimerdevis.component';
import { ImprimerblcComponent } from './Ventes/blc/listeblc/imprimerblc/imprimerblc.component';
import { ImprimerfacturecComponent } from './Ventes/facturec/listefacturec/imprimerfacturec/imprimerfacturec.component';
import { ImprimerreglementcComponent } from './Ventes/reglementc/imprimerreglementc/imprimerreglementc.component';
import { ImprimeretatcomptecComponent } from './Etats/etatcomptec/imprimeretatcomptec/imprimeretatcomptec.component';
import { ImprimeretatcomptefComponent } from './Etats/etatscomptef/imprimeretatcomptef/imprimeretatcomptef.component';
import { ImprimeretatfacturecComponent } from './Etats/etatfacturec/imprimeretatfacturec/imprimeretatfacturec.component';
import { ImprimeretatfacturefComponent } from './Etats/etatfacturef/imprimeretatfacturef/imprimeretatfacturef.component';
import { ImprimeretatrecetteComponent } from './Etats/etatrecette/imprimeretatrecette/imprimeretatrecette.component';
import { ImprimeretatdetailventeComponent } from './Etats/detailvente/imprimeretatdetailvente/imprimeretatdetailvente.component';
import { ImprimeretattpeComponent } from './Etats/etattpe/imprimeretattpe/imprimeretattpe.component';
import { Imprimerpaiementpersonel1Component } from './Personells/paiementpersonel/listepaiementpersonel/imprimerpaiementpersonel1/imprimerpaiementpersonel1.component';
import { ImprimeretatrecouvrementcComponent } from './Etats/etatrecouvrementc/imprimeretatrecouvrementc/imprimeretatrecouvrementc.component';
import { ImprimeretatrecouvrementfComponent } from './Etats/etatrecouvrementf/imprimeretatrecouvrementf/imprimeretatrecouvrementf.component';
import { ImprimeretatchequecComponent } from './Etats Bancaires/etatchequec/imprimeretatchequec/imprimeretatchequec.component';
import { Imprimeretatchequec1Component } from './Etats Bancaires/etatchequec/imprimeretatchequec1/imprimeretatchequec1.component';
import { ImprimeretatchequefComponent } from './Etats Bancaires/etatchequef/imprimeretatchequef/imprimeretatchequef.component';
import { Imprimeretatchequef1Component } from './Etats Bancaires/etatchequef/imprimeretatchequef1/imprimeretatchequef1.component';
import { ImprimeretattraitecComponent } from './Etats Bancaires/etattraitec/imprimeretattraitec/imprimeretattraitec.component';
import { Imprimeretattraitec1Component } from './Etats Bancaires/etattraitec/imprimeretattraitec1/imprimeretattraitec1.component';
import { ImprimeretattraitefComponent } from './Etats Bancaires/etattraitef/imprimeretattraitef/imprimeretattraitef.component';
import { Imprimeretattraitef1Component } from './Etats Bancaires/etattraitef/imprimeretattraitef1/imprimeretattraitef1.component';
import { ImprimeretatordrepaiementComponent } from './Etats Bancaires/etatordrepaiement/imprimeretatordrepaiement/imprimeretatordrepaiement.component';
import { Imprimerentreecaisse1Component } from './vente a la caisse/entreecaisse/imprimerentreecaisse1/imprimerentreecaisse1.component';
import { Imprimerretraitcaisse1Component } from './vente a la caisse/retraitcaisse/imprimerretraitcaisse1/imprimerretraitcaisse1.component';
import { Imprimeretatfacturec1Component } from './Etats/etatfacturec/imprimeretatfacturec1/imprimeretatfacturec1.component';
import { Imprimeretatfacturef1Component } from './Etats/etatfacturef/imprimeretatfacturef1/imprimeretatfacturef1.component';
import { ImprimerlistebordereauComponent } from './Etats Bancaires/liste bordereaux/imprimerlistebordereau/imprimerlistebordereau.component';
import { EntreecaissepdfComponent } from './vente a la caisse/entreecaisse/entreecaissepdf/entreecaissepdf.component';
import { RetraitcaissepdfComponent } from './vente a la caisse/retraitcaisse/retraitcaissepdf/retraitcaissepdf.component';
import { JournalcaissepdfComponent } from './vente a la caisse/vente a la caisse/listecaisses/journalcaisse/journalcaissepdf/journalcaissepdf.component';
import { RetenuepdfComponent } from './achats/facturef/listefacturef/validerrs/retenuepdf/retenuepdf.component';
import { ExportjournalpdfComponent } from './exportjournalpdf/exportjournalpdf.component';
import { PaiementpersonelpdfComponent } from './Personells/paiementpersonel/listepaiementpersonel/paiementpersonelpdf/paiementpersonelpdf.component';
import { EntreecaisseexcelComponent } from './vente a la caisse/entreecaisse/entreecaisseexcel/entreecaisseexcel.component';
import { RetraitcaisseexcelComponent } from './vente a la caisse/retraitcaisse/retraitcaisseexcel/retraitcaisseexcel.component';
import { JournalcaisseexcelComponent } from './vente a la caisse/vente a la caisse/listecaisses/journalcaisse/journalcaisseexcel/journalcaisseexcel.component';
import { ExportpdfComponent } from './Ventes/Devis/exportpdf/exportpdf.component';
import { HistoriquepdfComponent } from './tracabilité/tracabilitégeneral/historiquepdf/historiquepdf.component';
import { HistoriqueexcelComponent } from './tracabilité/tracabilitégeneral/historiqueexcel/historiqueexcel.component';
import { PaiementpersonelexcelComponent } from './Personells/paiementpersonel/listepaiementpersonel/paiementpersonelexcel/paiementpersonelexcel.component';
import { ListesfichesgarentiepdfComponent } from './produits/fichegarentie/listefichegarentie/listesfichesgarentiepdf/listesfichesgarentiepdf.component';
import { ListesfichesgarentieexcelComponent } from './produits/fichegarentie/listefichegarentie/listesfichesgarentieexcel/listesfichesgarentieexcel.component';
import { Journalcaisse1Component } from './vente a la caisse/vente a la caisse/listecaisses/journalcaisse1/journalcaisse1.component';
import { RetourBeComponent } from './achats/retour-be/retour-be.component';
import { Imprimersuivireglement1Component } from './achats/befournisseur/listebef/suivireglement/imprimersuivireglement1/imprimersuivireglement1.component';
import { Imprimersuivireglement2Component } from './achats/facturef/listefacturef/suivireglement1/imprimersuivireglement2/imprimersuivireglement2.component';
import { Imprimersuivireglement3Component } from './achats/factureavoirf/listefactureavoirf/suivireglement2/imprimersuivireglement3/imprimersuivireglement3.component';
import { Imprimersuivireglement4Component } from './Ventes/blc/listeblc/suivireglement3/imprimersuivireglement4/imprimersuivireglement4.component';
import { Imprimersuivireglement5Component } from './Ventes/facturec/listefacturec/suivireglement4/imprimersuivireglement5/imprimersuivireglement5.component';
import { Suivireglement5Component } from './Ventes/factureavoirc/listefactureavoirc/suivireglement5/suivrereglement5/suivireglement5.component';
import { Imprimersuivireglement6Component } from './Ventes/factureavoirc/listefactureavoirc/suivireglement5/imprimersuivireglement6/imprimersuivireglement6.component';
import { Saisiereglement5Component } from './Ventes/factureavoirc/listefactureavoirc/saisiereglement5/saisiereglement5.component';
import { ProfileComponent } from './authentification/profile/profile.component';
import { DetailventeComponent } from './dashboard/detailvente/detailvente.component';
import { CaisseComponent } from './vente a la caisse/vente a la caisse/caisse/caisse.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { PagerService } from 'src/app/SERVICES/pager.service';

import { Imprimerrsc1Component } from './Ventes/RSC/listeRSC/imprimerrsc1/imprimerrsc1.component';
import { ListeretenuesourcecComponent } from './Ventes/RSC/listeRSC/listeretenuesourcec/listeretenuesourcec.component';
import { ModifierretenucComponent } from './Ventes/RSC/listeRSC/modifierretenuc/modifierretenuc.component';
import { RetenuesourcecComponent } from './Ventes/RSC/retenuesourcec/retenuesourcec.component';
import { BecommandefrsComponent } from './achats/befournisseur/becommandefrs/becommandefrs.component';
import { BlcommandecltComponent } from './Ventes/blc/blcommandeclt/blcommandeclt.component';
import { BldeviscltComponent } from './Ventes/blc/bldevisclt/bldevisclt.component';
import { BlproformacltComponent } from './Ventes/blc/blproformaclt/blproformaclt.component'
import { UtilisateursComponent } from './parametrage/utilisateurs/gestion user/utilisateurs.component';
import { DroitacceesComponent } from './parametrage/utilisateurs/droitaccees/droitaccees.component';
import { FilterPipe } from './filter.pipe';
import { Caisse1Component } from './vente a la caisse/vente a la caisse/caisse1/caisse1.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ProduitComponent,
    FamilleComponent,
    MarqueComponent,
    CategorieComponent,
    CasiersComponent,
    LaCaisseComponent,
    FournisseursComponent,
    EntreecaisseComponent,
    RetraitcaisseComponent,
    ListesticketsComponent,
    JournalcaisseComponent,
    ClientsComponent,
    BCClientComponent,
    BCFournisseurComponent,
    DevisComponent,
    BEFournisseurComponent,
    BLClientComponent,
    FacturationfComponent,
    FacturationfavoirComponent,
    FacturationcComponent,
    FacturationcavoirComponent,
    ReglementcComponent,
    PaiementfComponent,
    MouvementstockComponent,
    EtatstockComponent,
    InventaireComponent,
    UtilisateursComponent,
    MagasinsComponent,
    SocietesComponent,
    BanquesComponent,
    EtatjournalComponent,
    EtatcomptecComponent,
    EtatcomptefComponent,
    EtatfacturecComponent,
    EtatfacturefComponent,
    EtatventesComponent,
    RegionsComponent,
    ListeproduitComponent,
    ListebcfComponent,
    ListebefComponent,
    SaisiereglementComponent,
    SuivireglementComponent,
    ListefacturefComponent,
    ListefactureavoirfComponent,
    ListebccComponent,
    ListeblcComponent,
    ListefacturecComponent,
    EtattpeComponent,
    EtatrecouvrementcComponent,
    EtatrecouvrementfComponent,
    FichegarentieComponent,
    ListefichegarentieComponent,
    PersonelsComponent,
    PaiementpersonelComponent,
    ListepaiementpersonelComponent,
    EtatchequesclientComponent,
    EtattraitesclientComponent,
    EtatchequesfournisseurComponent,
    EtattraitesfournisseurComponent,
    EtatordrepaiementComponent,
    ListebordoreauComponent,
    EtatrecetteComponent,
    FichereceptionComponent,
    ListefichereceptionComponent,
    TracabilitegeneralComponent,
    EtatespecesclientComponent,
    FactureproformaComponent,
    RetenuesourcefComponent,
    ListeretenuesourcefComponent,
    Caisse1Component,

    DroitacceesComponent,
    LignedevisComponent,
    ValiderrsComponent,
    Saisiereglement1Component,
    Suivireglement1Component,
   LignefacturecComponent,
   LignecommandefComponent,
   LigneblcComponent,
   LigneblfComponent,
   LignefacturefComponent,
   LignefactureproformaComponent,
   LignefactureavoircComponent,
   LignefactureavoirfComponent,
   LignecommandecComponent,
   Saisiereglement2Component,
   Suivireglement2Component,
   Saisiereglement3Component,
   Suivireglement3Component,
   RetourBLComponent,
   Saisiereglement4Component,
   Suivireglement4Component,
   ListefactureavoircComponent,
   AnalyseventeComponent,
   InitialisercodeComponent,
   GestionsouchesComponent,
   GerertvaComponent,
   ModifierretraitcaisseComponent,
   ModifierenraitcaisseComponent,
   ModifierpersonelComponent,
   ModifierpaiementpersonelComponent,
   ModifiermarquesComponent,
   ModifiercategoriesComponent,
   ModifierfamillesComponent,
   Imprimerproduit1Component,
   Imprimerproduit2Component,
   Imprimerproduit3Component,
   Imprimerproduit4Component,
   ImprimermarqueComponent,
   ImprimercategorieComponent,
   ImprimerfamilleComponent,
   ImprimerfichegarentieComponent,
   ImprimercasiersComponent,
   ModifiersouchesComponent,
   ModifiertvaComponent,
   ModifierbanqueComponent,
   ModifierutilisateurComponent,
   ModifiersocieteComponent,
   ModifierregionComponent,
   ModifiermagasinComponent,
   ModifierclientComponent,
   ModifierfichegarentieComponent,
   ModifierfournisseurComponent,
   ModifierinitialisercodeComponent,
   ModifierproduitComponent,
   ModifierretenufComponent,
   ModifiercaisseComponent,
   ImprimerfournisseurComponent,
   ImprimerbcfComponent,
   Imprimerbcf1Component,
   ImprimerbefComponent,
   Imprimerbef1Component,
   Imprimerfacturef1Component,
   ImprimerfactureavoirfComponent,
   Imprimerdevis1Component,
   ImprimerbccComponent,
   Imprimerbcc1Component,
   Imprimerblc1Component,
   Imprimerfacturec1Component,
   ImprimerfactureavoircComponent,
   ImprimerfactureproformaComponent,
   ImprimerfichereceptionComponent,
   ImprimerfacturefComponent,
   ImprimerrsfComponent,

   Imprimerrsf1Component,

   ImprimerpaiementfComponent,
   ImprimermvstockComponent,
   Imprimermvstock1Component,
   Imprimeretatstock1Component,
   Imprimeretatstock2Component,
   Imprimeretatstock3Component,
   Imprimeretatstock4Component,
   Imprimeretatstock5Component,
   ImprimerinventaireComponent,
   Imprimerinventaire1Component,
   Imprimerinventaire2Component,
   ImprimerclientComponent,
   ImprimerdevisComponent,
   ImprimerblcComponent,
   ImprimerfacturecComponent,
   ImprimerreglementcComponent,
   ImprimeretatcomptecComponent,
   ImprimeretatcomptefComponent,
   ImprimeretatfacturecComponent,
   ImprimeretatfacturefComponent,
   ImprimeretatrecetteComponent,
   ImprimeretatdetailventeComponent,
   ImprimeretattpeComponent,
   Imprimerpaiementpersonel1Component,
   ImprimeretatrecouvrementcComponent,
   ImprimeretatrecouvrementfComponent,
   ImprimeretatchequecComponent,
   Imprimeretatchequec1Component,
   ImprimeretatchequefComponent,
   Imprimeretatchequef1Component,
   ImprimeretattraitecComponent,
   Imprimeretattraitec1Component,
   ImprimeretattraitefComponent,
   Imprimeretattraitef1Component,
   ImprimeretatordrepaiementComponent,
   Imprimerentreecaisse1Component,
   Imprimerretraitcaisse1Component,
   Imprimeretatfacturec1Component,
   Imprimeretatfacturef1Component,
   ImprimerlistebordereauComponent,
   EntreecaissepdfComponent,
   RetraitcaissepdfComponent,
   JournalcaissepdfComponent,
   RetenuepdfComponent,
   ExportjournalpdfComponent,
   PaiementpersonelpdfComponent,
   EntreecaisseexcelComponent,
   RetraitcaisseexcelComponent,
   JournalcaisseexcelComponent,
   ExportpdfComponent,
   HistoriquepdfComponent,
   HistoriqueexcelComponent,
   PaiementpersonelexcelComponent,
   ListesfichesgarentiepdfComponent,
   ListesfichesgarentieexcelComponent,
   Journalcaisse1Component,
   RetourBeComponent,
   Imprimersuivireglement1Component,
   Imprimersuivireglement2Component,
   Imprimersuivireglement3Component,
   Imprimersuivireglement4Component,
   Imprimersuivireglement5Component,
   Suivireglement5Component,
   Imprimersuivireglement6Component,
   Saisiereglement5Component,
   ProfileComponent,
   DetailventeComponent,
   CaisseComponent,

   Imprimerrsc1Component,
   ListeretenuesourcecComponent,
   ModifierretenucComponent,
   RetenuesourcecComponent,
   BecommandefrsComponent,
   BlcommandecltComponent,
   BldeviscltComponent,
   BlproformacltComponent,
   FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   Ng2SearchPipeModule,
   OrderModule,
   ReactiveFormsModule,
  
  ],
  providers: [  PagerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
