(() => {
  const scenario = window.__USER_TEST_SCENARIO__;
  if (!scenario) return;

  const STORAGE_KEY = `user-test-progress:${scenario.id}:${scenario.exampleId}`;
  const root = document.getElementById('testGuideRoot');

  class UserTestGuide {
    constructor(config) {
      this.config = config;
      this.state = this.loadState();
      this.render();
    }

    loadState() {
      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if (saved && Array.isArray(saved.stepsDone)) return saved;
      } catch (error) {
        /* ignore */
      }
      return {
        startedAt: new Date().toISOString(),
        currentStep: 0,
        stepsDone: Array(this.config.steps.length).fill(false),
        notes: ''
      };
    }

    saveState() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    }

    resetScenario() {
      localStorage.setItem('personal-organizer-state', JSON.stringify(this.config.seedState));
      localStorage.removeItem(STORAGE_KEY);
      window.location.reload();
    }

    exportProgress() {
      const payload = {
        scenarioId: this.config.id,
        scenarioTitle: this.config.title,
        exampleId: this.config.exampleId,
        exampleTitle: this.config.exampleTitle,
        exportedAt: new Date().toISOString(),
        progress: this.state
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${this.config.id}-resultats.json`;
      link.click();
      URL.revokeObjectURL(url);
    }

    setScenario(nextScenarioId) {
      const params = new URLSearchParams(window.location.search);
      params.set('scenario', nextScenarioId);
      params.delete('example');
      window.location.search = params.toString();
    }

    toggleScenario() {
      const nextScenarioId = this.config.id === 'scenario1' ? 'scenario2' : 'scenario1';
      this.setScenario(nextScenarioId);
    }

    setExample(nextExampleId) {
      const params = new URLSearchParams(window.location.search);
      params.set('scenario', this.config.id);
      params.set('example', nextExampleId);
      window.location.search = params.toString();
    }

    nextExample() {
      const currentIndex = this.config.examples.findIndex(example => example.id === this.config.exampleId);
      const nextIndex = currentIndex >= 0
        ? (currentIndex + 1) % this.config.examples.length
        : 0;
      this.setExample(this.config.examples[nextIndex].id);
    }

    fieldsMarkup(step) {
      if (!step.fields?.length) return '';
      return `
        <div class="test-guide-fields">
          ${step.fields.map(field => `
            <div class="test-guide-field">
              <span class="test-guide-field-label">${field.label}</span>
              <strong>${field.value}</strong>
            </div>`).join('')}
        </div>`;
    }

    instructionsMarkup(step) {
      return step.instructions
        .map(item => `<span class="test-guide-inline-item">${item}</span>`)
        .join('');
    }

    render() {
      const currentStep = this.config.steps[this.state.currentStep];
      const doneCount = this.state.stepsDone.filter(Boolean).length;
      root.innerHTML = `
        <section class="test-guide">
          <div class="test-guide-top">
            <div>
              <h3 class="test-guide-title">${this.config.title} · ${this.config.exampleLabel}</h3>
              <p class="test-guide-subtitle">${this.config.exampleSummary || this.config.summary}</p>
            </div>
            <div class="test-guide-controls">
              <div class="test-guide-progress">
                Etape ${this.state.currentStep + 1}/${this.config.steps.length}
              </div>
              <div class="test-guide-progress">
                Exemple ${this.config.exampleIndex + 1}/${this.config.exampleCount}
              </div>
              <button class="test-guide-switch" id="scenarioToggle" type="button">
                Passer au ${this.config.id === 'scenario1' ? 'Scenario 2' : 'Scenario 1'}
              </button>
              <button class="test-guide-switch secondary" id="nextExample" type="button">
                Exemple suivant
              </button>
            </div>
          </div>

          <div class="test-guide-body">
            <div class="test-guide-card ${this.state.stepsDone[this.state.currentStep] ? 'done' : ''}">
              <div class="test-guide-card-head">
                <h4>Etape ${this.state.currentStep + 1} · ${currentStep.title}</h4>
                <div class="test-guide-step-state">
                  ${this.state.stepsDone[this.state.currentStep] ? 'Validee' : 'A faire'}
                </div>
              </div>
              <div class="test-guide-inline-block">
                <span class="test-guide-inline-label">A faire</span>
                <div class="test-guide-inline-list">${this.instructionsMarkup(currentStep)}</div>
              </div>
              ${this.fieldsMarkup(currentStep)}
              <div class="test-guide-expected"><strong>Attendu :</strong> ${currentStep.expected}</div>
            </div>
          </div>

          <div class="test-guide-footer">
            <button class="test-guide-btn" id="prevStep" type="button">Etape precedente</button>
            <button class="test-guide-btn primary" id="nextStep" type="button">Etape suivante</button>
            <button class="test-guide-btn success" id="toggleDone" type="button">
              ${this.state.stepsDone[this.state.currentStep] ? 'Retirer la validation' : 'Valider l’étape'}
            </button>
            <button class="test-guide-btn" id="resetScenario" type="button">Reinitialiser les donnees</button>
            <button class="test-guide-btn" id="exportProgress" type="button">Exporter le suivi</button>
            <textarea class="test-guide-note" id="testNotes" placeholder="Notes libres sur les observations utilisateur...">${this.state.notes}</textarea>
            <div class="test-guide-meta">${doneCount}/${this.config.steps.length} etapes cochees</div>
          </div>
        </section>`;

      root.querySelector('#scenarioToggle').addEventListener('click', () => this.toggleScenario());
      root.querySelector('#nextExample').addEventListener('click', () => this.nextExample());
      root.querySelector('#prevStep').addEventListener('click', () => {
        this.state.currentStep = Math.max(0, this.state.currentStep - 1);
        this.saveState();
        this.render();
      });
      root.querySelector('#nextStep').addEventListener('click', () => {
        this.state.currentStep = Math.min(this.config.steps.length - 1, this.state.currentStep + 1);
        this.saveState();
        this.render();
      });
      root.querySelector('#toggleDone').addEventListener('click', () => {
        this.state.stepsDone[this.state.currentStep] = !this.state.stepsDone[this.state.currentStep];
        this.saveState();
        this.render();
      });
      root.querySelector('#resetScenario').addEventListener('click', () => this.resetScenario());
      root.querySelector('#exportProgress').addEventListener('click', () => this.exportProgress());
      root.querySelector('#testNotes').addEventListener('input', event => {
        this.state.notes = event.target.value;
        this.saveState();
      });
    }
  }

  new UserTestGuide(scenario);
})();
