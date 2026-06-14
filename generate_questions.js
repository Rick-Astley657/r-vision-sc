const fs = require('fs');

const questions = [];

// Helper
const addQ = (id, section, univers, type, text, options, answer, explanation, exactMatch, svgTarget, expectedAction) => {
    questions.push({
        id, section, univers, type, text, options, answer, explanation, exactMatch, svgTarget, expectedAction
    });
};

// ==========================================
// SECTION A: CHOIX MULTIPLES (15 questions)
// ==========================================

// --- Terre et Espace (besoin de 4 par exam, je vais en faire 15) ---
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
    { t: "Comment la photosynthèse influence-t-elle le cycle du carbone ?", o: ["Elle libère du CO<sub>2</sub> dans l'atmosphère.", "Elle absorbe le CO<sub>2</sub> atmosphérique pour fabriquer du glucose.", "Elle transforme le carbone en méthane.", "Elle dissout le carbone dans l'océan."], a: 1, e: "Les végétaux captent le CO<sub>2</sub> pour produire de l'énergie et de la matière organique." }
];

// --- Univers matériel (besoin de 10 par exam, j'en fais 30) ---
const mat_q = [
    { t: "L'ion B<sup>3+</sup> provient de l'atome de bore (Z=5). Cet ion possède combien de charges positives et négatives ?", o: ["2 positives, 5 négatives", "5 positives, 2 négatives", "5 positives, 8 négatives", "8 positives, 5 négatives"], a: 1, e: "L'atome de bore a 5 protons (5 positives). L'ion B<sup>3+</sup> a perdu 3 électrons, il lui en reste 2 (2 négatives)." },
    { t: "On veut neutraliser une solution de pH 10. Quelle substance utiliser ?", o: ["HCl (pH 2)", "NaOH (pH 6)", "HCl (pH 9)", "NaOH (pH 13)"], a: 0, e: "Un pH 10 est basique. Pour le neutraliser, il faut un acide fort, comme le HCl avec un pH très bas (pH 2)." },
    { t: "Dans quel circuit l'ampoule s'allume-t-elle ? Le circuit a un interrupteur fermé et un bécher contenant une solution.", o: ["Eau pure", "Cuivre solide, Cu", "Iodure de potassium, KI, en solution aqueuse", "Sucre, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, en solution"], a: 2, e: "KI est un sel (électrolyte) qui se dissocie en ions en solution aqueuse, permettant au courant de circuler. Le cuivre solide ne marche pas si le circuit est coupé par l'eau." },
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
    { t: "Quel appareil sert à mesurer l'intensité du courant électrique et comment doit-il être branché ?", o: ["Un voltmètre en parallèle.", "Un ampèremètre en série.", "Un voltmètre en série.", "Un ampèremètre en parallèle."], a: 1, e: "L'ampèremètre mesure l'intensité du courant (Ampères) et doit être placé en série pour que le courant le traverse." }
];

// --- Univers technologique (besoin de 1 par exam, j'en fais 10) ---
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
    { t: "Quel mécanisme de transmission de mouvement permet de relier deux axes très éloignés tout en conservant le même sens de rotation ?", o: ["Roues de friction", "Engrenage à roues dentées", "Poulies et courroie", "Vis sans fin"], a: 2, e: "Une courroie reliant deux poulies transmet le mouvement à distance et dans le même sens (si elle n'est pas croisée)." }
];

// ==========================================
// SECTION B: RÉPONSES COURTES (5 questions)
// ==========================================

const secB_te = [
    { t: "Dans un bassin versant, un déversement chimique a lieu au point A. Si le point B est situé plus bas dans le même cours d'eau, le point B est-il situé en AMONT ou en AVAL du point A ?", a: ["aval", "en aval"], e: "L'eau s'écoule du point le plus haut (amont) vers le plus bas (aval). Le point B est donc en aval." }
];

const secB_mat = [
    { t: "Quel est le nom de la famille du tableau périodique située dans l'avant-dernière colonne (VII A), connue pour être d'excellents désinfectants ?", a: ["halogènes", "les halogènes", "halogene", "halogène"], e: "C'est la famille des halogènes (ex: Chlore, Fluor)." },
    { t: "Calculez la résistance d'un appareil traversé par un courant de 2 A lorsqu'il est branché sur une tension de 120 V. (Inscrire seulement le nombre)", a: ["60"], e: "R = U / I = 120 / 2 = 60 &Omega;." },
    { t: "Un objet chargé positivement repoussera-t-il un objet chargé négativement ? (Répondez par Oui ou Non)", a: ["non"], e: "Les charges opposées s'attirent. Ce sont les charges de même signe qui se repoussent." },
    { t: "Dans une équation chimique, si vous avez CH<sub>4</sub> + 2 O<sub>2</sub> &rarr; CO<sub>2</sub> + X H<sub>2</sub>O, quelle est la valeur de X pour que l'équation soit balancée ?", a: ["2", "deux"], e: "Il y a 4 atomes d'hydrogène à gauche (dans CH<sub>4</sub>). Il faut donc 2 molécules de H<sub>2</sub>O à droite pour avoir 4 atomes de H." }
];

const secB_tech = [
    { t: "Si deux pièces de bois sont collées ensemble avec de la colle forte, cette liaison est-elle démontable ou indémontable ?", a: ["indémontable", "indemontable"], e: "La séparation des pièces causerait des dommages aux pièces ou à l'organe de liaison (la colle)." },
    { t: "Quel type de mouvement effectue le tiroir d'un bureau lorsqu'on l'ouvre ? (Rotation ou Translation)", a: ["translation"], e: "Le tiroir glisse en ligne droite, c'est un mouvement de translation." }
];

// ==========================================
// SECTION C: ANALYSE D'OBJET (5 questions sur le Compteur d'Eau)
// ==========================================

const secC_tech = [
    {
        id: "c1", section: "C", univers: "technologique", type: "svg_interactive",
        text: "Dans la vue mécanique (A à F), cliquez sur la pièce qui subit directement la force de l'eau (organe moteur du système complet).",
        svgTarget: "roue-aubes",
        explanation: "L'eau entre par la buse et frappe les pales de la roue à aubes (B). C'est elle qui amorce tout le mouvement de rotation du compteur."
    },
    {
        id: "c2", section: "C", univers: "technologique", type: "svg_interactive",
        text: "Dans le sous-ensemble de friction, l'aimant est fixé sur la grande roue de friction (E). Par rapport à la petite roue (D), la grande roue subit-elle une augmentation ou une diminution de vitesse ? Cliquez sur la grande roue (E) pour répondre.",
        svgTarget: "grande-roue-friction",
        expectedAction: "select_diminution", // Note: Il faudra ajouter cette option dans svg-interactivity
        explanation: "Puisque le mouvement passe d'une petite roue (menante) à une grande roue (menée), il y a une diminution de vitesse (la grande roue tourne plus lentement)."
    },
    {
        id: "c3", section: "C", univers: "technologique", type: "svg_interactive",
        text: "Dans le schéma du circuit électrique, cliquez sur le composant qui remplit la fonction de COMMANDE.",
        svgTarget: "interrupteur-magnetique",
        explanation: "L'interrupteur magnétique (I) s'ouvre et se ferme au passage de l'aimant, permettant de commander (contrôler) le passage du courant électrique."
    },
    {
        id: "c4", section: "C", univers: "technologique", type: "svg_interactive",
        text: "Le circuit électrique illustré est-il branché en SÉRIE ou en PARALLÈLE ? (Cliquez n'importe où sur les fils (G) pour ouvrir le menu)",
        svgTarget: "fils",
        expectedAction: "select_serie", 
        explanation: "Les composants (Pile, Interrupteur, Avertisseur) forment une seule boucle unique. Le courant n'a qu'un seul chemin possible : c'est un circuit en série."
    },
    {
        id: "c5", section: "C", univers: "technologique", type: "svg_interactive",
        text: "Avec le temps, la roue à aubes (B) ne tourne plus car son axe de guidage (C) est attaqué par la rouille. Quel entretien faut-il effectuer ? Cliquez sur l'axe (C) pour choisir l'action d'entretien.",
        svgTarget: "axe-roue-aubes",
        expectedAction: "select_lubrifier",
        explanation: "Si un axe rouille, il perd ses propriétés de glissement. L'entretien recommandé est de nettoyer et lubrifier l'axe de rotation."
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

// Génération de questions PROCÉDURALES pour atteindre 100+ questions
// 1. Loi d'Ohm (U = RI)
for (let i = 0; i < 20; i++) {
    const R = Math.floor(Math.random() * 50) + 10; // 10 à 60 ohms
    const I = Math.floor(Math.random() * 15) + 2;  // 2 à 16 A
    const U = R * I;
    questions.push({
        id: `proc_ohm_${i}`, section: 'B', univers: 'materiel', type: 'short_answer',
        text: `Un appareil a une résistance de ${R} &Omega; et est traversé par un courant de ${I} A. Quelle est la tension (V) à ses bornes ? (Inscrire seulement le nombre)`,
        exactMatch: [U.toString()],
        explanation: `U = R * I. Donc U = ${R} * ${I} = ${U} V.`
    });
}

// 2. Concentration (C = m/V)
for (let i = 0; i < 20; i++) {
    const m = Math.floor(Math.random() * 40) + 5; // 5 à 45 g
    const v_ml = (Math.floor(Math.random() * 10) + 2) * 100; // 200 à 1100 mL
    const v_l = v_ml / 1000;
    const c = m / v_l;
    questions.push({
        id: `proc_conc_${i}`, section: 'A', univers: 'materiel', type: 'multiple_choice',
        text: `Quelle est la concentration en g/L d'une solution de ${v_ml} mL contenant ${m} g de soluté ?`,
        options: [
            `${c.toFixed(2)} g/L`,
            `${(c/10).toFixed(2)} g/L`,
            `${(c*10).toFixed(2)} g/L`,
            `${(m/v_ml).toFixed(4)} g/L`
        ],
        answer: 0,
        explanation: `C = m / V. V en L = ${v_l} L. C = ${m} / ${v_l} = ${c.toFixed(2)} g/L.`
    });
}

// 3. Rapport d'engrenage
for (let i = 0; i < 15; i++) {
    const d_moteur = (Math.floor(Math.random() * 6) + 2) * 10; // 20 à 70
    const d_menee = (Math.floor(Math.random() * 3) + 1) * 10;  // 10 à 30
    const rapport = d_moteur / d_menee;
    questions.push({
        id: `proc_eng_${i}`, section: 'A', univers: 'technologique', type: 'multiple_choice',
        text: `Dans un système d'engrenage, la roue menante a ${d_moteur} dents et la roue menée a ${d_menee} dents. Que se passe-t-il avec la vitesse de la roue menée ?`,
        options: [
            `Elle augmente d'un facteur de ${rapport.toFixed(1)}`,
            `Elle diminue d'un facteur de ${rapport.toFixed(1)}`,
            `Elle augmente d'un facteur de ${(1/rapport).toFixed(1)}`,
            `Elle reste identique`
        ],
        answer: 0,
        explanation: `Rapport = Dents menante / Dents menée = ${d_moteur} / ${d_menee} = ${rapport.toFixed(1)}. La roue menée, ayant moins de dents, tourne plus vite.`
    });
}

const jsContent = `/**
 * questions.js
 * Banque MASSIVE de questions couvrant tout le programme ST 4.
 * Génération automatique avec pondération aléatoire.
 */

const QuestionBank = ${JSON.stringify(questions, null, 4)};
`;

fs.writeFileSync('C:\\\\Users\\\\SAAD\\\\.gemini\\\\antigravity\\\\scratch\\\\st4-revision\\\\js\\\\data\\\\questions.js', jsContent);
console.log('questions.js generated with ' + questions.length + ' questions.');
