const fs = require('fs');

const questions = [];

// ==========================================
// SECTION A: CHOIX MULTIPLES
// ==========================================

const te_q = [
    { t: "Laquelle de ces conséquences est engendrée par la fonte des glaciers côtiers sur les océans ?", o: ["Salinité augmente, circulation thermohaline ralentit", "Salinité diminue, circulation thermohaline ralentit", "Salinité diminue, niveau d'eau baisse", "Quantité d'eau diminue, salinité augmente"], a: 1, e: "La fonte des glaciers (eau douce) diminue la salinité de l'eau environnante et ralentit la circulation thermohaline car l'eau devient moins dense." },
    { t: "La hausse des gaz à effet de serre a des impacts sur les régions nordiques. Quelles sont les conséquences ?", o: ["Diminution des glissements de terrain", "Augmentation de l'effet d'albédo", "Augmentation des glissements de terrain et de la quantité d'eau dans les océans", "Diminution de la quantité d'eau dans les océans"], a: 2, e: "Le dégel du pergélisol fragilise les sols, causant des glissements de terrain, et la fonte des glaces augmente le niveau des océans." },
    { t: "Quel système de production d'électricité est idéal près d'un lac calme, dans un secteur très ensoleillé où il vente peu ?", o: ["Une éolienne", "Une hydrolienne", "Un panneau solaire", "Une génératrice au gaz naturel"], a: 2, e: "Le soleil est abondant et c'est une ressource renouvelable. L'absence de vent élimine l'éolienne, et le lac calme élimine l'hydrolienne." },
    { t: "À l'équateur, que se passe-t-il dans la circulation océanique ?", o: ["L'eau se refroidit, sa masse volumique diminue.", "L'eau se réchauffe, sa masse volumique diminue et elle reste en surface.", "L'eau se réchauffe, sa densité augmente.", "L'eau se refroidit et coule."], a: 1, e: "L'eau chaude est moins dense que l'eau froide, donc elle s'allège et reste en surface." },
    { t: "Au pôle Nord, que se passe-t-il dans la circulation océanique thermohaline ?", o: ["L'eau se refroidit, sa masse volumique augmente et elle descend vers le fond.", "L'eau se réchauffe et monte en surface.", "L'eau devient moins salée et reste en surface.", "L'eau s'évapore et diminue le niveau de la mer."], a: 0, e: "Le froid augmente la densité de l'eau, et la formation de la banquise expulse le sel (eau saumâtre), augmentant encore la salinité et la densité, ce qui fait plonger l'eau." },
    { t: "Qu'est-ce qu'un bassin versant ?", o: ["Une étendue d'eau fermée.", "Le point de rencontre de deux océans.", "Un territoire délimité par des lignes de crête où les eaux s'écoulent vers un même point.", "Un type de glacier."], a: 2, e: "Un bassin versant draine toutes les eaux précipitées vers un point bas commun, séparé par des lignes de crête." },
    { t: "Dans un bassin versant, si un polluant est déversé, où se retrouvera-t-il ?", o: ["En amont du point de déversement.", "En aval du point de déversement.", "Sur les lignes de crête.", "Il s'évaporera immédiatement."], a: 1, e: "L'eau coule toujours de l'amont (plus haut) vers l'aval (plus bas), emportant les polluants avec elle." },
    { t: "Lequel des gaz suivants est un gaz à effet de serre puissant libéré par la fonte du pergélisol ?", o: ["L'oxygène (O<sub>2</sub>)", "L'azote (N<sub>2</sub>)", "Le méthane (CH<sub>4</sub>)", "L'hélium (He)"], a: 2, e: "La matière organique dégèle et se décompose, libérant du méthane et du dioxyde de carbone." },
    { t: "Laquelle de ces ressources énergétiques ne provient PAS de la lithosphère ?", o: ["Le charbon", "L'uranium", "La géothermie", "L'hydroélectricité"], a: 3, e: "L'hydroélectricité provient de l'hydrosphère (l'eau en mouvement)." },
    { t: "Comment la photosynthèse influence-t-elle le cycle du carbone ?", o: ["Elle libère du CO<sub>2</sub> dans l'atmosphère.", "Elle absorbe le CO<sub>2</sub> atmosphérique pour fabriquer du glucose.", "Elle transforme le carbone en méthane.", "Elle dissout le carbone dans l'océan."], a: 1, e: "Les végétaux captent le CO<sub>2</sub> pour produire de l'énergie et de la matière organique." },
    { t: "Quelle conséquence est directement liée à la fonte de la banquise (glace de mer) ?", o: ["Hausse significative du niveau de la mer", "Disparition de l'habitat de l'ours polaire", "Diminution des inondations côtières", "Augmentation de la salinité de l'eau"], a: 1, e: "La banquise flotte déjà, sa fonte ne fait pas monter le niveau de la mer. Cependant, elle détruit l'habitat d'espèces nordiques comme l'ours polaire." },
    { t: "Quel facteur ne modifie pas la direction des courants marins de surface ?", o: ["La rotation de la Terre (force de Coriolis)", "Les vents dominants", "Les continents", "La salinité de l'eau"], a: 3, e: "La salinité influence les courants de profondeur (thermohaline), pas les courants de surface dirigés par les vents." },
    { t: "Une mine d'or rejette des eaux contaminées aux métaux lourds. Pourquoi les lacs situés en amont de la mine ne sont-ils pas contaminés ?", o: ["Parce que l'eau s'écoule toujours vers l'aval.", "Parce que les métaux lourds s'évaporent.", "Parce que l'eau coule de l'aval vers l'amont.", "Parce que les poissons filtrent l'eau en amont."], a: 0, e: "La topographie (lignes de crête) fait que l'eau d'un bassin versant s'écoule du point le plus haut (amont) vers le point le plus bas (aval)." },
    { t: "Quel est l'impact de l'agriculture intensive sur les écosystèmes aquatiques ?", o: ["Elle favorise la formation de la banquise.", "L'excès d'engrais (phosphates/nitrates) cause l'eutrophisation des lacs.", "Elle diminue la quantité d'eau dans les océans.", "Elle purifie l'eau des rivières."], a: 1, e: "Les engrais lessivés par la pluie se retrouvent dans les bassins versants, favorisant la prolifération d'algues (eutrophisation) qui étouffent le lac." }
];

const mat_q = [
    { t: "L'ion B<sup>3+</sup> provient de l'atome de bore (Z=5). Cet ion possède combien de charges positives et négatives ?", o: ["2 positives, 5 négatives", "5 positives, 2 négatives", "5 positives, 8 négatives", "8 positives, 5 négatives"], a: 1, e: "L'atome de bore a 5 protons (5 positives). L'ion B<sup>3+</sup> a perdu 3 électrons, il lui en reste 2 (2 négatives)." },
    { t: "On veut neutraliser une solution de pH 10. Quelle substance utiliser ?", o: ["HCl (pH 2)", "NaOH (pH 6)", "HCl (pH 9)", "NaOH (pH 13)"], a: 0, e: "Un pH 10 est basique. Pour le neutraliser, il faut un acide fort, comme le HCl avec un pH très bas (pH 2)." },
    { t: "Dans quel circuit l'ampoule s'allume-t-elle ? Le circuit a un interrupteur fermé et un bécher contenant une solution.", o: ["Eau pure", "Cuivre solide, Cu", "Iodure de potassium, KI, en solution aqueuse", "Sucre, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, en solution"], a: 2, e: "KI est un sel (électrolyte) qui se dissocie en ions en solution aqueuse, permettant au courant de circuler. Le sucre est un non-électrolyte." },
    { t: "Le sodium, Na, réagit avec l'eau, H<sub>2</sub>O, pour former NaOH et H<sub>2</sub>. Quelle est l'équation balancée ?", o: ["Na + H<sub>2</sub>O &rarr; NaOH + H<sub>2</sub>", "Na + 2 H<sub>2</sub>O &rarr; NaOH + 2 H<sub>2</sub>", "2 Na + H<sub>2</sub>O &rarr; 2 NaOH + H<sub>2</sub>", "2 Na + 2 H<sub>2</sub>O &rarr; 2 NaOH + H<sub>2</sub>"], a: 3, e: "Il faut 2 atomes de Na, 4 atomes de H (2x2) et 2 atomes de O des deux côtés pour que la masse soit conservée." },
    { t: "Un morceau de 3,76 g de magnésium réagit avec 50,00 g d'acide. Il se forme 53,73 g de produit en solution et un gaz s'échappe. Quelle est la masse de ce gaz (H<sub>2</sub>) ?", o: ["0,03 g", "0,08 g", "4,04 g", "53,76 g"], a: 0, e: "Loi de la conservation de la masse : Masse réactifs = Masse produits. 3,76 + 50,00 = 53,76 g. Produits : 53,73 + x = 53,76. Donc x = 0,03 g." },
    { t: "Lors d'un frottement entre du cuir et du coton, le cuir donne des charges négatives au coton. Que se passe-t-il ?", o: ["Les charges négatives se déplacent du coton au cuir.", "Les charges positives se déplacent du cuir au coton.", "Les charges négatives se déplacent du cuir au coton.", "Les charges positives se déplacent du coton au cuir."], a: 2, e: "Seuls les électrons (charges négatives) peuvent se déplacer. S'ils passent du cuir au coton, le coton devient négatif et le cuir devient positif." },
    { t: "On approche le pôle Nord d'un aimant 1 du pôle X d'un aimant 2, et il y a attraction. Quels sont les pôles possibles ?", o: ["X est Nord", "X est Sud", "X est positif", "X est négatif"], a: 1, e: "Les pôles opposés s'attirent (Nord et Sud)." },
    { t: "Pour qu'une perceuse fonctionne bien, elle nécessite 3 A sous 120 V. Quelle est la résistance de son moteur ?", o: ["40 &Omega;", "360 &Omega;", "0,025 &Omega;", "123 &Omega;"], a: 0, e: "Selon la loi d'Ohm, R = U / I = 120 V / 3 A = 40 &Omega;." },
    { t: "Une diode électroluminescente (DEL) a un rendement de 85 %. Si elle consomme 12 500 J d'énergie électrique, quelle est son énergie utile (lumineuse) ?", o: ["14 705 J", "1 875 J", "10 625 J", "12 500 J"], a: 2, e: "Rendement = Énergie utile / Énergie consommée. 0,85 = É_utile / 12 500. É_utile = 12 500 * 0,85 = 10 625 J." },
    { t: "Combien d'électrons de valence possède un atome de soufre (famille VI A) ?", o: ["2", "4", "6", "8"], a: 2, e: "Le chiffre romain de la famille (VI = 6) correspond au nombre d'électrons de valence pour les familles A." },
    { t: "Lequel des éléments suivants est un gaz inerte (noble) ?", o: ["Chlore (Cl)", "Sodium (Na)", "Néon (Ne)", "Oxygène (O)"], a: 2, e: "Le Néon appartient à la famille VIII A (gaz inertes), dont la dernière couche électronique est pleine." },
    { t: "Un ion chlorure (Cl<sup>-</sup>) a pris une configuration électronique stable. À quel gaz noble ressemble-t-il ?", o: ["Hélium (He)", "Néon (Ne)", "Argon (Ar)", "Krypton (Kr)"], a: 2, e: "Le chlore (Z=17) gagne 1 électron pour avoir 18 électrons, ce qui est la configuration de l'Argon." },
    { t: "Dans une solution de concentration 5 % (m/V), quelle masse de soluté trouve-t-on dans 200 mL ?", o: ["5 g", "10 g", "20 g", "50 g"], a: 1, e: "5 % (m/V) signifie 5 g par 100 mL. Donc dans 200 mL, il y a 10 g." },
    { t: "Quel type de transformation se produit lors de la neutralisation acidobasique ?", o: ["Un sel et de l'eau sont formés.", "Un acide fort devient un gaz.", "Une base se transforme en métal.", "Deux gaz forment un liquide."], a: 0, e: "Acide + Base &rarr; Sel + Eau." },
    { t: "Quel appareil sert à mesurer l'intensité du courant électrique et comment doit-il être branché ?", o: ["Un voltmètre en parallèle.", "Un ampèremètre en série.", "Un voltmètre en série.", "Un ampèremètre en parallèle."], a: 1, e: "L'ampèremètre mesure l'intensité du courant (Ampères) et doit être placé en série pour que le courant le traverse." },
    { t: "Si la concentration d'une solution d'eau salée est de 20 g/L, que se passe-t-il si j'évapore la moitié de l'eau ?", o: ["La concentration reste à 20 g/L", "La concentration diminue à 10 g/L", "La concentration augmente à 40 g/L", "Le sel s'évapore aussi"], a: 2, e: "L'évaporation retire le solvant mais laisse le soluté. Le volume diminue de moitié, donc la concentration (m/V) double." },
    { t: "L'azote liquide bout à -196°C. S'agit-il d'un changement physique ou chimique ?", o: ["Chimique, car une nouvelle substance est créée.", "Chimique, car c'est irréversible.", "Physique, car c'est un simple changement de phase (liquide à gaz).", "Physique, car l'azote réagit avec l'air."], a: 2, e: "L'ébullition est un changement d'état (physique). La substance reste de l'azote (N<sub>2</sub>)." },
    { t: "L'isotope Carbone-14 diffère du Carbone-12 par :", o: ["Son nombre de protons", "Son nombre d'électrons", "Son nombre de neutrons", "Son numéro atomique"], a: 2, e: "Des isotopes d'un même élément ont le même nombre de protons (donc le même Z) mais un nombre de neutrons différent." },
    { t: "Dans le modèle atomique de Rutherford-Bohr, que représente le numéro de la période (rangée) du tableau périodique ?", o: ["Le nombre de protons", "Le nombre de couches électroniques", "Le nombre d'électrons de valence", "La masse atomique"], a: 1, e: "La période indique le nombre de couches électroniques (orbites) sur lesquelles sont répartis les électrons." },
    { t: "Une cuisinière de 2000 W fonctionne pendant 3 heures. Quelle énergie en kWh a-t-elle consommée ?", o: ["6000 kWh", "6 kWh", "0,6 kWh", "2003 kWh"], a: 1, e: "E = P x t. Puissance en kW = 2 kW. E = 2 kW x 3 h = 6 kWh." }
];

const tech_q = [
    { t: "La plupart des réceptacles de brouettes sont formés d'une feuille de métal compressée. Quelle propriété mécanique permet au métal de prendre cette forme sans se rompre ?", o: ["La ductilité", "La résilience", "La malléabilité", "La rigidité"], a: 2, e: "La malléabilité est la capacité de s'aplatir ou se courber sans se rompre (souvent utilisé pour faire des feuilles ou des formes pressées)." },
    { t: "Dans un système à pignon et crémaillère, si le pignon est l'organe moteur, quelle transformation de mouvement s'opère ?", o: ["Rotation en rotation", "Rotation en translation", "Translation en rotation", "Translation en translation"], a: 1, e: "Le pignon (roue dentée) tourne (rotation) et fait avancer la crémaillère (translation)." },
    { t: "Quelle est la principale caractéristique d'une liaison DÉMONTABLE ?", o: ["Elle empêche tout mouvement.", "Elle utilise un organe de liaison élastique.", "Elle permet de séparer les pièces sans endommager les pièces ou l'organe de liaison.", "Elle implique que les pièces ne peuvent plus bouger."], a: 2, e: "Une vis ou un écrou permet une liaison démontable. Un rivet ou de la colle crée une liaison indémontable." },
    { t: "Un élève observe que si la roue menante a 48 dents et la roue menée a 24 dents, la roue menée tourne plus vite. Quel est le rapport d'engrenage ?", o: ["0,5", "1", "2", "4"], a: 2, e: "Rapport = Dents menante / Dents menée = 48 / 24 = 2. La roue menée tourne 2 fois plus vite." },
    { t: "Si deux roues de friction sont en contact direct, quel est le sens de rotation de la deuxième roue par rapport à la première ?", o: ["Identique", "Inverse", "Perpendiculaire", "Alternatif"], a: 1, e: "Dans un engrenage simple ou des roues de friction en contact direct, le sens de rotation s'inverse toujours d'une roue à l'autre." },
    { t: "Quelle fonction électrique empêche le courant de passer à travers le corps d'une personne qui manipule un fil ?", o: ["L'alimentation", "La conduction", "L'isolation", "La protection"], a: 2, e: "L'isolant (comme le plastique autour du fil) empêche le courant de s'échapper." },
    { t: "À quoi sert un fusible dans un circuit électrique ?", o: ["À commander l'allumage.", "À fournir de l'énergie.", "À protéger le circuit en fondant si le courant est trop fort.", "À transformer l'énergie électrique en lumière."], a: 2, e: "C'est un dispositif de protection qui coupe le circuit en cas de surcharge." },
    { t: "Les matériaux céramiques sont très utilisés dans les fours. Quelle propriété principale justifie ce choix ?", o: ["Leur haute conductibilité électrique", "Leur grande malléabilité", "Leur résistance à la chaleur", "Leur résilience aux chocs"], a: 2, e: "Les céramiques résistent à de très hautes températures sans se dégrader." },
    { t: "Dans une liaison complète, est-ce qu'il y a un guidage ?", o: ["Oui, toujours.", "Non, il n'y a aucun mouvement possible entre les pièces.", "Seulement si c'est élastique.", "Oui, un guidage en translation."], a: 1, e: "Une liaison complète (totale) signifie que les deux pièces sont solidaires et ne bougent pas l'une par rapport à l'autre. Il n'y a donc pas de guidage." },
    { t: "Quel mécanisme de transmission de mouvement permet de relier deux axes très éloignés tout en conservant le même sens de rotation ?", o: ["Roues de friction", "Engrenage à roues dentées", "Poulies et courroie", "Vis sans fin"], a: 2, e: "Une courroie reliant deux poulies transmet le mouvement à distance et dans le même sens (si elle n'est pas croisée)." },
    { t: "Le châssis d'une voiture subit le poids de la carrosserie et des passagers. Quelle contrainte mécanique principale subit-il ?", o: ["Traction", "Compression", "Torsion", "Cisaillement"], a: 1, e: "Le poids pousse vers le bas sur le châssis, le soumettant à un écrasement (compression)." },
    { t: "Pour assembler de façon permanente des pièces métalliques d'un vélo, on utilise la soudure. Cette liaison est-elle démontable ou indémontable ?", o: ["Démontable", "Indémontable", "Élastique", "Partielle"], a: 1, e: "Pour séparer des pièces soudées, il faut briser la soudure ou le métal. La liaison est donc indémontable." },
    { t: "Quel est l'avantage principal d'un système vis et écrou pour un cric de voiture ?", o: ["Il permet une rotation rapide.", "Il transforme un mouvement de translation en rotation.", "Il est réversible.", "Il transforme une rotation en translation avec beaucoup de force."], a: 3, e: "Le système vis-écrou permet de soulever une lourde charge (translation) en tournant simplement la vis (rotation). De plus, il est généralement irréversible (le poids ne fait pas redescendre le cric)." }
];

// ==========================================
// SECTION B: RÉPONSES COURTES
// ==========================================

const secB_te = [
    { t: "Dans un bassin versant, un déversement chimique a lieu au point A. Si le point B est situé plus bas dans le même cours d'eau, le point B est-il situé en AMONT ou en AVAL du point A ?", a: ["aval", "en aval"], e: "L'eau s'écoule du point le plus haut (amont) vers le plus bas (aval). Le point B est donc en aval." }
];

const secB_mat = [
    { t: "Quel est le nom de la famille du tableau périodique située dans l'avant-dernière colonne (VII A), connue pour être d'excellents désinfectants ?", a: ["halogènes", "les halogènes", "halogene", "halogène"], e: "C'est la famille des halogènes (ex: Chlore, Fluor)." },
    { t: "Calculez la résistance d'un appareil traversé par un courant de 2 A lorsqu'il est branché sur une tension de 120 V. (Inscrire seulement le nombre)", a: ["60"], e: "R = U / I = 120 / 2 = 60 &Omega;." },
    { t: "Un objet chargé positivement repoussera-t-il un objet chargé négativement ? (Répondez par Oui ou Non)", a: ["non"], e: "Les charges opposées s'attirent. Ce sont les charges de même signe qui se repoussent." },
    { t: "Dans une équation chimique, si vous avez CH<sub>4</sub> + 2 O<sub>2</sub> &rarr; CO<sub>2</sub> + X H<sub>2</sub>O, quelle est la valeur de X pour que l'équation soit balancée ?", a: ["2", "deux"], e: "Il y a 4 atomes d'hydrogène à gauche (dans CH<sub>4</sub>). Il faut donc 2 molécules de H<sub>2</sub>O à droite pour avoir 4 atomes de H." },
    { t: "À partir du modèle de Bohr-Rutherford, combien de protons possède un atome de Fluor (F) dont le numéro atomique est 9 ? (Inscrire un nombre)", a: ["9", "neuf"], e: "Le numéro atomique (Z) correspond exactement au nombre de protons de l'élément." }
];

const secB_tech = [
    { t: "Si deux pièces de bois sont collées ensemble avec de la colle forte, cette liaison est-elle démontable ou indémontable ?", a: ["indémontable", "indemontable"], e: "La séparation des pièces causerait des dommages aux pièces ou à l'organe de liaison (la colle)." },
    { t: "Quel type de mouvement effectue le tiroir d'un bureau lorsqu'on l'ouvre ? (Rotation ou Translation)", a: ["translation"], e: "Le tiroir glisse en ligne droite, c'est un mouvement de translation." }
];

// ==========================================
// SECTION C: ANALYSE D'OBJET (20 Questions - Compteur d'eau)
// ==========================================

const secC_tech = [
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
    }
];

// Assemblage de la banque de données
let qid = 1;
const process = (arr, sec, uni, type) => {
    arr.forEach(item => {
        let q = { id: `q${qid++}`, section: sec, univers: uni, type: type, text: item.t, explanation: item.e };
        if (type === 'multiple_choice') {
            q.options = item.o;
            q.answer = item.a;
        } else if (type === 'short_answer') {
            q.exactMatch = item.a;
        }
        questions.push(q);
    });
};

process(te_q, 'A', 'terre_espace', 'multiple_choice');
process(mat_q, 'A', 'materiel', 'multiple_choice');
process(tech_q, 'A', 'technologique', 'multiple_choice');

process(secB_te, 'B', 'terre_espace', 'short_answer');
process(secB_mat, 'B', 'materiel', 'short_answer');
process(secB_tech, 'B', 'technologique', 'short_answer');

// Ajout Section C
secC_tech.forEach(q => questions.push(q));

// Écriture du fichier final sans questions procédurales répétitives
const jsContent = `/**
 * questions.js
 * Banque de questions diversifiée pour la révision ST 4.
 * Génération manuelle équilibrée.
 */

const QuestionBank = ${JSON.stringify(questions, null, 4)};
`;

fs.writeFileSync('C:\\\\Users\\\\SAAD\\\\.gemini\\\\antigravity\\\\scratch\\\\st4-revision\\\\révision sc\\\\js\\\\data\\\\questions.js', jsContent);
console.log('questions.js generated with ' + questions.length + ' distinct and conceptually rich questions.');
