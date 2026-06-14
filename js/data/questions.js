/**
 * questions.js
 * Banque MASSIVE de questions couvrant tout le programme ST 4.
 * Génération automatique avec pondération aléatoire.
 */

const QuestionBank = [
    {
        "id": "q1",
        "section": "A",
        "univers": "terre_espace",
        "type": "multiple_choice",
        "text": "Laquelle de ces conséquences est engendrée par la fonte des glaciers côtiers sur les océans ?",
        "explanation": "La fonte des glaciers (eau douce) diminue la salinité de l'eau environnante et ralentit la circulation thermohaline car l'eau devient moins dense.",
        "options": [
            "Salinité augmente, circulation thermohaline ralentit",
            "Salinité diminue, circulation thermohaline ralentit",
            "Salinité diminue, niveau d'eau baisse",
            "Quantité d'eau diminue, salinité augmente"
        ],
        "answer": 1
    },
    {
        "id": "q2",
        "section": "A",
        "univers": "terre_espace",
        "type": "multiple_choice",
        "text": "La hausse des gaz à effet de serre a des impacts sur les régions nordiques. Quelles sont les conséquences ?",
        "explanation": "Le dégel du pergélisol fragilise les sols, causant des glissements de terrain, et la fonte des glaces augmente le niveau des océans.",
        "options": [
            "Diminution des glissements de terrain",
            "Augmentation de l'effet d'albédo",
            "Augmentation des glissements de terrain et de la quantité d'eau dans les océans",
            "Diminution de la quantité d'eau dans les océans"
        ],
        "answer": 2
    },
    {
        "id": "q3",
        "section": "A",
        "univers": "terre_espace",
        "type": "multiple_choice",
        "text": "Quel système de production d'électricité est idéal près d'un lac calme, dans un secteur très ensoleillé où il vente peu ?",
        "explanation": "Le soleil est abondant et c'est une ressource renouvelable. L'absence de vent élimine l'éolienne, et le lac calme élimine l'hydrolienne.",
        "options": [
            "Une éolienne",
            "Une hydrolienne",
            "Un panneau solaire",
            "Une génératrice au gaz naturel"
        ],
        "answer": 2
    },
    {
        "id": "q4",
        "section": "A",
        "univers": "terre_espace",
        "type": "multiple_choice",
        "text": "À l'équateur, que se passe-t-il dans la circulation océanique ?",
        "explanation": "L'eau chaude est moins dense que l'eau froide, donc elle s'allège et reste en surface.",
        "options": [
            "L'eau se refroidit, sa masse volumique diminue.",
            "L'eau se réchauffe, sa masse volumique diminue et elle reste en surface.",
            "L'eau se réchauffe, sa densité augmente.",
            "L'eau se refroidit et coule."
        ],
        "answer": 1
    },
    {
        "id": "q5",
        "section": "A",
        "univers": "terre_espace",
        "type": "multiple_choice",
        "text": "Au pôle Nord, que se passe-t-il dans la circulation océanique thermohaline ?",
        "explanation": "Le froid augmente la densité de l'eau, et la formation de la banquise expulse le sel (eau saumâtre), augmentant encore la salinité et la densité, ce qui fait plonger l'eau.",
        "options": [
            "L'eau se refroidit, sa masse volumique augmente et elle descend vers le fond.",
            "L'eau se réchauffe et monte en surface.",
            "L'eau devient moins salée et reste en surface.",
            "L'eau s'évapore et diminue le niveau de la mer."
        ],
        "answer": 0
    },
    {
        "id": "q6",
        "section": "A",
        "univers": "terre_espace",
        "type": "multiple_choice",
        "text": "Qu'est-ce qu'un bassin versant ?",
        "explanation": "Un bassin versant draine toutes les eaux précipitées vers un point bas commun, séparé par des lignes de crête.",
        "options": [
            "Une étendue d'eau fermée.",
            "Le point de rencontre de deux océans.",
            "Un territoire délimité par des lignes de crête où les eaux s'écoulent vers un même point.",
            "Un type de glacier."
        ],
        "answer": 2
    },
    {
        "id": "q7",
        "section": "A",
        "univers": "terre_espace",
        "type": "multiple_choice",
        "text": "Dans un bassin versant, si un polluant est déversé, où se retrouvera-t-il ?",
        "explanation": "L'eau coule toujours de l'amont (plus haut) vers l'aval (plus bas), emportant les polluants avec elle.",
        "options": [
            "En amont du point de déversement.",
            "En aval du point de déversement.",
            "Sur les lignes de crête.",
            "Il s'évaporera immédiatement."
        ],
        "answer": 1
    },
    {
        "id": "q8",
        "section": "A",
        "univers": "terre_espace",
        "type": "multiple_choice",
        "text": "Lequel des gaz suivants est un gaz à effet de serre puissant libéré par la fonte du pergélisol ?",
        "explanation": "La matière organique dégèle et se décompose, libérant du méthane et du dioxyde de carbone.",
        "options": [
            "L'oxygène (O<sub>2</sub>)",
            "L'azote (N<sub>2</sub>)",
            "Le méthane (CH<sub>4</sub>)",
            "L'hélium (He)"
        ],
        "answer": 2
    },
    {
        "id": "q9",
        "section": "A",
        "univers": "terre_espace",
        "type": "multiple_choice",
        "text": "Laquelle de ces ressources énergétiques ne provient PAS de la lithosphère ?",
        "explanation": "L'hydroélectricité provient de l'hydrosphère (l'eau en mouvement).",
        "options": [
            "Le charbon",
            "L'uranium",
            "La géothermie",
            "L'hydroélectricité"
        ],
        "answer": 3
    },
    {
        "id": "q10",
        "section": "A",
        "univers": "terre_espace",
        "type": "multiple_choice",
        "text": "Comment la photosynthèse influence-t-elle le cycle du carbone ?",
        "explanation": "Les végétaux captent le CO<sub>2</sub> pour produire de l'énergie et de la matière organique.",
        "options": [
            "Elle libère du CO<sub>2</sub> dans l'atmosphère.",
            "Elle absorbe le CO<sub>2</sub> atmosphérique pour fabriquer du glucose.",
            "Elle transforme le carbone en méthane.",
            "Elle dissout le carbone dans l'océan."
        ],
        "answer": 1
    },
    {
        "id": "q11",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "L'ion B<sup>3+</sup> provient de l'atome de bore (Z=5). Cet ion possède combien de charges positives et négatives ?",
        "explanation": "L'atome de bore a 5 protons (5 positives). L'ion B<sup>3+</sup> a perdu 3 électrons, il lui en reste 2 (2 négatives).",
        "options": [
            "2 positives, 5 négatives",
            "5 positives, 2 négatives",
            "5 positives, 8 négatives",
            "8 positives, 5 négatives"
        ],
        "answer": 1
    },
    {
        "id": "q12",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "On veut neutraliser une solution de pH 10. Quelle substance utiliser ?",
        "explanation": "Un pH 10 est basique. Pour le neutraliser, il faut un acide fort, comme le HCl avec un pH très bas (pH 2).",
        "options": [
            "HCl (pH 2)",
            "NaOH (pH 6)",
            "HCl (pH 9)",
            "NaOH (pH 13)"
        ],
        "answer": 0
    },
    {
        "id": "q13",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Dans quel circuit l'ampoule s'allume-t-elle ? Le circuit a un interrupteur fermé et un bécher contenant une solution.",
        "explanation": "KI est un sel (électrolyte) qui se dissocie en ions en solution aqueuse, permettant au courant de circuler. Le cuivre solide ne marche pas si le circuit est coupé par l'eau.",
        "options": [
            "Eau pure",
            "Cuivre solide, Cu",
            "Iodure de potassium, KI, en solution aqueuse",
            "Sucre, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, en solution"
        ],
        "answer": 2
    },
    {
        "id": "q14",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Le sodium, Na, réagit avec l'eau, H<sub>2</sub>O, pour former NaOH et H<sub>2</sub>. Quelle est l'équation balancée ?",
        "explanation": "Il faut 2 atomes de Na, 4 atomes de H (2x2) et 2 atomes de O des deux côtés pour que la masse soit conservée.",
        "options": [
            "Na + H<sub>2</sub>O &rarr; NaOH + H<sub>2</sub>",
            "Na + 2 H<sub>2</sub>O &rarr; NaOH + 2 H<sub>2</sub>",
            "2 Na + H<sub>2</sub>O &rarr; 2 NaOH + H<sub>2</sub>",
            "2 Na + 2 H<sub>2</sub>O &rarr; 2 NaOH + H<sub>2</sub>"
        ],
        "answer": 3
    },
    {
        "id": "q15",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Un morceau de 3,76 g de magnésium réagit avec 50,00 g d'acide. Il se forme 53,73 g de produit en solution et un gaz s'échappe. Quelle est la masse de ce gaz (H<sub>2</sub>) ?",
        "explanation": "Loi de la conservation de la masse : Masse réactifs = Masse produits. 3,76 + 50,00 = 53,76 g. Produits : 53,73 + x = 53,76. Donc x = 0,03 g.",
        "options": [
            "0,03 g",
            "0,08 g",
            "4,04 g",
            "53,76 g"
        ],
        "answer": 0
    },
    {
        "id": "q16",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Lors d'un frottement entre du cuir et du coton, le cuir donne des charges négatives au coton. Que se passe-t-il ?",
        "explanation": "Seuls les électrons (charges négatives) peuvent se déplacer. S'ils passent du cuir au coton, le coton devient négatif et le cuir devient positif.",
        "options": [
            "Les charges négatives se déplacent du coton au cuir.",
            "Les charges positives se déplacent du cuir au coton.",
            "Les charges négatives se déplacent du cuir au coton.",
            "Les charges positives se déplacent du coton au cuir."
        ],
        "answer": 2
    },
    {
        "id": "q17",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "On approche le pôle Nord d'un aimant 1 du pôle X d'un aimant 2, et il y a attraction. Quels sont les pôles possibles ?",
        "explanation": "Les pôles opposés s'attirent (Nord et Sud).",
        "options": [
            "X est Nord",
            "X est Sud",
            "X est positif",
            "X est négatif"
        ],
        "answer": 1
    },
    {
        "id": "q18",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Pour qu'une perceuse fonctionne bien, elle nécessite 3 A sous 120 V. Quelle est la résistance de son moteur ?",
        "explanation": "Selon la loi d'Ohm, R = U / I = 120 V / 3 A = 40 &Omega;.",
        "options": [
            "40 &Omega;",
            "360 &Omega;",
            "0,025 &Omega;",
            "123 &Omega;"
        ],
        "answer": 0
    },
    {
        "id": "q19",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Une diode électroluminescente (DEL) a un rendement de 85 %. Si elle consomme 12 500 J d'énergie électrique, quelle est son énergie utile (lumineuse) ?",
        "explanation": "Rendement = Énergie utile / Énergie consommée. 0,85 = É_utile / 12 500. É_utile = 12 500 * 0,85 = 10 625 J.",
        "options": [
            "14 705 J",
            "1 875 J",
            "10 625 J",
            "12 500 J"
        ],
        "answer": 2
    },
    {
        "id": "q20",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Combien d'électrons de valence possède un atome de soufre (famille VI A) ?",
        "explanation": "Le chiffre romain de la famille (VI = 6) correspond au nombre d'électrons de valence pour les familles A.",
        "options": [
            "2",
            "4",
            "6",
            "8"
        ],
        "answer": 2
    },
    {
        "id": "q21",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Lequel des éléments suivants est un gaz inerte (noble) ?",
        "explanation": "Le Néon appartient à la famille VIII A (gaz inertes), dont la dernière couche électronique est pleine.",
        "options": [
            "Chlore (Cl)",
            "Sodium (Na)",
            "Néon (Ne)",
            "Oxygène (O)"
        ],
        "answer": 2
    },
    {
        "id": "q22",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Un ion chlorure (Cl<sup>-</sup>) a pris une configuration électronique stable. À quel gaz noble ressemble-t-il ?",
        "explanation": "Le chlore (Z=17) gagne 1 électron pour avoir 18 électrons, ce qui est la configuration de l'Argon.",
        "options": [
            "Hélium (He)",
            "Néon (Ne)",
            "Argon (Ar)",
            "Krypton (Kr)"
        ],
        "answer": 2
    },
    {
        "id": "q23",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Dans une solution de concentration 5 % (m/V), quelle masse de soluté trouve-t-on dans 200 mL ?",
        "explanation": "5 % (m/V) signifie 5 g par 100 mL. Donc dans 200 mL, il y a 10 g.",
        "options": [
            "5 g",
            "10 g",
            "20 g",
            "50 g"
        ],
        "answer": 1
    },
    {
        "id": "q24",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quel type de transformation se produit lors de la neutralisation acidobasique ?",
        "explanation": "Acide + Base &rarr; Sel + Eau.",
        "options": [
            "Un sel et de l'eau sont formés.",
            "Un acide fort devient un gaz.",
            "Une base se transforme en métal.",
            "Deux gaz forment un liquide."
        ],
        "answer": 0
    },
    {
        "id": "q25",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quel appareil sert à mesurer l'intensité du courant électrique et comment doit-il être branché ?",
        "explanation": "L'ampèremètre mesure l'intensité du courant (Ampères) et doit être placé en série pour que le courant le traverse.",
        "options": [
            "Un voltmètre en parallèle.",
            "Un ampèremètre en série.",
            "Un voltmètre en série.",
            "Un ampèremètre en parallèle."
        ],
        "answer": 1
    },
    {
        "id": "q26",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "La plupart des réceptacles de brouettes sont formés d'une feuille de métal compressée. Quelle propriété mécanique permet au métal de prendre cette forme sans se rompre ?",
        "explanation": "La malléabilité est la capacité de s'aplatir ou se courber sans se rompre (souvent utilisé pour faire des feuilles ou des formes pressées).",
        "options": [
            "La ductilité",
            "La résilience",
            "La malléabilité",
            "La rigidité"
        ],
        "answer": 2
    },
    {
        "id": "q27",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Dans un système à pignon et crémaillère, si le pignon est l'organe moteur, quelle transformation de mouvement s'opère ?",
        "explanation": "Le pignon (roue dentée) tourne (rotation) et fait avancer la crémaillère (translation).",
        "options": [
            "Rotation en rotation",
            "Rotation en translation",
            "Translation en rotation",
            "Translation en translation"
        ],
        "answer": 1
    },
    {
        "id": "q28",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Quelle est la principale caractéristique d'une liaison DÉMONTABLE ?",
        "explanation": "Une vis ou un écrou permet une liaison démontable. Un rivet ou de la colle crée une liaison indémontable.",
        "options": [
            "Elle empêche tout mouvement.",
            "Elle utilise un organe de liaison élastique.",
            "Elle permet de séparer les pièces sans endommager les pièces ou l'organe de liaison.",
            "Elle implique que les pièces ne peuvent plus bouger."
        ],
        "answer": 2
    },
    {
        "id": "q29",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Un élève observe que si la roue menante a 48 dents et la roue menée a 24 dents, la roue menée tourne plus vite. Quel est le rapport d'engrenage ?",
        "explanation": "Rapport = Dents menante / Dents menée = 48 / 24 = 2. La roue menée tourne 2 fois plus vite.",
        "options": [
            "0,5",
            "1",
            "2",
            "4"
        ],
        "answer": 2
    },
    {
        "id": "q30",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Si deux roues de friction sont en contact direct, quel est le sens de rotation de la deuxième roue par rapport à la première ?",
        "explanation": "Dans un engrenage simple ou des roues de friction en contact direct, le sens de rotation s'inverse toujours d'une roue à l'autre.",
        "options": [
            "Identique",
            "Inverse",
            "Perpendiculaire",
            "Alternatif"
        ],
        "answer": 1
    },
    {
        "id": "q31",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Quelle fonction électrique empêche le courant de passer à travers le corps d'une personne qui manipule un fil ?",
        "explanation": "L'isolant (comme le plastique autour du fil) empêche le courant de s'échapper.",
        "options": [
            "L'alimentation",
            "La conduction",
            "L'isolation",
            "La protection"
        ],
        "answer": 2
    },
    {
        "id": "q32",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "À quoi sert un fusible dans un circuit électrique ?",
        "explanation": "C'est un dispositif de protection qui coupe le circuit en cas de surcharge.",
        "options": [
            "À commander l'allumage.",
            "À fournir de l'énergie.",
            "À protéger le circuit en fondant si le courant est trop fort.",
            "À transformer l'énergie électrique en lumière."
        ],
        "answer": 2
    },
    {
        "id": "q33",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Les matériaux céramiques sont très utilisés dans les fours. Quelle propriété principale justifie ce choix ?",
        "explanation": "Les céramiques résistent à de très hautes températures sans se dégrader.",
        "options": [
            "Leur haute conductibilité électrique",
            "Leur grande malléabilité",
            "Leur résistance à la chaleur",
            "Leur résilience aux chocs"
        ],
        "answer": 2
    },
    {
        "id": "q34",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Dans une liaison complète, est-ce qu'il y a un guidage ?",
        "explanation": "Une liaison complète (totale) signifie que les deux pièces sont solidaires et ne bougent pas l'une par rapport à l'autre. Il n'y a donc pas de guidage.",
        "options": [
            "Oui, toujours.",
            "Non, il n'y a aucun mouvement possible entre les pièces.",
            "Seulement si c'est élastique.",
            "Oui, un guidage en translation."
        ],
        "answer": 1
    },
    {
        "id": "q35",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Quel mécanisme de transmission de mouvement permet de relier deux axes très éloignés tout en conservant le même sens de rotation ?",
        "explanation": "Une courroie reliant deux poulies transmet le mouvement à distance et dans le même sens (si elle n'est pas croisée).",
        "options": [
            "Roues de friction",
            "Engrenage à roues dentées",
            "Poulies et courroie",
            "Vis sans fin"
        ],
        "answer": 2
    },
    {
        "id": "q36",
        "section": "B",
        "univers": "terre_espace",
        "type": "short_answer",
        "text": "Dans un bassin versant, un déversement chimique a lieu au point A. Si le point B est situé plus bas dans le même cours d'eau, le point B est-il situé en AMONT ou en AVAL du point A ?",
        "explanation": "L'eau s'écoule du point le plus haut (amont) vers le plus bas (aval). Le point B est donc en aval.",
        "exactMatch": [
            "aval",
            "en aval"
        ]
    },
    {
        "id": "q37",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Quel est le nom de la famille du tableau périodique située dans l'avant-dernière colonne (VII A), connue pour être d'excellents désinfectants ?",
        "explanation": "C'est la famille des halogènes (ex: Chlore, Fluor).",
        "exactMatch": [
            "halogènes",
            "les halogènes",
            "halogene",
            "halogène"
        ]
    },
    {
        "id": "q38",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Calculez la résistance d'un appareil traversé par un courant de 2 A lorsqu'il est branché sur une tension de 120 V. (Inscrire seulement le nombre)",
        "explanation": "R = U / I = 120 / 2 = 60 &Omega;.",
        "exactMatch": [
            "60"
        ]
    },
    {
        "id": "q39",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un objet chargé positivement repoussera-t-il un objet chargé négativement ? (Répondez par Oui ou Non)",
        "explanation": "Les charges opposées s'attirent. Ce sont les charges de même signe qui se repoussent.",
        "exactMatch": [
            "non"
        ]
    },
    {
        "id": "q40",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Dans une équation chimique, si vous avez CH<sub>4</sub> + 2 O<sub>2</sub> &rarr; CO<sub>2</sub> + X H<sub>2</sub>O, quelle est la valeur de X pour que l'équation soit balancée ?",
        "explanation": "Il y a 4 atomes d'hydrogène à gauche (dans CH<sub>4</sub>). Il faut donc 2 molécules de H<sub>2</sub>O à droite pour avoir 4 atomes de H.",
        "exactMatch": [
            "2",
            "deux"
        ]
    },
    {
        "id": "q41",
        "section": "B",
        "univers": "technologique",
        "type": "short_answer",
        "text": "Si deux pièces de bois sont collées ensemble avec de la colle forte, cette liaison est-elle démontable ou indémontable ?",
        "explanation": "La séparation des pièces causerait des dommages aux pièces ou à l'organe de liaison (la colle).",
        "exactMatch": [
            "indémontable",
            "indemontable"
        ]
    },
    {
        "id": "q42",
        "section": "B",
        "univers": "technologique",
        "type": "short_answer",
        "text": "Quel type de mouvement effectue le tiroir d'un bureau lorsqu'on l'ouvre ? (Rotation ou Translation)",
        "explanation": "Le tiroir glisse en ligne droite, c'est un mouvement de translation.",
        "exactMatch": [
            "translation"
        ]
    },
    {
        "id": "c1",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "Quelle pièce subit directement la force de l'eau pour initier le mouvement du compteur ?",
        "choices": ["La vitre", "La roue à aubes", "La buse", "Le boîtier"],
        "correctChoice": 1,
        "explanation": "L'eau entre par la buse et frappe les pales de la roue à aubes. C'est elle qui amorce tout le mouvement de rotation du compteur."
    },
    {
        "id": "c2",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "Dans le sous-ensemble de friction, la petite roue de friction est l'organe moteur. Par rapport à celle-ci, la grande roue de friction subit-elle une augmentation ou une diminution de vitesse ?",
        "choices": ["Augmentation de vitesse", "Diminution de vitesse", "Même vitesse", "Inversion de vitesse"],
        "correctChoice": 1,
        "explanation": "Le mouvement passe d'une petite roue (menante) à une grande roue (menée). Comme la menée est plus grande, elle tourne plus lentement : il y a diminution de vitesse."
    },
    {
        "id": "c3",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "Quel composant du compteur d'eau remplit la fonction électrique de COMMANDE ?",
        "choices": ["L'avertisseur sonore", "La pile et son support", "Le micro-interrupteur", "L'aimant"],
        "correctChoice": 2,
        "explanation": "Le micro-interrupteur s'ouvre et se ferme au passage de l'aimant, permettant de contrôler le passage du courant : c'est la fonction de commande."
    },
    {
        "id": "c4",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "Le circuit électrique du compteur d'eau est composé d'une source d'énergie, d'un interrupteur et d'un avertisseur sonore reliés par des fils. Ce circuit est-il branché en série ou en parallèle ?",
        "choices": ["Circuit en parallèle", "Circuit en série", "Circuit mixte"],
        "correctChoice": 1,
        "explanation": "Les composants forment une seule boucle unique. Le courant n'a qu'un seul chemin possible : c'est un circuit en série."
    },
    {
        "id": "c5",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "Avec le temps, la roue à aubes ne tourne plus librement car son axe est attaqué par la rouille. Quel entretien faut-il effectuer ?",
        "choices": ["Changer les roues de friction", "Remplacer la pile", "Nettoyer et lubrifier l'axe", "Resserrer les vis du boîtier"],
        "correctChoice": 2,
        "explanation": "Si un axe rouille, il perd ses propriétés de glissement. L'entretien recommandé est de nettoyer et lubrifier l'axe de rotation."
    },
    {
        "id": "c6",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "Quel composant du compteur d'eau assure la fonction électrique d'ALIMENTATION ?",
        "choices": ["Le micro-interrupteur", "La pile", "L'avertisseur sonore", "L'aimant"],
        "correctChoice": 1,
        "explanation": "La pile (source de courant) fournit l'énergie électrique nécessaire au fonctionnement du circuit. C'est la fonction d'alimentation."
    },
    {
        "id": "c7",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "L'avertisseur sonore du compteur d'eau transforme l'énergie électrique en une autre forme d'énergie. Laquelle ?",
        "choices": ["Énergie thermique", "Énergie mécanique", "Énergie sonore", "Énergie lumineuse"],
        "correctChoice": 2,
        "explanation": "L'avertisseur sonore (buzzer) convertit l'énergie électrique en énergie sonore. C'est la fonction de transformation d'énergie."
    },
    {
        "id": "c8",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "Quel type de guidage l'axe de la roue à aubes effectue-t-il ?",
        "choices": ["Guidage en translation", "Guidage en rotation", "Guidage hélicoïdal", "Aucun guidage"],
        "correctChoice": 1,
        "explanation": "L'axe permet à la roue à aubes de tourner sur elle-même tout en limitant les autres mouvements : c'est un guidage en rotation."
    },
    {
        "id": "c9",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "La liaison entre la roue à aubes et son axe est-elle directe ou indirecte ?",
        "choices": ["Directe (les pièces se touchent)", "Indirecte (un organe de liaison les unit)"],
        "correctChoice": 0,
        "explanation": "La roue à aubes est directement en contact avec son axe, sans organe intermédiaire. C'est donc une liaison directe."
    },
    {
        "id": "c10",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "La liaison entre les deux roues de friction est-elle démontable ou indémontable ?",
        "choices": ["Démontable", "Indémontable"],
        "correctChoice": 0,
        "explanation": "Les roues de friction sont simplement en contact par pression et peuvent être séparées sans endommager les pièces. C'est une liaison démontable."
    },
    {
        "id": "c11",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "Le sous-ensemble roues de friction transmet le mouvement de rotation de la petite roue à la grande roue. Quel est le sens de rotation de la grande roue par rapport à la petite ?",
        "choices": ["Identique (même sens)", "Inverse (sens contraire)"],
        "correctChoice": 1,
        "explanation": "Lorsque deux roues de friction sont en contact direct, elles tournent en sens contraire l'une de l'autre."
    },
    {
        "id": "c12",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "L'aimant est fixé sur la grande roue de friction. Lorsque l'aimant passe devant le micro-interrupteur, que se passe-t-il dans le circuit électrique ?",
        "choices": ["Le circuit s'ouvre et le courant cesse de circuler", "Le circuit se ferme et le courant circule, activant l'avertisseur", "La pile se recharge", "Le courant change de direction"],
        "correctChoice": 1,
        "explanation": "L'aimant active le micro-interrupteur magnétique : le circuit se ferme momentanément, permettant au courant de circuler et à l'avertisseur sonore de produire un son."
    },
    {
        "id": "c13",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "Le boîtier du compteur d'eau doit résister à la pression de l'eau sans se déformer. Quelle propriété mécanique est la plus importante pour le matériau du boîtier ?",
        "choices": ["La malléabilité", "La dureté", "La rigidité", "L'élasticité"],
        "correctChoice": 2,
        "explanation": "Le boîtier doit résister à la pression sans se déformer. La rigidité est la capacité d'un matériau à résister à la déformation sous une charge."
    },
    {
        "id": "c14",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "La vitre du compteur d'eau doit laisser passer la lumière pour voir le compte-tours. De quel type de matériau la vitre est-elle probablement faite ?",
        "choices": ["Un métal", "Un thermoplastique transparent", "Une céramique", "Un bois composite"],
        "correctChoice": 1,
        "explanation": "La vitre est probablement en thermoplastique (ex: polycarbonate) car ce matériau est transparent, léger, résistant aux chocs et imperméable."
    },
    {
        "id": "c15",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "Les vis du compteur d'eau servent à maintenir les pièces ensemble. Quelle caractéristique décrit le mieux la liaison assurée par les vis ?",
        "choices": ["Indirecte, rigide, démontable", "Directe, rigide, indémontable", "Indirecte, élastique, démontable", "Directe, élastique, indémontable"],
        "correctChoice": 0,
        "explanation": "Les vis sont des organes de liaison (indirecte) qui maintiennent les pièces fermement (rigide) et qui peuvent être retirées sans dommage (démontable)."
    },
    {
        "id": "c16",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "Décrivez la fonction globale du compteur d'eau : quelle forme d'énergie en entrée est transformée pour produire le signal sonore en sortie ?",
        "choices": [
            "Énergie électrique → Énergie sonore",
            "Énergie hydraulique (eau en mouvement) → Énergie mécanique → Énergie sonore",
            "Énergie thermique → Énergie mécanique",
            "Énergie chimique → Énergie sonore"
        ],
        "correctChoice": 1,
        "explanation": "L'eau en mouvement (énergie hydraulique) fait tourner la roue à aubes (énergie mécanique), qui transmet le mouvement aux roues de friction, dont l'aimant active l'interrupteur qui alimente l'avertisseur (énergie sonore)."
    },
    {
        "id": "c17",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "Si les roues de friction glissent et ne transmettent plus le mouvement, quel est l'entretien le plus approprié ?",
        "choices": ["Lubrifier les roues de friction", "Changer les roues de friction ou leurs bandes d'adhérence", "Remplacer la pile", "Resserrer l'axe de la roue à aubes"],
        "correctChoice": 1,
        "explanation": "Si les roues de friction glissent, c'est qu'elles sont usées et n'ont plus assez d'adhérence. Il faut changer les roues ou remplacer la bande d'adhérence. Attention : lubrifier des roues de friction les ferait glisser encore plus !"
    },
    {
        "id": "c18",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "Quelle est la fonction de la goupille de blocage dans le compteur d'eau ?",
        "choices": ["Guider la roue à aubes en rotation", "Bloquer l'axe de la grande roue de friction pour l'empêcher de se déplacer axialement", "Alimenter le circuit électrique", "Transmettre le mouvement de rotation"],
        "correctChoice": 1,
        "explanation": "La goupille de blocage empêche l'axe de sortir de son logement. Elle maintient la position de l'axe en bloquant son mouvement axial."
    },
    {
        "id": "c19",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "Le support de l'interrupteur magnétique est fixé au boîtier. Cette liaison permet-elle un mouvement entre le support et le boîtier ?",
        "choices": ["Oui, c'est une liaison partielle (guidage)", "Non, c'est une liaison complète (aucun mouvement possible)"],
        "correctChoice": 1,
        "explanation": "Le support est fixé solidement au boîtier sans possibilité de mouvement. C'est une liaison complète (totale)."
    },
    {
        "id": "c20",
        "section": "C",
        "univers": "technologique",
        "type": "svg_interactive",
        "text": "Le conduit d'alimentation amène l'eau vers la buse. Quelle contrainte mécanique subit principalement la paroi interne du conduit lorsque l'eau circule sous pression ?",
        "choices": ["Traction", "Compression", "Torsion", "Cisaillement"],
        "correctChoice": 1,
        "explanation": "L'eau sous pression pousse contre les parois internes du conduit, ce qui crée une contrainte de compression sur la paroi."
    },
    {
        "id": "proc_ohm_0",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 43 &Omega; et est traversé par un courant de 6 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "258"
        ],
        "explanation": "U = R * I. Donc U = 43 * 6 = 258 V."
    },
    {
        "id": "proc_ohm_1",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 48 &Omega; et est traversé par un courant de 10 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "480"
        ],
        "explanation": "U = R * I. Donc U = 48 * 10 = 480 V."
    },
    {
        "id": "proc_ohm_2",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 32 &Omega; et est traversé par un courant de 16 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "512"
        ],
        "explanation": "U = R * I. Donc U = 32 * 16 = 512 V."
    },
    {
        "id": "proc_ohm_3",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 13 &Omega; et est traversé par un courant de 15 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "195"
        ],
        "explanation": "U = R * I. Donc U = 13 * 15 = 195 V."
    },
    {
        "id": "proc_ohm_4",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 39 &Omega; et est traversé par un courant de 6 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "234"
        ],
        "explanation": "U = R * I. Donc U = 39 * 6 = 234 V."
    },
    {
        "id": "proc_ohm_5",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 44 &Omega; et est traversé par un courant de 8 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "352"
        ],
        "explanation": "U = R * I. Donc U = 44 * 8 = 352 V."
    },
    {
        "id": "proc_ohm_6",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 20 &Omega; et est traversé par un courant de 14 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "280"
        ],
        "explanation": "U = R * I. Donc U = 20 * 14 = 280 V."
    },
    {
        "id": "proc_ohm_7",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 15 &Omega; et est traversé par un courant de 9 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "135"
        ],
        "explanation": "U = R * I. Donc U = 15 * 9 = 135 V."
    },
    {
        "id": "proc_ohm_8",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 31 &Omega; et est traversé par un courant de 4 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "124"
        ],
        "explanation": "U = R * I. Donc U = 31 * 4 = 124 V."
    },
    {
        "id": "proc_ohm_9",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 41 &Omega; et est traversé par un courant de 2 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "82"
        ],
        "explanation": "U = R * I. Donc U = 41 * 2 = 82 V."
    },
    {
        "id": "proc_ohm_10",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 24 &Omega; et est traversé par un courant de 10 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "240"
        ],
        "explanation": "U = R * I. Donc U = 24 * 10 = 240 V."
    },
    {
        "id": "proc_ohm_11",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 11 &Omega; et est traversé par un courant de 2 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "22"
        ],
        "explanation": "U = R * I. Donc U = 11 * 2 = 22 V."
    },
    {
        "id": "proc_ohm_12",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 22 &Omega; et est traversé par un courant de 6 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "132"
        ],
        "explanation": "U = R * I. Donc U = 22 * 6 = 132 V."
    },
    {
        "id": "proc_ohm_13",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 44 &Omega; et est traversé par un courant de 16 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "704"
        ],
        "explanation": "U = R * I. Donc U = 44 * 16 = 704 V."
    },
    {
        "id": "proc_ohm_14",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 38 &Omega; et est traversé par un courant de 16 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "608"
        ],
        "explanation": "U = R * I. Donc U = 38 * 16 = 608 V."
    },
    {
        "id": "proc_ohm_15",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 45 &Omega; et est traversé par un courant de 12 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "540"
        ],
        "explanation": "U = R * I. Donc U = 45 * 12 = 540 V."
    },
    {
        "id": "proc_ohm_16",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 57 &Omega; et est traversé par un courant de 14 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "798"
        ],
        "explanation": "U = R * I. Donc U = 57 * 14 = 798 V."
    },
    {
        "id": "proc_ohm_17",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 57 &Omega; et est traversé par un courant de 8 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "456"
        ],
        "explanation": "U = R * I. Donc U = 57 * 8 = 456 V."
    },
    {
        "id": "proc_ohm_18",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 54 &Omega; et est traversé par un courant de 5 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "270"
        ],
        "explanation": "U = R * I. Donc U = 54 * 5 = 270 V."
    },
    {
        "id": "proc_ohm_19",
        "section": "B",
        "univers": "materiel",
        "type": "short_answer",
        "text": "Un appareil a une résistance de 59 &Omega; et est traversé par un courant de 12 A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)",
        "exactMatch": [
            "708"
        ],
        "explanation": "U = R * I. Donc U = 59 * 12 = 708 V."
    },
    {
        "id": "proc_conc_0",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 200 mL contenant 34 g de soluté ?",
        "options": [
            "170.00 g/L",
            "17.00 g/L",
            "1700.00 g/L",
            "0.1700 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 0.2 L. C = 34 / 0.2 = 170.00 g/L."
    },
    {
        "id": "proc_conc_1",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 400 mL contenant 27 g de soluté ?",
        "options": [
            "67.50 g/L",
            "6.75 g/L",
            "675.00 g/L",
            "0.0675 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 0.4 L. C = 27 / 0.4 = 67.50 g/L."
    },
    {
        "id": "proc_conc_2",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 500 mL contenant 29 g de soluté ?",
        "options": [
            "58.00 g/L",
            "5.80 g/L",
            "580.00 g/L",
            "0.0580 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 0.5 L. C = 29 / 0.5 = 58.00 g/L."
    },
    {
        "id": "proc_conc_3",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 1000 mL contenant 41 g de soluté ?",
        "options": [
            "41.00 g/L",
            "4.10 g/L",
            "410.00 g/L",
            "0.0410 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 1 L. C = 41 / 1 = 41.00 g/L."
    },
    {
        "id": "proc_conc_4",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 400 mL contenant 37 g de soluté ?",
        "options": [
            "92.50 g/L",
            "9.25 g/L",
            "925.00 g/L",
            "0.0925 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 0.4 L. C = 37 / 0.4 = 92.50 g/L."
    },
    {
        "id": "proc_conc_5",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 1100 mL contenant 19 g de soluté ?",
        "options": [
            "17.27 g/L",
            "1.73 g/L",
            "172.73 g/L",
            "0.0173 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 1.1 L. C = 19 / 1.1 = 17.27 g/L."
    },
    {
        "id": "proc_conc_6",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 800 mL contenant 22 g de soluté ?",
        "options": [
            "27.50 g/L",
            "2.75 g/L",
            "275.00 g/L",
            "0.0275 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 0.8 L. C = 22 / 0.8 = 27.50 g/L."
    },
    {
        "id": "proc_conc_7",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 700 mL contenant 35 g de soluté ?",
        "options": [
            "50.00 g/L",
            "5.00 g/L",
            "500.00 g/L",
            "0.0500 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 0.7 L. C = 35 / 0.7 = 50.00 g/L."
    },
    {
        "id": "proc_conc_8",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 500 mL contenant 21 g de soluté ?",
        "options": [
            "42.00 g/L",
            "4.20 g/L",
            "420.00 g/L",
            "0.0420 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 0.5 L. C = 21 / 0.5 = 42.00 g/L."
    },
    {
        "id": "proc_conc_9",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 1000 mL contenant 9 g de soluté ?",
        "options": [
            "9.00 g/L",
            "0.90 g/L",
            "90.00 g/L",
            "0.0090 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 1 L. C = 9 / 1 = 9.00 g/L."
    },
    {
        "id": "proc_conc_10",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 600 mL contenant 32 g de soluté ?",
        "options": [
            "53.33 g/L",
            "5.33 g/L",
            "533.33 g/L",
            "0.0533 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 0.6 L. C = 32 / 0.6 = 53.33 g/L."
    },
    {
        "id": "proc_conc_11",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 200 mL contenant 23 g de soluté ?",
        "options": [
            "115.00 g/L",
            "11.50 g/L",
            "1150.00 g/L",
            "0.1150 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 0.2 L. C = 23 / 0.2 = 115.00 g/L."
    },
    {
        "id": "proc_conc_12",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 900 mL contenant 16 g de soluté ?",
        "options": [
            "17.78 g/L",
            "1.78 g/L",
            "177.78 g/L",
            "0.0178 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 0.9 L. C = 16 / 0.9 = 17.78 g/L."
    },
    {
        "id": "proc_conc_13",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 600 mL contenant 22 g de soluté ?",
        "options": [
            "36.67 g/L",
            "3.67 g/L",
            "366.67 g/L",
            "0.0367 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 0.6 L. C = 22 / 0.6 = 36.67 g/L."
    },
    {
        "id": "proc_conc_14",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 700 mL contenant 16 g de soluté ?",
        "options": [
            "22.86 g/L",
            "2.29 g/L",
            "228.57 g/L",
            "0.0229 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 0.7 L. C = 16 / 0.7 = 22.86 g/L."
    },
    {
        "id": "proc_conc_15",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 400 mL contenant 40 g de soluté ?",
        "options": [
            "100.00 g/L",
            "10.00 g/L",
            "1000.00 g/L",
            "0.1000 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 0.4 L. C = 40 / 0.4 = 100.00 g/L."
    },
    {
        "id": "proc_conc_16",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 600 mL contenant 15 g de soluté ?",
        "options": [
            "25.00 g/L",
            "2.50 g/L",
            "250.00 g/L",
            "0.0250 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 0.6 L. C = 15 / 0.6 = 25.00 g/L."
    },
    {
        "id": "proc_conc_17",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 700 mL contenant 13 g de soluté ?",
        "options": [
            "18.57 g/L",
            "1.86 g/L",
            "185.71 g/L",
            "0.0186 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 0.7 L. C = 13 / 0.7 = 18.57 g/L."
    },
    {
        "id": "proc_conc_18",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 400 mL contenant 36 g de soluté ?",
        "options": [
            "90.00 g/L",
            "9.00 g/L",
            "900.00 g/L",
            "0.0900 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 0.4 L. C = 36 / 0.4 = 90.00 g/L."
    },
    {
        "id": "proc_conc_19",
        "section": "A",
        "univers": "materiel",
        "type": "multiple_choice",
        "text": "Quelle est la concentration en g/L d'une solution de 800 mL contenant 25 g de soluté ?",
        "options": [
            "31.25 g/L",
            "3.13 g/L",
            "312.50 g/L",
            "0.0313 g/L"
        ],
        "answer": 0,
        "explanation": "C = m / V. V en L = 0.8 L. C = 25 / 0.8 = 31.25 g/L."
    },
    {
        "id": "proc_eng_0",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Dans un système d'engrenage, la roue menante a 40 dents et la roue menée a 10 dents. Que se passe-t-il avec la vitesse de la roue menée ?",
        "options": [
            "Elle augmente d'un facteur de 4.0",
            "Elle diminue d'un facteur de 4.0",
            "Elle augmente d'un facteur de 0.3",
            "Elle reste identique"
        ],
        "answer": 0,
        "explanation": "Rapport = Dents menante / Dents menée = 40 / 10 = 4.0. La roue menée, ayant moins de dents, tourne plus vite."
    },
    {
        "id": "proc_eng_1",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Dans un système d'engrenage, la roue menante a 50 dents et la roue menée a 30 dents. Que se passe-t-il avec la vitesse de la roue menée ?",
        "options": [
            "Elle augmente d'un facteur de 1.7",
            "Elle diminue d'un facteur de 1.7",
            "Elle augmente d'un facteur de 0.6",
            "Elle reste identique"
        ],
        "answer": 0,
        "explanation": "Rapport = Dents menante / Dents menée = 50 / 30 = 1.7. La roue menée, ayant moins de dents, tourne plus vite."
    },
    {
        "id": "proc_eng_2",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Dans un système d'engrenage, la roue menante a 50 dents et la roue menée a 20 dents. Que se passe-t-il avec la vitesse de la roue menée ?",
        "options": [
            "Elle augmente d'un facteur de 2.5",
            "Elle diminue d'un facteur de 2.5",
            "Elle augmente d'un facteur de 0.4",
            "Elle reste identique"
        ],
        "answer": 0,
        "explanation": "Rapport = Dents menante / Dents menée = 50 / 20 = 2.5. La roue menée, ayant moins de dents, tourne plus vite."
    },
    {
        "id": "proc_eng_3",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Dans un système d'engrenage, la roue menante a 30 dents et la roue menée a 30 dents. Que se passe-t-il avec la vitesse de la roue menée ?",
        "options": [
            "Elle augmente d'un facteur de 1.0",
            "Elle diminue d'un facteur de 1.0",
            "Elle augmente d'un facteur de 1.0",
            "Elle reste identique"
        ],
        "answer": 0,
        "explanation": "Rapport = Dents menante / Dents menée = 30 / 30 = 1.0. La roue menée, ayant moins de dents, tourne plus vite."
    },
    {
        "id": "proc_eng_4",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Dans un système d'engrenage, la roue menante a 40 dents et la roue menée a 30 dents. Que se passe-t-il avec la vitesse de la roue menée ?",
        "options": [
            "Elle augmente d'un facteur de 1.3",
            "Elle diminue d'un facteur de 1.3",
            "Elle augmente d'un facteur de 0.8",
            "Elle reste identique"
        ],
        "answer": 0,
        "explanation": "Rapport = Dents menante / Dents menée = 40 / 30 = 1.3. La roue menée, ayant moins de dents, tourne plus vite."
    },
    {
        "id": "proc_eng_5",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Dans un système d'engrenage, la roue menante a 70 dents et la roue menée a 30 dents. Que se passe-t-il avec la vitesse de la roue menée ?",
        "options": [
            "Elle augmente d'un facteur de 2.3",
            "Elle diminue d'un facteur de 2.3",
            "Elle augmente d'un facteur de 0.4",
            "Elle reste identique"
        ],
        "answer": 0,
        "explanation": "Rapport = Dents menante / Dents menée = 70 / 30 = 2.3. La roue menée, ayant moins de dents, tourne plus vite."
    },
    {
        "id": "proc_eng_6",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Dans un système d'engrenage, la roue menante a 20 dents et la roue menée a 10 dents. Que se passe-t-il avec la vitesse de la roue menée ?",
        "options": [
            "Elle augmente d'un facteur de 2.0",
            "Elle diminue d'un facteur de 2.0",
            "Elle augmente d'un facteur de 0.5",
            "Elle reste identique"
        ],
        "answer": 0,
        "explanation": "Rapport = Dents menante / Dents menée = 20 / 10 = 2.0. La roue menée, ayant moins de dents, tourne plus vite."
    },
    {
        "id": "proc_eng_7",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Dans un système d'engrenage, la roue menante a 40 dents et la roue menée a 20 dents. Que se passe-t-il avec la vitesse de la roue menée ?",
        "options": [
            "Elle augmente d'un facteur de 2.0",
            "Elle diminue d'un facteur de 2.0",
            "Elle augmente d'un facteur de 0.5",
            "Elle reste identique"
        ],
        "answer": 0,
        "explanation": "Rapport = Dents menante / Dents menée = 40 / 20 = 2.0. La roue menée, ayant moins de dents, tourne plus vite."
    },
    {
        "id": "proc_eng_8",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Dans un système d'engrenage, la roue menante a 40 dents et la roue menée a 20 dents. Que se passe-t-il avec la vitesse de la roue menée ?",
        "options": [
            "Elle augmente d'un facteur de 2.0",
            "Elle diminue d'un facteur de 2.0",
            "Elle augmente d'un facteur de 0.5",
            "Elle reste identique"
        ],
        "answer": 0,
        "explanation": "Rapport = Dents menante / Dents menée = 40 / 20 = 2.0. La roue menée, ayant moins de dents, tourne plus vite."
    },
    {
        "id": "proc_eng_9",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Dans un système d'engrenage, la roue menante a 40 dents et la roue menée a 20 dents. Que se passe-t-il avec la vitesse de la roue menée ?",
        "options": [
            "Elle augmente d'un facteur de 2.0",
            "Elle diminue d'un facteur de 2.0",
            "Elle augmente d'un facteur de 0.5",
            "Elle reste identique"
        ],
        "answer": 0,
        "explanation": "Rapport = Dents menante / Dents menée = 40 / 20 = 2.0. La roue menée, ayant moins de dents, tourne plus vite."
    },
    {
        "id": "proc_eng_10",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Dans un système d'engrenage, la roue menante a 40 dents et la roue menée a 20 dents. Que se passe-t-il avec la vitesse de la roue menée ?",
        "options": [
            "Elle augmente d'un facteur de 2.0",
            "Elle diminue d'un facteur de 2.0",
            "Elle augmente d'un facteur de 0.5",
            "Elle reste identique"
        ],
        "answer": 0,
        "explanation": "Rapport = Dents menante / Dents menée = 40 / 20 = 2.0. La roue menée, ayant moins de dents, tourne plus vite."
    },
    {
        "id": "proc_eng_11",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Dans un système d'engrenage, la roue menante a 60 dents et la roue menée a 20 dents. Que se passe-t-il avec la vitesse de la roue menée ?",
        "options": [
            "Elle augmente d'un facteur de 3.0",
            "Elle diminue d'un facteur de 3.0",
            "Elle augmente d'un facteur de 0.3",
            "Elle reste identique"
        ],
        "answer": 0,
        "explanation": "Rapport = Dents menante / Dents menée = 60 / 20 = 3.0. La roue menée, ayant moins de dents, tourne plus vite."
    },
    {
        "id": "proc_eng_12",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Dans un système d'engrenage, la roue menante a 20 dents et la roue menée a 30 dents. Que se passe-t-il avec la vitesse de la roue menée ?",
        "options": [
            "Elle augmente d'un facteur de 0.7",
            "Elle diminue d'un facteur de 0.7",
            "Elle augmente d'un facteur de 1.5",
            "Elle reste identique"
        ],
        "answer": 0,
        "explanation": "Rapport = Dents menante / Dents menée = 20 / 30 = 0.7. La roue menée, ayant moins de dents, tourne plus vite."
    },
    {
        "id": "proc_eng_13",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Dans un système d'engrenage, la roue menante a 50 dents et la roue menée a 10 dents. Que se passe-t-il avec la vitesse de la roue menée ?",
        "options": [
            "Elle augmente d'un facteur de 5.0",
            "Elle diminue d'un facteur de 5.0",
            "Elle augmente d'un facteur de 0.2",
            "Elle reste identique"
        ],
        "answer": 0,
        "explanation": "Rapport = Dents menante / Dents menée = 50 / 10 = 5.0. La roue menée, ayant moins de dents, tourne plus vite."
    },
    {
        "id": "proc_eng_14",
        "section": "A",
        "univers": "technologique",
        "type": "multiple_choice",
        "text": "Dans un système d'engrenage, la roue menante a 50 dents et la roue menée a 10 dents. Que se passe-t-il avec la vitesse de la roue menée ?",
        "options": [
            "Elle augmente d'un facteur de 5.0",
            "Elle diminue d'un facteur de 5.0",
            "Elle augmente d'un facteur de 0.2",
            "Elle reste identique"
        ],
        "answer": 0,
        "explanation": "Rapport = Dents menante / Dents menée = 50 / 10 = 5.0. La roue menée, ayant moins de dents, tourne plus vite."
    }
];
