/**
 * TODO LIST — PERSONAL ORGANIZER
 * app.js
 *
 * Architecture:
 *  - State management (load / save)
 *  - Seed data
 *  - View renderers: Dashboard, Todo, Gantt, Calendar
 *  - Focus Mode timer
 *  - Global UI bindings
 */

(() => {
  /* ══════════════════════════════════════════════════════
     CONSTANTS & CONFIG
     ══════════════════════════════════════════════════════ */

  const MEMBERS = ['Thomas', 'Sarah', 'Léo', 'Maya'];
  const DEFAULT_CATEGORIES = [
    { id: 'etudes', label: 'Études' },
    { id: 'travail', label: 'Travail' },
    { id: 'personnel', label: 'Personnel' },
    { id: 'loisirs', label: 'Loisirs' }
  ];
  const PROJECT_ICONS = ['💻', '📚', '🌿', '🚀', '🎨', '📦', '🧠', '🎯'];
  const PROJECT_COLORS = [
    { value: '#3b82f6', label: 'Bleu' },
    { value: '#8b5cf6', label: 'Violet' },
    { value: '#10b981', label: 'Vert' },
    { value: '#f97316', label: 'Orange' },
    { value: '#ec4899', label: 'Rose' },
    { value: '#0f766e', label: 'Sapin' }
  ];
  const ENABLE_TEST_PREPARATION = !!window.__USER_TEST_SCENARIO__;
  const EXTRA_CATEGORY_COLORS = ['#0f766e', '#0284c7', '#ca8a04', '#be123c', '#7c3aed', '#ea580c'];
  const CALENDAR_ICON = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V8M8 4H16M8 4V2M16 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V8M16 4V2M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8H20M16 16H16.002L16.002 16.002L16 16.002V16ZM12 16H12.002L12.002 16.002L12 16.002V16ZM8 16H8.002L8.00195 16.002L8 16.002V16ZM16.002 12V12.002L16 12.002V12H16.002ZM12 12H12.002L12.002 12.002L12 12.002V12ZM8 12H8.002L8.00195 12.002L8 12.002V12Z"/>
    </svg>`;
  const MEMBERS_ICON = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M21 19.9999C21 18.2583 19.3304 16.7767 17 16.2275M15 20C15 17.7909 12.3137 16 9 16C5.68629 16 3 17.7909 3 20M15 13C17.2091 13 19 11.2091 19 9C19 6.79086 17.2091 5 15 5M9 13C6.79086 13 5 11.2091 5 9C5 6.79086 6.79086 5 9 5C11.2091 5 13 6.79086 13 9C13 11.2091 11.2091 13 9 13Z"/>
    </svg>`;
  const EDIT_ICON = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 8.00012L4 16.0001V20.0001L8 20.0001L16 12.0001M12 8.00012L14.8686 5.13146L14.8704 5.12976C15.2652 4.73488 15.463 4.53709 15.691 4.46301C15.8919 4.39775 16.1082 4.39775 16.3091 4.46301C16.5369 4.53704 16.7345 4.7346 17.1288 5.12892L18.8686 6.86872C19.2646 7.26474 19.4627 7.46284 19.5369 7.69117C19.6022 7.89201 19.6021 8.10835 19.5369 8.3092C19.4628 8.53736 19.265 8.73516 18.8695 9.13061L18.8686 9.13146L16 12.0001M12 8.00012L16 12.0001"/>
    </svg>`;
  const MAGIC_ICON = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M15 4V2M15 16V14M8 9H10M20 9H22M17.8 11.8L19 13M17.8 6.2L19 5M3 21L12 12M12.2 6.2L11 5"/>
    </svg>`;

  // px per day column in Gantt (must match CSS grid: 90px per day column)
  const GANTT_COL_W  = 90;
  // px width of the label column
  const GANTT_LABEL_W = 130;
  // px height of header row
  const GANTT_HEADER_H = 34;
  // px height of each member row
  const GANTT_ROW_H = 48;

  const MEMBER_COLORS = {
    Thomas : '#2563eb',
    Sarah  : '#db2777',
    'Léo'  : '#0f766e',
    Maya   : '#ea580c'
  };

  /* ══════════════════════════════════════════════════════
     SEED DATA
     ══════════════════════════════════════════════════════ */

  function makeSeedProjects() {
    return [
      {
        id: 'p1',
        name: 'Projet BD / Web',
        icon: '💻',
        color: '#3b82f6',
        desc: 'Conception, API et soutenance de fin de semestre.',
        deadline: addDaysISO(4),
        tasks: [
          { id:'t1', title:'Finaliser le wireframe', desc:'Écrans desktop + mobile, parcours principal.', status:'doing', completed:false, progress:70, owner:'Thomas', start:addDaysISO(0), durationDays:2, category:'travail', date:addDaysISO(0), startTime:'09:00', durationMin:90, buffer:15, dependencies:[], subtasks:['Lister les composants','Valider la nav','Préparer la démo'], delayRisk:false },
          { id:'t2', title:'Écrire les user stories', desc:'Version priorisée MoSCoW.', status:'pending', completed:false, progress:35, owner:'Sarah', start:addDaysISO(2), durationDays:2, category:'etudes', date:addDaysISO(1), startTime:'14:00', durationMin:75, buffer:10, dependencies:['t1'], subtasks:['Backlog brut','Critères d\'acceptation'], delayRisk:false },
          { id:'t3', title:'Préparer la présentation', desc:'Slides et scénario oral.', status:'delayed', completed:false, progress:5, owner:'Maya', start:addDaysISO(5), durationDays:2, category:'etudes', date:addDaysISO(3), startTime:'16:30', durationMin:60, buffer:20, dependencies:['t2'], subtasks:['Storyline','Captures écran'], delayRisk:true },
          { id:'t4', title:'Tester la base de données', desc:'Jeux de données + requêtes critiques.', status:'doing', completed:false, progress:55, owner:'Léo', start:addDaysISO(1), durationDays:3, category:'travail', date:addDaysISO(2), startTime:'10:30', durationMin:120, buffer:15, dependencies:['t1'], subtasks:['Dataset','Cas limites'], delayRisk:false }
        ]
      },
      {
        id: 'p2',
        name: 'Mémoire TER',
        icon: '🌲',
        color: '#10b981',
        desc: 'RAG, ontologie et rédaction du rapport.',
        deadline: addDaysISO(8),
        tasks: [
          { id:'t5', title:'Nettoyer les définitions source', desc:'Vérifier les doublons et la structure.', status:'doing', completed:false, progress:60, owner:'Sarah', start:addDaysISO(0), durationDays:2, category:'etudes', date:addDaysISO(0), startTime:'11:00', durationMin:80, buffer:10, dependencies:[], subtasks:['Déduplication','Colonnes CSV'], delayRisk:false },
          { id:'t6', title:'Mapper vers SKOS/RDF', desc:'Créer les concepts, sources et relations.', status:'pending', completed:false, progress:20, owner:'Thomas', start:addDaysISO(2), durationDays:3, category:'etudes', date:addDaysISO(4), startTime:'09:30', durationMin:105, buffer:20, dependencies:['t5'], subtasks:['Namespaces','Triplets'], delayRisk:false },
          { id:'t7', title:'Rédiger la partie méthodo', desc:'Architecture, pipeline et limites.', status:'pending', completed:false, progress:10, owner:'Maya', start:addDaysISO(6), durationDays:2, category:'etudes', date:addDaysISO(6), startTime:'15:00', durationMin:90, buffer:15, dependencies:['t6'], subtasks:['Schéma','Texte'], delayRisk:false }
        ]
      },
      {
        id: 'p3',
        name: 'Vie perso & équilibre',
        icon: '🌿',
        color: '#f97316',
        desc: 'Sport, courses, détente et énergie mentale.',
        deadline: addDaysISO(2),
        tasks: [
          { id:'t8', title:'Séance sport', desc:'Marche rapide + étirements.', status:'doing', completed:false, progress:75, owner:'Maya', start:addDaysISO(0), durationDays:1, category:'personnel', date:addDaysISO(0), startTime:'18:00', durationMin:45, buffer:10, dependencies:[], subtasks:['Tenue','Eau'], delayRisk:false },
          { id:'t9', title:'Courses de la semaine', desc:'Produits essentiels et repas simples.', status:'pending', completed:false, progress:25, owner:'Léo', start:addDaysISO(1), durationDays:1, category:'personnel', date:addDaysISO(1), startTime:'17:00', durationMin:50, buffer:15, dependencies:[], subtasks:['Liste','Budget'], delayRisk:false }
        ]
      }
    ];
  }

  /* ══════════════════════════════════════════════════════
     STATE
     ══════════════════════════════════════════════════════ */

  const defaultState = {
    selectedProjectId: 'p1',
    todoFilter: 'all',
    sidebarOpen: false,
    projectComposerOpen: false,
    calendarZoom: 'week',
    weekOffset: 0,
    selectedDate: new Date().toISOString().slice(0, 10),
    layerVisibility: { etudes: true, travail: true, personnel: true, loisirs: true },
    ganttFilter: null,
    currentMember: 'Thomas',
    focus: { active: false, paused: false, taskId: null, remaining: 0, total: 0, interval: null, presentation: 'mini' }
  };

  const state = loadState();
  ensureLayerVisibility();

  /* ══════════════════════════════════════════════════════
     STATE PERSISTENCE
     ══════════════════════════════════════════════════════ */

  function migrateCategories(saved) {
    const catMap = { cours: 'etudes', pro: 'travail', perso: 'personnel' };
    saved.projects?.forEach(p => p.tasks?.forEach(t => {
      if (catMap[t.category]) t.category = catMap[t.category];
    }));
    if (saved.layerVisibility) {
      const lv = saved.layerVisibility;
      if ('cours' in lv)  { lv.etudes    = lv.cours;  delete lv.cours; }
      if ('pro' in lv)    { lv.travail   = lv.pro;    delete lv.pro; }
      if ('perso' in lv)  { lv.personnel = lv.perso;  delete lv.perso; }
    }
  }

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem('personal-organizer-state'));
      if (saved && saved.projects) {
        migrateCategories(saved);
        return {
          ...defaultState,
          ...saved,
          ganttFilter: saved.ganttFilter || null,
          focus: { ...defaultState.focus }
        };
      }
    } catch (e) { /* ignore */ }
    return { ...defaultState, projects: makeSeedProjects() };
  }

  function saveState() {
    localStorage.setItem('personal-organizer-state', JSON.stringify({
      ...state,
      projectComposerOpen: undefined,
      focus: undefined
    }));
  }

  /* ══════════════════════════════════════════════════════
     UTILITY HELPERS
     ══════════════════════════════════════════════════════ */

  function deepClone(obj) { return JSON.parse(JSON.stringify(obj)); }

  function addDaysISO(days) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 10);
  }

  function fmtDate(iso) {
    return new Date(iso + 'T12:00:00').toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });
  }

  function todayISO() { return new Date().toISOString().slice(0, 10); }

  function daysBetween(a, b) {
    const d1 = new Date(a + 'T00:00:00');
    const d2 = new Date(b + 'T00:00:00');
    return Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
  }

  function allTasks() {
    return state.projects.flatMap(p =>
      p.tasks.map(t => ({ ...t, projectId: p.id, projectName: p.name, projectColor: p.color }))
    );
  }

  function getProject(id) {
    return state.projects.find(p => p.id === id) || state.projects[0];
  }

  function getTask(taskId) {
    for (const project of state.projects) {
      const task = project.tasks.find(t => t.id === taskId);
      if (task) return { project, task };
    }
    return null;
  }

  function progressColor(p) {
    return p < 25 ? 'var(--danger)' : p < 70 ? 'var(--warning)' : 'var(--success)';
  }

  function plantStage() {
    const tasks = allTasks();
    const done  = tasks.filter(t => t.completed || t.progress >= 100).length;
    const ratio = tasks.length ? done / tasks.length : 0;
    if (ratio < .2)  return { emoji: '🥀', label: 'La plante flétrit',   text: 'Trop de tâches en attente. Un petit pas aujourd\'hui suffit.' };
    if (ratio < .45) return { emoji: '🌱', label: 'Jeune pousse',         text: 'Tu construis un rythme. Continue avec des objectifs concrets.' };
    if (ratio < .75) return { emoji: '🪴', label: 'Croissance stable',    text: 'Bonne cadence. Tes tâches accomplies nourrissent ta plante.' };
    return               { emoji: '🌳', label: 'Pleine floraison',     text: 'Excellent momentum. Ton organisation est très saine.' };
  }

  function projectStats(project) {
    const total   = project.tasks.length;
    const avg     = total ? Math.round(project.tasks.reduce((s, t) => s + t.progress, 0) / total) : 0;
    const done    = project.tasks.filter(t => t.completed || t.progress >= 100).length;
    const delayed = project.tasks.filter(t => t.status === 'delayed').length;
    return { total, avg, done, delayed };
  }

  function completionPercent(project) {
    const total = project.tasks.length || 1;
    return Math.round(project.tasks.reduce((s, t) => s + (t.completed ? 100 : t.progress), 0) / total);
  }

  function statusBadge(progress) {
    if (progress < 25) return '<span class="badge red">⚠️ Retard</span>';
    if (progress < 70) return '<span class="badge orange">🚧 En cours</span>';
    return '<span class="badge green">✅ Bonne avance</span>';
  }

  function escapeHTML(s) {
    return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  function escapeAttr(s = '') { return escapeHTML(String(s)).replace(/'/g, '&#39;'); }

  function toMinutes(hm) {
    const [h, m] = hm.split(':').map(Number);
    return h * 60 + m;
  }

  function fromMinutes(min) {
    const h = Math.floor(min / 60), m = min % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }

  function startOfWeek(date) {
    const d = new Date(date);
    const day = (d.getDay() + 6) % 7;
    d.setDate(d.getDate() - day);
    d.setHours(0, 0, 0, 0);
    return d;
  }

  function toISO(d) { return new Date(d).toISOString().slice(0, 10); }
  function localISO(d) {
    const year  = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day   = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function dateTimeFromTask(dateISO, time) {
    const [year, month, day] = dateISO.split('-').map(Number);
    const [hours, minutes]   = time.split(':').map(Number);
    return new Date(year, month - 1, day, hours, minutes, 0, 0);
  }

  function shiftDateTime(dateISO, time, deltaMinutes) {
    const dt = dateTimeFromTask(dateISO, time);
    dt.setMinutes(dt.getMinutes() + deltaMinutes);
    return {
      date: localISO(dt),
      time: `${String(dt.getHours()).padStart(2, '0')}:${String(dt.getMinutes()).padStart(2, '0')}`
    };
  }

  function allCategories() {
    const categories = new Map(DEFAULT_CATEGORIES.map(cat => [cat.id, cat.label]));
    state.projects?.forEach(project => project.tasks?.forEach(task => {
      if (!task.category) return;
      categories.set(task.category, categoryLabel(task.category));
    }));
    return Array.from(categories, ([id, label]) => ({ id, label }));
  }

  function ensureLayerVisibility() {
    const visibility = state.layerVisibility || (state.layerVisibility = {});
    allCategories().forEach(cat => {
      if (!(cat.id in visibility)) visibility[cat.id] = true;
    });
  }

  function categoryLabel(cat) {
    return DEFAULT_CATEGORIES.find(entry => entry.id === cat)?.label || cat;
  }

  function resolveCategory(selectedValue, customValue = '') {
    if (selectedValue !== '__new__') return selectedValue;
    const raw = customValue.trim();
    if (!raw) return '';
    const existing = allCategories().find(cat =>
      cat.id.toLowerCase() === raw.toLowerCase() ||
      cat.label.toLowerCase() === raw.toLowerCase()
    );
    return existing ? existing.id : raw;
  }

  function categoryOptionsHTML(selectedValue, includeCreateOption = false) {
    const options = allCategories().map(cat =>
      `<option value="${escapeAttr(cat.id)}"${cat.id === selectedValue ? ' selected' : ''}>${escapeHTML(cat.label)}</option>`
    );
    if (includeCreateOption) {
      options.push(`<option value="__new__"${selectedValue === '__new__' ? ' selected' : ''}>+ Nouvelle catégorie...</option>`);
    }
    return options.join('');
  }

  function colorIndex(text) {
    let hash = 0;
    for (const ch of String(text)) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
    return hash % EXTRA_CATEGORY_COLORS.length;
  }

  function layerColor(layer) {
    if (layer === 'etudes')   return 'var(--course)';
    if (layer === 'travail')  return 'var(--work)';
    if (layer === 'loisirs')  return 'var(--loisirs)';
    if (layer === 'personnel')return 'var(--personal)';
    return EXTRA_CATEGORY_COLORS[colorIndex(layer)];
  }

  function layerGradient(layer) {
    if (layer === 'etudes')    return 'linear-gradient(135deg, var(--course), #6d28d9)';
    if (layer === 'travail')   return 'linear-gradient(135deg, var(--work), #2563eb)';
    if (layer === 'personnel') return 'linear-gradient(135deg, var(--personal), #ea580c)';
    if (layer === 'loisirs')   return 'linear-gradient(135deg, var(--loisirs), #059669)';
    const base = EXTRA_CATEGORY_COLORS[colorIndex(layer)];
    return `linear-gradient(135deg, ${base}, ${base})`;
  }

  function shiftISO(iso, days) {
    const d = new Date(iso + 'T12:00:00');
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 10);
  }

  function overlap(a1, a2, b1, b2) { return Math.max(a1, b1) < Math.min(a2, b2); }

  function projectIconOptionsHTML(selectedValue = PROJECT_ICONS[0]) {
    return PROJECT_ICONS.map(icon =>
      `<option value="${escapeAttr(icon)}"${icon === selectedValue ? ' selected' : ''}>${icon}</option>`
    ).join('');
  }

  function projectColorOptionsHTML(selectedValue = PROJECT_COLORS[1].value) {
    return PROJECT_COLORS.map(color =>
      `<option value="${escapeAttr(color.value)}"${color.value === selectedValue ? ' selected' : ''}>${escapeHTML(color.label)}</option>`
    ).join('');
  }

  function projectComposerHTML(prefix) {
    return `
      <div class="card project-composer-card">
        <div class="card-top project-composer-head">
          <div>
            <h3 class="widget-title">Nouveau projet</h3>
            <p class="card-text">Créez un nouvel espace de travail avec son nom, sa description et son échéance.</p>
          </div>
          <button class="btn soft" id="${prefix}CloseProjectComposer">Fermer</button>
        </div>
        <div class="project-create-grid">
          <div class="wide">
            <label class="field-label">Nom du projet</label>
            <input class="input" id="${prefix}ProjectName" placeholder="Ex. Refonte portfolio">
          </div>
          <div class="wide">
            <label class="field-label">Description</label>
            <textarea class="input project-create-desc" id="${prefix}ProjectDesc" placeholder="Objectif, contexte, livrables attendus..."></textarea>
          </div>
          <div>
            <label class="field-label">Échéance</label>
            <input class="input" id="${prefix}ProjectDeadline" type="date" value="${addDaysISO(7)}">
          </div>
          <div>
            <label class="field-label">Icône</label>
            <select class="select" id="${prefix}ProjectIcon">${projectIconOptionsHTML('🚀')}</select>
          </div>
          <div>
            <label class="field-label">Couleur</label>
            <select class="select" id="${prefix}ProjectColor">${projectColorOptionsHTML('#8b5cf6')}</select>
          </div>
          <div class="project-create-actions">
            <button class="btn primary" id="${prefix}CreateProject">Créer le projet</button>
          </div>
        </div>
      </div>`;
  }

  function toggleProjectComposer(force) {
    state.projectComposerOpen = typeof force === 'boolean' ? force : !state.projectComposerOpen;
    renderAll();
  }

  function createProject({ name, desc, deadline, icon, color }) {
    const title = name.trim();
    if (!title) {
      notify('Ajoute un nom de projet.');
      return false;
    }

    const projectId = 'p' + Math.random().toString(36).slice(2, 8);
    state.projects.unshift({
      id: projectId,
      name: title,
      icon: icon || '🚀',
      color: color || '#8b5cf6',
      desc: desc.trim() || 'Nouveau projet à organiser.',
      deadline: deadline || addDaysISO(7),
      tasks: []
    });
    state.selectedProjectId = projectId;
    state.projectComposerOpen = false;
    saveState();
    renderAll();
    notify('Projet créé.');
    return true;
  }

  function bindProjectComposer(root, prefix) {
    root.querySelector(`#${prefix}ToggleProjectComposer`)?.addEventListener('click', () => toggleProjectComposer(true));
    root.querySelector(`#${prefix}CloseProjectComposer`)?.addEventListener('click', () => toggleProjectComposer(false));
    root.querySelector(`#${prefix}CreateProject`)?.addEventListener('click', () => {
      createProject({
        name: root.querySelector(`#${prefix}ProjectName`)?.value || '',
        desc: root.querySelector(`#${prefix}ProjectDesc`)?.value || '',
        deadline: root.querySelector(`#${prefix}ProjectDeadline`)?.value || '',
        icon: root.querySelector(`#${prefix}ProjectIcon`)?.value || '',
        color: root.querySelector(`#${prefix}ProjectColor`)?.value || ''
      });
    });
  }

  function hasCourseConflict(taskId, date, startTime, totalMin) {
    const start = toMinutes(startTime), end = start + totalMin;
    return allTasks().some(t =>
      t.id !== taskId &&
      t.date === date &&
      t.category === 'etudes' &&
      overlap(start, end, toMinutes(t.startTime), toMinutes(t.startTime) + t.durationMin + t.buffer)
    );
  }

  function openTaskInCalendar(task, notice = 'Tâche affichée dans le calendrier.') {
    ensureLayerVisibility();
    state.selectedDate  = task.date;
    state.calendarZoom  = 'day';
    saveState();
    renderDashboard();
    renderCalendar();
    switchView('calendar');
    notify(notice);
  }

  function createPreparationTask(project, task) {
    const existingPrep = project.tasks.find(candidate => candidate.kind === 'prep' && candidate.parentTaskId === task.id);
    if (existingPrep) return { created: false, task: existingPrep };

    const prepDuration = Math.max(15, task.buffer || 15);
    const prepSlot     = shiftDateTime(task.date, task.startTime, -prepDuration);
    const prepId       = 't' + Math.random().toString(36).slice(2, 8);
    const inherited    = [...(task.dependencies || [])];
    const prepTask = {
      id           : prepId,
      title        : `Preparation · ${task.title}`,
      desc         : `Temps de preparation dedie a "${task.title}".`,
      status       : 'pending',
      completed    : false,
      progress     : 0,
      owner        : task.owner,
      start        : prepSlot.date,
      durationDays : prepSlot.date === task.date ? 1 : 2,
      category     : task.category,
      date         : prepSlot.date,
      startTime    : prepSlot.time,
      durationMin  : prepDuration,
      buffer       : 0,
      dependencies : inherited,
      subtasks     : [],
      delayRisk    : false,
      expanded     : false,
      editOpen     : false,
      kind         : 'prep',
      parentTaskId : task.id
    };
    task.dependencies = [prepId];
    project.tasks.unshift(prepTask);
    ensureLayerVisibility();
    saveState();
    return { created: true, task: prepTask };
  }

  function closeAllMemberMenus(exceptTaskId = null) {
    state.projects.forEach(project => project.tasks?.forEach(task => {
      if (task.id !== exceptTaskId) task.memberMenuOpen = false;
    }));
  }

  /* ══════════════════════════════════════════════════════
     DOM REFERENCES
     ══════════════════════════════════════════════════════ */

  const dashboardEl = document.getElementById('dashboard');
  const todoEl      = document.getElementById('todo');
  const ganttEl     = document.getElementById('gantt');
  const calendarEl  = document.getElementById('calendar');
  const toastEl     = document.getElementById('toast');
  const mainArea    = document.getElementById('mainArea');
  let   pinchStartDistance = null;
  let   menuToggleDelegationBound = false;

  /* ══════════════════════════════════════════════════════
     DASHBOARD VIEW
     ══════════════════════════════════════════════════════ */

  function renderDashboard() {
    const todays    = allTasks().filter(t => t.date === state.selectedDate).sort((a, b) => a.startTime.localeCompare(b.startTime));
    const deadlines = [...state.projects].sort((a, b) => a.deadline.localeCompare(b.deadline)).slice(0, 4);
    const plant     = plantStage();
    const selected  = getProject(state.selectedProjectId);
    const stats     = projectStats(selected);

    dashboardEl.innerHTML = `
      <div class="header">
        <div class="header-left">
          <button class="menu-toggle" data-menu-toggle>☰</button>
          <div>
            <h2>Accueil</h2>
            <p class="sub">Vue d'ensemble de vos projets, échéances et priorités du moment.</p>
          </div>
        </div>
        <div class="toolbar">
          <input class="input" type="date" id="dashboardDate" value="${state.selectedDate}">
          <button class="btn soft" id="dashboardToggleProjectComposer">＋ Nouveau projet</button>
          <button class="btn primary" id="jumpTodo">Ouvrir le projet actif</button>
        </div>
      </div>

      <div class="layout-grid">
        <div>
          ${state.projectComposerOpen ? projectComposerHTML('dashboard') : ''}
          <div class="section-head">
            <h3 class="widget-title">Projets</h3>
          </div>
          <div class="cards">
            ${state.projects.map(project => {
              const pct = completionPercent(project);
              return `
                <article class="card project-card" data-project="${project.id}">
                  <div class="card-top">
                    <div>
                      <div class="card-title">${project.icon} ${project.name}</div>
                      <p class="card-text">${project.desc}</p>
                    </div>
                    ${statusBadge(pct)}
                  </div>
                  <div class="progress"><div class="bar" style="width:${pct}%;background:${progressColor(pct)}"></div></div>
                  <div class="meta-row"><span>${pct}% terminé</span><span>Échéance ${fmtDate(project.deadline)}</span></div>
                  <div style="display:flex;justify-content:flex-end;margin-top:12px">
                    <button class="btn soft" data-show-project="${project.id}">Afficher</button>
                  </div>
                </article>`;
            }).join('')}
          </div>

          <div class="card" style="margin-top:18px">
            <div class="card-top">
              <div>
                <h3 class="widget-title">Projet actif : ${escapeHTML(selected.name)}</h3>
                <p class="card-text">Résumé de pilotage rapide.</p>
              </div>
              <button class="btn soft" id="toProjectTodo">Voir les tâches</button>
            </div>
            <div class="project-summary">
              <div class="mini-stat"><strong>${stats.avg}%</strong><span>progression globale</span></div>
              <div class="mini-stat"><strong>${stats.total}</strong><span>tâches totales</span></div>
              <div class="mini-stat"><strong>${stats.done}</strong><span>terminées</span></div>
              <div class="mini-stat"><strong>${stats.delayed}</strong><span>en retard</span></div>
            </div>
          </div>
        </div>

        <div class="widgets">
          <div class="card">
            <h3 class="widget-title">🌱 Gamification — La plante</h3>
            <div class="plant-box">
              <div class="plant-stage">${plant.emoji}</div>
              <div>
                <div class="badge green">${plant.label}</div>
                <p class="plant-status" style="margin-top:10px">${plant.text}</p>
              </div>
            </div>
          </div>
          <div class="card">
            <h3 class="widget-title">✅ Tâches du jour</h3>
            ${todays.length ? todays.map(t => `
              <div class="task-mini">
                <div>
                  <strong>${escapeHTML(t.title)}</strong>
                  <div class="small">${escapeHTML(t.projectName)} · ${t.startTime} · ${t.durationMin} min</div>
                </div>
                <span class="deadline-pill">${t.status}</span>
              </div>
            `).join('') : '<p class="small">Aucune tâche prévue aujourd\'hui.</p>'}
          </div>
          <div class="card">
            <h3 class="widget-title">⏰ Deadlines</h3>
            ${deadlines.map(p => `
              <div class="task-mini">
                <div><strong>${escapeHTML(p.name)}</strong><div class="small">${p.tasks.length} tâches</div></div>
                <span class="deadline-pill">${fmtDate(p.deadline)}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>`;

    dashboardEl.querySelector('#dashboardDate').addEventListener('change', e => {
      state.selectedDate = e.target.value;
      saveState();
      renderDashboard();
    });
    bindProjectComposer(dashboardEl, 'dashboard');
    dashboardEl.querySelector('#jumpTodo').addEventListener('click',     () => switchView('todo'));
    dashboardEl.querySelector('#toProjectTodo').addEventListener('click', () => switchView('todo'));
    dashboardEl.querySelectorAll('[data-show-project]').forEach(btn => btn.addEventListener('click', e => {
      e.stopPropagation();
      state.selectedProjectId = btn.dataset.showProject;
      saveState();
      switchView('todo');
      renderTodo();
    }));
    dashboardEl.querySelectorAll('[data-project]').forEach(el => el.addEventListener('click', () => {
      state.selectedProjectId = el.dataset.project;
      saveState();
      renderDashboard();
      renderTodo();
    }));
  }

  /* ══════════════════════════════════════════════════════
     TODO / KANBAN VIEW
     ══════════════════════════════════════════════════════ */

  function renderTodo() {
    const project  = getProject(state.selectedProjectId);
    const personalTasks = project.tasks.filter(task => task.owner === state.currentMember);
    const filtered = personalTasks.filter(task => {
      if (state.todoFilter === 'all')  return true;
      if (state.todoFilter === 'done') return task.completed || task.status === 'done';
      return task.status === state.todoFilter;
    });

    todoEl.innerHTML = `
      <div class="header">
        <div class="header-left">
          <button class="menu-toggle" data-menu-toggle>☰</button>
          <div>
            <h2>Tâches</h2>
            <p class="sub">Organisez vos tâches personnelles, suivez leur avancement et mettez à jour votre planning.</p>
          </div>
        </div>
        <div class="toolbar">
          <select class="select" id="todoFilter">
            <option value="all"     ${state.todoFilter==='all'    ?'selected':''}>Tous statuts</option>
            <option value="pending" ${state.todoFilter==='pending'?'selected':''}>À faire</option>
            <option value="doing"   ${state.todoFilter==='doing'  ?'selected':''}>En cours</option>
            <option value="delayed" ${state.todoFilter==='delayed'?'selected':''}>Retardé</option>
            <option value="done"    ${state.todoFilter==='done'   ?'selected':''}>Terminé</option>
          </select>
        </div>
      </div>

      <div class="card" style="margin-bottom:16px">
        <div class="project-section-head">
          <div class="project-section-copy">
            <h3 class="widget-title" style="margin:0">Projets</h3>
            <div class="small">Projet actif : <strong>${escapeHTML(project.name)}</strong> · Vue personnelle : <strong>${escapeHTML(state.currentMember)}</strong></div>
          </div>
          <button class="btn soft" id="todoToggleProjectComposer">＋ Nouveau projet</button>
        </div>
        ${state.projectComposerOpen ? projectComposerHTML('todo') : ''}
        <div class="project-tabs">
          ${state.projects.map(p => `
            <div class="project-item ${p.id === project.id ? 'active' : ''}" data-project-item="${p.id}">
              <strong>${p.icon} ${p.name}</strong>
              <div class="small" style="margin-top:6px">${completionPercent(p)}% terminé · ${fmtDate(p.deadline)}</div>
            </div>`).join('')}
        </div>

        <div class="new-task-area">
          <div class="new-task-head">
            <div>
              <h3 class="new-task-heading">Nouvelle tâche</h3>
              <p class="new-task-subtitle">Ajoutez une tâche personnelle avec sa date, sa durée et son contexte.</p>
            </div>
          </div>
          <input class="new-task-title" id="newTitle" placeholder="Titre de la tâche">
          <textarea class="input ntf new-task-desc" id="newDesc" placeholder="Description"></textarea>
          <div class="new-task-row">
            <div class="ntf-field">
              <label class="ntf-label">Date</label>
              <input class="input ntf" id="newDate" type="date" value="${todayISO()}">
            </div>
            <div class="ntf-field">
              <label class="ntf-label">Heure de début</label>
              <input class="input ntf" id="newTime" type="time" value="09:00">
            </div>
            <div class="ntf-field">
              <label class="ntf-label">Durée (min)</label>
              <input class="input ntf" id="newDuration" type="number" min="15" step="15" value="60">
            </div>
            <div class="ntf-field">
              <label class="ntf-label">Buffer (min)</label>
              <input class="input ntf" id="newBuffer" type="number" min="0" step="5" value="10">
            </div>
          </div>
          <div class="new-task-row">
            <div class="ntf-field">
              <label class="ntf-label">Statut</label>
              <select class="select ntf" id="newStatus">
                <option value="pending">À faire</option>
                <option value="doing">En cours</option>
                <option value="delayed">Retardé</option>
                <option value="done">Terminé</option>
              </select>
            </div>
            <div class="ntf-field">
              <label class="ntf-label">Catégorie</label>
              <select class="select ntf" id="newLayer">
                ${categoryOptionsHTML('etudes', true)}
              </select>
            </div>
            <div class="ntf-field is-hidden" id="newCategoryWrap">
              <label class="ntf-label">Nouvelle catégorie</label>
              <input class="input ntf" id="newCategoryName" placeholder="Ex. Santé">
            </div>
            <div class="ntf-field">
              <label class="ntf-label">Assignée à</label>
              <select class="select ntf" id="newOwner">${MEMBERS.map(m => `<option${m === state.currentMember ? ' selected' : ''}>${m}</option>`).join('')}</select>
            </div>
            <div class="ntf-field ntf-field-action">
              <label class="ntf-label ntf-label-spacer">Action</label>
              <button class="btn primary ntf-save" id="saveQuickTask">＋ Ajouter</button>
            </div>
          </div>
        </div>
      </div>

      <div class="todo-columns">
        <section class="todo-col">
          <h4>À faire</h4>
          <div class="task-list">
            ${filtered.filter(t => t.status === 'pending').map(t => taskCardHTML(t)).join('') || '<div class="card"><p class="small">Aucune tâche.</p></div>'}
          </div>
        </section>
        <section class="todo-col">
          <h4>En cours</h4>
          <div class="task-list">
            ${filtered.filter(t => t.status === 'doing' || t.status === 'delayed').map(t => taskCardHTML(t)).join('') || '<div class="card"><p class="small">Aucune tâche.</p></div>'}
          </div>
        </section>
        <section class="todo-col">
          <h4>Fait</h4>
          <div class="task-list">
            ${filtered.filter(t => t.completed || t.status === 'done').map(t => taskCardHTML(t)).join('') || '<div class="card"><p class="small">Aucune tâche.</p></div>'}
          </div>
        </section>
      </div>`;

    todoEl.querySelector('#todoFilter').addEventListener('change', e => {
      state.todoFilter = e.target.value;
      saveState();
      renderTodo();
    });

    bindProjectComposer(todoEl, 'todo');

    todoEl.querySelectorAll('[data-project-item]').forEach(el => el.addEventListener('click', () => {
      state.selectedProjectId = el.dataset.projectItem;
      saveState();
      renderDashboard();
      renderTodo();
    }));

    todoEl.querySelector('#saveQuickTask').addEventListener('click', () => {
      const title = todoEl.querySelector('#newTitle').value.trim();
      if (!title) return notify('Ajoute un titre.');
      const newStatus = todoEl.querySelector('#newStatus').value;
      const category = resolveCategory(
        todoEl.querySelector('#newLayer').value,
        todoEl.querySelector('#newCategoryName').value
      );
      if (!category) return notify('Ajoute un nom pour la nouvelle catégorie.');
      const newTask = {
        id           : 't' + Math.random().toString(36).slice(2, 8),
        title,
        desc         : todoEl.querySelector('#newDesc').value.trim(),
        status       : newStatus,
        completed    : newStatus === 'done',
        progress     : newStatus === 'done' ? 100 : 15,
        owner        : todoEl.querySelector('#newOwner').value,
        start        : todoEl.querySelector('#newDate').value,
        durationDays : 1,
        category,
        date         : todoEl.querySelector('#newDate').value,
        startTime    : todoEl.querySelector('#newTime').value,
        durationMin  : Math.max(15, Number(todoEl.querySelector('#newDuration').value) || 60),
        buffer       : Math.max(0,  Number(todoEl.querySelector('#newBuffer').value) || 0),
        dependencies : [],
        subtasks     : [],
        delayRisk    : false,
        expanded     : false,
        editOpen     : false
      };
      project.tasks.unshift(newTask);
      ensureLayerVisibility();
      state.selectedDate = newTask.date;
      state.calendarZoom = 'day';
      saveState();
      renderAll();
      notify('Tâche ajoutée.');
    });

    const newLayerSelect  = todoEl.querySelector('#newLayer');
    const newCategoryWrap = todoEl.querySelector('#newCategoryWrap');
    const syncNewCategory = () => newCategoryWrap.classList.toggle('is-hidden', newLayerSelect.value !== '__new__');
    newLayerSelect.addEventListener('change', syncNewCategory);
    syncNewCategory();

    bindTodoInteractions(project);
  }

  function taskCardHTML(task) {
    const taskTime = task.startTime;
    const metaTime = `Tâche : ${task.durationMin}m · Buffer : ${task.buffer}m · Total : ${task.durationMin + task.buffer}m`;
    return `
      <article class="task-item" data-task-id="${task.id}">
        <div class="task-head">
          <div class="task-left">
            <button class="chevron-btn" data-action="toggle-expand">${task.expanded ? '⌄' : '›'}</button>
            <input class="check" type="checkbox" ${task.completed ? 'checked' : ''} data-action="toggle-complete">
            <div class="task-body">
              <div class="task-title-row">
                <span class="tag">#${escapeHTML(categoryLabel(task.category) || 'Général')}</span>
                <div class="task-title-text">${escapeHTML(task.title)}</div>
              </div>
              <div class="task-meta-stack">
                <div class="task-meta-small"><span class="meta-icon">🕘</span><span>${taskTime}</span></div>
                <div class="task-meta-small"><span class="meta-icon">🕒</span><span>${metaTime}</span></div>
              </div>
              <div class="task-status-row">
                <button class="status-chip ${task.status === 'pending' ? 'active' : ''}" data-set-status="pending">À faire</button>
                <button class="status-chip ${(task.status === 'doing' || task.status === 'delayed') ? 'active' : ''}" data-set-status="doing">En cours</button>
                <button class="status-chip ${(task.completed || task.status === 'done') ? 'active' : ''}" data-set-status="done">Fait</button>
              </div>
            </div>
          </div>
          <div class="task-actions">
            <button class="icon-btn play"       data-action="focus">▶</button>
            <button class="icon-btn calendar-btn" data-action="show-calendar" title="Voir dans le calendrier">${CALENDAR_ICON}</button>
            <button class="icon-btn member-btn" data-action="toggle-members" title="Changer le membre">${MEMBERS_ICON}</button>
            <button class="icon-btn magic"      data-action="magic" title="Générer des sous-tâches">${MAGIC_ICON}</button>
            <button class="icon-btn add-btn"    data-action="toggle-expand">＋</button>
            <button class="icon-btn edit-btn"   data-action="toggle-edit" title="Modifier">${EDIT_ICON}</button>
            <button class="icon-btn delete-btn" data-action="delete">🗑</button>
          </div>
        </div>

        ${task.memberMenuOpen ? `
          <div class="task-member-popover">
            <div class="task-member-title">Changer le membre</div>
            <div class="task-member-list">
              ${MEMBERS.map(member => `
                <button class="task-member-option${task.owner === member ? ' active' : ''}"
                        type="button"
                        data-set-owner="${escapeAttr(member)}">
                  <span class="task-member-swatch" style="background:${MEMBER_COLORS[member]}"></span>
                  <span>${escapeHTML(member)}</span>
                </button>
              `).join('')}
            </div>
          </div>` : ''}

        ${task.editOpen ? `
          <div class="task-panel">
            <div class="task-edit-grid">
              <div class="full">
                <label class="field-label">Titre</label>
                <input class="input" value="${escapeAttr(task.title)}" data-edit-field="title">
              </div>
              <div class="full">
                <label class="field-label">Description</label>
                <textarea class="input">${escapeHTML(task.desc || '')}</textarea>
              </div>
              <div>
                <label class="field-label">Date</label>
                <input class="input" type="date" value="${task.date}" data-edit-field="date">
              </div>
              <div>
                <label class="field-label">Heure</label>
                <input class="input" type="time" value="${task.startTime}" data-edit-field="time">
              </div>
              <div class="full">
                <label class="field-label">Membre</label>
                <select class="select" data-edit-field="owner">
                  ${MEMBERS.map(member => `<option value="${escapeAttr(member)}"${task.owner === member ? ' selected' : ''}>${escapeHTML(member)}</option>`).join('')}
                </select>
              </div>
              <div>
                <label class="field-label">Durée de la tâche (min)</label>
                <input class="input" type="number" min="15" step="5" value="${task.durationMin}" data-edit-field="duration">
              </div>
              <div>
                <label class="field-label">Temps buffer (min)</label>
                <input class="input" type="number" min="0" step="5" value="${task.buffer}" data-edit-field="buffer">
              </div>
              <div class="full">
                <label class="field-label">Ajouter buffer</label>
                <div class="quick-buffer-row">
                  <button class="quick-buffer-btn" type="button" data-buffer-add="5">+5m</button>
                  <button class="quick-buffer-btn" type="button" data-buffer-add="10">+10m</button>
                  <button class="quick-buffer-btn" type="button" data-buffer-add="15">+15m</button>
                  <button class="quick-buffer-btn" type="button" data-buffer-add="20">+20m</button>
                </div>
              </div>
              ${ENABLE_TEST_PREPARATION && task.kind !== 'prep' ? `
                <div class="full">
                  <button class="btn soft" type="button" data-action="create-prep">Creer une tache de preparation</button>
                </div>` : ''}
              <div class="full">
                <label class="field-label">Catégorie</label>
                <select class="select" data-edit-field="category">
                  ${categoryOptionsHTML(task.category, true)}
                </select>
              </div>
              <div class="full is-hidden" data-category-edit-wrap>
                <label class="field-label">Nouvelle catégorie</label>
                <input class="input" data-edit-field="category-custom" placeholder="Ex. Santé">
              </div>
            </div>
            <div class="task-panel-actions">
              <button class="btn primary"       data-action="save-edit">Enregistrer</button>
              <button class="btn cancel-inline" data-action="cancel-edit">Annuler</button>
            </div>
          </div>` : ''}

        ${task.expanded ? `
          <div class="task-panel">
            ${task.desc ? `<div class="small" style="margin-bottom:10px">${escapeHTML(task.desc)}</div>` : ''}
            <div class="subtask-list">
              ${task.subtasks.length ? task.subtasks.map((s, i) => `
                <div class="subtask">
                  <input type="checkbox" ${typeof s === 'object' ? (s.done ? 'checked' : '') : ''} data-subtoggle="${i}">
                  <span>${typeof s === 'object' ? escapeHTML(s.text) : escapeHTML(s)}</span>
                  <button class="icon-btn delete-btn" data-subdelete="${i}" style="width:32px;height:32px;min-width:32px">✕</button>
                </div>`).join('') : ''}
            </div>
            <div style="display:flex;gap:10px;margin-top:12px">
              <input class="input" data-action="subinput" placeholder="Ajouter une sous-tâche…">
              <button class="btn soft" data-action="add-sub">Ajouter</button>
            </div>
          </div>` : ''}
      </article>`;
  }

  function bindTodoInteractions(project) {
    todoEl.querySelectorAll('.task-item').forEach(item => {
      const id   = item.dataset.taskId;
      const task = project.tasks.find(t => t.id === id);
      if (!task) return;

      item.querySelectorAll('[data-action="toggle-expand"]').forEach(btn => btn.addEventListener('click', () => {
        task.expanded = !task.expanded;
        saveState();
        renderTodo();
      }));

      const editBtn = item.querySelector('[data-action="toggle-edit"]');
      if (editBtn) editBtn.addEventListener('click', () => {
        closeAllMemberMenus();
        task.editOpen = !task.editOpen;
        saveState();
        renderTodo();
      });

      const categorySelect = item.querySelector('[data-edit-field="category"]');
      const categoryWrap   = item.querySelector('[data-category-edit-wrap]');
      if (categorySelect && categoryWrap) {
        const syncEditCategory = () => categoryWrap.classList.toggle('is-hidden', categorySelect.value !== '__new__');
        categorySelect.addEventListener('change', syncEditCategory);
        syncEditCategory();
      }

      item.querySelector('[data-action="toggle-complete"]').addEventListener('change', e => {
        task.completed = e.target.checked;
        if (task.completed) { task.progress = 100; task.status = 'done'; }
        else { task.progress = Math.min(task.progress, 90); if (task.status === 'done') task.status = 'pending'; }
        saveState();
        renderAll();
      });

      const saveEditBtn = item.querySelector('[data-action="save-edit"]');
      if (saveEditBtn) saveEditBtn.addEventListener('click', () => {
        task.title      = (item.querySelector('[data-edit-field="title"]')?.value    || '').trim() || 'Sans titre';
        task.desc       = (item.querySelector('textarea.input')?.value               || '').trim();
        task.date       =  item.querySelector('[data-edit-field="date"]')?.value     || task.date;
        task.start      = task.date;
        task.startTime  =  item.querySelector('[data-edit-field="time"]')?.value     || task.startTime;
        task.owner      =  item.querySelector('[data-edit-field="owner"]')?.value    || task.owner;
        task.durationMin= Math.max(15, Number(item.querySelector('[data-edit-field="duration"]')?.value) || task.durationMin || 60);
        task.category   =  resolveCategory(
          item.querySelector('[data-edit-field="category"]')?.value || task.category,
          item.querySelector('[data-edit-field="category-custom"]')?.value || ''
        ) || task.category;
        task.buffer     = Math.max(0,  Number(item.querySelector('[data-edit-field="buffer"]')?.value)   || 0);
        task.editOpen   = false;
        task.memberMenuOpen = false;
        ensureLayerVisibility();
        saveState();
        renderAll();
        notify('Tâche mise à jour.');
      });

      const cancelEditBtn = item.querySelector('[data-action="cancel-edit"]');
      if (cancelEditBtn) cancelEditBtn.addEventListener('click', () => {
        task.editOpen = false;
        saveState();
        renderTodo();
      });

      item.querySelectorAll('[data-buffer-add]').forEach(btn => btn.addEventListener('click', () => {
        const input = item.querySelector('[data-edit-field="buffer"]');
        if (input) input.value = Math.max(0, Number(input.value || 0) + Number(btn.dataset.bufferAdd || 0));
      }));

      const createPrepBtn = item.querySelector('[data-action="create-prep"]');
      if (createPrepBtn) createPrepBtn.addEventListener('click', () => {
        const result = createPreparationTask(project, task);
        task.editOpen = false;
        renderAll();
        notify(result.created ? 'Tâche de préparation ajoutée.' : 'La tâche de préparation existe déjà.');
      });

      item.querySelector('[data-action="delete"]').addEventListener('click', () => {
        project.tasks = project.tasks.filter(t => t.id !== id);
        state.projects.forEach(p => p.tasks.forEach(t => { t.dependencies = (t.dependencies || []).filter(dep => dep !== id); }));
        saveState();
        renderAll();
        notify('Tâche supprimée.');
      });

      item.querySelectorAll('[data-set-status]').forEach(btn => btn.addEventListener('click', () => {
        const next = btn.dataset.setStatus;
        task.status    = next;
        task.completed = next === 'done';
        if (next === 'done') task.progress = 100;
        else if (task.progress >= 100) task.progress = 70;
        saveState();
        renderAll();
        notify(`Statut : ${next}`);
      }));

      item.querySelector('[data-action="focus"]').addEventListener('click', () => startFocus(task.id));
      item.querySelector('[data-action="show-calendar"]').addEventListener('click', () => openTaskInCalendar(task));
      item.querySelector('[data-action="toggle-members"]').addEventListener('click', () => {
        const next = !task.memberMenuOpen;
        closeAllMemberMenus(next ? task.id : null);
        task.memberMenuOpen = next;
        if (next) task.editOpen = false;
        saveState();
        renderTodo();
      });
      item.querySelectorAll('[data-set-owner]').forEach(btn => btn.addEventListener('click', () => {
        task.owner = btn.dataset.setOwner;
        task.memberMenuOpen = false;
        saveState();
        renderAll();
        notify(`Tâche assignée à ${task.owner}.`);
      }));

      item.querySelector('[data-action="magic"]').addEventListener('click', () => {
        const subtasks = generateSubtasks(task.title, task.desc);
        const existing = task.subtasks.map(s => typeof s === 'object' ? s.text : s);
        subtasks.forEach(s => { if (!existing.includes(s)) task.subtasks.push({ text: s, done: false }); });
        task.expanded = true;
        saveState();
        renderTodo();
        notify('Sous-tâches générées 🪄');
      });

      const addSubBtn = item.querySelector('[data-action="add-sub"]');
      if (addSubBtn) addSubBtn.addEventListener('click', () => {
        const input = item.querySelector('[data-action="subinput"]');
        if (!input || !input.value.trim()) return;
        task.subtasks.push({ text: input.value.trim(), done: false });
        saveState();
        renderTodo();
      });

      item.querySelectorAll('[data-subtoggle]').forEach(box => box.addEventListener('change', e => {
        const idx = Number(e.target.dataset.subtoggle);
        if (typeof task.subtasks[idx] === 'object') task.subtasks[idx].done = e.target.checked;
        saveState();
        renderTodo();
      }));

      item.querySelectorAll('[data-subdelete]').forEach(btn => btn.addEventListener('click', () => {
        task.subtasks.splice(Number(btn.dataset.subdelete), 1);
        saveState();
        renderTodo();
      }));
    });
  }

  function generateSubtasks(title, desc = '') {
    const text = `${title} ${desc}`.toLowerCase();
    if (text.includes('présentation') || text.includes('slide')) return ['Définir le plan', 'Créer les slides', 'Répéter à voix haute'];
    if (text.includes('wireframe') || text.includes('maquette'))  return ['Lister les écrans', 'Dessiner la structure', 'Valider les composants'];
    if (text.includes('rédiger') || text.includes('écrire'))      return ['Créer le plan', 'Rédiger le brouillon', 'Relire et corriger'];
    if (text.includes('test'))                                    return ['Préparer les cas', 'Exécuter les scénarios', 'Noter les anomalies'];
    return ['Clarifier le résultat attendu', 'Découper en micro-actions', 'Prévoir une vérification finale'];
  }

  /* ══════════════════════════════════════════════════════
     GANTT VIEW — "Vue Chef d'orchestre"
     ══════════════════════════════════════════════════════ */

  function renderGantt() {
    const startDate = new Date(todayISO() + 'T00:00:00');
    startDate.setDate(startDate.getDate() + state.weekOffset * 7);
    const days = Array.from({ length: 14 }, (_, i) => {
      const d = new Date(startDate);
      d.setDate(d.getDate() + i);
      return d;
    });
    const startISO = days[0].toISOString().slice(0, 10);
    const endISO   = days[13].toISOString().slice(0, 10);

    // Member filter button HTML
    const allActive = !state.ganttFilter;
    const filterHTML = `
      <div class="gantt-member-filters">
        <button class="gantt-member-btn gantt-member-btn-all ${!allActive ? 'inactive' : ''}" data-member-filter="all">
          Tous les membres
        </button>
        ${MEMBERS.map(m => `
          <button class="gantt-member-btn ${state.ganttFilter === m ? 'active' : ''}"
                  data-member-filter="${m}"
                  style="border-color:${MEMBER_COLORS[m]};color:${MEMBER_COLORS[m]}">
            <span class="swatch" style="background:${MEMBER_COLORS[m]}"></span>
            ${m}
          </button>
        `).join('')}
      </div>`;

    ganttEl.innerHTML = `
      <div class="header">
        <div class="header-left">
          <button class="menu-toggle" data-menu-toggle>☰</button>
          <div>
            <h2>Gantt</h2>
            <p class="sub">Visualisez la répartition du travail dans le temps et ajustez les dépendances entre tâches.</p>
          </div>
        </div>
        <div class="toolbar">
          <button class="btn" id="prevWeek">← Semaine</button>
          <div class="zoom-badge">
            ${days[0].toLocaleDateString('fr-FR', { day:'2-digit', month:'short' })}
            →
            ${days[13].toLocaleDateString('fr-FR', { day:'2-digit', month:'short' })}
          </div>
          <button class="btn" id="nextWeek">Semaine →</button>
        </div>
      </div>

      <div class="card gantt-wrap">
        ${filterHTML}
        <div class="gantt-stage-wrap" id="ganttStageWrap">
          <div class="gantt-header-row">
            <div class="gantt-label">Membre</div>
            ${days.map(d => `<div>${d.toLocaleDateString('fr-FR', { weekday:'short', day:'2-digit' })}</div>`).join('')}
          </div>
          ${MEMBERS.map((member, idx) => `
            <div class="gantt-row" data-member="${member}" style="position:relative">
              <div class="gantt-label">
                <div class="member-name" style="color:${MEMBER_COLORS[member]}">${member}</div>
                <div class="member-role">slot projet</div>
              </div>
              ${days.map(() => '<div class="gantt-cell"></div>').join('')}
            </div>
          `).join('')}
        </div>
      </div>`;

    document.getElementById('prevWeek').onclick = () => { state.weekOffset--; saveState(); renderGantt(); };
    document.getElementById('nextWeek').onclick = () => { state.weekOffset++; saveState(); renderGantt(); };

    // Member filter buttons
    ganttEl.querySelectorAll('[data-member-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.memberFilter;
        state.ganttFilter = val === 'all' ? null : val;
        saveState();
        renderGantt();
      });
    });

    const wrap = document.getElementById('ganttStageWrap');
    const barMap = new Map(); // taskId -> { bar, task, rowTop }

    // Place bars
    allTasks().forEach(task => {
      const row = wrap.querySelector(`.gantt-row[data-member="${task.owner}"]`);
      if (!row) return;

      const offset = daysBetween(startISO, task.start);
      if (offset > 13 || offset + task.durationDays < 0) return;

      const clampedOffset = Math.max(0, offset);
      const clampedDuration = task.durationDays - (clampedOffset - offset);

      const left   = GANTT_LABEL_W + clampedOffset * GANTT_COL_W + 6;
      const width  = Math.max(1, clampedDuration) * GANTT_COL_W - 12;
      const rowTop = GANTT_HEADER_H + MEMBERS.indexOf(task.owner) * GANTT_ROW_H;
      const top    = rowTop + 8;

      const bar = document.createElement('div');
      bar.className = 'gantt-bar';
      bar.dataset.taskId = task.id;
      bar.dataset.owner  = task.owner;
      bar.style.left   = left + 'px';
      bar.style.top    = top + 'px';
      bar.style.width  = width + 'px';
      bar.innerHTML    = `<span>${escapeHTML(task.title)}</span><small>${task.durationDays}j</small>`;

      // Apply filter dimming
      if (state.ganttFilter && state.ganttFilter !== task.owner) {
        bar.classList.add('dimmed');
      }

      wrap.appendChild(bar);
      barMap.set(task.id, { bar, task, rowTop });
      makeGanttBarDraggable(bar, task, startISO, wrap);
    });

    // Today's vertical line
    const todayOffset = daysBetween(startISO, todayISO());
    if (todayOffset >= 0 && todayOffset <= 13) {
      const line = document.createElement('div');
      line.className = 'gantt-today-line';
      line.style.left = (GANTT_LABEL_W + todayOffset * GANTT_COL_W) + 'px';
      wrap.appendChild(line);
    }

    // Draw orthogonal dependency connectors
    drawDependencies(wrap, barMap);
  }

  /**
   * Draws orthogonal (L-shaped) SVG dependency arrows.
   * Each arrow goes: right edge of source bar → elbow right →
   * vertical segment → left edge of target bar.
   */
  function drawDependencies(wrap, barMap) {
    // Remove old SVG if any
    wrap.querySelectorAll('.dep-svg').forEach(el => el.remove());

    const wrapRect = wrap.getBoundingClientRect();

    // Build SVG with an arrowhead marker
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('dep-svg');
    svg.style.position = 'absolute';
    svg.style.top      = '0';
    svg.style.left     = '0';
    svg.style.width    = wrap.scrollWidth + 'px';
    svg.style.height   = wrap.scrollHeight + 'px';
    svg.style.pointerEvents = 'none';
    svg.style.zIndex   = '2';
    svg.setAttribute('overflow', 'visible');

    // Arrowhead marker definition
    const defs   = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
    marker.setAttribute('id',          'gantt-arrow');
    marker.setAttribute('markerWidth',  '8');
    marker.setAttribute('markerHeight', '6');
    marker.setAttribute('refX',         '7');
    marker.setAttribute('refY',         '3');
    marker.setAttribute('orient',       'auto');
    const arrowPolygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    arrowPolygon.setAttribute('points', '0 0, 8 3, 0 6');
    arrowPolygon.setAttribute('fill',   '#c084fc');
    marker.appendChild(arrowPolygon);
    defs.appendChild(marker);
    svg.appendChild(defs);

    barMap.forEach(({ bar: toBar, task }) => {
      (task.dependencies || []).forEach(depId => {
        const fromEntry = barMap.get(depId);
        if (!fromEntry) return;
        const { bar: fromBar } = fromEntry;

        // Coordinates from inline styles (safe when section is hidden)
        const x1 = parseFloat(fromBar.style.left) + parseFloat(fromBar.style.width);
        const y1 = parseFloat(fromBar.style.top)  + 16;
        const x2 = parseFloat(toBar.style.left);
        const y2 = parseFloat(toBar.style.top)    + 16;

        // Elbow: go right by 14px, then vertical, then to target
        const elbowX = x1 + 14;

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

        let d;
        if (Math.abs(y1 - y2) < 4) {
          // Same row: straight horizontal line
          d = `M ${x1} ${y1} L ${x2} ${y2}`;
        } else {
          // Orthogonal L-shape:  → down/up → →
          d = `M ${x1} ${y1} L ${elbowX} ${y1} L ${elbowX} ${y2} L ${x2} ${y2}`;
        }

        path.setAttribute('d',                d);
        path.setAttribute('stroke',           '#c084fc');
        path.setAttribute('stroke-width',     '2');
        path.setAttribute('fill',             'none');
        path.setAttribute('stroke-dasharray', '6 3');
        path.setAttribute('marker-end',       'url(#gantt-arrow)');
        svg.appendChild(path);
      });
    });

    wrap.appendChild(svg);
  }

  function makeGanttBarDraggable(bar, task, startISO, wrap) {
    let startX = 0, startLeft = 0;

    bar.addEventListener('mousedown', e => {
      e.preventDefault();
      startX    = e.clientX;
      startLeft = parseFloat(bar.style.left);
      document.body.style.userSelect = 'none';

      const onMove = ev => {
        bar.style.left = (startLeft + ev.clientX - startX) + 'px';
      };

      const onUp = ev => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup',   onUp);
        document.body.style.userSelect = '';

        const delta    = ev.clientX - startX;
        const dayShift = Math.round(delta / GANTT_COL_W);
        if (dayShift !== 0) {
          shiftTaskAndDependents(task.id, dayShift);
          notify('Liens magnétiques appliqués : les dépendances ont suivi.');
        }
        saveState();
        renderGantt();
        renderTodo();
        renderDashboard();
        renderCalendar();
      };

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup',   onUp);
    });
  }

  function shiftTaskAndDependents(taskId, dayShift, visited = new Set()) {
    if (visited.has(taskId)) return;
    visited.add(taskId);
    const ref = getTask(taskId);
    if (!ref) return;
    ref.task.start = shiftISO(ref.task.start, dayShift);
    ref.task.date  = shiftISO(ref.task.date,  dayShift);
    // Cascade to tasks that depend on this one
    state.projects.forEach(p =>
      p.tasks.filter(t => (t.dependencies || []).includes(taskId))
              .forEach(t => shiftTaskAndDependents(t.id, dayShift, visited))
    );
  }

  /* ══════════════════════════════════════════════════════
     CALENDAR VIEW
     ══════════════════════════════════════════════════════ */

  function renderCalendar() {
    ensureLayerVisibility();
    const categories = allCategories();
    calendarEl.innerHTML = `
      <div class="header">
        <div class="header-left">
          <button class="menu-toggle" data-menu-toggle>☰</button>
          <div>
            <h2>Calendrier</h2>
            <p class="sub">Planifiez votre journée, comparez vos catégories d'activité et ajustez votre emploi du temps.</p>
          </div>
        </div>
        <div class="toolbar">
          <input class="input" type="date" id="calendarDate" value="${state.selectedDate}">
          <button class="btn" data-zoom="day">Jour</button>
          <button class="btn" data-zoom="week">Semaine</button>
          <button class="btn" data-zoom="month">Mois</button>
        </div>
      </div>
      <div class="calendar-shell">
        <div class="card">
          <h3 class="widget-title">Calques</h3>
          <div class="layer-list">
            ${categories.map(({ id, label }) => `
              <label class="layer">
                <span class="left"><i class="swatch" style="background:${layerColor(id)}"></i>${escapeHTML(label)}</span>
                <input type="checkbox" data-layer-toggle="${escapeAttr(id)}" ${state.layerVisibility[id] !== false ? 'checked' : ''}>
              </label>`).join('')}
          </div>
          <div class="card" style="margin-top:16px;padding:14px;background:#faf7ff">
            <strong>Gesture</strong>
            <p class="small" style="margin-top:8px">Écran tactile : pince pour zoomer. Desktop : Ctrl + molette.</p>
          </div>
        </div>
        <div class="calendar-area">
          <div class="calendar-top">
            <div class="legend">
              ${categories.map(({ id, label }) => `
                <span><i class="swatch" style="background:${layerColor(id)}"></i>${escapeHTML(label)}</span>
              `).join('')}
            </div>
            <div class="zoom-badge">Zoom actif : ${state.calendarZoom}</div>
          </div>
          <div class="calendar-grid" id="calendarGrid"></div>
        </div>
      </div>`;

    calendarEl.querySelector('#calendarDate').addEventListener('change', e => {
      state.selectedDate = e.target.value;
      saveState();
      renderDashboard();
      renderCalendar();
    });
    calendarEl.querySelectorAll('[data-zoom]').forEach(btn => btn.onclick = () => {
      state.calendarZoom = btn.dataset.zoom;
      saveState();
      renderCalendar();
    });
    calendarEl.querySelectorAll('[data-layer-toggle]').forEach(box => box.addEventListener('change', e => {
      state.layerVisibility[e.target.dataset.layerToggle] = e.target.checked;
      saveState();
      renderCalendar();
    }));

    const grid = calendarEl.querySelector('#calendarGrid');
    grid.addEventListener('wheel', e => {
      if (!e.ctrlKey) return;
      e.preventDefault();
      cycleZoom(e.deltaY > 0 ? 1 : -1);
    }, { passive: false });
    grid.addEventListener('touchstart', handlePinchStart, { passive: true });
    grid.addEventListener('touchmove',  handlePinchMove,  { passive: false });
    grid.addEventListener('touchend',   () => { pinchStartDistance = null; });

    if      (state.calendarZoom === 'day')  renderDayView(grid);
    else if (state.calendarZoom === 'week') renderWeekView(grid);
    else                                    renderMonthView(grid);
  }

  function cycleZoom(direction) {
    const order = ['day', 'week', 'month'];
    let idx = order.indexOf(state.calendarZoom);
    idx = Math.max(0, Math.min(order.length - 1, idx + direction));
    state.calendarZoom = order[idx];
    saveState();
    renderCalendar();
  }

  function pinchDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.hypot(dx, dy);
  }
  function handlePinchStart(e) { if (e.touches.length === 2) pinchStartDistance = pinchDistance(e.touches); }
  function handlePinchMove(e) {
    if (e.touches.length !== 2 || pinchStartDistance === null) return;
    e.preventDefault();
    const curr = pinchDistance(e.touches);
    const diff = curr - pinchStartDistance;
    if (Math.abs(diff) > 24) { cycleZoom(diff < 0 ? 1 : -1); pinchStartDistance = curr; }
  }

  function visibleEvents() {
    ensureLayerVisibility();
    return state.projects.flatMap(p => p.tasks).filter(t => state.layerVisibility[t.category] !== false);
  }

  function renderDayView(grid) {
    const events = visibleEvents().filter(t => t.date === state.selectedDate);
    grid.innerHTML = `
      <div class="day-grid">
        <div class="time-col">${hoursHTML()}</div>
        <div class="day-col">
          <div class="day-head">${new Date(state.selectedDate + 'T12:00:00').toLocaleDateString('fr-FR', { weekday:'long', day:'numeric', month:'long' })}</div>
          ${slotsHTML()}
        </div>
      </div>`;
    placeEvents(grid.querySelector('.day-col'), events);
  }

  function renderWeekView(grid) {
    const start = startOfWeek(new Date(state.selectedDate + 'T12:00:00'));
    const days  = Array.from({ length: 7 }, (_, i) => { const d = new Date(start); d.setDate(d.getDate() + i); return d; });
    grid.innerHTML = `
      <div class="week-grid">
        <div class="time-col">${hoursHTML()}</div>
        ${days.map(d => `
          <div class="day-col" data-date="${toISO(d)}">
            <div class="day-head">${d.toLocaleDateString('fr-FR', { weekday:'short', day:'numeric' })}</div>
            ${slotsHTML()}
          </div>`).join('')}
      </div>`;
    days.forEach(d => placeEvents(
      grid.querySelector(`.day-col[data-date="${toISO(d)}"]`),
      visibleEvents().filter(t => t.date === toISO(d))
    ));
  }

  function renderMonthView(grid) {
    const base  = new Date(state.selectedDate + 'T12:00:00');
    const first = new Date(base.getFullYear(), base.getMonth(), 1);
    const start = startOfWeek(first);
    const cells = Array.from({ length: 35 }, (_, i) => { const d = new Date(start); d.setDate(d.getDate() + i); return d; });
    const allVis = visibleEvents();
    grid.innerHTML = `
      <div class="month-grid">
        ${cells.map(d => {
          const iso    = toISO(d);
          const events = allVis.filter(t => t.date === iso);
          return `
            <div class="month-cell">
              <div class="month-date">${d.getDate()}</div>
              ${events.slice(0, 3).map(t => `<span class="month-mini" style="background:${layerColor(t.category)}">${t.startTime} ${escapeHTML(t.title)}</span>`).join('')}
              ${events.length > 3 ? `<div class="small">+ ${events.length - 3} autres…</div>` : ''}
            </div>`;
        }).join('')}
      </div>`;
  }

  function hoursHTML() {
    return Array.from({ length: 14 }, (_, i) => `<div class="hour-label">${String(i + 8).padStart(2, '0')}:00</div>`).join('');
  }
  function slotsHTML() {
    return Array.from({ length: 14 }, () => '<div class="slot"></div>').join('');
  }

  function placeEvents(container, events) {
    if (!container) return;
    events.forEach(task => {
      const startMin = toMinutes(task.startTime) - 8 * 60;
      const total    = task.durationMin + task.buffer;
      const top      = 42 + (startMin / 60) * 52;
      const height   = (total / 60) * 52 - 6;

      const el = document.createElement('div');
      el.className       = 'event';
      el.dataset.taskId  = task.id;
      el.dataset.layer   = task.category;
      el.style.top       = top + 'px';
      el.style.height    = Math.max(36, height) + 'px';
      el.style.background= layerGradient(task.category);
      el.innerHTML = `
        <div class="event-main">
          <div>${escapeHTML(task.title)}</div>
          <small>${task.startTime} · ${task.durationMin}m + ${task.buffer}m</small>
        </div>
        <div class="event-resizer" title="Changer la durée"></div>`;
      container.appendChild(el);
      makeCalendarEventDraggable(el, task, container);
    });
  }

  function makeCalendarEventDraggable(el, task, container) {
    const pxPerHour   = 52;
    const topOffset   = 42;
    const snapMinutes = 5;
    const minDuration = 15;
    const resizer     = el.querySelector('.event-resizer');

    const triggerConflict = (date, startTime, durationMin) => {
      const conflict = hasCourseConflict(task.id, date, startTime, durationMin + task.buffer);
      if (conflict) {
        el.classList.add('conflict');
        task.status    = 'delayed';
        task.delayRisk = true;
        setTimeout(() => el.classList.remove('conflict'), 700);
        notify('Conflit détecté avec un créneau de cours.');
      }
    };

    el.addEventListener('mousedown', e => {
      if (e.target === resizer) return;
      e.preventDefault();
      const weekGrid  = container.closest('.week-grid');
      const dayCols   = weekGrid ? Array.from(weekGrid.querySelectorAll('.day-col[data-date]')) : [container];
      const scroller  = container.closest('.calendar-grid');
      const grabOffY  = e.clientY - el.getBoundingClientRect().top;
      const width     = el.getBoundingClientRect().width;
      let   curParent = el.parentElement;

      el.classList.add('dragging');
      el.style.width = width + 'px';

      const pickCol = (x, y) => {
        if (!weekGrid) return container;
        return dayCols.find(col => { const r = col.getBoundingClientRect(); return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom; }) ||
               dayCols.find(col => { const r = col.getBoundingClientRect(); return x >= r.left && x <= r.right; }) ||
               curParent;
      };

      const setPos = (col, cx, cy) => {
        const rect       = col.getBoundingClientRect();
        const scrollTop  = scroller ? scroller.scrollTop : 0;
        el.style.top  = Math.max(topOffset, Math.min(col.scrollHeight - el.offsetHeight - 6, cy - rect.top + scrollTop - grabOffY)) + 'px';
        el.style.left = Math.max(8, Math.min(rect.width - width - 8, cx - rect.left - width / 2)) + 'px';
      };

      const onMove = ev => {
        const tc = pickCol(ev.clientX, ev.clientY);
        if (tc && tc !== curParent) { tc.appendChild(el); curParent = tc; }
        setPos(curParent, ev.clientX, ev.clientY);
      };

      const onUp = ev => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup',   onUp);
        const tc = pickCol(ev.clientX, ev.clientY);
        if (tc && tc !== curParent) { tc.appendChild(el); curParent = tc; }
        setPos(curParent, ev.clientX, ev.clientY);
        el.classList.remove('dragging');

        const rect       = curParent.getBoundingClientRect();
        const scrollTop  = scroller ? scroller.scrollTop : 0;
        const rawTop     = ev.clientY - rect.top + scrollTop - grabOffY;
        const snapped    = Math.max(topOffset, Math.round((rawTop - topOffset) / (pxPerHour * snapMinutes / 60)) * (pxPerHour * snapMinutes / 60) + topOffset);
        const minutes    = Math.max(0, Math.round(((snapped - topOffset) / pxPerHour * 60) / snapMinutes) * snapMinutes);
        const newTime    = fromMinutes(8 * 60 + minutes);
        const newDate    = weekGrid ? (curParent.dataset.date || task.date) : state.selectedDate;

        task.date      = newDate;
        task.start     = newDate;
        task.startTime = newTime;
        triggerConflict(newDate, newTime, task.durationMin);
        saveState();
        renderCalendar();
        renderTodo();
        renderDashboard();
      };

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup',   onUp);
    });

    resizer.addEventListener('mousedown', e => {
      e.preventDefault();
      e.stopPropagation();
      el.classList.add('resizing');
      const startY    = e.clientY;
      const startH    = parseFloat(el.style.height);
      const origDur   = task.durationMin;

      const onMove = ev => {
        el.style.height = Math.max(36, startH + ev.clientY - startY) + 'px';
      };
      const onUp = () => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup',   onUp);
        el.classList.remove('resizing');
        const newH    = parseFloat(el.style.height);
        task.durationMin = Math.max(minDuration, Math.round(((newH + 6) / pxPerHour * 60) / snapMinutes) * snapMinutes);
        triggerConflict(task.date, task.startTime, task.durationMin);
        if (task.durationMin !== origDur) notify(`Durée mise à jour : ${task.durationMin} min.`);
        saveState();
        renderCalendar();
        renderTodo();
        renderDashboard();
      };

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup',   onUp);
    });
  }

  /* ══════════════════════════════════════════════════════
     FOCUS MODE
     ══════════════════════════════════════════════════════ */

  function syncFocusPresentation() {
    const overlay = document.getElementById('focusOverlay');
    const mini    = document.getElementById('focusMini');
    const fullBtn = document.getElementById('fullscreenFocusBtn');
    if (!overlay || !mini) return;

    if (!state.focus.active) {
      overlay.classList.remove('active');
      mini.classList.remove('active');
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
      if (fullBtn) fullBtn.textContent = 'Plein écran';
      return;
    }

    const expanded = state.focus.presentation === 'overlay';
    overlay.classList.toggle('active', expanded);
    mini.classList.toggle('active', !expanded);
    if (fullBtn) fullBtn.textContent = document.fullscreenElement ? 'Quitter plein écran' : 'Plein écran';
  }

  function restoreFocusPanel() {
    if (!state.focus.active) return;
    state.focus.presentation = 'overlay';
    syncFocusPresentation();
  }

  function minimizeFocus() {
    if (!state.focus.active) return;
    state.focus.presentation = 'mini';
    syncFocusPresentation();
  }

  function toggleFocusFullscreen() {
    if (!state.focus.active) return;
    state.focus.presentation = 'overlay';
    syncFocusPresentation();
    const overlay = document.getElementById('focusOverlay');
    if (!overlay?.requestFullscreen) return notify('Le plein écran n’est pas disponible ici.');
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    else overlay.requestFullscreen().catch(() => notify('Impossible d’ouvrir le plein écran.'));
  }

  function startFocus(taskId) {
    const ref = getTask(taskId);
    if (!ref) return;
    clearInterval(state.focus.interval);
    const task  = ref.task;
    const total = (task.durationMin + task.buffer) * 60;
    state.focus = { active: true, paused: false, taskId, total, remaining: total, interval: null, presentation: 'mini' };
    document.getElementById('focusTaskTitle').textContent   = task.title;
    document.getElementById('focusTaskTime').textContent    = `${task.durationMin} min`;
    document.getElementById('focusBufferTime').textContent  = `${task.buffer} min`;
    document.getElementById('focusMiniTitle').textContent   = task.title;
    syncFocusPresentation();
    updateFocusUI();
    state.focus.interval = setInterval(() => {
      if (state.focus.paused) return;
      state.focus.remaining = Math.max(0, state.focus.remaining - 1);
      updateFocusUI();
      if (state.focus.remaining <= 0) {
        clearInterval(state.focus.interval);
        task.progress = 100; task.completed = true; task.status = 'done';
        saveState();
        renderAll();
        stopFocus({ returnHome: true });
        notify('Session terminée. Retour au dashboard.');
      }
    }, 1000);
    notify('Mode focus lancé en widget réduit.');
  }

  function updateFocusUI() {
    const ref = getTask(state.focus.taskId);
    if (!ref) return;
    const task    = ref.task;
    const elapsed = state.focus.total - state.focus.remaining;
    const pct     = state.focus.total ? (elapsed / state.focus.total) * 100 : 0;
    const inBuf   = state.focus.remaining <= task.buffer * 60 && task.buffer > 0;

    document.getElementById('focusTimer').textContent    = secondsToMMSS(state.focus.remaining);
    document.getElementById('focusBar').style.width      = pct + '%';
    document.getElementById('focusVeil').style.height    = pct + '%';
    document.getElementById('focusLabel').textContent    = inBuf ? 'Temps buffer restant' : 'Temps restant';
    document.getElementById('focusMiniTimer').textContent= secondsToMMSS(state.focus.remaining);
    document.getElementById('focusMiniBar').style.width  = pct + '%';
    document.getElementById('miniPauseFocusBtn').textContent = state.focus.paused ? '▶' : '⏸';

    const phase = document.getElementById('focusPhase');
    const veil  = document.getElementById('focusVeil');
    if      (inBuf)   { phase.textContent = '🎯 Buffer protecteur';      phase.className = 'badge green';  veil.style.background = 'linear-gradient(180deg,#a855f7,#7c3aed,#db2777)'; }
    else if (pct < 50){ phase.textContent = '⏳ Deep focus';              phase.className = 'badge orange'; veil.style.background = 'linear-gradient(180deg,#8b5cf6,#6d28d9,#312e81)'; }
    else if (pct < 85){ phase.textContent = '🚀 Bon rythme';             phase.className = 'badge green';  veil.style.background = 'linear-gradient(180deg,#3b82f6,#14b8a6,#22c55e)'; }
    else               { phase.textContent = '🔥 Dernière ligne droite'; phase.className = 'badge red';    veil.style.background = 'linear-gradient(180deg,#f59e0b,#ef4444,#b91c1c)'; }
  }

  function stopFocus({ returnHome = false } = {}) {
    clearInterval(state.focus.interval);
    state.focus = { ...defaultState.focus };
    document.getElementById('pauseFocusBtn').textContent = 'Pause';
    syncFocusPresentation();
    if (returnHome) switchView('dashboard');
  }

  function toggleFocusPause() {
    state.focus.paused = !state.focus.paused;
    document.getElementById('pauseFocusBtn').textContent = state.focus.paused ? 'Reprendre' : 'Pause';
    updateFocusUI();
  }

  function secondsToMMSS(s) {
    const m = Math.floor(s / 60), sec = s % 60;
    return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }

  /* ══════════════════════════════════════════════════════
     GLOBAL UI / NAVIGATION
     ══════════════════════════════════════════════════════ */

  function renderMemberSelector() {
    const wrap = document.getElementById('memberSelectorWrap');
    if (!wrap) return;
    wrap.innerHTML = `
      <div class="who-am-i">
        <span class="who-label">Tu es :</span>
        <div class="who-pills">
          ${MEMBERS.map(m => `
            <button class="who-pill${state.currentMember === m ? ' active' : ''}"
                    data-who="${m}"
                    style="--mc:${MEMBER_COLORS[m]}">
              <span class="who-dot" style="background:${MEMBER_COLORS[m]}"></span>${m}
            </button>`).join('')}
        </div>
      </div>`;
    wrap.querySelectorAll('[data-who]').forEach(btn => btn.addEventListener('click', () => {
      state.currentMember = btn.dataset.who;
      saveState();
      renderMemberSelector();
      renderTodo();
    }));
  }

  function bindGlobalUI() {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.onclick = () => {
      switchView(btn.dataset.view);
      if (window.innerWidth <= 820) toggleSidebar(false);
    });
    if (!menuToggleDelegationBound) {
      document.addEventListener('click', event => {
        const toggle = event.target.closest('[data-menu-toggle]');
        if (!toggle) return;
        toggleSidebar(!state.sidebarOpen);
      });
      menuToggleDelegationBound = true;
    }
    const launcher = document.getElementById('sidebarLauncher');
    if (launcher) launcher.onclick = () => toggleSidebar(true);
    const backdrop = document.getElementById('sidebarBackdrop');
    if (backdrop) backdrop.onclick = () => toggleSidebar(false);
    renderMemberSelector();
    updateSidebarUI();
  }

  function updateSidebarUI() {
    const sidebar  = document.getElementById('appSidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    const launcher = document.getElementById('sidebarLauncher');
    const mobile   = window.innerWidth <= 820;
    document.body.classList.toggle('sidebar-collapsed', !state.sidebarOpen);

    if (mobile) {
      sidebar.classList.toggle('open-mobile', !!state.sidebarOpen);
      sidebar.classList.remove('closed');
      mainArea.classList.add('expanded');
      backdrop.classList.toggle('show', !!state.sidebarOpen);
      launcher?.classList.toggle('show', !state.sidebarOpen);
    } else {
      sidebar.classList.remove('open-mobile');
      sidebar.classList.toggle('closed', !state.sidebarOpen);
      mainArea.classList.toggle('expanded', !state.sidebarOpen);
      backdrop.classList.remove('show');
      launcher?.classList.toggle('show', !state.sidebarOpen);
    }
  }

  function toggleSidebar(force) {
    state.sidebarOpen = typeof force === 'boolean' ? force : !state.sidebarOpen;
    saveState();
    updateSidebarUI();
  }

  function switchView(view) {
    document.querySelectorAll('.view').forEach(v    => v.classList.toggle('active', v.id === view));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === view));
  }

  function notify(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(notify._t);
    notify._t = setTimeout(() => toastEl.classList.remove('show'), 2400);
  }

  /* ══════════════════════════════════════════════════════
     FOCUS BUTTON WIRING (static DOM, not re-rendered)
     ══════════════════════════════════════════════════════ */

  document.getElementById('stopFocusBtn').onclick       = () => stopFocus();
  document.getElementById('pauseFocusBtn').onclick      = toggleFocusPause;
  document.getElementById('minimizeFocusBtn').onclick   = minimizeFocus;
  document.getElementById('fullscreenFocusBtn').onclick = toggleFocusFullscreen;
  document.getElementById('restoreFocusBtn').onclick    = restoreFocusPanel;
  document.getElementById('miniPauseFocusBtn').onclick  = toggleFocusPause;
  document.getElementById('miniStopFocusBtn').onclick   = () => stopFocus();
  document.getElementById('focusMini').addEventListener('dblclick', restoreFocusPanel);
  document.addEventListener('fullscreenchange', syncFocusPresentation);
  window.addEventListener('resize', updateSidebarUI);

  /* ══════════════════════════════════════════════════════
     MAIN RENDER LOOP
     ══════════════════════════════════════════════════════ */

  function renderAll() {
    renderDashboard();
    renderTodo();
    renderGantt();
    renderCalendar();
    bindGlobalUI();
    syncFocusPresentation();
    if (state.focus.active) updateFocusUI();
  }

  renderAll();

})();
