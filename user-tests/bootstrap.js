(async () => {
  const root = document.getElementById('testGuideRoot');
  const params = new URLSearchParams(window.location.search);
  const scenarioId = params.get('scenario') || 'scenario1';
  const exampleId = params.get('example');
  const scenarios = window.__USER_TEST_SCENARIOS__ || {};
  const storageKey = 'personal-organizer-state';

  function loadExistingState() {
    try {
      return JSON.parse(localStorage.getItem(storageKey));
    } catch (error) {
      return null;
    }
  }

  try {
    const scenarioGroup = scenarios[scenarioId];
    if (!scenarioGroup) throw new Error(`Scenario introuvable : ${scenarioId}.`);
    if (!Array.isArray(scenarioGroup.examples) || !scenarioGroup.examples.length) {
      throw new Error(`Aucun exemple disponible pour ${scenarioId}.`);
    }

    const exampleIndex = Math.max(
      0,
      scenarioGroup.examples.findIndex(example => example.id === exampleId)
    );
    const activeExample = scenarioGroup.examples[exampleIndex] || scenarioGroup.examples[0];
    const normalizedScenario = {
      id: scenarioGroup.id,
      title: scenarioGroup.title,
      summary: scenarioGroup.summary,
      exampleId: activeExample.id,
      exampleTitle: activeExample.title,
      exampleLabel: activeExample.label,
      exampleSummary: activeExample.summary,
      exampleIndex,
      exampleCount: scenarioGroup.examples.length,
      examples: scenarioGroup.examples.map(example => ({
        id: example.id,
        label: example.label
      })),
      seedState: activeExample.seedState,
      steps: activeExample.steps
    };

    window.__USER_TEST_SCENARIO__ = normalizedScenario;
    const existingState = loadExistingState();
    const nextState = {
      ...activeExample.seedState,
      sidebarOpen: typeof existingState?.sidebarOpen === 'boolean'
        ? existingState.sidebarOpen
        : activeExample.seedState.sidebarOpen
    };
    localStorage.setItem(storageKey, JSON.stringify(nextState));

    const appScript = document.createElement('script');
    appScript.src = '../app.js';
    appScript.onload = () => {
      const panelScript = document.createElement('script');
      panelScript.src = './panel.js';
      document.body.appendChild(panelScript);
    };
    document.body.appendChild(appScript);
  } catch (error) {
    root.innerHTML = `
      <div class="test-guide test-guide-error">
        <strong>Chargement impossible</strong>
        <p>${error.message}</p>
        <p>Verifiez les parametres <code>?scenario=...</code> et <code>&example=...</code>.</p>
      </div>`;
  }
})();
