/**
 * ==============================================================================
 * TASK SHOWCASE & LEARNING PROGRESS - CORE LOGIC & CONTROLLER
 * ==============================================================================
 */

(function () {
  'use strict';

  // --- STATE MANAGEMENT ---
  const state = {
    activeCategoryFilter: 'all',
    searchQuery: '',
    currentTheme: localStorage.getItem('taskjourney_theme') || 'dark',
    expandedCategory: 'html', // Default active category
    data: window.TASKS_DATA || []
  };

  // DOM Elements Cache
  const DOM = {
    htmlRoot: document.documentElement,
    themeToggleBtn: document.getElementById('theme-toggle'),
    mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
    mobileDrawer: document.getElementById('mobile-drawer'),
    heroStatsGrid: document.getElementById('hero-stats-grid'),
    categoriesContainer: document.getElementById('categories-container'),
    taskSearchInput: document.getElementById('task-search-input'),
    searchClearBtn: document.getElementById('search-clear-btn'),
    filterPills: document.getElementById('filter-pills'),
    btnExpandAll: document.getElementById('btn-expand-all'),
    btnCollapseAll: document.getElementById('btn-collapse-all'),
    visibleTasksCount: document.getElementById('visible-tasks-count'),
    visibleDaysCount: document.getElementById('visible-days-count'),
    activeFilterIndicator: document.getElementById('active-filter-indicator'),
    emptyState: document.getElementById('empty-state'),
    btnResetFilters: document.getElementById('btn-reset-filters'),
    scrollTopBtn: document.getElementById('scroll-top-btn'),

    // Modal
    previewModal: document.getElementById('preview-modal'),
    previewIframe: document.getElementById('preview-iframe'),
    iframeWrapper: document.getElementById('iframe-wrapper'),
    modalTaskTitle: document.getElementById('modal-task-title'),
    modalTaskBadge: document.getElementById('modal-task-badge'),
    modalExternalLink: document.getElementById('modal-external-link'),
    modalFooterUrl: document.getElementById('modal-footer-url'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalFullscreenBtn: document.getElementById('modal-fullscreen-btn'),
    modalDeviceBtns: document.querySelectorAll('.device-btn')
  };

  // ==============================================================================
  // THEME SWITCHER
  // ==============================================================================
  function initTheme() {
    applyTheme(state.currentTheme);

    DOM.themeToggleBtn.addEventListener('click', () => {
      const nextTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
      state.currentTheme = nextTheme;
      localStorage.setItem('taskjourney_theme', nextTheme);
      applyTheme(nextTheme);
    });
  }

  function applyTheme(theme) {
    DOM.htmlRoot.setAttribute('data-theme', theme);
    const icon = DOM.themeToggleBtn.querySelector('i');
    if (theme === 'dark') {
      icon.className = 'fa-solid fa-sun';
      DOM.themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
    } else {
      icon.className = 'fa-solid fa-moon';
      DOM.themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
    }
  }

  // ==============================================================================
  // DATA HELPERS & STATISTICS
  // ==============================================================================
  function getCategoryStats() {
    let totalTasks = 0;
    const catMap = {};

    state.data.forEach(cat => {
      let catTaskCount = 0;
      if (Array.isArray(cat.days)) {
        cat.days.forEach(day => {
          if (Array.isArray(day.tasks)) {
            catTaskCount += day.tasks.length;
          }
        });
      }
      catMap[cat.id] = catTaskCount;
      totalTasks += catTaskCount;
    });

    return { totalTasks, catMap };
  }

  // ==============================================================================
  // HERO STATS DASHBOARD RENDERER & ANIMATOR
  // ==============================================================================
  function renderHeroStats() {
    const { totalTasks, catMap } = getCategoryStats();
    DOM.heroStatsGrid.innerHTML = '';

    // Total Card
    const totalCard = document.createElement('div');
    totalCard.className = 'stat-card';
    totalCard.setAttribute('data-cat', 'all');
    totalCard.innerHTML = `
      <div class="stat-card-header">
        <div class="stat-icon"><i class="fa-solid fa-chart-pie"></i></div>
        <span class="stat-badge">Overview</span>
      </div>
      <div>
        <div class="stat-card-number" data-target="${totalTasks}">0</div>
        <div class="stat-card-label">Total Tasks</div>
      </div>
    `;
    totalCard.addEventListener('click', () => {
      setFilter('all');
      document.getElementById('controls-toolbar').scrollIntoView({ behavior: 'smooth' });
    });
    DOM.heroStatsGrid.appendChild(totalCard);

    // Update Pill Count for "All"
    const pillAll = document.getElementById('pill-count-all');
    if (pillAll) pillAll.textContent = totalTasks;

    // Per Category Cards
    state.data.forEach(cat => {
      const count = catMap[cat.id] || 0;
      const card = document.createElement('div');
      card.className = 'stat-card';
      card.setAttribute('data-cat', cat.id);
      card.style.setProperty('--cat-color', cat.color);
      card.innerHTML = `
        <div class="stat-card-header">
          <div class="stat-icon"><i class="${cat.icon}"></i></div>
          <span class="stat-badge">${cat.days ? cat.days.length : 0} Days</span>
        </div>
        <div>
          <div class="stat-card-number" data-target="${count}">0</div>
          <div class="stat-card-label">${cat.name} Tasks</div>
        </div>
      `;

      card.addEventListener('click', () => {
        openCategorySection(cat.id, true);
      });
      DOM.heroStatsGrid.appendChild(card);

      // Update Filter Pill Count
      const catPill = document.getElementById(`pill-count-${cat.id}`);
      if (catPill) catPill.textContent = count;
    });

    // Run Animated Counters
    animateHeroCounters();
  }

  function animateHeroCounters() {
    const counters = DOM.heroStatsGrid.querySelectorAll('.stat-card-number');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10) || 0;
      const duration = 900; // ms
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutQuad easing
        const currentCount = Math.floor(progress * (2 - progress) * target);
        counter.textContent = currentCount;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counter.textContent = target;
        }
      }

      requestAnimationFrame(update);
    });
  }

  // ==============================================================================
  // DYNAMIC CATEGORY & ACCORDION RENDERER
  // ==============================================================================
  function renderAllCategories() {
    DOM.categoriesContainer.innerHTML = '';

    state.data.forEach(cat => {
      const catBlock = document.createElement('section');
      catBlock.className = 'category-block';
      catBlock.id = `cat-${cat.id}`;
      catBlock.setAttribute('data-category', cat.id);
      catBlock.style.setProperty('--cat-color', cat.color);
      catBlock.style.setProperty('--cat-bg', `${cat.color}18`);

      let totalCatTasks = 0;
      if (Array.isArray(cat.days)) {
        cat.days.forEach(d => {
          totalCatTasks += (d.tasks || []).length;
        });
      }

      // Default expand state
      const isInitiallyExpanded = (cat.id === state.expandedCategory);
      if (isInitiallyExpanded) {
        catBlock.classList.add('expanded');
      }

      // Header
      const header = document.createElement('div');
      header.className = 'category-header';
      header.setAttribute('role', 'button');
      header.setAttribute('aria-expanded', isInitiallyExpanded ? 'true' : 'false');
      header.innerHTML = `
        <div class="category-info-wrap">
          <div class="category-icon-box">
            <i class="${cat.icon}"></i>
          </div>
          <div class="category-text-wrap">
            <div class="category-title-row">
              <h2 class="category-title">${cat.name}</h2>
              <span class="category-badge">${cat.badgeText || 'Category'}</span>
            </div>
            <p class="category-desc">${cat.description || ''}</p>
          </div>
        </div>
        <div class="category-actions-wrap">
          <span class="category-count-pill">${totalCatTasks} Tasks</span>
          <div class="category-chevron">
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      `;

      header.addEventListener('click', (e) => {
        e.preventDefault();
        toggleCategoryAccordion(cat.id);
      });

      // Body (Days container)
      const body = document.createElement('div');
      body.className = 'category-body';

      const daysContainer = document.createElement('div');
      daysContainer.className = 'days-container';

      if (Array.isArray(cat.days) && cat.days.length > 0) {
        cat.days.forEach((dayData, dayIndex) => {
          const dayCard = createDayAccordion(dayData, cat, dayIndex === 0);
          daysContainer.appendChild(dayCard);
        });
      } else {
        daysContainer.innerHTML = `
          <div style="padding: 2rem; text-align: center; color: var(--text-muted);">
            No days added for ${cat.name} yet.
          </div>
        `;
      }

      body.appendChild(daysContainer);
      catBlock.appendChild(header);
      catBlock.appendChild(body);
      DOM.categoriesContainer.appendChild(catBlock);
    });

    updateVisibleCounters();
  }

  // ==============================================================================
  // DAY ACCORDION & TASK CARD CREATION
  // ==============================================================================
  function createDayAccordion(dayData, category, isOpenByDefault = false) {
    const dayCard = document.createElement('div');
    dayCard.className = `day-accordion-card ${isOpenByDefault ? 'open' : ''}`;
    dayCard.setAttribute('data-day', dayData.day);
    dayCard.style.setProperty('--cat-color', category.color);

    const taskCount = (dayData.tasks || []).length;
    const dayFormatted = String(dayData.day).padStart(2, '0');

    // Day Header
    const dayHeader = document.createElement('div');
    dayHeader.className = 'day-header';
    dayHeader.setAttribute('role', 'button');
    dayHeader.innerHTML = `
      <div class="day-header-left">
        <span class="day-number-badge">Day ${dayFormatted}</span>
        <span class="day-title-text">${dayData.title}</span>
      </div>
      <div class="day-header-right">
        <span class="day-task-count">${taskCount} ${taskCount === 1 ? 'Task' : 'Tasks'}</span>
        <i class="fa-solid fa-chevron-down day-chevron"></i>
      </div>
    `;

    dayHeader.addEventListener('click', (e) => {
      e.stopPropagation();
      dayCard.classList.toggle('open');
    });

    // Day Body / Task Grid
    const dayBody = document.createElement('div');
    dayBody.className = 'day-body';

    const tasksGrid = document.createElement('div');
    tasksGrid.className = 'tasks-grid';

    (dayData.tasks || []).forEach(task => {
      const card = createTaskCard(task, dayData.day, category);
      tasksGrid.appendChild(card);
    });

    dayBody.appendChild(tasksGrid);
    dayCard.appendChild(dayHeader);
    dayCard.appendChild(dayBody);

    return dayCard;
  }

  function createTaskCard(task, dayNumber, category) {
    const card = document.createElement('div');
    card.className = 'task-card';
    card.setAttribute('data-task-id', task.id);
    card.setAttribute('data-task-title', task.title.toLowerCase());
    card.setAttribute('data-task-desc', (task.description || '').toLowerCase());
    card.setAttribute('data-task-tech', (task.technologies || []).join(' ').toLowerCase());

    const dayFormatted = String(dayNumber).padStart(2, '0');
    const taskNumFormatted = String(task.taskNumber || 1).padStart(2, '0');

    // Build Tech tags HTML
    const techTagsHtml = (task.technologies || []).map(tech => 
      `<span class="tech-tag">${tech}</span>`
    ).join('');

    // URLs
    const demoUrl = task.demoUrl && task.demoUrl !== '#' ? task.demoUrl : null;
    const codeUrl = task.codeUrl && task.codeUrl !== '#' ? task.codeUrl : (demoUrl || null);

    card.innerHTML = `
      <div class="task-card-meta">
        <div class="task-id-tags">
          <span class="task-pill">Day ${dayFormatted}</span>
          <span class="task-number-pill">Task ${taskNumFormatted}</span>
        </div>
        <span class="task-status-badge">
          <i class="fa-solid fa-circle-check"></i> ${task.status || 'Completed'}
        </span>
      </div>

      <div class="task-card-body">
        <h3 class="task-title">${task.title}</h3>
        <p class="task-desc">${task.description || 'Frontend assignment task.'}</p>
        <div class="task-tech-tags">${techTagsHtml}</div>
      </div>

      <div class="task-actions-row">
        <button class="btn-task btn-primary-task btn-view-task" title="Preview Task in Modal">
          <i class="fa-solid fa-eye"></i> View Task
        </button>
        ${demoUrl ? `
          <a href="${demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-task btn-secondary-task" title="Open Live Demo in New Window">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
          </a>
        ` : `
          <button class="btn-task btn-secondary-task" disabled style="opacity: 0.6; cursor: not-allowed;" title="Demo URL not linked">
            <i class="fa-solid fa-clock"></i> Upcoming
          </button>
        `}
        ${codeUrl ? `
          <a href="${codeUrl}" target="_blank" rel="noopener noreferrer" class="btn-task btn-code-task" title="View Code Source">
            <i class="fa-solid fa-code"></i>
          </a>
        ` : ''}
      </div>
    `;

    // Hook View Task button to modal preview
    const viewBtn = card.querySelector('.btn-view-task');
    viewBtn.addEventListener('click', () => {
      openPreviewModal(task, dayFormatted, taskNumFormatted, category);
    });

    return card;
  }

  // ==============================================================================
  // ACCORDION TOGGLE & INTERACTION LOGIC
  // ==============================================================================
  /**
   * Expands the selected category and smoothly collapses others.
   * If the category is already expanded, it toggles it.
   */
  function toggleCategoryAccordion(categoryId, shouldScroll = false) {
    const allBlocks = DOM.categoriesContainer.querySelectorAll('.category-block');
    const targetBlock = document.getElementById(`cat-${categoryId}`);

    if (!targetBlock) return;

    const isCurrentlyExpanded = targetBlock.classList.contains('expanded');

    allBlocks.forEach(block => {
      if (block === targetBlock) {
        if (isCurrentlyExpanded) {
          block.classList.remove('expanded');
          block.querySelector('.category-header').setAttribute('aria-expanded', 'false');
          state.expandedCategory = null;
        } else {
          block.classList.add('expanded');
          block.querySelector('.category-header').setAttribute('aria-expanded', 'true');
          state.expandedCategory = categoryId;
        }
      } else {
        // Collapse others as requested
        block.classList.remove('expanded');
        block.querySelector('.category-header').setAttribute('aria-expanded', 'false');
      }
    });

    if (shouldScroll && targetBlock.classList.contains('expanded')) {
      setTimeout(() => {
        targetBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }

  function openCategorySection(categoryId, shouldScroll = true) {
    // If filter is active and hides this category, reset filter to 'all' or this category
    if (state.activeCategoryFilter !== 'all' && state.activeCategoryFilter !== categoryId) {
      setFilter('all');
    }

    const targetBlock = document.getElementById(`cat-${categoryId}`);
    if (!targetBlock) return;

    // Expand category
    const allBlocks = DOM.categoriesContainer.querySelectorAll('.category-block');
    allBlocks.forEach(block => {
      if (block === targetBlock) {
        block.classList.add('expanded');
        block.querySelector('.category-header').setAttribute('aria-expanded', 'true');
      } else {
        block.classList.remove('expanded');
        block.querySelector('.category-header').setAttribute('aria-expanded', 'false');
      }
    });
    state.expandedCategory = categoryId;

    if (shouldScroll) {
      setTimeout(() => {
        targetBlock.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }

  function expandAll() {
    const allBlocks = DOM.categoriesContainer.querySelectorAll('.category-block');
    allBlocks.forEach(block => {
      block.classList.add('expanded');
      block.querySelector('.category-header').setAttribute('aria-expanded', 'true');
    });

    const allDays = DOM.categoriesContainer.querySelectorAll('.day-accordion-card');
    allDays.forEach(day => day.classList.add('open'));
  }

  function collapseAll() {
    const allBlocks = DOM.categoriesContainer.querySelectorAll('.category-block');
    allBlocks.forEach(block => {
      block.classList.remove('expanded');
      block.querySelector('.category-header').setAttribute('aria-expanded', 'false');
    });

    const allDays = DOM.categoriesContainer.querySelectorAll('.day-accordion-card');
    allDays.forEach(day => day.classList.remove('open'));
    state.expandedCategory = null;
  }

  // ==============================================================================
  // SEARCH & FILTER ENGINE
  // ==============================================================================
  function setFilter(categoryKey) {
    state.activeCategoryFilter = categoryKey;

    // Update filter pills UI
    const pills = DOM.filterPills.querySelectorAll('.filter-pill');
    pills.forEach(pill => {
      if (pill.getAttribute('data-filter') === categoryKey) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    // Update indicator text
    const filterNames = {
      all: 'All Categories',
      html: 'HTML',
      css: 'CSS',
      tailwind: 'Tailwind CSS',
      bootstrap: 'Bootstrap',
      js: 'JavaScript',
      react: 'React'
    };
    DOM.activeFilterIndicator.textContent = `Filter: ${filterNames[categoryKey] || categoryKey}`;

    applySearchAndFilter();
  }

  function applySearchAndFilter() {
    const query = state.searchQuery.trim().toLowerCase();
    const filter = state.activeCategoryFilter;

    let totalVisibleTasks = 0;
    let totalVisibleDays = 0;
    let anyCategoryVisible = false;

    const categoryBlocks = DOM.categoriesContainer.querySelectorAll('.category-block');

    categoryBlocks.forEach(catBlock => {
      const catId = catBlock.getAttribute('data-category');
      const matchesFilter = (filter === 'all' || filter === catId);

      if (!matchesFilter) {
        catBlock.style.display = 'none';
        return;
      }

      let catMatchingTasks = 0;
      const dayCards = catBlock.querySelectorAll('.day-accordion-card');

      dayCards.forEach(dayCard => {
        let dayMatchingTasks = 0;
        const taskCards = dayCard.querySelectorAll('.task-card');

        taskCards.forEach(taskCard => {
          const title = taskCard.getAttribute('data-task-title') || '';
          const desc = taskCard.getAttribute('data-task-desc') || '';
          const tech = taskCard.getAttribute('data-task-tech') || '';
          const day = dayCard.getAttribute('data-day') || '';

          const matchesSearch = (!query) || 
            title.includes(query) || 
            desc.includes(query) || 
            tech.includes(query) ||
            `day ${day}`.includes(query) ||
            `day${day}`.includes(query) ||
            catId.includes(query);

          if (matchesSearch) {
            taskCard.style.display = 'flex';
            dayMatchingTasks++;
            catMatchingTasks++;
            totalVisibleTasks++;
          } else {
            taskCard.style.display = 'none';
          }
        });

        if (dayMatchingTasks > 0) {
          dayCard.style.display = 'block';
          totalVisibleDays++;
          // If searching with active query, auto-expand day to reveal results
          if (query) {
            dayCard.classList.add('open');
          }
        } else {
          dayCard.style.display = 'none';
        }
      });

      if (catMatchingTasks > 0) {
        catBlock.style.display = 'block';
        anyCategoryVisible = true;
        // If searching with active query, auto-expand category to reveal results
        if (query) {
          catBlock.classList.add('expanded');
        }
      } else {
        catBlock.style.display = 'none';
      }
    });

    // Update Counts in Results Status Bar
    DOM.visibleTasksCount.textContent = totalVisibleTasks;
    DOM.visibleDaysCount.textContent = totalVisibleDays;

    // Empty State Toggle
    if (!anyCategoryVisible || totalVisibleTasks === 0) {
      DOM.emptyState.classList.add('visible');
    } else {
      DOM.emptyState.classList.remove('visible');
    }
  }

  function updateVisibleCounters() {
    let totalTasks = 0;
    let totalDays = 0;
    const taskCards = DOM.categoriesContainer.querySelectorAll('.task-card');
    const dayCards = DOM.categoriesContainer.querySelectorAll('.day-accordion-card');

    DOM.visibleTasksCount.textContent = taskCards.length;
    DOM.visibleDaysCount.textContent = dayCards.length;
  }

  // ==============================================================================
  // LIVE PREVIEW MODAL & DEVICE VIEWPORT SIMULATOR
  // ==============================================================================
  function openPreviewModal(task, dayFormatted, taskNumFormatted, category) {
    const demoUrl = task.demoUrl && task.demoUrl !== '#' ? task.demoUrl : null;

    DOM.modalTaskTitle.textContent = task.title;
    DOM.modalTaskBadge.textContent = `Day ${dayFormatted} • Task ${taskNumFormatted}`;
    DOM.modalTaskBadge.style.backgroundColor = `${category.color}22`;
    DOM.modalTaskBadge.style.color = category.color;

    if (demoUrl) {
      DOM.previewIframe.src = demoUrl;
      DOM.modalExternalLink.href = demoUrl;
      DOM.modalExternalLink.style.display = 'inline-flex';
      DOM.modalFooterUrl.textContent = demoUrl;
    } else {
      DOM.modalExternalLink.style.display = 'none';
      DOM.modalFooterUrl.textContent = 'Demo preview file not linked yet.';
      // Render clean fallback inside iframe
      const fallbackHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              margin: 0;
              background-color: #0f172a;
              color: #f8fafc;
              text-align: center;
              padding: 2rem;
            }
            .icon { font-size: 3rem; margin-bottom: 1rem; }
            h2 { font-size: 1.5rem; margin-bottom: 0.5rem; }
            p { color: #94a3b8; max-width: 460px; line-height: 1.6; }
            .badge {
              margin-top: 1rem;
              padding: 0.35rem 0.75rem;
              border-radius: 999px;
              background: rgba(99, 102, 241, 0.2);
              color: #818cf8;
              font-size: 0.85rem;
              font-weight: 600;
            }
          </style>
        </head>
        <body>
          <div class="icon">🚀</div>
          <h2>${task.title}</h2>
          <p>${task.description || 'Upcoming practical assignment'}</p>
          <div class="badge">Technologies: ${(task.technologies || []).join(', ')}</div>
        </body>
        </html>
      `;
      DOM.previewIframe.srcdoc = fallbackHtml;
    }

    // Reset simulator to desktop view
    setDeviceView('desktop');

    // Show modal
    DOM.previewModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent page scrolling
  }

  function closePreviewModal() {
    DOM.previewModal.classList.remove('active');
    // Clear iframe to halt any running scripts/audio
    DOM.previewIframe.src = 'about:blank';
    DOM.previewIframe.removeAttribute('srcdoc');
    document.body.style.overflow = '';
  }

  function setDeviceView(device) {
    DOM.modalDeviceBtns.forEach(btn => {
      if (btn.getAttribute('data-device') === device) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    DOM.iframeWrapper.classList.remove('tablet-view', 'mobile-view');
    if (device === 'tablet') {
      DOM.iframeWrapper.classList.add('tablet-view');
    } else if (device === 'mobile') {
      DOM.iframeWrapper.classList.add('mobile-view');
    }
  }

  function toggleModalFullscreen() {
    const modalContainer = DOM.previewModal.querySelector('.preview-modal-container');
    if (!document.fullscreenElement) {
      if (modalContainer.requestFullscreen) {
        modalContainer.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // ==============================================================================
  // EVENT LISTENERS & SETUP
  // ==============================================================================
  function setupEventListeners() {
    // Search input listener
    DOM.taskSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (state.searchQuery) {
        DOM.searchClearBtn.style.display = 'flex';
      } else {
        DOM.searchClearBtn.style.display = 'none';
      }
      applySearchAndFilter();
    });

    // Clear search button
    DOM.searchClearBtn.addEventListener('click', () => {
      DOM.taskSearchInput.value = '';
      state.searchQuery = '';
      DOM.searchClearBtn.style.display = 'none';
      applySearchAndFilter();
      DOM.taskSearchInput.focus();
    });

    // Filter pills click
    DOM.filterPills.addEventListener('click', (e) => {
      const pill = e.target.closest('.filter-pill');
      if (!pill) return;
      const filterKey = pill.getAttribute('data-filter');
      setFilter(filterKey);
    });

    // Expand / Collapse all buttons
    DOM.btnExpandAll.addEventListener('click', expandAll);
    DOM.btnCollapseAll.addEventListener('click', collapseAll);

    // Reset filters button in empty state
    DOM.btnResetFilters.addEventListener('click', () => {
      DOM.taskSearchInput.value = '';
      state.searchQuery = '';
      DOM.searchClearBtn.style.display = 'none';
      setFilter('all');
    });

    // Mobile Hamburger Menu
    DOM.mobileMenuToggle.addEventListener('click', () => {
      DOM.mobileDrawer.classList.toggle('open');
      const icon = DOM.mobileMenuToggle.querySelector('i');
      if (DOM.mobileDrawer.classList.contains('open')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });

    // Navigation Links (Desktop & Mobile & Footer)
    document.querySelectorAll('[data-category]').forEach(link => {
      link.addEventListener('click', (e) => {
        const catId = link.getAttribute('data-category');
        if (catId) {
          e.preventDefault();
          openCategorySection(catId, true);
          // Close mobile drawer if open
          DOM.mobileDrawer.classList.remove('open');
          DOM.mobileMenuToggle.querySelector('i').className = 'fa-solid fa-bars';
        }
      });
    });

    // Modal Events
    DOM.modalCloseBtn.addEventListener('click', closePreviewModal);
    DOM.previewModal.addEventListener('click', (e) => {
      if (e.target === DOM.previewModal) {
        closePreviewModal();
      }
    });
    DOM.modalFullscreenBtn.addEventListener('click', toggleModalFullscreen);

    DOM.modalDeviceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const device = btn.getAttribute('data-device');
        setDeviceView(device);
      });
    });

    // Keyboard Shortcuts (Esc to close modal)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && DOM.previewModal.classList.contains('active')) {
        closePreviewModal();
      }
    });

    // Scroll to Top Listener
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        DOM.scrollTopBtn.classList.add('visible');
      } else {
        DOM.scrollTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    DOM.scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ==============================================================================
  // INITIALIZATION
  // ==============================================================================
  function init() {
    initTheme();
    renderHeroStats();
    renderAllCategories();
    setupEventListeners();
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
