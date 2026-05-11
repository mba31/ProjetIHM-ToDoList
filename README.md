# Focus Planner

Prototype d'application de planification personnelle et de gestion de projets en groupe.

L'application propose :
- une vue `Accueil` pour suivre les projets et les priorites du jour
- une vue `Tâches` avec liste personnelle, edition, sous-tâches et focus mode
- une vue `Gantt` pour visualiser la repartition du travail
- une vue `Calendrier` pour planifier et ajuster les tâches dans le temps
- une version `user-tests` pour des tests utilisateurs guides

## Structure

- `index.html` : entree principale de l'application
- `app.js` : logique de l'application, rendu des vues et gestion du state
- `styles.css` : styles partages
- `user-tests/` : version de test utilisateur avec scenarios guides

### Contenu de `user-tests/`

- `user-tests/index.html` : page de test dediee
- `user-tests/bootstrap.js` : charge le scenario et l'exemple actif puis lance l'application
- `user-tests/panel.js` : logique du panneau guide en bas de page
- `user-tests/panel.css` : styles du panneau de test
- `user-tests/scenarios/scenario1.json` : 20 exemples pour le scenario 1
- `user-tests/scenarios/scenario2.json` : 20 exemples pour le scenario 2
- `user-tests/scenarios-data.js` : version embarquee pour un chargement direct en local
- `user-tests/generate-scenarios.mjs` : script qui regenere les jeux de donnees

## Ouvrir le projet

Version principale :

- ouvrez `index.html`

Version test utilisateur :

- ouvrez `user-tests/index.html?scenario=scenario1`
- ou `user-tests/index.html?scenario=scenario2`
- utilisez `Exemple suivant` pour parcourir les cas d'un meme scenario

La version `user-tests` fonctionne aussi en ouverture directe locale, sans serveur, grace au chargement embarque des scenarios.

## Fonctionnalites principales

### Projets

- affichage des projets depuis l'accueil
- selection d'un projet actif
- creation d'un nouveau projet avec nom, description, echeance, icone et couleur

### Tâches

- creation d'une tâche avec description, date, heure, duree, buffer, categorie et membre assigne
- creation de categories personnalisees
- edition compacte des tâches
- generation automatique de sous-tâches
- reassignment a un autre membre
- affichage personnel selon le membre selectionne dans `Tu es`

### Calendrier et Gantt

- vue semaine et vue jour
- affichage des tâches par categorie
- redimensionnement d'une tâche dans le calendrier pour changer sa duree
- filtres par membre dans la vue Gantt

### Focus mode

- lancement depuis une tâche
- minuterie basee sur la duree de la tâche
- mode reduit et retour a l'accueil en fin de session

## Tests utilisateurs

Le dossier `user-tests/` contient une variante de l'application avec un guide en bas de page.

Chaque scenario contient 20 exemples :
- `scenario1` : creation de tâche puis verification dans le calendrier
- `scenario2` : travail de groupe, sous-tâches, preparation et focus mode

### Ce que permet le panneau de test

- passer d'un scenario a l'autre avec un bouton dedie
- passer a l'exemple suivant dans le scenario courant
- avancer ou reculer dans les etapes
- valider une etape puis retirer sa validation
- reinitialiser les donnees de l'exemple courant
- exporter le suivi en JSON
- prendre des notes rapides pendant le test

### Ouvrir un exemple precis

Vous pouvez aussi cibler directement un exemple via l'URL :

- `user-tests/index.html?scenario=scenario1&example=ut-s1-01-example`
- `user-tests/index.html?scenario=scenario2&example=ut-s2-01-example`

### Regenerer les scenarios

Si vous modifiez la logique des exemples, relancez :

```bash
node user-tests/generate-scenarios.mjs
```

Ce script regenere :

- `user-tests/scenarios/scenario1.json`
- `user-tests/scenarios/scenario2.json`
- `user-tests/scenarios-data.js`


## Donnees

L'application utilise `localStorage` pour conserver :
- les projets
- les tâches
- le membre courant
- l'etat du menu lateral
- la progression dans les tests utilisateurs

Pour repartir d'un etat propre, videz le `localStorage` du navigateur utilise.

## Notes

- la version principale et la version `user-tests` partagent la meme base `app.js` et `styles.css`
- certaines actions de test, comme la creation de tâche de preparation pour le scenario 2, sont reservees a `user-tests`
- l'etat du menu lateral est conserve lors du passage a un autre scenario ou a un autre exemple
