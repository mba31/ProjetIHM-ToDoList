import fs from 'node:fs/promises';
import path from 'node:path';

const root = new URL('.', import.meta.url);

const colors = ['#2563eb', '#8b5cf6', '#0f766e', '#dc2626', '#ea580c', '#0891b2'];
const members = ['Sarah', 'Thomas', 'Leo', 'Maya'];

const scenario1Descriptors = [
  ['Salon orientation', "Preparation logistique d'une journee portes ouvertes.", 'Appeler le traiteur', "Valider le menu pour l'equipe d'accueil.", 'Logistique'],
  ['Forum alternance', "Organisation des stands pour la semaine de l'alternance.", 'Confirmer la navette', 'Verifier le trajet des intervenants invites.', 'Transport'],
  ['Semaine bien-etre', "Coordination des ateliers bien-etre du campus.", 'Planifier le kine', 'Fixer le creneau du massage recovery.', 'Sante'],
  ['Journee alumni', "Preparation de la rencontre entre etudiants et anciens.", 'Appeler le photographe', 'Valider sa disponibilite pour la remise des prix.', 'Communication'],
  ['Hackathon IA', "Mise en place des espaces de travail du hackathon.", 'Commander les badges bonus', 'Ajouter les badges mentors de derniere minute.', 'Evenement'],
  ['Colloque design', "Preparation d'une journee de conference design.", 'Confirmer le vestiaire', "Verifier l'accueil des manteaux et sacs.", 'Accueil'],
  ['Expo projets', "Finalisation de l'exposition des projets etudiants.", 'Reserver des rallonges', "Prevoir l'alimentation supplementaire des stands.", 'Materiel'],
  ['Bootcamp web', "Suivi logistique d'un bootcamp intensif.", 'Appeler le support wifi', 'Verifier le renfort reseau pour les ateliers.', 'Infrastructure'],
  ['Portes ouvertes master', "Accueil des candidats en master recherche.", 'Commander des panneaux', 'Ajouter la signaletique pour les salles annexes.', 'Signaletique'],
  ['Challenge robotique', "Organisation des matchs de robotique.", 'Verifier les batteries', 'Prevoir une recharge avant la finale.', 'Technique'],
  ['Village associatif', "Installation des associations etudiantes.", 'Acheter les nappes', 'Prevoir des nappes pour les tables visiteurs.', 'Decoration'],
  ['Journee recrutement', "Coordination des entretiens entreprises et etudiants.", 'Appeler les hotes', "Verifier l'heure d'arrivee de l'equipe accueil.", 'RH'],
  ['Seminaire recherche', "Gestion d'un seminaire de laboratoire.", 'Confirmer le cafe', 'Valider la pause cafe du milieu de matinee.', 'Restauration'],
  ['Atelier portfolio', "Preparation d'une revue de portfolios.", 'Imprimer les fiches', "Preparer les fiches d'evaluation visiteurs.", 'Impression'],
  ['Nuit de la lecture', "Organisation d'une soiree lecture au campus.", 'Appeler la securite', "Prevenir l'equipe securite de la fermeture tardive.", 'Securite'],
  ['Forum international', "Coordination des stands partenariats internationaux.", 'Verifier les drapeaux', "Ajouter les supports pays manquants.", 'International'],
  ['Festival science', "Preparation des animations scientifiques.", 'Commander les kits', "Completer les kits pour l'atelier chimie.", 'Pedagogie'],
  ['Journee citoyenne', "Pilotage de la journee engagement et associations.", 'Contacter la mairie', 'Valider la presence du representant local.', 'Partenaires'],
  ['Demo startup', "Mise en place d'une demo publique de startups.", 'Confirmer le jury', 'Verifier la disponibilite du dernier juré.', 'Presentation'],
  ['Forum sante', "Coordination d'un salon sante et prevention.", 'Appeler l infirmiere', "Verifier sa venue pour l'atelier premiers secours.", 'Prevention']
];

const scenario2Descriptors = [
  ['Festival etudiant', "Coordination d'un stand et d'une presentation de fin de journee.", 'Preparer la presentation finale', 'Installer le materiel de demonstration'],
  ['Salon des projets', "Pilotage d'une vitrine de projets etudiants.", 'Structurer le pitch equipe', 'Installer le mur de posters'],
  ['Journee innovation', "Organisation des demos de fin de sprint.", 'Finaliser la trame de demo', 'Preparer la table interactive'],
  ['Forum emploi', "Coordination d'un espace de rencontres entreprises.", 'Preparer le brief exposants', 'Installer le point accueil'],
  ['Challenge durable', "Animation d'un challenge campus durable.", 'Preparer le message de cloture', 'Installer les bornes de vote'],
  ['Hackathon sante', "Pilotage d'une restitution de hackathon sante.", 'Finaliser la synthese jury', 'Installer la zone de pitch'],
  ['Expo design', "Coordination de la visite publique de l expo design.", 'Preparer le discours de vernissage', 'Installer les chevalets signaletiques'],
  ['Bootcamp data', "Suivi d'une restitution de bootcamp data.", 'Preparer la conclusion orale', 'Installer le poste de projection'],
  ['Colloque media', "Gestion du plateau media et des intervenants.", 'Preparer l intro de session', 'Installer les micros plateau'],
  ['Nuit du code', "Organisation de la soiree de restitution code.", 'Preparer la review finale', 'Installer les tables demo'],
  ['Forum mobilite', "Coordination d'une journee mobilite et transports.", 'Preparer la presentation logistique', 'Installer les panneaux parcours'],
  ['Village sport', "Gestion des activites sportives du village campus.", 'Preparer les consignes finales', 'Installer le stand chronometrage'],
  ['Journee climat', "Animation d'une journee climat et debats.", 'Preparer le mot de synthese', 'Installer les affiches parcours'],
  ['Semaine culture', "Pilotage des animations culturelles de la semaine.", 'Preparer la prise de parole finale', 'Installer la regie lumiere'],
  ['Demo XR', "Coordination d'une demonstration XR au public.", 'Preparer le script de demo', 'Installer les casques de test'],
  ['Rencontre alumni', "Gestion d'une rencontre alumni et etudiants.", 'Preparer le mot d accueil', 'Installer le coin photo'],
  ['Salon makers', "Mise en place d'un salon makers et prototypage.", 'Preparer la restitution makers', 'Installer les etablis atelier'],
  ['Journee citoyenne', "Coordination d'une restitution associative.", 'Preparer la conclusion du groupe', 'Installer les kakemonos hall'],
  ['Forum IA', "Organisation d'un espace d echanges autour de l IA.", 'Preparer la demo finale', 'Installer l ecran principal'],
  ['Parcours inclusion', "Pilotage d'une journee inclusion et sensibilisation.", 'Preparer le message final', 'Installer les supports d acces']
];

function pad(num) {
  return String(num).padStart(2, '0');
}

function isoDate(baseDay) {
  const day = 12 + baseDay;
  return `2026-05-${pad(day)}`;
}

function pick(list, index) {
  return list[index % list.length];
}

function buildScenario1Example(descriptor, index) {
  const [projectName, projectDesc, newTaskTitle, newTaskDesc, customCategory] = descriptor;
  const owner = pick(members, index);
  const date = isoDate(index);
  const startHour = 9 + (index % 5);
  const createHour = 13 + (index % 4);
  const createMinute = index % 2 === 0 ? '15' : '45';
  const startTime = `${pad(createHour)}:${createMinute}`;
  const durationMin = 25 + (index % 4) * 10;
  const resizedDuration = durationMin + 15;
  const projectId = `ut-s1-${pad(index + 1)}`;
  const baseId = `ut-s1e${pad(index + 1)}`;

  return {
    id: `${projectId}-example`,
    label: `Exemple ${pad(index + 1)} - ${newTaskTitle}`,
    title: `Exemple ${pad(index + 1)} - ${projectName}`,
    summary: `Creer la tache "${newTaskTitle}", l'afficher dans le calendrier du ${date}, puis passer sa duree a ${resizedDuration} min.`,
    seedState: {
      selectedProjectId: projectId,
      selectedDate: date,
      calendarZoom: 'day',
      currentMember: owner,
      layerVisibility: {
        etudes: true,
        travail: true,
        personnel: true,
        loisirs: true
      },
      projects: [
        {
          id: projectId,
          name: projectName,
          icon: index % 2 === 0 ? 'Folder' : 'Team',
          color: pick(colors, index),
          desc: projectDesc,
          deadline: isoDate(index + 8),
          tasks: [
            {
              id: `${baseId}-t1`,
              title: `Verifier le planning ${projectName.toLowerCase()}`,
              desc: `Faire un point rapide sur les priorites de ${projectName.toLowerCase()}.`,
              status: 'doing',
              completed: false,
              progress: 50,
              owner,
              start: date,
              durationDays: 1,
              category: 'travail',
              date,
              startTime: `${pad(startHour)}:00`,
              durationMin: 40,
              buffer: 10,
              dependencies: [],
              subtasks: [{ text: 'Mettre a jour la checklist', done: false }],
              delayRisk: false,
              expanded: false,
              editOpen: false
            },
            {
              id: `${baseId}-t2`,
              title: `Preparer les supports ${index + 1}`,
              desc: 'Rassembler les documents et affiches utiles.',
              status: 'pending',
              completed: false,
              progress: 20,
              owner,
              start: date,
              durationDays: 1,
              category: index % 3 === 0 ? 'etudes' : 'travail',
              date,
              startTime: `${pad(startHour + 2)}:15`,
              durationMin: 30,
              buffer: 5,
              dependencies: [],
              subtasks: [],
              delayRisk: false,
              expanded: false,
              editOpen: false
            },
            {
              id: `${baseId}-t3`,
              title: `Controle final zone ${pad(index + 1)}`,
              desc: 'Verifier les derniers details sur place.',
              status: 'pending',
              completed: false,
              progress: 10,
              owner,
              start: date,
              durationDays: 1,
              category: index % 4 === 0 ? 'personnel' : 'travail',
              date,
              startTime: `${pad(startHour + 5)}:00`,
              durationMin: 20,
              buffer: 5,
              dependencies: [],
              subtasks: [],
              delayRisk: false,
              expanded: false,
              editOpen: false
            }
          ]
        }
      ]
    },
    steps: [
      {
        title: 'Afficher la liste des taches',
        instructions: [
          'Ouvrez la vue Taches.',
          `Verifiez que la liste personnelle de ${owner} est bien affichee pour ${projectName}.`
        ],
        expected: `Les taches existantes de ${owner} apparaissent dans le projet ${projectName}.`
      },
      {
        title: 'Creer une nouvelle tache',
        instructions: [
          'Ajoutez une nouvelle tache avec les valeurs indiquees.',
          'Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue.'
        ],
        fields: [
          { label: 'Titre', value: newTaskTitle },
          { label: 'Description', value: newTaskDesc },
          { label: 'Date', value: date },
          { label: 'Heure', value: startTime },
          { label: 'Duree', value: `${durationMin} min` },
          { label: 'Categorie', value: customCategory }
        ],
        expected: `La tache "${newTaskTitle}" apparait dans la vue Taches de ${owner}.`
      },
      {
        title: 'Visualiser la tache dans le calendrier',
        instructions: [
          'Ouvrez la vue Calendrier.',
          `Passez en vue Jour si besoin et retrouvez la tache ${newTaskTitle}.`
        ],
        expected: `La tache est visible le ${date} a ${startTime}.`
      },
      {
        title: 'Modifier la duree dans le calendrier',
        instructions: [
          'Redimensionnez la tache dans le calendrier.',
          `Ajustez sa duree a ${resizedDuration} minutes.`
        ],
        expected: `La tache "${newTaskTitle}" indique maintenant ${resizedDuration} minutes.`
      }
    ]
  };
}

function buildScenario2Example(descriptor, index) {
  const [projectName, projectDesc, t1Title, t2Title] = descriptor;
  const owner = pick(members, index + 1);
  const otherA = pick(members, index + 2);
  const otherB = pick(members, index + 3);
  const date = isoDate(index);
  const t1Time = `${pad(9 + (index % 3))}:30`;
  const t2Time = `${pad(13 + (index % 4))}:00`;
  const projectId = `ut-s2-${pad(index + 1)}`;
  const baseId = `ut-s2e${pad(index + 1)}`;
  const focusMinutes = index % 3 === 0 ? 1 : 2;

  return {
    id: `${projectId}-example`,
    label: `Exemple ${pad(index + 1)} - ${projectName}`,
    title: `Exemple ${pad(index + 1)} - ${projectName}`,
    summary: `Depuis la vue personnelle de ${owner}, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de ${focusMinutes} min.`,
    seedState: {
      selectedProjectId: projectId,
      selectedDate: date,
      calendarZoom: 'day',
      currentMember: owner,
      layerVisibility: {
        etudes: true,
        travail: true,
        personnel: true,
        loisirs: true
      },
      projects: [
        {
          id: projectId,
          name: projectName,
          icon: 'Team',
          color: pick(colors, index + 2),
          desc: projectDesc,
          deadline: isoDate(index + 7),
          tasks: [
            {
              id: `${baseId}-t1`,
              title: t1Title,
              desc: 'Slides, message cle et repetition rapide.',
              status: 'pending',
              completed: false,
              progress: 10,
              owner,
              start: date,
              durationDays: 1,
              category: 'travail',
              date,
              startTime: t1Time,
              durationMin: focusMinutes,
              buffer: 0,
              dependencies: [],
              subtasks: [],
              delayRisk: false,
              expanded: false,
              editOpen: false
            },
            {
              id: `${baseId}-t2`,
              title: t2Title,
              desc: 'Verifier le materiel, la signaletique et la mise en place.',
              status: 'pending',
              completed: false,
              progress: 5,
              owner,
              start: date,
              durationDays: 1,
              category: 'travail',
              date,
              startTime: t2Time,
              durationMin: 35 + (index % 3) * 10,
              buffer: 10 + (index % 2) * 5,
              dependencies: [],
              subtasks: [],
              delayRisk: false,
              expanded: false,
              editOpen: false
            },
            {
              id: `${baseId}-t3`,
              title: `Verifier la coordination ${pad(index + 1)}`,
              desc: 'Point intermediaire sur le dispositif.',
              status: 'doing',
              completed: false,
              progress: 45,
              owner: otherA,
              start: date,
              durationDays: 1,
              category: 'etudes',
              date,
              startTime: `${pad(9 + (index % 4))}:00`,
              durationMin: 25,
              buffer: 5,
              dependencies: [],
              subtasks: [],
              delayRisk: false,
              expanded: false,
              editOpen: false
            },
            {
              id: `${baseId}-t4`,
              title: `Installer le poste accueil ${pad(index + 1)}`,
              desc: 'Mettre en place la zone visiteurs.',
              status: 'pending',
              completed: false,
              progress: 15,
              owner: otherB,
              start: date,
              durationDays: 1,
              category: 'travail',
              date,
              startTime: `${pad(11 + (index % 2))}:30`,
              durationMin: 30,
              buffer: 10,
              dependencies: [],
              subtasks: [],
              delayRisk: false,
              expanded: false,
              editOpen: false
            }
          ]
        }
      ]
    },
    steps: [
      {
        title: 'Afficher le taskboard du projet',
        instructions: [
          'Ouvrez la vue Taches du projet actif.',
          `Verifiez que vous etes bien dans la vue personnelle de ${owner}.`
        ],
        expected: `Le taskboard n'affiche que les taches de ${owner} dans ${projectName}.`
      },
      {
        title: 'Generer les sous-taches de t1',
        instructions: [
          `Reperez la tache ${t1Title}.`,
          "Utilisez l'action de generation automatique de sous-taches."
        ],
        expected: `Des sous-taches sont ajoutees a "${t1Title}".`
      },
      {
        title: 'Ajouter une preparation pour t2',
        instructions: [
          `Ouvrez la tache ${t2Title} en edition.`,
          'Utilisez le bouton Creer une tache de preparation.'
        ],
        expected: `Une nouvelle tache de preparation apparait pour "${t2Title}".`
      },
      {
        title: 'Lancer le focus mode sur t1',
        instructions: [
          `Revenez sur la tache ${t1Title}.`,
          'Lancez le focus mode.',
          `Observez le timer pendant environ ${focusMinutes} minute(s) jusqu'au retour a l'accueil.`
        ],
        expected: "Le timer progresse, la session se termine et l'accueil reapparait."
      }
    ]
  };
}

const scenarios = {
  scenario1: {
    id: 'scenario1',
    title: 'Scenario 1',
    summary: 'Creer une nouvelle tache, la retrouver dans le calendrier jour, puis ajuster sa duree.',
    examples: scenario1Descriptors.map(buildScenario1Example)
  },
  scenario2: {
    id: 'scenario2',
    title: 'Scenario 2',
    summary: "Travailler sur un projet de groupe, generer des sous-taches, ajouter une preparation et lancer un focus mode court.",
    examples: scenario2Descriptors.map(buildScenario2Example)
  }
};

await fs.writeFile(
  path.join(root.pathname, 'scenarios', 'scenario1.json'),
  `${JSON.stringify(scenarios.scenario1, null, 2)}\n`
);

await fs.writeFile(
  path.join(root.pathname, 'scenarios', 'scenario2.json'),
  `${JSON.stringify(scenarios.scenario2, null, 2)}\n`
);

await fs.writeFile(
  path.join(root.pathname, 'scenarios-data.js'),
  `window.__USER_TEST_SCENARIOS__ = ${JSON.stringify(scenarios, null, 2)};\n`
);

console.log('Generated scenario datasets:', {
  scenario1: scenarios.scenario1.examples.length,
  scenario2: scenarios.scenario2.examples.length
});
