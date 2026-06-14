/**
 * quiz.js
 * Moteur principal du quiz. Gère la sélection des questions, la navigation et les scores.
 */

const QuizEngine = {
    currentQuestions: [],
    currentIndex: 0,
    userAnswers: [], // Format: { answered: boolean, isCorrect: boolean, selectedValue: any }
    isAnswerSubmited: false,
    currentMode: null,

    saveState() {
        if (!this.currentMode) return;
        const state = {
            currentQuestions: this.currentQuestions,
            currentIndex: this.currentIndex,
            userAnswers: this.userAnswers
        };
        localStorage.setItem('quizState_' + this.currentMode, JSON.stringify(state));
    },

    clearState() {
        if (!this.currentMode) return;
        localStorage.removeItem('quizState_' + this.currentMode);
    },

    // Fonction utilitaire pour mélanger un tableau
    shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    },

    start(mode) {
        this.currentMode = mode;

        // Tenter de charger l'état sauvegardé
        const saved = localStorage.getItem('quizState_' + mode);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Si la pratique n'est pas terminée, on reprend
                if (parsed.currentIndex < parsed.currentQuestions.length && parsed.userAnswers.length > 0) {
                    this.currentQuestions = parsed.currentQuestions;
                    this.currentIndex = parsed.currentIndex;
                    this.userAnswers = parsed.userAnswers;
                    this.renderQuestion();
                    return;
                }
            } catch(e) {
                console.error('Save data corrupted', e);
            }
        }

        this.currentIndex = 0;
        this.userAnswers = [];
        this.currentQuestions = [];
        
        // Sélection des questions selon le mode
        if (mode === 'full') {
            // Pondération de l'examen ministériel (25 Q) :
            // Section A (15 Q) : 4 Terre, 10 Matériel, 1 Techno
            // Section B (5 Q) : 1 Terre, 3 Matériel, 1 Techno
            // Section C (5 Q) : 5 Techno (Analyse)
            
            const getQ = (sec, uni, count) => {
                const pool = QuestionBank.filter(q => q.section === sec && q.univers === uni);
                return this.shuffleArray([...pool]).slice(0, count);
            };

            const secA_terre = getQ('A', 'terre_espace', 4);
            const secA_mat = getQ('A', 'materiel', 10);
            const secA_tech = getQ('A', 'technologique', 1);
            
            const secB_terre = getQ('B', 'terre_espace', 1);
            const secB_mat = getQ('B', 'materiel', 3);
            const secB_tech = getQ('B', 'technologique', 1);
            
            const secC_tech = getQ('C', 'technologique', 5);

            // On assemble tout en respectant l'ordre des sections
            this.currentQuestions = [
                ...this.shuffleArray([...secA_terre, ...secA_mat, ...secA_tech]),
                ...this.shuffleArray([...secB_terre, ...secB_mat, ...secB_tech]),
                ...secC_tech
            ];

        } else if (mode.startsWith('section')) {
            // Pratique par section : TOUTES les questions de cette section
            const sec = mode.replace('section', '');
            const pool = QuestionBank.filter(q => q.section === sec);
            this.currentQuestions = this.shuffleArray([...pool]);
        } else {
            // Pratique par univers : TOUTES les questions de cet univers
            const pool = QuestionBank.filter(q => q.univers === mode);
            this.currentQuestions = this.shuffleArray([...pool]);
        }

        // Initialisation de l'état des réponses
        for (let i = 0; i < this.currentQuestions.length; i++) {
            this.userAnswers.push({ answered: false, isCorrect: false, selectedValue: null });
        }
        
        this.renderQuestion();
    },

    renderQuestion() {
        const q = this.currentQuestions[this.currentIndex];
        const state = this.userAnswers[this.currentIndex];
        const container = document.getElementById('quiz-container');
        
        this.isAnswerSubmited = state.answered;
        
        // Update Header
        document.getElementById('quiz-counter').textContent = `${this.currentIndex + 1} / ${this.currentQuestions.length}`;
        const pct = ((this.currentIndex) / this.currentQuestions.length) * 100;
        document.getElementById('quiz-progress-fill').style.width = `${pct}%`;

        // Buttons Navigation
        const prevBtn = document.getElementById('btn-prev');
        const nextBtn = document.getElementById('btn-next');
        const submitBtn = document.getElementById('btn-submit');
        const finishBtn = document.getElementById('btn-finish');

        prevBtn.disabled = (this.currentIndex === 0);
        prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';

        // Gérer visibilité de Suivant vs Terminer
        if (this.currentIndex === this.currentQuestions.length - 1) {
            nextBtn.classList.add('hidden');
            finishBtn.classList.remove('hidden');
        } else {
            nextBtn.classList.remove('hidden');
            finishBtn.classList.add('hidden');
        }

        // Si déjà répondu, cacher soumettre
        if (state.answered) {
            submitBtn.classList.add('hidden');
        } else {
            submitBtn.classList.remove('hidden');
        }

        // Clear previous content COMPLETELY (via DOM, not innerHTML)
        container.innerHTML = '';

        // Question text
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-text';
        questionDiv.innerHTML = `
            <span class="badge" style="position:relative; top:0; right:0; margin-right:10px; display:inline-block;">Section ${q.section}</span>
            ${q.text}
        `;
        container.appendChild(questionDiv);

        if (q.section === 'A') {
            let optionsHtml = '<div class="options-container">';
            q.options.forEach((opt, idx) => {
                const isChecked = state.selectedValue === idx ? 'checked' : '';
                const baseClass = (state.selectedValue === idx) ? 'selected' : '';
                
                optionsHtml += `
                    <label class="option-label ${baseClass}" id="opt-label-${idx}">
                        <input type="radio" name="q-option" value="${idx}" ${isChecked} ${state.answered ? 'disabled' : ''}>
                        <span>${opt}</span>
                    </label>
                `;
            });
            optionsHtml += '</div>';
            
            const optionsWrapper = document.createElement('div');
            optionsWrapper.innerHTML = optionsHtml;
            container.appendChild(optionsWrapper);

            if (!state.answered) {
                setTimeout(() => {
                    document.querySelectorAll('.option-label input').forEach(input => {
                        input.addEventListener('change', (e) => {
                            document.querySelectorAll('.option-label').forEach(l => l.classList.remove('selected'));
                            e.target.parentElement.classList.add('selected');
                        });
                    });
                }, 50);
            } else {
                const correctLabel = document.getElementById(`opt-label-${q.answer}`);
                if(correctLabel) correctLabel.classList.add('correct');
                
                if (!state.isCorrect && state.selectedValue !== null) {
                    const incorrectLabel = document.getElementById(`opt-label-${state.selectedValue}`);
                    if(incorrectLabel) incorrectLabel.classList.add('incorrect');
                }
            }
            
        } else if (q.section === 'B') {
            const val = state.selectedValue || '';
            const wrapperClass = state.answered ? (state.isCorrect ? 'correct' : 'incorrect') : '';
            
            const inputWrapper = document.createElement('div');
            inputWrapper.innerHTML = `
                <div class="text-input-container ${wrapperClass}" id="text-input-wrapper">
                    <input type="text" id="q-text-input" placeholder="Votre réponse..." autocomplete="off" value="${val}" ${state.answered ? 'disabled' : ''}>
                </div>
            `;
            container.appendChild(inputWrapper);
            
            if (!state.answered) {
                setTimeout(() => {
                    const input = document.getElementById('q-text-input');
                    input.focus();
                    input.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter') {
                            app.submitAnswer();
                        }
                    });
                }, 50);
            }

        } else if (q.section === 'C') {
            submitBtn.classList.add('hidden');
            
            // CRITICAL: Append SVG via DOM, NOT innerHTML
            const svgWrap = document.createElement('div');
            container.appendChild(svgWrap);
            SVGEngine.renderSVG(svgWrap);
            
            if (!state.answered) {
                SVGEngine.loadQuestion(q, (isCorrect) => {
                    this.handleSVGAnswer(isCorrect);
                });
            } else {
                document.querySelectorAll('.svg-interactive-element').forEach(el => el.style.pointerEvents = 'none');
            }
        }

        // CRITICAL: Append feedback bubble via DOM (not innerHTML +=) to preserve SVG
        const feedbackBubble = document.createElement('div');
        feedbackBubble.id = 'feedback-bubble';
        feedbackBubble.className = 'feedback-bubble';
        feedbackBubble.innerHTML = `
            <div id="feedback-title" class="feedback-title"></div>
            <div id="feedback-text"></div>
        `;
        container.appendChild(feedbackBubble);

        if (state.answered) {
            this.renderFeedbackUI(state.isCorrect, q.explanation);
        }
    },

    submitAnswer() {
        if (this.isAnswerSubmited) return;
        const q = this.currentQuestions[this.currentIndex];
        const state = this.userAnswers[this.currentIndex];
        
        let isCorrect = false;
        let selectedValue = null;

        if (q.section === 'A') {
            const selected = document.querySelector('input[name="q-option"]:checked');
            if (!selected) return;
            
            selectedValue = parseInt(selected.value);
            isCorrect = (selectedValue === q.answer);

            const correctLabel = document.getElementById(`opt-label-${q.answer}`);
            correctLabel.classList.add('correct');
            
            if (!isCorrect) {
                const incorrectLabel = document.getElementById(`opt-label-${selectedValue}`);
                incorrectLabel.classList.add('incorrect');
            }
            
            document.querySelectorAll('input[name="q-option"]').forEach(i => i.disabled = true);

        } else if (q.section === 'B') {
            const input = document.getElementById('q-text-input');
            const val = input.value.trim().toLowerCase();
            if (val === '') return;

            selectedValue = val;
            isCorrect = q.exactMatch.includes(val);
            
            const wrapper = document.getElementById('text-input-wrapper');
            if (isCorrect) wrapper.classList.add('correct');
            else wrapper.classList.add('incorrect');
            input.disabled = true;
        }

        state.answered = true;
        state.isCorrect = isCorrect;
        state.selectedValue = selectedValue;

        this.processFeedback(isCorrect, q.explanation);
    },

    handleSVGAnswer(isCorrect) {
        if (this.isAnswerSubmited) return;
        const q = this.currentQuestions[this.currentIndex];
        const state = this.userAnswers[this.currentIndex];
        
        state.answered = true;
        state.isCorrect = isCorrect;
        state.selectedValue = isCorrect ? q.svgTarget : 'wrong';

        document.querySelectorAll('.svg-interactive-element').forEach(el => el.style.pointerEvents = 'none');
        
        this.processFeedback(isCorrect, q.explanation);
    },

    processFeedback(isCorrect, explanation) {
        this.isAnswerSubmited = true;
        this.saveState(); // Sauvegarde locale de la progression
        
        if (isCorrect) AudioEngine.playCorrect();
        else AudioEngine.playIncorrect();
        
        document.getElementById('btn-submit').classList.add('hidden');
        this.renderFeedbackUI(isCorrect, explanation);
    },

    renderFeedbackUI(isCorrect, explanation) {
        const bubble = document.getElementById('feedback-bubble');
        const title = document.getElementById('feedback-title');
        const text = document.getElementById('feedback-text');

        bubble.className = `feedback-bubble show ${isCorrect ? 'correct' : 'incorrect'}`;
        title.className = `feedback-title ${isCorrect ? 'correct' : 'incorrect'}`;
        title.textContent = isCorrect ? "Bonne réponse !" : "Mauvaise réponse";
        text.innerHTML = explanation;
    },

    nextQuestion() {
        if (this.currentIndex < this.currentQuestions.length - 1) {
            this.currentIndex++;
            this.renderQuestion();
        }
    },

    prevQuestion() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.renderQuestion();
        }
    },

    finish() {
        this.clearState(); // Efface la sauvegarde car le quiz est terminé
        
        const storageResults = this.currentQuestions.map((q, idx) => ({
            univers: q.univers,
            isCorrect: this.userAnswers[idx].isCorrect
        }));
        Storage.updateStats(storageResults);

        const totalCorrect = this.userAnswers.filter(r => r.isCorrect).length;
        const scorePct = Math.round((totalCorrect / this.currentQuestions.length) * 100);

        const breakdown = {
            materiel: { c: 0, t: 0 },
            technologique: { c: 0, t: 0 },
            terre_espace: { c: 0, t: 0 }
        };

        this.currentQuestions.forEach((q, idx) => {
            const state = this.userAnswers[idx];
            if(breakdown[q.univers]) {
                breakdown[q.univers].t++;
                if (state.isCorrect) breakdown[q.univers].c++;
            }
        });

        const getHtml = (key, name) => {
            if (breakdown[key].t === 0) return '';
            return `<p><strong>${name} :</strong> ${breakdown[key].c} / ${breakdown[key].t}</p>`;
        };

        let detailsHtml = getHtml('materiel', 'Univers matériel');
        detailsHtml += getHtml('technologique', 'Univers technologique');
        detailsHtml += getHtml('terre_espace', 'Terre et espace');

        app.showResults(scorePct, detailsHtml);
    }
};
