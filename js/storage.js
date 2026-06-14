/**
 * storage.js
 * Module de gestion de la persistance des données via localStorage.
 */

const Storage = {
    KEYS: {
        THEME: 'st4_theme',
        SOUND: 'st4_sound',
        STATS: 'st4_stats'
    },

    // --- Paramètres Utilisateur ---

    getTheme() {
        return localStorage.getItem(this.KEYS.THEME) || 'light';
    },

    setTheme(theme) {
        localStorage.setItem(this.KEYS.THEME, theme);
    },

    getSoundEnabled() {
        const val = localStorage.getItem(this.KEYS.SOUND);
        return val !== null ? val === 'true' : true; // Activé par défaut
    },

    setSoundEnabled(isEnabled) {
        localStorage.setItem(this.KEYS.SOUND, isEnabled);
    },

    // --- Statistiques & Progression ---

    getStats() {
        const stats = localStorage.getItem(this.KEYS.STATS);
        if (stats) {
            try {
                return JSON.parse(stats);
            } catch (e) {
                console.error("Erreur lecture stats:", e);
            }
        }
        return {
            totalCompleted: 0,
            univers: {
                materiel: { correct: 0, total: 0 },
                technologique: { correct: 0, total: 0 },
                terre_espace: { correct: 0, total: 0 }
            }
        };
    },

    saveStats(stats) {
        localStorage.setItem(this.KEYS.STATS, JSON.stringify(stats));
    },

    updateStats(results) {
        const stats = this.getStats();
        stats.totalCompleted++;
        
        // results est un array de { univers, isCorrect }
        results.forEach(res => {
            if (stats.univers[res.univers]) {
                stats.univers[res.univers].total++;
                if (res.isCorrect) {
                    stats.univers[res.univers].correct++;
                }
            }
        });

        this.saveStats(stats);
    }
};
