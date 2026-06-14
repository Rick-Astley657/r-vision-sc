/**
 * svg-interactivity.js
 * Module de gestion de la Section C (Analyse d'objet).
 * Affiche les ressources dans un panneau latéral non-obtrusif.
 */

const SVGEngine = {
    currentQuestion: null,
    onAnswered: null,
    resourcePanelOpen: false,
    
    renderSVG(container) {
        container.innerHTML = `
            <div id="section-c-resources-btn" style="margin-bottom: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                <button class="primary-btn" onclick="SVGEngine.toggleResources()" style="display:inline-flex; align-items:center; gap:0.5rem;">
                    📐 Documents de référence
                    <span id="res-toggle-icon" style="font-size:0.8rem;">▼</span>
                </button>
                <a href="https://drive.google.com/file/d/1XT_nwoAIJnfJGGroo2h5_GUudXz4Ng_7/view?usp=sharing" target="_blank" class="primary-btn" style="text-decoration: none; display: inline-flex; align-items:center; gap:0.5rem; background: var(--text-muted);">
                    ▶ Vidéo du fonctionnement
                </a>
            </div>

            <div id="section-c-resources-panel" style="display:none; margin-bottom: 1rem; border: 1px solid var(--border-color); border-radius: var(--radius); overflow: hidden; background: white; max-height: 60vh; overflow-y: auto;">
                <div style="display: flex; border-bottom: 1px solid var(--border-color);">
                    <button id="tab-meca" class="section-c-tab active" onclick="SVGEngine.showTab('meca')" style="flex:1; padding: 0.6rem; border:none; cursor:pointer; font-weight:600; background: var(--primary-color); color:white; font-size:0.9rem;">Vue mécanique</button>
                    <button id="tab-elec" class="section-c-tab" onclick="SVGEngine.showTab('elec')" style="flex:1; padding: 0.6rem; border:none; cursor:pointer; font-weight:600; background: var(--surface-color); color:var(--text-color); font-size:0.9rem;">Vue électrique</button>
                </div>
                <div id="tab-content-meca" style="display:block;">
                    <img src="img/vue_mecanique.png" alt="Vue éclatée mécanique" style="width: 100%; height: auto; display: block;">
                </div>
                <div id="tab-content-elec" style="display:none;">
                    <img src="img/vue_electrique.png" alt="Vue éclatée électrique" style="width: 100%; height: auto; display: block;">
                </div>
            </div>

            <div id="section-c-svg" style="width: 100%; margin: 0 auto;">
                <div id="section-c-answer-zone" style="background: var(--surface-color); border: 1px solid var(--border-color); border-radius: var(--radius); padding: 1.5rem;">
                    <p id="section-c-instruction" style="font-weight: 600; margin-bottom: 1rem; color: var(--text-color);">Sélectionnez votre réponse :</p>
                    <div id="section-c-options" style="display: flex; flex-direction: column; gap: 0.5rem;"></div>
                </div>
            </div>
        `;
    },

    toggleResources() {
        const panel = document.getElementById('section-c-resources-panel');
        const icon = document.getElementById('res-toggle-icon');
        if (!panel) return;
        this.resourcePanelOpen = !this.resourcePanelOpen;
        panel.style.display = this.resourcePanelOpen ? 'block' : 'none';
        icon.textContent = this.resourcePanelOpen ? '▲' : '▼';
    },

    showTab(tab) {
        const mecaContent = document.getElementById('tab-content-meca');
        const elecContent = document.getElementById('tab-content-elec');
        const mecaTab = document.getElementById('tab-meca');
        const elecTab = document.getElementById('tab-elec');
        
        if (tab === 'meca') {
            mecaContent.style.display = 'block';
            elecContent.style.display = 'none';
            mecaTab.style.background = 'var(--primary-color)';
            mecaTab.style.color = 'white';
            elecTab.style.background = 'var(--surface-color)';
            elecTab.style.color = 'var(--text-color)';
        } else {
            mecaContent.style.display = 'none';
            elecContent.style.display = 'block';
            elecTab.style.background = 'var(--primary-color)';
            elecTab.style.color = 'white';
            mecaTab.style.background = 'var(--surface-color)';
            mecaTab.style.color = 'var(--text-color)';
        }
    },

    loadQuestion(q, callback) {
        this.currentQuestion = q;
        this.onAnswered = callback;

        const optionsDiv = document.getElementById('section-c-options');
        if (!optionsDiv) return;

        if (q.choices && q.choices.length > 0) {
            optionsDiv.innerHTML = '';
            q.choices.forEach((choice, idx) => {
                const btn = document.createElement('button');
                btn.className = 'primary-btn section-c-choice';
                btn.style.cssText = 'text-align: left; padding: 0.75rem 1rem; background: var(--surface-color); color: var(--text-color); border: 2px solid var(--border-color); cursor: pointer; transition: all 0.2s; width: 100%;';
                btn.textContent = choice;
                btn.addEventListener('mouseover', () => {
                    if (!btn.disabled) btn.style.borderColor = 'var(--primary-color)';
                });
                btn.addEventListener('mouseout', () => {
                    if (!btn.disabled) btn.style.borderColor = 'var(--border-color)';
                });
                btn.addEventListener('click', () => {
                    if (btn.disabled) return;
                    AudioEngine.playSelect();
                    
                    document.querySelectorAll('.section-c-choice').forEach(b => {
                        b.disabled = true;
                        b.style.cursor = 'default';
                        b.style.opacity = '0.7';
                    });

                    const isCorrect = (idx === q.correctChoice);
                    
                    if (isCorrect) {
                        btn.style.borderColor = 'var(--success-color)';
                        btn.style.background = 'rgba(25, 135, 84, 0.1)';
                        btn.style.opacity = '1';
                    } else {
                        btn.style.borderColor = 'var(--danger-color)';
                        btn.style.background = 'rgba(220, 53, 69, 0.1)';
                        btn.style.opacity = '1';
                        const correctBtn = document.querySelectorAll('.section-c-choice')[q.correctChoice];
                        if (correctBtn) {
                            correctBtn.style.borderColor = 'var(--success-color)';
                            correctBtn.style.background = 'rgba(25, 135, 84, 0.1)';
                            correctBtn.style.opacity = '1';
                        }
                    }

                    this.onAnswered(isCorrect);
                });
                optionsDiv.appendChild(btn);
            });
        }
    },

    hideContextMenu() {},
    attachEvents() {},
    showContextMenu() {},
    submitAction() {}
};
