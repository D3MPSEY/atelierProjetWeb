# créer un nouveau projet 
un dossier API un dossier www

installer angular avec npm i -g @angular/cli

une fois que c'est fait 
dans www/

ng new -S -g --directory ./
new pour créer
-S enlever le trucs de test
-g skip git
--directory pour spécifier le chemin

oui au routing
scss


## À quoi serve toute les tite patente?!
### .=node_modules
les trucs de npms
les dépendance de Angular
### src 
THE CODE
- app
		- genre le code
- assets
		- les trucs utile mais pas du code genre images 
- index.html 
		- fichier de base genre de modèle
		- ici pour changer la langue ou pour changer le titre de la page
- style.scss
		- style pour tout les pages web
### les fichiers
 - angular.json
		- plein de config de angular
		- on va jopuer de temps en temps dedans  pour genre ajouter des fichiers css

 - karma 
		- trucs de test
		- spa une danceuse
 - package.json
		- gère les dépendance et des scripts npm (au lieu de faire npm ng serve on peut simplement faire npm start)

 - package-lock
		- version en cours d'etre utilisé pas vraiment besoin d'y toucher
 - tsconfig

## le app 
### component
component est un partit de page web pluggable n'importe ou
ts -> pour relier le tout
### app.module
section d'un site 
permet de juste loader les modules nécéssaire
### app-routing
spécifier les chemis


# Règle de prog en angular
chaque fichier fait une seul chose (juste un concept)
**max 400 ligne**
75 ligne maximum par fonction -> limite les bug et encourage la réutuilisation


NOMAGE
<fonctionnalité>.<type>.ts

voir les notes  sur #Moodle pour avoir toute les normes :D




# on code 
ng generate create login
ng g c login
ng g c auth/login

## start
npm start
quand on save ça execute tout seul magie
## ajouter des components
balise html <app-login></app-login>
et le truc est inclu

## routing mnodule
on importe des trucs en leur donnant des noms
pour ajouter des chemin dans le tableau de routes 
en 
## component.ts
constructor quand les truc est créer 
ngOnInit quand le truc est pret

## pour inclure un composant dans une page ou un autre composant on l'inclus 
avec <module-component>
ex : <app-count>

## paramèetre de création de component
on met in @Input devant la donnée membre dans la composantes

ensuite quand on ajoute la composantes ou rajoute un [nom]=valeur
ex : <app-count [count]=5>

# ajouter material
ng add @angular/material
yes
choisir la couleur (on peut voir avec les liens

changer l'apparence de les choses soit dans le providers du module pour  tout le site ou juste dans un en ajoutant un apparence 

# faire un form avec plein de materiel
on doit importer chaque module dans app module
ex import { MatInputModule } from '@angular/material/input

# pour pas avoir a init les variables
dans tsconfig.json 
"strictPropertyInitializatrion" : false,
