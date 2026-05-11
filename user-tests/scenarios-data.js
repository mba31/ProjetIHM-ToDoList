window.__USER_TEST_SCENARIOS__ = {
  "scenario1": {
    "id": "scenario1",
    "title": "Scenario 1",
    "summary": "Creer une nouvelle tache, la retrouver dans le calendrier jour, puis ajuster sa duree.",
    "examples": [
      {
        "id": "ut-s1-01-example",
        "label": "Exemple 01 - Appeler le traiteur",
        "title": "Exemple 01 - Salon orientation",
        "summary": "Creer la tache \"Appeler le traiteur\", l'afficher dans le calendrier du 2026-05-12, puis passer sa duree a 40 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-01",
          "selectedDate": "2026-05-12",
          "calendarZoom": "day",
          "currentMember": "Sarah",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-01",
              "name": "Salon orientation",
              "icon": "Folder",
              "color": "#2563eb",
              "desc": "Preparation logistique d'une journee portes ouvertes.",
              "deadline": "2026-05-20",
              "tasks": [
                {
                  "id": "ut-s1e01-t1",
                  "title": "Verifier le planning salon orientation",
                  "desc": "Faire un point rapide sur les priorites de salon orientation.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Sarah",
                  "start": "2026-05-12",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-12",
                  "startTime": "09:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e01-t2",
                  "title": "Preparer les supports 1",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Sarah",
                  "start": "2026-05-12",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-12",
                  "startTime": "11:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e01-t3",
                  "title": "Controle final zone 01",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Sarah",
                  "start": "2026-05-12",
                  "durationDays": 1,
                  "category": "personnel",
                  "date": "2026-05-12",
                  "startTime": "14:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Sarah est bien affichee pour Salon orientation."
            ],
            "expected": "Les taches existantes de Sarah apparaissent dans le projet Salon orientation."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Appeler le traiteur"
              },
              {
                "label": "Description",
                "value": "Valider le menu pour l'equipe d'accueil."
              },
              {
                "label": "Date",
                "value": "2026-05-12"
              },
              {
                "label": "Heure",
                "value": "13:15"
              },
              {
                "label": "Duree",
                "value": "25 min"
              },
              {
                "label": "Categorie",
                "value": "Logistique"
              }
            ],
            "expected": "La tache \"Appeler le traiteur\" apparait dans la vue Taches de Sarah."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Appeler le traiteur."
            ],
            "expected": "La tache est visible le 2026-05-12 a 13:15."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 40 minutes."
            ],
            "expected": "La tache \"Appeler le traiteur\" indique maintenant 40 minutes."
          }
        ]
      },
      {
        "id": "ut-s1-02-example",
        "label": "Exemple 02 - Confirmer la navette",
        "title": "Exemple 02 - Forum alternance",
        "summary": "Creer la tache \"Confirmer la navette\", l'afficher dans le calendrier du 2026-05-13, puis passer sa duree a 50 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-02",
          "selectedDate": "2026-05-13",
          "calendarZoom": "day",
          "currentMember": "Thomas",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-02",
              "name": "Forum alternance",
              "icon": "Team",
              "color": "#8b5cf6",
              "desc": "Organisation des stands pour la semaine de l'alternance.",
              "deadline": "2026-05-21",
              "tasks": [
                {
                  "id": "ut-s1e02-t1",
                  "title": "Verifier le planning forum alternance",
                  "desc": "Faire un point rapide sur les priorites de forum alternance.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Thomas",
                  "start": "2026-05-13",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-13",
                  "startTime": "10:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e02-t2",
                  "title": "Preparer les supports 2",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Thomas",
                  "start": "2026-05-13",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-13",
                  "startTime": "12:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e02-t3",
                  "title": "Controle final zone 02",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Thomas",
                  "start": "2026-05-13",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-13",
                  "startTime": "15:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Thomas est bien affichee pour Forum alternance."
            ],
            "expected": "Les taches existantes de Thomas apparaissent dans le projet Forum alternance."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Confirmer la navette"
              },
              {
                "label": "Description",
                "value": "Verifier le trajet des intervenants invites."
              },
              {
                "label": "Date",
                "value": "2026-05-13"
              },
              {
                "label": "Heure",
                "value": "14:45"
              },
              {
                "label": "Duree",
                "value": "35 min"
              },
              {
                "label": "Categorie",
                "value": "Transport"
              }
            ],
            "expected": "La tache \"Confirmer la navette\" apparait dans la vue Taches de Thomas."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Confirmer la navette."
            ],
            "expected": "La tache est visible le 2026-05-13 a 14:45."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 50 minutes."
            ],
            "expected": "La tache \"Confirmer la navette\" indique maintenant 50 minutes."
          }
        ]
      },
      {
        "id": "ut-s1-03-example",
        "label": "Exemple 03 - Planifier le kine",
        "title": "Exemple 03 - Semaine bien-etre",
        "summary": "Creer la tache \"Planifier le kine\", l'afficher dans le calendrier du 2026-05-14, puis passer sa duree a 60 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-03",
          "selectedDate": "2026-05-14",
          "calendarZoom": "day",
          "currentMember": "Leo",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-03",
              "name": "Semaine bien-etre",
              "icon": "Folder",
              "color": "#0f766e",
              "desc": "Coordination des ateliers bien-etre du campus.",
              "deadline": "2026-05-22",
              "tasks": [
                {
                  "id": "ut-s1e03-t1",
                  "title": "Verifier le planning semaine bien-etre",
                  "desc": "Faire un point rapide sur les priorites de semaine bien-etre.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Leo",
                  "start": "2026-05-14",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-14",
                  "startTime": "11:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e03-t2",
                  "title": "Preparer les supports 3",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Leo",
                  "start": "2026-05-14",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-14",
                  "startTime": "13:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e03-t3",
                  "title": "Controle final zone 03",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Leo",
                  "start": "2026-05-14",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-14",
                  "startTime": "16:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Leo est bien affichee pour Semaine bien-etre."
            ],
            "expected": "Les taches existantes de Leo apparaissent dans le projet Semaine bien-etre."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Planifier le kine"
              },
              {
                "label": "Description",
                "value": "Fixer le creneau du massage recovery."
              },
              {
                "label": "Date",
                "value": "2026-05-14"
              },
              {
                "label": "Heure",
                "value": "15:15"
              },
              {
                "label": "Duree",
                "value": "45 min"
              },
              {
                "label": "Categorie",
                "value": "Sante"
              }
            ],
            "expected": "La tache \"Planifier le kine\" apparait dans la vue Taches de Leo."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Planifier le kine."
            ],
            "expected": "La tache est visible le 2026-05-14 a 15:15."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 60 minutes."
            ],
            "expected": "La tache \"Planifier le kine\" indique maintenant 60 minutes."
          }
        ]
      },
      {
        "id": "ut-s1-04-example",
        "label": "Exemple 04 - Appeler le photographe",
        "title": "Exemple 04 - Journee alumni",
        "summary": "Creer la tache \"Appeler le photographe\", l'afficher dans le calendrier du 2026-05-15, puis passer sa duree a 70 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-04",
          "selectedDate": "2026-05-15",
          "calendarZoom": "day",
          "currentMember": "Maya",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-04",
              "name": "Journee alumni",
              "icon": "Team",
              "color": "#dc2626",
              "desc": "Preparation de la rencontre entre etudiants et anciens.",
              "deadline": "2026-05-23",
              "tasks": [
                {
                  "id": "ut-s1e04-t1",
                  "title": "Verifier le planning journee alumni",
                  "desc": "Faire un point rapide sur les priorites de journee alumni.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Maya",
                  "start": "2026-05-15",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-15",
                  "startTime": "12:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e04-t2",
                  "title": "Preparer les supports 4",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Maya",
                  "start": "2026-05-15",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-15",
                  "startTime": "14:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e04-t3",
                  "title": "Controle final zone 04",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Maya",
                  "start": "2026-05-15",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-15",
                  "startTime": "17:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Maya est bien affichee pour Journee alumni."
            ],
            "expected": "Les taches existantes de Maya apparaissent dans le projet Journee alumni."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Appeler le photographe"
              },
              {
                "label": "Description",
                "value": "Valider sa disponibilite pour la remise des prix."
              },
              {
                "label": "Date",
                "value": "2026-05-15"
              },
              {
                "label": "Heure",
                "value": "16:45"
              },
              {
                "label": "Duree",
                "value": "55 min"
              },
              {
                "label": "Categorie",
                "value": "Communication"
              }
            ],
            "expected": "La tache \"Appeler le photographe\" apparait dans la vue Taches de Maya."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Appeler le photographe."
            ],
            "expected": "La tache est visible le 2026-05-15 a 16:45."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 70 minutes."
            ],
            "expected": "La tache \"Appeler le photographe\" indique maintenant 70 minutes."
          }
        ]
      },
      {
        "id": "ut-s1-05-example",
        "label": "Exemple 05 - Commander les badges bonus",
        "title": "Exemple 05 - Hackathon IA",
        "summary": "Creer la tache \"Commander les badges bonus\", l'afficher dans le calendrier du 2026-05-16, puis passer sa duree a 40 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-05",
          "selectedDate": "2026-05-16",
          "calendarZoom": "day",
          "currentMember": "Sarah",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-05",
              "name": "Hackathon IA",
              "icon": "Folder",
              "color": "#ea580c",
              "desc": "Mise en place des espaces de travail du hackathon.",
              "deadline": "2026-05-24",
              "tasks": [
                {
                  "id": "ut-s1e05-t1",
                  "title": "Verifier le planning hackathon ia",
                  "desc": "Faire un point rapide sur les priorites de hackathon ia.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Sarah",
                  "start": "2026-05-16",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-16",
                  "startTime": "13:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e05-t2",
                  "title": "Preparer les supports 5",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Sarah",
                  "start": "2026-05-16",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-16",
                  "startTime": "15:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e05-t3",
                  "title": "Controle final zone 05",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Sarah",
                  "start": "2026-05-16",
                  "durationDays": 1,
                  "category": "personnel",
                  "date": "2026-05-16",
                  "startTime": "18:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Sarah est bien affichee pour Hackathon IA."
            ],
            "expected": "Les taches existantes de Sarah apparaissent dans le projet Hackathon IA."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Commander les badges bonus"
              },
              {
                "label": "Description",
                "value": "Ajouter les badges mentors de derniere minute."
              },
              {
                "label": "Date",
                "value": "2026-05-16"
              },
              {
                "label": "Heure",
                "value": "13:15"
              },
              {
                "label": "Duree",
                "value": "25 min"
              },
              {
                "label": "Categorie",
                "value": "Evenement"
              }
            ],
            "expected": "La tache \"Commander les badges bonus\" apparait dans la vue Taches de Sarah."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Commander les badges bonus."
            ],
            "expected": "La tache est visible le 2026-05-16 a 13:15."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 40 minutes."
            ],
            "expected": "La tache \"Commander les badges bonus\" indique maintenant 40 minutes."
          }
        ]
      },
      {
        "id": "ut-s1-06-example",
        "label": "Exemple 06 - Confirmer le vestiaire",
        "title": "Exemple 06 - Colloque design",
        "summary": "Creer la tache \"Confirmer le vestiaire\", l'afficher dans le calendrier du 2026-05-17, puis passer sa duree a 50 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-06",
          "selectedDate": "2026-05-17",
          "calendarZoom": "day",
          "currentMember": "Thomas",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-06",
              "name": "Colloque design",
              "icon": "Team",
              "color": "#0891b2",
              "desc": "Preparation d'une journee de conference design.",
              "deadline": "2026-05-25",
              "tasks": [
                {
                  "id": "ut-s1e06-t1",
                  "title": "Verifier le planning colloque design",
                  "desc": "Faire un point rapide sur les priorites de colloque design.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Thomas",
                  "start": "2026-05-17",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-17",
                  "startTime": "09:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e06-t2",
                  "title": "Preparer les supports 6",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Thomas",
                  "start": "2026-05-17",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-17",
                  "startTime": "11:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e06-t3",
                  "title": "Controle final zone 06",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Thomas",
                  "start": "2026-05-17",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-17",
                  "startTime": "14:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Thomas est bien affichee pour Colloque design."
            ],
            "expected": "Les taches existantes de Thomas apparaissent dans le projet Colloque design."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Confirmer le vestiaire"
              },
              {
                "label": "Description",
                "value": "Verifier l'accueil des manteaux et sacs."
              },
              {
                "label": "Date",
                "value": "2026-05-17"
              },
              {
                "label": "Heure",
                "value": "14:45"
              },
              {
                "label": "Duree",
                "value": "35 min"
              },
              {
                "label": "Categorie",
                "value": "Accueil"
              }
            ],
            "expected": "La tache \"Confirmer le vestiaire\" apparait dans la vue Taches de Thomas."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Confirmer le vestiaire."
            ],
            "expected": "La tache est visible le 2026-05-17 a 14:45."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 50 minutes."
            ],
            "expected": "La tache \"Confirmer le vestiaire\" indique maintenant 50 minutes."
          }
        ]
      },
      {
        "id": "ut-s1-07-example",
        "label": "Exemple 07 - Reserver des rallonges",
        "title": "Exemple 07 - Expo projets",
        "summary": "Creer la tache \"Reserver des rallonges\", l'afficher dans le calendrier du 2026-05-18, puis passer sa duree a 60 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-07",
          "selectedDate": "2026-05-18",
          "calendarZoom": "day",
          "currentMember": "Leo",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-07",
              "name": "Expo projets",
              "icon": "Folder",
              "color": "#2563eb",
              "desc": "Finalisation de l'exposition des projets etudiants.",
              "deadline": "2026-05-26",
              "tasks": [
                {
                  "id": "ut-s1e07-t1",
                  "title": "Verifier le planning expo projets",
                  "desc": "Faire un point rapide sur les priorites de expo projets.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Leo",
                  "start": "2026-05-18",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-18",
                  "startTime": "10:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e07-t2",
                  "title": "Preparer les supports 7",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Leo",
                  "start": "2026-05-18",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-18",
                  "startTime": "12:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e07-t3",
                  "title": "Controle final zone 07",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Leo",
                  "start": "2026-05-18",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-18",
                  "startTime": "15:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Leo est bien affichee pour Expo projets."
            ],
            "expected": "Les taches existantes de Leo apparaissent dans le projet Expo projets."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Reserver des rallonges"
              },
              {
                "label": "Description",
                "value": "Prevoir l'alimentation supplementaire des stands."
              },
              {
                "label": "Date",
                "value": "2026-05-18"
              },
              {
                "label": "Heure",
                "value": "15:15"
              },
              {
                "label": "Duree",
                "value": "45 min"
              },
              {
                "label": "Categorie",
                "value": "Materiel"
              }
            ],
            "expected": "La tache \"Reserver des rallonges\" apparait dans la vue Taches de Leo."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Reserver des rallonges."
            ],
            "expected": "La tache est visible le 2026-05-18 a 15:15."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 60 minutes."
            ],
            "expected": "La tache \"Reserver des rallonges\" indique maintenant 60 minutes."
          }
        ]
      },
      {
        "id": "ut-s1-08-example",
        "label": "Exemple 08 - Appeler le support wifi",
        "title": "Exemple 08 - Bootcamp web",
        "summary": "Creer la tache \"Appeler le support wifi\", l'afficher dans le calendrier du 2026-05-19, puis passer sa duree a 70 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-08",
          "selectedDate": "2026-05-19",
          "calendarZoom": "day",
          "currentMember": "Maya",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-08",
              "name": "Bootcamp web",
              "icon": "Team",
              "color": "#8b5cf6",
              "desc": "Suivi logistique d'un bootcamp intensif.",
              "deadline": "2026-05-27",
              "tasks": [
                {
                  "id": "ut-s1e08-t1",
                  "title": "Verifier le planning bootcamp web",
                  "desc": "Faire un point rapide sur les priorites de bootcamp web.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Maya",
                  "start": "2026-05-19",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-19",
                  "startTime": "11:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e08-t2",
                  "title": "Preparer les supports 8",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Maya",
                  "start": "2026-05-19",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-19",
                  "startTime": "13:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e08-t3",
                  "title": "Controle final zone 08",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Maya",
                  "start": "2026-05-19",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-19",
                  "startTime": "16:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Maya est bien affichee pour Bootcamp web."
            ],
            "expected": "Les taches existantes de Maya apparaissent dans le projet Bootcamp web."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Appeler le support wifi"
              },
              {
                "label": "Description",
                "value": "Verifier le renfort reseau pour les ateliers."
              },
              {
                "label": "Date",
                "value": "2026-05-19"
              },
              {
                "label": "Heure",
                "value": "16:45"
              },
              {
                "label": "Duree",
                "value": "55 min"
              },
              {
                "label": "Categorie",
                "value": "Infrastructure"
              }
            ],
            "expected": "La tache \"Appeler le support wifi\" apparait dans la vue Taches de Maya."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Appeler le support wifi."
            ],
            "expected": "La tache est visible le 2026-05-19 a 16:45."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 70 minutes."
            ],
            "expected": "La tache \"Appeler le support wifi\" indique maintenant 70 minutes."
          }
        ]
      },
      {
        "id": "ut-s1-09-example",
        "label": "Exemple 09 - Commander des panneaux",
        "title": "Exemple 09 - Portes ouvertes master",
        "summary": "Creer la tache \"Commander des panneaux\", l'afficher dans le calendrier du 2026-05-20, puis passer sa duree a 40 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-09",
          "selectedDate": "2026-05-20",
          "calendarZoom": "day",
          "currentMember": "Sarah",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-09",
              "name": "Portes ouvertes master",
              "icon": "Folder",
              "color": "#0f766e",
              "desc": "Accueil des candidats en master recherche.",
              "deadline": "2026-05-28",
              "tasks": [
                {
                  "id": "ut-s1e09-t1",
                  "title": "Verifier le planning portes ouvertes master",
                  "desc": "Faire un point rapide sur les priorites de portes ouvertes master.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Sarah",
                  "start": "2026-05-20",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-20",
                  "startTime": "12:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e09-t2",
                  "title": "Preparer les supports 9",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Sarah",
                  "start": "2026-05-20",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-20",
                  "startTime": "14:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e09-t3",
                  "title": "Controle final zone 09",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Sarah",
                  "start": "2026-05-20",
                  "durationDays": 1,
                  "category": "personnel",
                  "date": "2026-05-20",
                  "startTime": "17:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Sarah est bien affichee pour Portes ouvertes master."
            ],
            "expected": "Les taches existantes de Sarah apparaissent dans le projet Portes ouvertes master."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Commander des panneaux"
              },
              {
                "label": "Description",
                "value": "Ajouter la signaletique pour les salles annexes."
              },
              {
                "label": "Date",
                "value": "2026-05-20"
              },
              {
                "label": "Heure",
                "value": "13:15"
              },
              {
                "label": "Duree",
                "value": "25 min"
              },
              {
                "label": "Categorie",
                "value": "Signaletique"
              }
            ],
            "expected": "La tache \"Commander des panneaux\" apparait dans la vue Taches de Sarah."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Commander des panneaux."
            ],
            "expected": "La tache est visible le 2026-05-20 a 13:15."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 40 minutes."
            ],
            "expected": "La tache \"Commander des panneaux\" indique maintenant 40 minutes."
          }
        ]
      },
      {
        "id": "ut-s1-10-example",
        "label": "Exemple 10 - Verifier les batteries",
        "title": "Exemple 10 - Challenge robotique",
        "summary": "Creer la tache \"Verifier les batteries\", l'afficher dans le calendrier du 2026-05-21, puis passer sa duree a 50 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-10",
          "selectedDate": "2026-05-21",
          "calendarZoom": "day",
          "currentMember": "Thomas",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-10",
              "name": "Challenge robotique",
              "icon": "Team",
              "color": "#dc2626",
              "desc": "Organisation des matchs de robotique.",
              "deadline": "2026-05-29",
              "tasks": [
                {
                  "id": "ut-s1e10-t1",
                  "title": "Verifier le planning challenge robotique",
                  "desc": "Faire un point rapide sur les priorites de challenge robotique.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Thomas",
                  "start": "2026-05-21",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-21",
                  "startTime": "13:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e10-t2",
                  "title": "Preparer les supports 10",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Thomas",
                  "start": "2026-05-21",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-21",
                  "startTime": "15:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e10-t3",
                  "title": "Controle final zone 10",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Thomas",
                  "start": "2026-05-21",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-21",
                  "startTime": "18:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Thomas est bien affichee pour Challenge robotique."
            ],
            "expected": "Les taches existantes de Thomas apparaissent dans le projet Challenge robotique."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Verifier les batteries"
              },
              {
                "label": "Description",
                "value": "Prevoir une recharge avant la finale."
              },
              {
                "label": "Date",
                "value": "2026-05-21"
              },
              {
                "label": "Heure",
                "value": "14:45"
              },
              {
                "label": "Duree",
                "value": "35 min"
              },
              {
                "label": "Categorie",
                "value": "Technique"
              }
            ],
            "expected": "La tache \"Verifier les batteries\" apparait dans la vue Taches de Thomas."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Verifier les batteries."
            ],
            "expected": "La tache est visible le 2026-05-21 a 14:45."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 50 minutes."
            ],
            "expected": "La tache \"Verifier les batteries\" indique maintenant 50 minutes."
          }
        ]
      },
      {
        "id": "ut-s1-11-example",
        "label": "Exemple 11 - Acheter les nappes",
        "title": "Exemple 11 - Village associatif",
        "summary": "Creer la tache \"Acheter les nappes\", l'afficher dans le calendrier du 2026-05-22, puis passer sa duree a 60 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-11",
          "selectedDate": "2026-05-22",
          "calendarZoom": "day",
          "currentMember": "Leo",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-11",
              "name": "Village associatif",
              "icon": "Folder",
              "color": "#ea580c",
              "desc": "Installation des associations etudiantes.",
              "deadline": "2026-05-30",
              "tasks": [
                {
                  "id": "ut-s1e11-t1",
                  "title": "Verifier le planning village associatif",
                  "desc": "Faire un point rapide sur les priorites de village associatif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Leo",
                  "start": "2026-05-22",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-22",
                  "startTime": "09:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e11-t2",
                  "title": "Preparer les supports 11",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Leo",
                  "start": "2026-05-22",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-22",
                  "startTime": "11:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e11-t3",
                  "title": "Controle final zone 11",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Leo",
                  "start": "2026-05-22",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-22",
                  "startTime": "14:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Leo est bien affichee pour Village associatif."
            ],
            "expected": "Les taches existantes de Leo apparaissent dans le projet Village associatif."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Acheter les nappes"
              },
              {
                "label": "Description",
                "value": "Prevoir des nappes pour les tables visiteurs."
              },
              {
                "label": "Date",
                "value": "2026-05-22"
              },
              {
                "label": "Heure",
                "value": "15:15"
              },
              {
                "label": "Duree",
                "value": "45 min"
              },
              {
                "label": "Categorie",
                "value": "Decoration"
              }
            ],
            "expected": "La tache \"Acheter les nappes\" apparait dans la vue Taches de Leo."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Acheter les nappes."
            ],
            "expected": "La tache est visible le 2026-05-22 a 15:15."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 60 minutes."
            ],
            "expected": "La tache \"Acheter les nappes\" indique maintenant 60 minutes."
          }
        ]
      },
      {
        "id": "ut-s1-12-example",
        "label": "Exemple 12 - Appeler les hotes",
        "title": "Exemple 12 - Journee recrutement",
        "summary": "Creer la tache \"Appeler les hotes\", l'afficher dans le calendrier du 2026-05-23, puis passer sa duree a 70 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-12",
          "selectedDate": "2026-05-23",
          "calendarZoom": "day",
          "currentMember": "Maya",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-12",
              "name": "Journee recrutement",
              "icon": "Team",
              "color": "#0891b2",
              "desc": "Coordination des entretiens entreprises et etudiants.",
              "deadline": "2026-05-31",
              "tasks": [
                {
                  "id": "ut-s1e12-t1",
                  "title": "Verifier le planning journee recrutement",
                  "desc": "Faire un point rapide sur les priorites de journee recrutement.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Maya",
                  "start": "2026-05-23",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-23",
                  "startTime": "10:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e12-t2",
                  "title": "Preparer les supports 12",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Maya",
                  "start": "2026-05-23",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-23",
                  "startTime": "12:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e12-t3",
                  "title": "Controle final zone 12",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Maya",
                  "start": "2026-05-23",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-23",
                  "startTime": "15:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Maya est bien affichee pour Journee recrutement."
            ],
            "expected": "Les taches existantes de Maya apparaissent dans le projet Journee recrutement."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Appeler les hotes"
              },
              {
                "label": "Description",
                "value": "Verifier l'heure d'arrivee de l'equipe accueil."
              },
              {
                "label": "Date",
                "value": "2026-05-23"
              },
              {
                "label": "Heure",
                "value": "16:45"
              },
              {
                "label": "Duree",
                "value": "55 min"
              },
              {
                "label": "Categorie",
                "value": "RH"
              }
            ],
            "expected": "La tache \"Appeler les hotes\" apparait dans la vue Taches de Maya."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Appeler les hotes."
            ],
            "expected": "La tache est visible le 2026-05-23 a 16:45."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 70 minutes."
            ],
            "expected": "La tache \"Appeler les hotes\" indique maintenant 70 minutes."
          }
        ]
      },
      {
        "id": "ut-s1-13-example",
        "label": "Exemple 13 - Confirmer le cafe",
        "title": "Exemple 13 - Seminaire recherche",
        "summary": "Creer la tache \"Confirmer le cafe\", l'afficher dans le calendrier du 2026-05-24, puis passer sa duree a 40 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-13",
          "selectedDate": "2026-05-24",
          "calendarZoom": "day",
          "currentMember": "Sarah",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-13",
              "name": "Seminaire recherche",
              "icon": "Folder",
              "color": "#2563eb",
              "desc": "Gestion d'un seminaire de laboratoire.",
              "deadline": "2026-05-32",
              "tasks": [
                {
                  "id": "ut-s1e13-t1",
                  "title": "Verifier le planning seminaire recherche",
                  "desc": "Faire un point rapide sur les priorites de seminaire recherche.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Sarah",
                  "start": "2026-05-24",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-24",
                  "startTime": "11:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e13-t2",
                  "title": "Preparer les supports 13",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Sarah",
                  "start": "2026-05-24",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-24",
                  "startTime": "13:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e13-t3",
                  "title": "Controle final zone 13",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Sarah",
                  "start": "2026-05-24",
                  "durationDays": 1,
                  "category": "personnel",
                  "date": "2026-05-24",
                  "startTime": "16:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Sarah est bien affichee pour Seminaire recherche."
            ],
            "expected": "Les taches existantes de Sarah apparaissent dans le projet Seminaire recherche."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Confirmer le cafe"
              },
              {
                "label": "Description",
                "value": "Valider la pause cafe du milieu de matinee."
              },
              {
                "label": "Date",
                "value": "2026-05-24"
              },
              {
                "label": "Heure",
                "value": "13:15"
              },
              {
                "label": "Duree",
                "value": "25 min"
              },
              {
                "label": "Categorie",
                "value": "Restauration"
              }
            ],
            "expected": "La tache \"Confirmer le cafe\" apparait dans la vue Taches de Sarah."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Confirmer le cafe."
            ],
            "expected": "La tache est visible le 2026-05-24 a 13:15."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 40 minutes."
            ],
            "expected": "La tache \"Confirmer le cafe\" indique maintenant 40 minutes."
          }
        ]
      },
      {
        "id": "ut-s1-14-example",
        "label": "Exemple 14 - Imprimer les fiches",
        "title": "Exemple 14 - Atelier portfolio",
        "summary": "Creer la tache \"Imprimer les fiches\", l'afficher dans le calendrier du 2026-05-25, puis passer sa duree a 50 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-14",
          "selectedDate": "2026-05-25",
          "calendarZoom": "day",
          "currentMember": "Thomas",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-14",
              "name": "Atelier portfolio",
              "icon": "Team",
              "color": "#8b5cf6",
              "desc": "Preparation d'une revue de portfolios.",
              "deadline": "2026-05-33",
              "tasks": [
                {
                  "id": "ut-s1e14-t1",
                  "title": "Verifier le planning atelier portfolio",
                  "desc": "Faire un point rapide sur les priorites de atelier portfolio.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Thomas",
                  "start": "2026-05-25",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-25",
                  "startTime": "12:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e14-t2",
                  "title": "Preparer les supports 14",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Thomas",
                  "start": "2026-05-25",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-25",
                  "startTime": "14:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e14-t3",
                  "title": "Controle final zone 14",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Thomas",
                  "start": "2026-05-25",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-25",
                  "startTime": "17:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Thomas est bien affichee pour Atelier portfolio."
            ],
            "expected": "Les taches existantes de Thomas apparaissent dans le projet Atelier portfolio."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Imprimer les fiches"
              },
              {
                "label": "Description",
                "value": "Preparer les fiches d'evaluation visiteurs."
              },
              {
                "label": "Date",
                "value": "2026-05-25"
              },
              {
                "label": "Heure",
                "value": "14:45"
              },
              {
                "label": "Duree",
                "value": "35 min"
              },
              {
                "label": "Categorie",
                "value": "Impression"
              }
            ],
            "expected": "La tache \"Imprimer les fiches\" apparait dans la vue Taches de Thomas."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Imprimer les fiches."
            ],
            "expected": "La tache est visible le 2026-05-25 a 14:45."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 50 minutes."
            ],
            "expected": "La tache \"Imprimer les fiches\" indique maintenant 50 minutes."
          }
        ]
      },
      {
        "id": "ut-s1-15-example",
        "label": "Exemple 15 - Appeler la securite",
        "title": "Exemple 15 - Nuit de la lecture",
        "summary": "Creer la tache \"Appeler la securite\", l'afficher dans le calendrier du 2026-05-26, puis passer sa duree a 60 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-15",
          "selectedDate": "2026-05-26",
          "calendarZoom": "day",
          "currentMember": "Leo",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-15",
              "name": "Nuit de la lecture",
              "icon": "Folder",
              "color": "#0f766e",
              "desc": "Organisation d'une soiree lecture au campus.",
              "deadline": "2026-05-34",
              "tasks": [
                {
                  "id": "ut-s1e15-t1",
                  "title": "Verifier le planning nuit de la lecture",
                  "desc": "Faire un point rapide sur les priorites de nuit de la lecture.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Leo",
                  "start": "2026-05-26",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-26",
                  "startTime": "13:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e15-t2",
                  "title": "Preparer les supports 15",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Leo",
                  "start": "2026-05-26",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-26",
                  "startTime": "15:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e15-t3",
                  "title": "Controle final zone 15",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Leo",
                  "start": "2026-05-26",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-26",
                  "startTime": "18:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Leo est bien affichee pour Nuit de la lecture."
            ],
            "expected": "Les taches existantes de Leo apparaissent dans le projet Nuit de la lecture."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Appeler la securite"
              },
              {
                "label": "Description",
                "value": "Prevenir l'equipe securite de la fermeture tardive."
              },
              {
                "label": "Date",
                "value": "2026-05-26"
              },
              {
                "label": "Heure",
                "value": "15:15"
              },
              {
                "label": "Duree",
                "value": "45 min"
              },
              {
                "label": "Categorie",
                "value": "Securite"
              }
            ],
            "expected": "La tache \"Appeler la securite\" apparait dans la vue Taches de Leo."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Appeler la securite."
            ],
            "expected": "La tache est visible le 2026-05-26 a 15:15."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 60 minutes."
            ],
            "expected": "La tache \"Appeler la securite\" indique maintenant 60 minutes."
          }
        ]
      },
      {
        "id": "ut-s1-16-example",
        "label": "Exemple 16 - Verifier les drapeaux",
        "title": "Exemple 16 - Forum international",
        "summary": "Creer la tache \"Verifier les drapeaux\", l'afficher dans le calendrier du 2026-05-27, puis passer sa duree a 70 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-16",
          "selectedDate": "2026-05-27",
          "calendarZoom": "day",
          "currentMember": "Maya",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-16",
              "name": "Forum international",
              "icon": "Team",
              "color": "#dc2626",
              "desc": "Coordination des stands partenariats internationaux.",
              "deadline": "2026-05-35",
              "tasks": [
                {
                  "id": "ut-s1e16-t1",
                  "title": "Verifier le planning forum international",
                  "desc": "Faire un point rapide sur les priorites de forum international.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Maya",
                  "start": "2026-05-27",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-27",
                  "startTime": "09:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e16-t2",
                  "title": "Preparer les supports 16",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Maya",
                  "start": "2026-05-27",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-27",
                  "startTime": "11:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e16-t3",
                  "title": "Controle final zone 16",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Maya",
                  "start": "2026-05-27",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-27",
                  "startTime": "14:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Maya est bien affichee pour Forum international."
            ],
            "expected": "Les taches existantes de Maya apparaissent dans le projet Forum international."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Verifier les drapeaux"
              },
              {
                "label": "Description",
                "value": "Ajouter les supports pays manquants."
              },
              {
                "label": "Date",
                "value": "2026-05-27"
              },
              {
                "label": "Heure",
                "value": "16:45"
              },
              {
                "label": "Duree",
                "value": "55 min"
              },
              {
                "label": "Categorie",
                "value": "International"
              }
            ],
            "expected": "La tache \"Verifier les drapeaux\" apparait dans la vue Taches de Maya."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Verifier les drapeaux."
            ],
            "expected": "La tache est visible le 2026-05-27 a 16:45."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 70 minutes."
            ],
            "expected": "La tache \"Verifier les drapeaux\" indique maintenant 70 minutes."
          }
        ]
      },
      {
        "id": "ut-s1-17-example",
        "label": "Exemple 17 - Commander les kits",
        "title": "Exemple 17 - Festival science",
        "summary": "Creer la tache \"Commander les kits\", l'afficher dans le calendrier du 2026-05-28, puis passer sa duree a 40 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-17",
          "selectedDate": "2026-05-28",
          "calendarZoom": "day",
          "currentMember": "Sarah",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-17",
              "name": "Festival science",
              "icon": "Folder",
              "color": "#ea580c",
              "desc": "Preparation des animations scientifiques.",
              "deadline": "2026-05-36",
              "tasks": [
                {
                  "id": "ut-s1e17-t1",
                  "title": "Verifier le planning festival science",
                  "desc": "Faire un point rapide sur les priorites de festival science.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Sarah",
                  "start": "2026-05-28",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-28",
                  "startTime": "10:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e17-t2",
                  "title": "Preparer les supports 17",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Sarah",
                  "start": "2026-05-28",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-28",
                  "startTime": "12:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e17-t3",
                  "title": "Controle final zone 17",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Sarah",
                  "start": "2026-05-28",
                  "durationDays": 1,
                  "category": "personnel",
                  "date": "2026-05-28",
                  "startTime": "15:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Sarah est bien affichee pour Festival science."
            ],
            "expected": "Les taches existantes de Sarah apparaissent dans le projet Festival science."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Commander les kits"
              },
              {
                "label": "Description",
                "value": "Completer les kits pour l'atelier chimie."
              },
              {
                "label": "Date",
                "value": "2026-05-28"
              },
              {
                "label": "Heure",
                "value": "13:15"
              },
              {
                "label": "Duree",
                "value": "25 min"
              },
              {
                "label": "Categorie",
                "value": "Pedagogie"
              }
            ],
            "expected": "La tache \"Commander les kits\" apparait dans la vue Taches de Sarah."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Commander les kits."
            ],
            "expected": "La tache est visible le 2026-05-28 a 13:15."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 40 minutes."
            ],
            "expected": "La tache \"Commander les kits\" indique maintenant 40 minutes."
          }
        ]
      },
      {
        "id": "ut-s1-18-example",
        "label": "Exemple 18 - Contacter la mairie",
        "title": "Exemple 18 - Journee citoyenne",
        "summary": "Creer la tache \"Contacter la mairie\", l'afficher dans le calendrier du 2026-05-29, puis passer sa duree a 50 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-18",
          "selectedDate": "2026-05-29",
          "calendarZoom": "day",
          "currentMember": "Thomas",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-18",
              "name": "Journee citoyenne",
              "icon": "Team",
              "color": "#0891b2",
              "desc": "Pilotage de la journee engagement et associations.",
              "deadline": "2026-05-37",
              "tasks": [
                {
                  "id": "ut-s1e18-t1",
                  "title": "Verifier le planning journee citoyenne",
                  "desc": "Faire un point rapide sur les priorites de journee citoyenne.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Thomas",
                  "start": "2026-05-29",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-29",
                  "startTime": "11:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e18-t2",
                  "title": "Preparer les supports 18",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Thomas",
                  "start": "2026-05-29",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-29",
                  "startTime": "13:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e18-t3",
                  "title": "Controle final zone 18",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Thomas",
                  "start": "2026-05-29",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-29",
                  "startTime": "16:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Thomas est bien affichee pour Journee citoyenne."
            ],
            "expected": "Les taches existantes de Thomas apparaissent dans le projet Journee citoyenne."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Contacter la mairie"
              },
              {
                "label": "Description",
                "value": "Valider la presence du representant local."
              },
              {
                "label": "Date",
                "value": "2026-05-29"
              },
              {
                "label": "Heure",
                "value": "14:45"
              },
              {
                "label": "Duree",
                "value": "35 min"
              },
              {
                "label": "Categorie",
                "value": "Partenaires"
              }
            ],
            "expected": "La tache \"Contacter la mairie\" apparait dans la vue Taches de Thomas."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Contacter la mairie."
            ],
            "expected": "La tache est visible le 2026-05-29 a 14:45."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 50 minutes."
            ],
            "expected": "La tache \"Contacter la mairie\" indique maintenant 50 minutes."
          }
        ]
      },
      {
        "id": "ut-s1-19-example",
        "label": "Exemple 19 - Confirmer le jury",
        "title": "Exemple 19 - Demo startup",
        "summary": "Creer la tache \"Confirmer le jury\", l'afficher dans le calendrier du 2026-05-30, puis passer sa duree a 60 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-19",
          "selectedDate": "2026-05-30",
          "calendarZoom": "day",
          "currentMember": "Leo",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-19",
              "name": "Demo startup",
              "icon": "Folder",
              "color": "#2563eb",
              "desc": "Mise en place d'une demo publique de startups.",
              "deadline": "2026-05-38",
              "tasks": [
                {
                  "id": "ut-s1e19-t1",
                  "title": "Verifier le planning demo startup",
                  "desc": "Faire un point rapide sur les priorites de demo startup.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Leo",
                  "start": "2026-05-30",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-30",
                  "startTime": "12:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e19-t2",
                  "title": "Preparer les supports 19",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Leo",
                  "start": "2026-05-30",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-30",
                  "startTime": "14:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e19-t3",
                  "title": "Controle final zone 19",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Leo",
                  "start": "2026-05-30",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-30",
                  "startTime": "17:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Leo est bien affichee pour Demo startup."
            ],
            "expected": "Les taches existantes de Leo apparaissent dans le projet Demo startup."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Confirmer le jury"
              },
              {
                "label": "Description",
                "value": "Verifier la disponibilite du dernier juré."
              },
              {
                "label": "Date",
                "value": "2026-05-30"
              },
              {
                "label": "Heure",
                "value": "15:15"
              },
              {
                "label": "Duree",
                "value": "45 min"
              },
              {
                "label": "Categorie",
                "value": "Presentation"
              }
            ],
            "expected": "La tache \"Confirmer le jury\" apparait dans la vue Taches de Leo."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Confirmer le jury."
            ],
            "expected": "La tache est visible le 2026-05-30 a 15:15."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 60 minutes."
            ],
            "expected": "La tache \"Confirmer le jury\" indique maintenant 60 minutes."
          }
        ]
      },
      {
        "id": "ut-s1-20-example",
        "label": "Exemple 20 - Appeler l infirmiere",
        "title": "Exemple 20 - Forum sante",
        "summary": "Creer la tache \"Appeler l infirmiere\", l'afficher dans le calendrier du 2026-05-31, puis passer sa duree a 70 min.",
        "seedState": {
          "selectedProjectId": "ut-s1-20",
          "selectedDate": "2026-05-31",
          "calendarZoom": "day",
          "currentMember": "Maya",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s1-20",
              "name": "Forum sante",
              "icon": "Team",
              "color": "#8b5cf6",
              "desc": "Coordination d'un salon sante et prevention.",
              "deadline": "2026-05-39",
              "tasks": [
                {
                  "id": "ut-s1e20-t1",
                  "title": "Verifier le planning forum sante",
                  "desc": "Faire un point rapide sur les priorites de forum sante.",
                  "status": "doing",
                  "completed": false,
                  "progress": 50,
                  "owner": "Maya",
                  "start": "2026-05-31",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-31",
                  "startTime": "13:00",
                  "durationMin": 40,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [
                    {
                      "text": "Mettre a jour la checklist",
                      "done": false
                    }
                  ],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e20-t2",
                  "title": "Preparer les supports 20",
                  "desc": "Rassembler les documents et affiches utiles.",
                  "status": "pending",
                  "completed": false,
                  "progress": 20,
                  "owner": "Maya",
                  "start": "2026-05-31",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-31",
                  "startTime": "15:15",
                  "durationMin": 30,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s1e20-t3",
                  "title": "Controle final zone 20",
                  "desc": "Verifier les derniers details sur place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Maya",
                  "start": "2026-05-31",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-31",
                  "startTime": "18:00",
                  "durationMin": 20,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher la liste des taches",
            "instructions": [
              "Ouvrez la vue Taches.",
              "Verifiez que la liste personnelle de Maya est bien affichee pour Forum sante."
            ],
            "expected": "Les taches existantes de Maya apparaissent dans le projet Forum sante."
          },
          {
            "title": "Creer une nouvelle tache",
            "instructions": [
              "Ajoutez une nouvelle tache avec les valeurs indiquees.",
              "Pour la categorie, choisissez Nouvelle categorie puis saisissez la valeur attendue."
            ],
            "fields": [
              {
                "label": "Titre",
                "value": "Appeler l infirmiere"
              },
              {
                "label": "Description",
                "value": "Verifier sa venue pour l'atelier premiers secours."
              },
              {
                "label": "Date",
                "value": "2026-05-31"
              },
              {
                "label": "Heure",
                "value": "16:45"
              },
              {
                "label": "Duree",
                "value": "55 min"
              },
              {
                "label": "Categorie",
                "value": "Prevention"
              }
            ],
            "expected": "La tache \"Appeler l infirmiere\" apparait dans la vue Taches de Maya."
          },
          {
            "title": "Visualiser la tache dans le calendrier",
            "instructions": [
              "Ouvrez la vue Calendrier.",
              "Passez en vue Jour si besoin et retrouvez la tache Appeler l infirmiere."
            ],
            "expected": "La tache est visible le 2026-05-31 a 16:45."
          },
          {
            "title": "Modifier la duree dans le calendrier",
            "instructions": [
              "Redimensionnez la tache dans le calendrier.",
              "Ajustez sa duree a 70 minutes."
            ],
            "expected": "La tache \"Appeler l infirmiere\" indique maintenant 70 minutes."
          }
        ]
      }
    ]
  },
  "scenario2": {
    "id": "scenario2",
    "title": "Scenario 2",
    "summary": "Travailler sur un projet de groupe, generer des sous-taches, ajouter une preparation et lancer un focus mode court.",
    "examples": [
      {
        "id": "ut-s2-01-example",
        "label": "Exemple 01 - Festival etudiant",
        "title": "Exemple 01 - Festival etudiant",
        "summary": "Depuis la vue personnelle de Thomas, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 1 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-01",
          "selectedDate": "2026-05-12",
          "calendarZoom": "day",
          "currentMember": "Thomas",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-01",
              "name": "Festival etudiant",
              "icon": "Team",
              "color": "#0f766e",
              "desc": "Coordination d'un stand et d'une presentation de fin de journee.",
              "deadline": "2026-05-19",
              "tasks": [
                {
                  "id": "ut-s2e01-t1",
                  "title": "Preparer la presentation finale",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Thomas",
                  "start": "2026-05-12",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-12",
                  "startTime": "09:30",
                  "durationMin": 1,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e01-t2",
                  "title": "Installer le materiel de demonstration",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Thomas",
                  "start": "2026-05-12",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-12",
                  "startTime": "13:00",
                  "durationMin": 35,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e01-t3",
                  "title": "Verifier la coordination 01",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Leo",
                  "start": "2026-05-12",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-12",
                  "startTime": "09:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e01-t4",
                  "title": "Installer le poste accueil 01",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Maya",
                  "start": "2026-05-12",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-12",
                  "startTime": "11:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Thomas."
            ],
            "expected": "Le taskboard n'affiche que les taches de Thomas dans Festival etudiant."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Preparer la presentation finale.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Preparer la presentation finale\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Installer le materiel de demonstration en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Installer le materiel de demonstration\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Preparer la presentation finale.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 1 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      },
      {
        "id": "ut-s2-02-example",
        "label": "Exemple 02 - Salon des projets",
        "title": "Exemple 02 - Salon des projets",
        "summary": "Depuis la vue personnelle de Leo, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 2 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-02",
          "selectedDate": "2026-05-13",
          "calendarZoom": "day",
          "currentMember": "Leo",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-02",
              "name": "Salon des projets",
              "icon": "Team",
              "color": "#dc2626",
              "desc": "Pilotage d'une vitrine de projets etudiants.",
              "deadline": "2026-05-20",
              "tasks": [
                {
                  "id": "ut-s2e02-t1",
                  "title": "Structurer le pitch equipe",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Leo",
                  "start": "2026-05-13",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-13",
                  "startTime": "10:30",
                  "durationMin": 2,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e02-t2",
                  "title": "Installer le mur de posters",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Leo",
                  "start": "2026-05-13",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-13",
                  "startTime": "14:00",
                  "durationMin": 45,
                  "buffer": 15,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e02-t3",
                  "title": "Verifier la coordination 02",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Maya",
                  "start": "2026-05-13",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-13",
                  "startTime": "10:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e02-t4",
                  "title": "Installer le poste accueil 02",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Sarah",
                  "start": "2026-05-13",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-13",
                  "startTime": "12:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Leo."
            ],
            "expected": "Le taskboard n'affiche que les taches de Leo dans Salon des projets."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Structurer le pitch equipe.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Structurer le pitch equipe\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Installer le mur de posters en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Installer le mur de posters\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Structurer le pitch equipe.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 2 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      },
      {
        "id": "ut-s2-03-example",
        "label": "Exemple 03 - Journee innovation",
        "title": "Exemple 03 - Journee innovation",
        "summary": "Depuis la vue personnelle de Maya, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 2 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-03",
          "selectedDate": "2026-05-14",
          "calendarZoom": "day",
          "currentMember": "Maya",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-03",
              "name": "Journee innovation",
              "icon": "Team",
              "color": "#ea580c",
              "desc": "Organisation des demos de fin de sprint.",
              "deadline": "2026-05-21",
              "tasks": [
                {
                  "id": "ut-s2e03-t1",
                  "title": "Finaliser la trame de demo",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Maya",
                  "start": "2026-05-14",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-14",
                  "startTime": "11:30",
                  "durationMin": 2,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e03-t2",
                  "title": "Preparer la table interactive",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Maya",
                  "start": "2026-05-14",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-14",
                  "startTime": "15:00",
                  "durationMin": 55,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e03-t3",
                  "title": "Verifier la coordination 03",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Sarah",
                  "start": "2026-05-14",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-14",
                  "startTime": "11:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e03-t4",
                  "title": "Installer le poste accueil 03",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Thomas",
                  "start": "2026-05-14",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-14",
                  "startTime": "11:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Maya."
            ],
            "expected": "Le taskboard n'affiche que les taches de Maya dans Journee innovation."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Finaliser la trame de demo.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Finaliser la trame de demo\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Preparer la table interactive en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Preparer la table interactive\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Finaliser la trame de demo.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 2 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      },
      {
        "id": "ut-s2-04-example",
        "label": "Exemple 04 - Forum emploi",
        "title": "Exemple 04 - Forum emploi",
        "summary": "Depuis la vue personnelle de Sarah, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 1 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-04",
          "selectedDate": "2026-05-15",
          "calendarZoom": "day",
          "currentMember": "Sarah",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-04",
              "name": "Forum emploi",
              "icon": "Team",
              "color": "#0891b2",
              "desc": "Coordination d'un espace de rencontres entreprises.",
              "deadline": "2026-05-22",
              "tasks": [
                {
                  "id": "ut-s2e04-t1",
                  "title": "Preparer le brief exposants",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Sarah",
                  "start": "2026-05-15",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-15",
                  "startTime": "09:30",
                  "durationMin": 1,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e04-t2",
                  "title": "Installer le point accueil",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Sarah",
                  "start": "2026-05-15",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-15",
                  "startTime": "16:00",
                  "durationMin": 35,
                  "buffer": 15,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e04-t3",
                  "title": "Verifier la coordination 04",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Thomas",
                  "start": "2026-05-15",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-15",
                  "startTime": "12:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e04-t4",
                  "title": "Installer le poste accueil 04",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Leo",
                  "start": "2026-05-15",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-15",
                  "startTime": "12:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Sarah."
            ],
            "expected": "Le taskboard n'affiche que les taches de Sarah dans Forum emploi."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Preparer le brief exposants.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Preparer le brief exposants\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Installer le point accueil en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Installer le point accueil\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Preparer le brief exposants.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 1 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      },
      {
        "id": "ut-s2-05-example",
        "label": "Exemple 05 - Challenge durable",
        "title": "Exemple 05 - Challenge durable",
        "summary": "Depuis la vue personnelle de Thomas, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 2 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-05",
          "selectedDate": "2026-05-16",
          "calendarZoom": "day",
          "currentMember": "Thomas",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-05",
              "name": "Challenge durable",
              "icon": "Team",
              "color": "#2563eb",
              "desc": "Animation d'un challenge campus durable.",
              "deadline": "2026-05-23",
              "tasks": [
                {
                  "id": "ut-s2e05-t1",
                  "title": "Preparer le message de cloture",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Thomas",
                  "start": "2026-05-16",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-16",
                  "startTime": "10:30",
                  "durationMin": 2,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e05-t2",
                  "title": "Installer les bornes de vote",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Thomas",
                  "start": "2026-05-16",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-16",
                  "startTime": "13:00",
                  "durationMin": 45,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e05-t3",
                  "title": "Verifier la coordination 05",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Leo",
                  "start": "2026-05-16",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-16",
                  "startTime": "09:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e05-t4",
                  "title": "Installer le poste accueil 05",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Maya",
                  "start": "2026-05-16",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-16",
                  "startTime": "11:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Thomas."
            ],
            "expected": "Le taskboard n'affiche que les taches de Thomas dans Challenge durable."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Preparer le message de cloture.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Preparer le message de cloture\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Installer les bornes de vote en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Installer les bornes de vote\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Preparer le message de cloture.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 2 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      },
      {
        "id": "ut-s2-06-example",
        "label": "Exemple 06 - Hackathon sante",
        "title": "Exemple 06 - Hackathon sante",
        "summary": "Depuis la vue personnelle de Leo, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 2 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-06",
          "selectedDate": "2026-05-17",
          "calendarZoom": "day",
          "currentMember": "Leo",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-06",
              "name": "Hackathon sante",
              "icon": "Team",
              "color": "#8b5cf6",
              "desc": "Pilotage d'une restitution de hackathon sante.",
              "deadline": "2026-05-24",
              "tasks": [
                {
                  "id": "ut-s2e06-t1",
                  "title": "Finaliser la synthese jury",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Leo",
                  "start": "2026-05-17",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-17",
                  "startTime": "11:30",
                  "durationMin": 2,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e06-t2",
                  "title": "Installer la zone de pitch",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Leo",
                  "start": "2026-05-17",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-17",
                  "startTime": "14:00",
                  "durationMin": 55,
                  "buffer": 15,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e06-t3",
                  "title": "Verifier la coordination 06",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Maya",
                  "start": "2026-05-17",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-17",
                  "startTime": "10:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e06-t4",
                  "title": "Installer le poste accueil 06",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Sarah",
                  "start": "2026-05-17",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-17",
                  "startTime": "12:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Leo."
            ],
            "expected": "Le taskboard n'affiche que les taches de Leo dans Hackathon sante."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Finaliser la synthese jury.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Finaliser la synthese jury\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Installer la zone de pitch en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Installer la zone de pitch\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Finaliser la synthese jury.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 2 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      },
      {
        "id": "ut-s2-07-example",
        "label": "Exemple 07 - Expo design",
        "title": "Exemple 07 - Expo design",
        "summary": "Depuis la vue personnelle de Maya, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 1 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-07",
          "selectedDate": "2026-05-18",
          "calendarZoom": "day",
          "currentMember": "Maya",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-07",
              "name": "Expo design",
              "icon": "Team",
              "color": "#0f766e",
              "desc": "Coordination de la visite publique de l expo design.",
              "deadline": "2026-05-25",
              "tasks": [
                {
                  "id": "ut-s2e07-t1",
                  "title": "Preparer le discours de vernissage",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Maya",
                  "start": "2026-05-18",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-18",
                  "startTime": "09:30",
                  "durationMin": 1,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e07-t2",
                  "title": "Installer les chevalets signaletiques",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Maya",
                  "start": "2026-05-18",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-18",
                  "startTime": "15:00",
                  "durationMin": 35,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e07-t3",
                  "title": "Verifier la coordination 07",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Sarah",
                  "start": "2026-05-18",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-18",
                  "startTime": "11:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e07-t4",
                  "title": "Installer le poste accueil 07",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Thomas",
                  "start": "2026-05-18",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-18",
                  "startTime": "11:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Maya."
            ],
            "expected": "Le taskboard n'affiche que les taches de Maya dans Expo design."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Preparer le discours de vernissage.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Preparer le discours de vernissage\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Installer les chevalets signaletiques en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Installer les chevalets signaletiques\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Preparer le discours de vernissage.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 1 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      },
      {
        "id": "ut-s2-08-example",
        "label": "Exemple 08 - Bootcamp data",
        "title": "Exemple 08 - Bootcamp data",
        "summary": "Depuis la vue personnelle de Sarah, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 2 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-08",
          "selectedDate": "2026-05-19",
          "calendarZoom": "day",
          "currentMember": "Sarah",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-08",
              "name": "Bootcamp data",
              "icon": "Team",
              "color": "#dc2626",
              "desc": "Suivi d'une restitution de bootcamp data.",
              "deadline": "2026-05-26",
              "tasks": [
                {
                  "id": "ut-s2e08-t1",
                  "title": "Preparer la conclusion orale",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Sarah",
                  "start": "2026-05-19",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-19",
                  "startTime": "10:30",
                  "durationMin": 2,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e08-t2",
                  "title": "Installer le poste de projection",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Sarah",
                  "start": "2026-05-19",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-19",
                  "startTime": "16:00",
                  "durationMin": 45,
                  "buffer": 15,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e08-t3",
                  "title": "Verifier la coordination 08",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Thomas",
                  "start": "2026-05-19",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-19",
                  "startTime": "12:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e08-t4",
                  "title": "Installer le poste accueil 08",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Leo",
                  "start": "2026-05-19",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-19",
                  "startTime": "12:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Sarah."
            ],
            "expected": "Le taskboard n'affiche que les taches de Sarah dans Bootcamp data."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Preparer la conclusion orale.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Preparer la conclusion orale\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Installer le poste de projection en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Installer le poste de projection\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Preparer la conclusion orale.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 2 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      },
      {
        "id": "ut-s2-09-example",
        "label": "Exemple 09 - Colloque media",
        "title": "Exemple 09 - Colloque media",
        "summary": "Depuis la vue personnelle de Thomas, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 2 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-09",
          "selectedDate": "2026-05-20",
          "calendarZoom": "day",
          "currentMember": "Thomas",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-09",
              "name": "Colloque media",
              "icon": "Team",
              "color": "#ea580c",
              "desc": "Gestion du plateau media et des intervenants.",
              "deadline": "2026-05-27",
              "tasks": [
                {
                  "id": "ut-s2e09-t1",
                  "title": "Preparer l intro de session",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Thomas",
                  "start": "2026-05-20",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-20",
                  "startTime": "11:30",
                  "durationMin": 2,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e09-t2",
                  "title": "Installer les micros plateau",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Thomas",
                  "start": "2026-05-20",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-20",
                  "startTime": "13:00",
                  "durationMin": 55,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e09-t3",
                  "title": "Verifier la coordination 09",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Leo",
                  "start": "2026-05-20",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-20",
                  "startTime": "09:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e09-t4",
                  "title": "Installer le poste accueil 09",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Maya",
                  "start": "2026-05-20",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-20",
                  "startTime": "11:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Thomas."
            ],
            "expected": "Le taskboard n'affiche que les taches de Thomas dans Colloque media."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Preparer l intro de session.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Preparer l intro de session\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Installer les micros plateau en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Installer les micros plateau\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Preparer l intro de session.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 2 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      },
      {
        "id": "ut-s2-10-example",
        "label": "Exemple 10 - Nuit du code",
        "title": "Exemple 10 - Nuit du code",
        "summary": "Depuis la vue personnelle de Leo, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 1 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-10",
          "selectedDate": "2026-05-21",
          "calendarZoom": "day",
          "currentMember": "Leo",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-10",
              "name": "Nuit du code",
              "icon": "Team",
              "color": "#0891b2",
              "desc": "Organisation de la soiree de restitution code.",
              "deadline": "2026-05-28",
              "tasks": [
                {
                  "id": "ut-s2e10-t1",
                  "title": "Preparer la review finale",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Leo",
                  "start": "2026-05-21",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-21",
                  "startTime": "09:30",
                  "durationMin": 1,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e10-t2",
                  "title": "Installer les tables demo",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Leo",
                  "start": "2026-05-21",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-21",
                  "startTime": "14:00",
                  "durationMin": 35,
                  "buffer": 15,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e10-t3",
                  "title": "Verifier la coordination 10",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Maya",
                  "start": "2026-05-21",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-21",
                  "startTime": "10:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e10-t4",
                  "title": "Installer le poste accueil 10",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Sarah",
                  "start": "2026-05-21",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-21",
                  "startTime": "12:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Leo."
            ],
            "expected": "Le taskboard n'affiche que les taches de Leo dans Nuit du code."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Preparer la review finale.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Preparer la review finale\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Installer les tables demo en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Installer les tables demo\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Preparer la review finale.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 1 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      },
      {
        "id": "ut-s2-11-example",
        "label": "Exemple 11 - Forum mobilite",
        "title": "Exemple 11 - Forum mobilite",
        "summary": "Depuis la vue personnelle de Maya, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 2 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-11",
          "selectedDate": "2026-05-22",
          "calendarZoom": "day",
          "currentMember": "Maya",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-11",
              "name": "Forum mobilite",
              "icon": "Team",
              "color": "#2563eb",
              "desc": "Coordination d'une journee mobilite et transports.",
              "deadline": "2026-05-29",
              "tasks": [
                {
                  "id": "ut-s2e11-t1",
                  "title": "Preparer la presentation logistique",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Maya",
                  "start": "2026-05-22",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-22",
                  "startTime": "10:30",
                  "durationMin": 2,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e11-t2",
                  "title": "Installer les panneaux parcours",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Maya",
                  "start": "2026-05-22",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-22",
                  "startTime": "15:00",
                  "durationMin": 45,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e11-t3",
                  "title": "Verifier la coordination 11",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Sarah",
                  "start": "2026-05-22",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-22",
                  "startTime": "11:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e11-t4",
                  "title": "Installer le poste accueil 11",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Thomas",
                  "start": "2026-05-22",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-22",
                  "startTime": "11:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Maya."
            ],
            "expected": "Le taskboard n'affiche que les taches de Maya dans Forum mobilite."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Preparer la presentation logistique.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Preparer la presentation logistique\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Installer les panneaux parcours en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Installer les panneaux parcours\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Preparer la presentation logistique.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 2 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      },
      {
        "id": "ut-s2-12-example",
        "label": "Exemple 12 - Village sport",
        "title": "Exemple 12 - Village sport",
        "summary": "Depuis la vue personnelle de Sarah, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 2 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-12",
          "selectedDate": "2026-05-23",
          "calendarZoom": "day",
          "currentMember": "Sarah",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-12",
              "name": "Village sport",
              "icon": "Team",
              "color": "#8b5cf6",
              "desc": "Gestion des activites sportives du village campus.",
              "deadline": "2026-05-30",
              "tasks": [
                {
                  "id": "ut-s2e12-t1",
                  "title": "Preparer les consignes finales",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Sarah",
                  "start": "2026-05-23",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-23",
                  "startTime": "11:30",
                  "durationMin": 2,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e12-t2",
                  "title": "Installer le stand chronometrage",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Sarah",
                  "start": "2026-05-23",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-23",
                  "startTime": "16:00",
                  "durationMin": 55,
                  "buffer": 15,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e12-t3",
                  "title": "Verifier la coordination 12",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Thomas",
                  "start": "2026-05-23",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-23",
                  "startTime": "12:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e12-t4",
                  "title": "Installer le poste accueil 12",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Leo",
                  "start": "2026-05-23",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-23",
                  "startTime": "12:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Sarah."
            ],
            "expected": "Le taskboard n'affiche que les taches de Sarah dans Village sport."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Preparer les consignes finales.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Preparer les consignes finales\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Installer le stand chronometrage en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Installer le stand chronometrage\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Preparer les consignes finales.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 2 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      },
      {
        "id": "ut-s2-13-example",
        "label": "Exemple 13 - Journee climat",
        "title": "Exemple 13 - Journee climat",
        "summary": "Depuis la vue personnelle de Thomas, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 1 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-13",
          "selectedDate": "2026-05-24",
          "calendarZoom": "day",
          "currentMember": "Thomas",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-13",
              "name": "Journee climat",
              "icon": "Team",
              "color": "#0f766e",
              "desc": "Animation d'une journee climat et debats.",
              "deadline": "2026-05-31",
              "tasks": [
                {
                  "id": "ut-s2e13-t1",
                  "title": "Preparer le mot de synthese",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Thomas",
                  "start": "2026-05-24",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-24",
                  "startTime": "09:30",
                  "durationMin": 1,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e13-t2",
                  "title": "Installer les affiches parcours",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Thomas",
                  "start": "2026-05-24",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-24",
                  "startTime": "13:00",
                  "durationMin": 35,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e13-t3",
                  "title": "Verifier la coordination 13",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Leo",
                  "start": "2026-05-24",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-24",
                  "startTime": "09:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e13-t4",
                  "title": "Installer le poste accueil 13",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Maya",
                  "start": "2026-05-24",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-24",
                  "startTime": "11:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Thomas."
            ],
            "expected": "Le taskboard n'affiche que les taches de Thomas dans Journee climat."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Preparer le mot de synthese.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Preparer le mot de synthese\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Installer les affiches parcours en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Installer les affiches parcours\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Preparer le mot de synthese.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 1 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      },
      {
        "id": "ut-s2-14-example",
        "label": "Exemple 14 - Semaine culture",
        "title": "Exemple 14 - Semaine culture",
        "summary": "Depuis la vue personnelle de Leo, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 2 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-14",
          "selectedDate": "2026-05-25",
          "calendarZoom": "day",
          "currentMember": "Leo",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-14",
              "name": "Semaine culture",
              "icon": "Team",
              "color": "#dc2626",
              "desc": "Pilotage des animations culturelles de la semaine.",
              "deadline": "2026-05-32",
              "tasks": [
                {
                  "id": "ut-s2e14-t1",
                  "title": "Preparer la prise de parole finale",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Leo",
                  "start": "2026-05-25",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-25",
                  "startTime": "10:30",
                  "durationMin": 2,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e14-t2",
                  "title": "Installer la regie lumiere",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Leo",
                  "start": "2026-05-25",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-25",
                  "startTime": "14:00",
                  "durationMin": 45,
                  "buffer": 15,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e14-t3",
                  "title": "Verifier la coordination 14",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Maya",
                  "start": "2026-05-25",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-25",
                  "startTime": "10:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e14-t4",
                  "title": "Installer le poste accueil 14",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Sarah",
                  "start": "2026-05-25",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-25",
                  "startTime": "12:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Leo."
            ],
            "expected": "Le taskboard n'affiche que les taches de Leo dans Semaine culture."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Preparer la prise de parole finale.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Preparer la prise de parole finale\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Installer la regie lumiere en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Installer la regie lumiere\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Preparer la prise de parole finale.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 2 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      },
      {
        "id": "ut-s2-15-example",
        "label": "Exemple 15 - Demo XR",
        "title": "Exemple 15 - Demo XR",
        "summary": "Depuis la vue personnelle de Maya, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 2 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-15",
          "selectedDate": "2026-05-26",
          "calendarZoom": "day",
          "currentMember": "Maya",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-15",
              "name": "Demo XR",
              "icon": "Team",
              "color": "#ea580c",
              "desc": "Coordination d'une demonstration XR au public.",
              "deadline": "2026-05-33",
              "tasks": [
                {
                  "id": "ut-s2e15-t1",
                  "title": "Preparer le script de demo",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Maya",
                  "start": "2026-05-26",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-26",
                  "startTime": "11:30",
                  "durationMin": 2,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e15-t2",
                  "title": "Installer les casques de test",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Maya",
                  "start": "2026-05-26",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-26",
                  "startTime": "15:00",
                  "durationMin": 55,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e15-t3",
                  "title": "Verifier la coordination 15",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Sarah",
                  "start": "2026-05-26",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-26",
                  "startTime": "11:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e15-t4",
                  "title": "Installer le poste accueil 15",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Thomas",
                  "start": "2026-05-26",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-26",
                  "startTime": "11:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Maya."
            ],
            "expected": "Le taskboard n'affiche que les taches de Maya dans Demo XR."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Preparer le script de demo.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Preparer le script de demo\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Installer les casques de test en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Installer les casques de test\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Preparer le script de demo.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 2 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      },
      {
        "id": "ut-s2-16-example",
        "label": "Exemple 16 - Rencontre alumni",
        "title": "Exemple 16 - Rencontre alumni",
        "summary": "Depuis la vue personnelle de Sarah, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 1 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-16",
          "selectedDate": "2026-05-27",
          "calendarZoom": "day",
          "currentMember": "Sarah",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-16",
              "name": "Rencontre alumni",
              "icon": "Team",
              "color": "#0891b2",
              "desc": "Gestion d'une rencontre alumni et etudiants.",
              "deadline": "2026-05-34",
              "tasks": [
                {
                  "id": "ut-s2e16-t1",
                  "title": "Preparer le mot d accueil",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Sarah",
                  "start": "2026-05-27",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-27",
                  "startTime": "09:30",
                  "durationMin": 1,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e16-t2",
                  "title": "Installer le coin photo",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Sarah",
                  "start": "2026-05-27",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-27",
                  "startTime": "16:00",
                  "durationMin": 35,
                  "buffer": 15,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e16-t3",
                  "title": "Verifier la coordination 16",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Thomas",
                  "start": "2026-05-27",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-27",
                  "startTime": "12:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e16-t4",
                  "title": "Installer le poste accueil 16",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Leo",
                  "start": "2026-05-27",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-27",
                  "startTime": "12:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Sarah."
            ],
            "expected": "Le taskboard n'affiche que les taches de Sarah dans Rencontre alumni."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Preparer le mot d accueil.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Preparer le mot d accueil\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Installer le coin photo en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Installer le coin photo\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Preparer le mot d accueil.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 1 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      },
      {
        "id": "ut-s2-17-example",
        "label": "Exemple 17 - Salon makers",
        "title": "Exemple 17 - Salon makers",
        "summary": "Depuis la vue personnelle de Thomas, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 2 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-17",
          "selectedDate": "2026-05-28",
          "calendarZoom": "day",
          "currentMember": "Thomas",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-17",
              "name": "Salon makers",
              "icon": "Team",
              "color": "#2563eb",
              "desc": "Mise en place d'un salon makers et prototypage.",
              "deadline": "2026-05-35",
              "tasks": [
                {
                  "id": "ut-s2e17-t1",
                  "title": "Preparer la restitution makers",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Thomas",
                  "start": "2026-05-28",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-28",
                  "startTime": "10:30",
                  "durationMin": 2,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e17-t2",
                  "title": "Installer les etablis atelier",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Thomas",
                  "start": "2026-05-28",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-28",
                  "startTime": "13:00",
                  "durationMin": 45,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e17-t3",
                  "title": "Verifier la coordination 17",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Leo",
                  "start": "2026-05-28",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-28",
                  "startTime": "09:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e17-t4",
                  "title": "Installer le poste accueil 17",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Maya",
                  "start": "2026-05-28",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-28",
                  "startTime": "11:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Thomas."
            ],
            "expected": "Le taskboard n'affiche que les taches de Thomas dans Salon makers."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Preparer la restitution makers.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Preparer la restitution makers\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Installer les etablis atelier en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Installer les etablis atelier\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Preparer la restitution makers.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 2 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      },
      {
        "id": "ut-s2-18-example",
        "label": "Exemple 18 - Journee citoyenne",
        "title": "Exemple 18 - Journee citoyenne",
        "summary": "Depuis la vue personnelle de Leo, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 2 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-18",
          "selectedDate": "2026-05-29",
          "calendarZoom": "day",
          "currentMember": "Leo",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-18",
              "name": "Journee citoyenne",
              "icon": "Team",
              "color": "#8b5cf6",
              "desc": "Coordination d'une restitution associative.",
              "deadline": "2026-05-36",
              "tasks": [
                {
                  "id": "ut-s2e18-t1",
                  "title": "Preparer la conclusion du groupe",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Leo",
                  "start": "2026-05-29",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-29",
                  "startTime": "11:30",
                  "durationMin": 2,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e18-t2",
                  "title": "Installer les kakemonos hall",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Leo",
                  "start": "2026-05-29",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-29",
                  "startTime": "14:00",
                  "durationMin": 55,
                  "buffer": 15,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e18-t3",
                  "title": "Verifier la coordination 18",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Maya",
                  "start": "2026-05-29",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-29",
                  "startTime": "10:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e18-t4",
                  "title": "Installer le poste accueil 18",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Sarah",
                  "start": "2026-05-29",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-29",
                  "startTime": "12:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Leo."
            ],
            "expected": "Le taskboard n'affiche que les taches de Leo dans Journee citoyenne."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Preparer la conclusion du groupe.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Preparer la conclusion du groupe\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Installer les kakemonos hall en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Installer les kakemonos hall\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Preparer la conclusion du groupe.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 2 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      },
      {
        "id": "ut-s2-19-example",
        "label": "Exemple 19 - Forum IA",
        "title": "Exemple 19 - Forum IA",
        "summary": "Depuis la vue personnelle de Maya, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 1 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-19",
          "selectedDate": "2026-05-30",
          "calendarZoom": "day",
          "currentMember": "Maya",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-19",
              "name": "Forum IA",
              "icon": "Team",
              "color": "#0f766e",
              "desc": "Organisation d'un espace d echanges autour de l IA.",
              "deadline": "2026-05-37",
              "tasks": [
                {
                  "id": "ut-s2e19-t1",
                  "title": "Preparer la demo finale",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Maya",
                  "start": "2026-05-30",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-30",
                  "startTime": "09:30",
                  "durationMin": 1,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e19-t2",
                  "title": "Installer l ecran principal",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Maya",
                  "start": "2026-05-30",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-30",
                  "startTime": "15:00",
                  "durationMin": 35,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e19-t3",
                  "title": "Verifier la coordination 19",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Sarah",
                  "start": "2026-05-30",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-30",
                  "startTime": "11:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e19-t4",
                  "title": "Installer le poste accueil 19",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Thomas",
                  "start": "2026-05-30",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-30",
                  "startTime": "11:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Maya."
            ],
            "expected": "Le taskboard n'affiche que les taches de Maya dans Forum IA."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Preparer la demo finale.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Preparer la demo finale\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Installer l ecran principal en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Installer l ecran principal\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Preparer la demo finale.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 1 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      },
      {
        "id": "ut-s2-20-example",
        "label": "Exemple 20 - Parcours inclusion",
        "title": "Exemple 20 - Parcours inclusion",
        "summary": "Depuis la vue personnelle de Sarah, generer des sous-taches pour t1, creer une preparation pour t2, puis lancer un focus de 2 min.",
        "seedState": {
          "selectedProjectId": "ut-s2-20",
          "selectedDate": "2026-05-31",
          "calendarZoom": "day",
          "currentMember": "Sarah",
          "layerVisibility": {
            "etudes": true,
            "travail": true,
            "personnel": true,
            "loisirs": true
          },
          "projects": [
            {
              "id": "ut-s2-20",
              "name": "Parcours inclusion",
              "icon": "Team",
              "color": "#dc2626",
              "desc": "Pilotage d'une journee inclusion et sensibilisation.",
              "deadline": "2026-05-38",
              "tasks": [
                {
                  "id": "ut-s2e20-t1",
                  "title": "Preparer le message final",
                  "desc": "Slides, message cle et repetition rapide.",
                  "status": "pending",
                  "completed": false,
                  "progress": 10,
                  "owner": "Sarah",
                  "start": "2026-05-31",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-31",
                  "startTime": "10:30",
                  "durationMin": 2,
                  "buffer": 0,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e20-t2",
                  "title": "Installer les supports d acces",
                  "desc": "Verifier le materiel, la signaletique et la mise en place.",
                  "status": "pending",
                  "completed": false,
                  "progress": 5,
                  "owner": "Sarah",
                  "start": "2026-05-31",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-31",
                  "startTime": "16:00",
                  "durationMin": 45,
                  "buffer": 15,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e20-t3",
                  "title": "Verifier la coordination 20",
                  "desc": "Point intermediaire sur le dispositif.",
                  "status": "doing",
                  "completed": false,
                  "progress": 45,
                  "owner": "Thomas",
                  "start": "2026-05-31",
                  "durationDays": 1,
                  "category": "etudes",
                  "date": "2026-05-31",
                  "startTime": "12:00",
                  "durationMin": 25,
                  "buffer": 5,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                },
                {
                  "id": "ut-s2e20-t4",
                  "title": "Installer le poste accueil 20",
                  "desc": "Mettre en place la zone visiteurs.",
                  "status": "pending",
                  "completed": false,
                  "progress": 15,
                  "owner": "Leo",
                  "start": "2026-05-31",
                  "durationDays": 1,
                  "category": "travail",
                  "date": "2026-05-31",
                  "startTime": "12:30",
                  "durationMin": 30,
                  "buffer": 10,
                  "dependencies": [],
                  "subtasks": [],
                  "delayRisk": false,
                  "expanded": false,
                  "editOpen": false
                }
              ]
            }
          ]
        },
        "steps": [
          {
            "title": "Afficher le taskboard du projet",
            "instructions": [
              "Ouvrez la vue Taches du projet actif.",
              "Verifiez que vous etes bien dans la vue personnelle de Sarah."
            ],
            "expected": "Le taskboard n'affiche que les taches de Sarah dans Parcours inclusion."
          },
          {
            "title": "Generer les sous-taches de t1",
            "instructions": [
              "Reperez la tache Preparer le message final.",
              "Utilisez l'action de generation automatique de sous-taches."
            ],
            "expected": "Des sous-taches sont ajoutees a \"Preparer le message final\"."
          },
          {
            "title": "Ajouter une preparation pour t2",
            "instructions": [
              "Ouvrez la tache Installer les supports d acces en edition.",
              "Utilisez le bouton Creer une tache de preparation."
            ],
            "expected": "Une nouvelle tache de preparation apparait pour \"Installer les supports d acces\"."
          },
          {
            "title": "Lancer le focus mode sur t1",
            "instructions": [
              "Revenez sur la tache Preparer le message final.",
              "Lancez le focus mode.",
              "Observez le timer pendant environ 2 minute(s) jusqu'au retour a l'accueil."
            ],
            "expected": "Le timer progresse, la session se termine et l'accueil reapparait."
          }
        ]
      }
    ]
  }
};
