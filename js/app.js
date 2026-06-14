/**
 * app.js
 * Contrôleur principal de l'application. Gère l'UI globale et le routage.
 */

const app = {
    init() {
        // Init Storage et Audio
        AudioEngine.init();
        
        // Appliquer le thème sauvegardé
        const theme = Storage.getTheme();
        document.documentElement.setAttribute('data-theme', theme);
        this.updateThemeIcon(theme);

        // Appliquer l'état du son
        this.updateSoundIcon(Storage.getSoundEnabled());

        // Event listeners (Boutons Header)
        document.getElementById('btn-theme').addEventListener('click', () => this.toggleTheme());
        document.getElementById('btn-sound').addEventListener('click', () => {
            const isEnabled = AudioEngine.toggle();
            this.updateSoundIcon(isEnabled);
        });

        // Mise en place des contenus de l'aide-mémoire (Formules et Tableau)
        AideMemoire.renderFormules();
        AideMemoire.renderTableau();

        // Mise à jour des stats sur le Dashboard
        this.renderStats();
    },

    // --- Routage simple ---
    
    showView(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById(viewId).classList.add('active');
    },

    showDashboard() {
        this.renderStats();
        this.showView('view-dashboard');
    },

    showResults(score, detailsHtml) {
        document.getElementById('final-score').textContent = score;
        document.getElementById('score-details').innerHTML = detailsHtml;
        this.showView('view-results');
    },

    // --- Quiz Delegation ---

    startQuiz(mode) {
        AudioEngine.playSelect();
        QuizEngine.start(mode);
        this.showView('view-quiz');
    },

    submitAnswer() {
        QuizEngine.submitAnswer();
    },

    nextQuestion() {
        QuizEngine.nextQuestion();
    },

    prevQuestion() {
        QuizEngine.prevQuestion();
    },

    finishQuiz() {
        QuizEngine.finish();
    },

    // --- UI Controls ---

    toggleTheme() {
        AudioEngine.playSelect();
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        Storage.setTheme(next);
        this.updateThemeIcon(next);
    },

    updateThemeIcon(theme) {
        const btn = document.getElementById('btn-theme');
        if (theme === 'dark') {
            btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
        } else {
            btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
        }
    },

    updateSoundIcon(isEnabled) {
        const btn = document.getElementById('btn-sound');
        if (isEnabled) {
            btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
        } else {
            btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-x"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>`;
        }
    },

    toggleModal(modalId) {
        AudioEngine.playSelect();
        const modal = document.getElementById(modalId);
        modal.classList.toggle('show');
    },

    renderStats() {
        const stats = Storage.getStats();
        const container = document.getElementById('user-stats');
        
        if (stats.totalCompleted === 0) {
            container.innerHTML = `<p class="text-muted">Aucun examen complété pour le moment.</p>`;
            return;
        }

        const calcPct = (c, t) => t > 0 ? Math.round((c/t)*100) : 0;
        
        container.innerHTML = `
            <p>Examens/Sessions complétés : <strong>${stats.totalCompleted}</strong></p>
            <div style="margin-top:1rem;">
                <p>Matériel : ${calcPct(stats.univers.materiel.correct, stats.univers.materiel.total)}%</p>
                <p>Technologique : ${calcPct(stats.univers.technologique.correct, stats.univers.technologique.total)}%</p>
                <p>Terre et Espace : ${calcPct(stats.univers.terre_espace.correct, stats.univers.terre_espace.total)}%</p>
            </div>
        `;
    }
};

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
