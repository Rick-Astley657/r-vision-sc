/**
 * aide-memoire.js
 * Données et rendu de l'Aide-mémoire (Formules & Tableau périodique complet)
 */

const AideMemoire = {
    formulas: [
        { 
            math: "C = m / V", 
            desc: "C : concentration<br>m : quantité de soluté<br>V : quantité de solution" 
        },
        { 
            math: "P = U I", 
            desc: "P : puissance<br>U : différence de potentiel<br>I : intensité de courant électrique" 
        },
        { 
            math: "U = R I", 
            desc: "U : différence de potentiel<br>R : résistance<br>I : intensité de courant électrique" 
        },
        { 
            math: "E = P \u0394t", 
            desc: "E : énergie consommée<br>P : puissance<br>\u0394t : variation de temps" 
        },
        { 
            math: "Rendement énergétique (%) = <br><span style='font-size:0.9em; display:inline-block; border-bottom:1px solid currentColor; margin:0 5px;'>Quantité d'énergie utile</span> &times; 100<br><span style='font-size:0.9em;'>Quantité d'énergie consommée</span>", 
            desc: "",
            fullWidth: true
        }
    ],

    grandeurs: [
        { nom: "Masse volumique de l'eau", symbole: "\u03C1", valeur: "1,0 g/mL<br>ou<br>1,0 kg/L<br>ou<br>1000 kg/m³" },
        { nom: "Kilowatt-heure", symbole: "kW\u2022h", valeur: "1 kW\u2022h = 3 600 000 J" }
    ],

    elements: [
        null,
        { sym: "H", name: "hydrogène", mass: "1,01" },
        { sym: "He", name: "hélium", mass: "4,00" },
        { sym: "Li", name: "lithium", mass: "6,94" },
        { sym: "Be", name: "béryllium", mass: "9,01" },
        { sym: "B", name: "bore", mass: "10,81" },
        { sym: "C", name: "carbone", mass: "12,01" },
        { sym: "N", name: "azote", mass: "14,01" },
        { sym: "O", name: "oxygène", mass: "16,00" },
        { sym: "F", name: "fluor", mass: "19,00" },
        { sym: "Ne", name: "néon", mass: "20,18" },
        { sym: "Na", name: "sodium", mass: "22,99" },
        { sym: "Mg", name: "magnésium", mass: "24,31" },
        { sym: "Al", name: "aluminium", mass: "26,98" },
        { sym: "Si", name: "silicium", mass: "28,09" },
        { sym: "P", name: "phosphore", mass: "30,97" },
        { sym: "S", name: "soufre", mass: "32,07" },
        { sym: "Cl", name: "chlore", mass: "35,45" },
        { sym: "Ar", name: "argon", mass: "39,95" },
        { sym: "K", name: "potassium", mass: "39,10" },
        { sym: "Ca", name: "calcium", mass: "40,08" },
        { sym: "Sc", name: "scandium", mass: "44,96" },
        { sym: "Ti", name: "titane", mass: "47,90" },
        { sym: "V", name: "vanadium", mass: "50,94" },
        { sym: "Cr", name: "chrome", mass: "52,00" },
        { sym: "Mn", name: "manganèse", mass: "54,94" },
        { sym: "Fe", name: "fer", mass: "55,85" },
        { sym: "Co", name: "cobalt", mass: "58,93" },
        { sym: "Ni", name: "nickel", mass: "58,71" },
        { sym: "Cu", name: "cuivre", mass: "63,55" },
        { sym: "Zn", name: "zinc", mass: "65,39" },
        { sym: "Ga", name: "gallium", mass: "69,72" },
        { sym: "Ge", name: "germanium", mass: "72,59" },
        { sym: "As", name: "arsenic", mass: "74,92" },
        { sym: "Se", name: "sélénium", mass: "78,96" },
        { sym: "Br", name: "brome", mass: "79,90" },
        { sym: "Kr", name: "krypton", mass: "83,80" },
        { sym: "Rb", name: "rubidium", mass: "85,47" },
        { sym: "Sr", name: "strontium", mass: "87,62" },
        { sym: "Y", name: "yttrium", mass: "88,91" },
        { sym: "Zr", name: "zirconium", mass: "91,22" },
        { sym: "Nb", name: "niobium", mass: "92,91" },
        { sym: "Mo", name: "molybdène", mass: "95,94" },
        { sym: "Tc", name: "technétium", mass: "98,91" },
        { sym: "Ru", name: "ruthénium", mass: "101,07" },
        { sym: "Rh", name: "rhodium", mass: "102,91" },
        { sym: "Pd", name: "palladium", mass: "106,40" },
        { sym: "Ag", name: "argent", mass: "107,87" },
        { sym: "Cd", name: "cadmium", mass: "112,41" },
        { sym: "In", name: "indium", mass: "114,82" },
        { sym: "Sn", name: "étain", mass: "118,71" },
        { sym: "Sb", name: "antimoine", mass: "121,75" },
        { sym: "Te", name: "tellure", mass: "127,60" },
        { sym: "I", name: "iode", mass: "126,90" },
        { sym: "Xe", name: "xénon", mass: "131,30" },
        { sym: "Cs", name: "césium", mass: "132,91" },
        { sym: "Ba", name: "baryum", mass: "137,33" },
        { sym: "La", name: "lanthane", mass: "138,91" },
        { sym: "Ce", name: "cérium", mass: "140,12" },
        { sym: "Pr", name: "praséodyme", mass: "140,91" },
        { sym: "Nd", name: "néodyme", mass: "144,24" },
        { sym: "Pm", name: "prométhium", mass: "(145)" },
        { sym: "Sm", name: "samarium", mass: "150,36" },
        { sym: "Eu", name: "europium", mass: "151,96" },
        { sym: "Gd", name: "gadolinium", mass: "157,25" },
        { sym: "Tb", name: "terbium", mass: "158,93" },
        { sym: "Dy", name: "dysprosium", mass: "162,50" },
        { sym: "Ho", name: "holmium", mass: "164,93" },
        { sym: "Er", name: "erbium", mass: "167,26" },
        { sym: "Tm", name: "thulium", mass: "168,93" },
        { sym: "Yb", name: "ytterbium", mass: "173,05" },
        { sym: "Lu", name: "lutécium", mass: "174,97" },
        { sym: "Hf", name: "hafnium", mass: "178,49" },
        { sym: "Ta", name: "tantale", mass: "180,95" },
        { sym: "W", name: "tungstène", mass: "183,85" },
        { sym: "Re", name: "rhénium", mass: "186,21" },
        { sym: "Os", name: "osmium", mass: "190,20" },
        { sym: "Ir", name: "iridium", mass: "192,22" },
        { sym: "Pt", name: "platine", mass: "195,09" },
        { sym: "Au", name: "or", mass: "196,97" },
        { sym: "Hg", name: "mercure", mass: "200,59" },
        { sym: "Tl", name: "thallium", mass: "204,37" },
        { sym: "Pb", name: "plomb", mass: "207,20" },
        { sym: "Bi", name: "bismuth", mass: "208,98" },
        { sym: "Po", name: "polonium", mass: "(209)" },
        { sym: "At", name: "astate", mass: "(210)" },
        { sym: "Rn", name: "radon", mass: "(222)" },
        { sym: "Fr", name: "francium", mass: "(223)" },
        { sym: "Ra", name: "radium", mass: "(226)" },
        { sym: "Ac", name: "actinium", mass: "(227)" },
        { sym: "Th", name: "thorium", mass: "232,04" },
        { sym: "Pa", name: "protactinium", mass: "231,04" },
        { sym: "U", name: "uranium", mass: "238,03" },
        { sym: "Np", name: "neptunium", mass: "(237)" },
        { sym: "Pu", name: "plutonium", mass: "(244)" },
        { sym: "Am", name: "américium", mass: "(243)" },
        { sym: "Cm", name: "curium", mass: "(247)" },
        { sym: "Bk", name: "berkélium", mass: "(247)" },
        { sym: "Cf", name: "californium", mass: "(251)" },
        { sym: "Es", name: "einsteinium", mass: "(252)" },
        { sym: "Fm", name: "fermium", mass: "(257)" },
        { sym: "Md", name: "mendélévium", mass: "(258)" },
        { sym: "No", name: "nobélium", mass: "(259)" },
        { sym: "Lr", name: "lawrencium", mass: "(262)" },
        { sym: "Rf", name: "rutherfordium", mass: "(267)" },
        { sym: "Db", name: "dubnium", mass: "(268)" },
        { sym: "Sg", name: "seaborgium", mass: "(271)" },
        { sym: "Bh", name: "bohrium", mass: "(272)" },
        { sym: "Hs", name: "hassium", mass: "(270)" },
        { sym: "Mt", name: "meitnérium", mass: "(276)" },
        { sym: "Ds", name: "darmstadtium", mass: "(281)" },
        { sym: "Rg", name: "roentgenium", mass: "(280)" },
        { sym: "Cn", name: "copernicium", mass: "(285)" },
        { sym: "Nh", name: "nihonium", mass: "(284)" },
        { sym: "Fl", name: "flérovium", mass: "(289)" },
        { sym: "Mc", name: "moscovium", mass: "(288)" },
        { sym: "Lv", name: "livermorium", mass: "(293)" },
        { sym: "Ts", name: "tennessine", mass: "(292)" },
        { sym: "Og", name: "oganesson", mass: "(294)" }
    ],

    renderFormules() {
        const container = document.getElementById('formules-body');
        if (!container) return;
        
        let html = `
            <style>
                .formulas-table, .grandeurs-table { width: 100%; border-collapse: collapse; margin-bottom: 2rem; }
                .formulas-table td, .grandeurs-table td, .grandeurs-table th { padding: 1rem; border: 1px solid var(--border-color); vertical-align: middle; }
                .grandeurs-table th { background-color: rgba(0,0,0,0.05); font-weight: 600; text-align: center; }
                .formula-cell-math { font-size: 1.2rem; font-weight: 600; text-align: center; white-space: nowrap; width: 30%; color: var(--primary-color); }
                .formula-cell-desc { font-size: 0.9rem; color: var(--text-muted); }
            </style>
            
            <h3 style="margin-bottom:1rem; text-align:center;">FORMULES</h3>
            <table class="formulas-table">
                <tr>
                    <td class="formula-cell-math">${this.formulas[0].math}</td>
                    <td class="formula-cell-desc">${this.formulas[0].desc}</td>
                    <td class="formula-cell-math">${this.formulas[1].math}</td>
                    <td class="formula-cell-desc">${this.formulas[1].desc}</td>
                </tr>
                <tr>
                    <td class="formula-cell-math">${this.formulas[2].math}</td>
                    <td class="formula-cell-desc">${this.formulas[2].desc}</td>
                    <td class="formula-cell-math">${this.formulas[3].math}</td>
                    <td class="formula-cell-desc">${this.formulas[3].desc}</td>
                </tr>
                <tr>
                    <td colspan="4" style="text-align:center; padding: 1.5rem;">
                        <div style="font-size: 1.2rem; color: var(--primary-color); font-weight: 600; display:inline-block; vertical-align:middle;">
                            ${this.formulas[4].math}
                        </div>
                    </td>
                </tr>
            </table>

            <h3 style="margin-bottom:1rem; text-align:center;">GRANDEURS</h3>
            <table class="grandeurs-table text-center">
                <tr>
                    <th>NOM</th>
                    <th>SYMBOLE</th>
                    <th>VALEUR</th>
                </tr>
                ${this.grandeurs.map(g => `
                <tr>
                    <td>${g.nom}</td>
                    <td style="font-style:italic;">${g.symbole}</td>
                    <td>${g.valeur}</td>
                </tr>
                `).join('')}
            </table>
        `;
        
        container.innerHTML = html;
    },

    renderTableau() {
        const container = document.getElementById('tableau-body');
        if (!container) return;

        const el = (n) => {
            if (!this.elements[n]) return '';
            const e = this.elements[n];
            return `<strong>${n}</strong><br><strong style="font-size:1.2em;">${e.sym}</strong><br><small style="font-size:0.7em; line-height:1;">${e.name}<br>${e.mass}</small>`;
        };
        const td = (n, extraStyle='') => {
            return `<td style="padding:0.2rem; border:1px solid var(--border-color); width: 5.5%; height: 70px; vertical-align: top; ${extraStyle}">${el(n)}</td>`;
        };
        const empty = (colspan=1, extraStyle='') => `<td colspan="${colspan}" style="border:none; ${extraStyle}"></td>`;

        let html = `
            <style>
                .ptable { width:100%; border-collapse: collapse; text-align:center; min-width: 900px; font-size:0.85rem; line-height: 1.2; }
                .ptable th { padding:0.2rem; font-weight: normal; border: none; }
                .ptable td { padding:0.2rem; transition: background-color 0.2s; }
                .ptable td:hover { background-color: rgba(13, 110, 253, 0.05); }
                .ptable-legend { margin-bottom: 1rem; display: flex; justify-content: center; gap: 2rem; align-items: center; }
                .ptable-legend-box { border: 1px solid var(--border-color); padding: 0.5rem; text-align: center; }
            </style>
            
            <div class="ptable-legend">
                <div class="ptable-legend-box">
                    <strong>1</strong><br>
                    <strong style="font-size:1.2em;">H</strong><br>
                    <small style="font-size:0.7em;">hydrogène<br>1,01</small>
                </div>
                <div class="text-muted" style="text-align:left; font-size:0.9rem;">
                    &larr; Numéro atomique<br>
                    &larr; Symbole de l'élément<br>
                    &larr; Nom<br>
                    &larr; Masse atomique
                </div>
            </div>

            <div style="overflow-x:auto;">
                <table class="ptable">
                    <tr style="border-bottom: 2px solid var(--border-color)">
                        <th>I A<br>1</th><th>II A<br>2</th><th>III B<br>3</th><th>IV B<br>4</th><th>V B<br>5</th><th>VI B<br>6</th><th>VII B<br>7</th><th>8</th><th>VIII B<br>9</th><th>10</th><th>I B<br>11</th><th>II B<br>12</th><th>III A<br>13</th><th>IV A<br>14</th><th>V A<br>15</th><th>VI A<br>16</th><th>VII A<br>17</th><th>VIII A<br>18</th>
                    </tr>
                    <tr>${td(1)}${empty(16)}${td(2)}</tr>
                    <tr>${td(3)}${td(4)}${empty(10)}${td(5)}${td(6)}${td(7)}${td(8)}${td(9)}${td(10)}</tr>
                    <tr>${td(11)}${td(12)}${empty(10)}${td(13)}${td(14)}${td(15)}${td(16)}${td(17)}${td(18)}</tr>
                    <tr>${td(19)}${td(20)}${td(21)}${td(22)}${td(23)}${td(24)}${td(25)}${td(26)}${td(27)}${td(28)}${td(29)}${td(30)}${td(31)}${td(32)}${td(33)}${td(34)}${td(35)}${td(36)}</tr>
                    <tr>${td(37)}${td(38)}${td(39)}${td(40)}${td(41)}${td(42)}${td(43)}${td(44)}${td(45)}${td(46)}${td(47)}${td(48)}${td(49)}${td(50)}${td(51)}${td(52)}${td(53)}${td(54)}</tr>
                    <tr>${td(55)}${td(56)}<td style="border:1px solid var(--border-color); vertical-align:top; padding:0.2rem">57-71<br><small>Lanthanides</small></td>${td(72)}${td(73)}${td(74)}${td(75)}${td(76)}${td(77)}${td(78)}${td(79)}${td(80)}${td(81)}${td(82)}${td(83)}${td(84)}${td(85)}${td(86)}</tr>
                    <tr>${td(87)}${td(88)}<td style="border:1px solid var(--border-color); vertical-align:top; padding:0.2rem">89-103<br><small>Actinides</small></td>${td(104)}${td(105)}${td(106)}${td(107)}${td(108)}${td(109)}${td(110)}${td(111)}${td(112)}${td(113)}${td(114)}${td(115)}${td(116)}${td(117)}${td(118)}</tr>
                    
                    <tr><td colspan="18" style="height:20px; border:none;"></td></tr>
                    
                    <!-- Lanthanides -->
                    <tr>${empty(2)}${empty(1, "border-right:2px solid var(--border-color);")}${td(57)}${td(58)}${td(59)}${td(60)}${td(61)}${td(62)}${td(63)}${td(64)}${td(65)}${td(66)}${td(67)}${td(68)}${td(69)}${td(70)}${td(71)}</tr>
                    <!-- Actinides -->
                    <tr>${empty(2)}${empty(1, "border-right:2px solid var(--border-color);")}${td(89)}${td(90)}${td(91)}${td(92)}${td(93)}${td(94)}${td(95)}${td(96)}${td(97)}${td(98)}${td(99)}${td(100)}${td(101)}${td(102)}${td(103)}</tr>
                </table>
            </div>
        `;
        
        container.innerHTML = html;
    }
};
