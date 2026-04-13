/* Main Dispatcher & Initialization */
(function() {
  'use strict';

  // Initialize Modules
  AppTheme.init();
  AppUI.initResize();
  AppFullscreen.init();
  AppCharts.init();

  // Set initial sidebar state for desktop
  if (window.innerWidth >= 992) {
    document.getElementById('sidebar').style.transform = 'translateX(0)';
    document.getElementById('mainWrap').style.marginLeft = 'var(--sidebar-width)';
  }

  // Trigger fade-in animations
  document.querySelectorAll('.animate-in').forEach((el, i) => {
    el.style.animationDelay = (0.05 + i * 0.06) + 's';
  });

  // Global Click Event Delegation
  document.addEventListener('click', function(e) {
    const target = e.target;

    if (target.closest('#darkModeToggle')) return AppTheme.applyDarkMode(localStorage.getItem('winnerTAM-dark') !== 'true');
    if (target.closest('#offcanvasDarkMode')) return AppTheme.applyDarkMode(localStorage.getItem('winnerTAM-dark') !== 'true');
    if (target.closest('#fullscreenToggle')) return AppFullscreen.toggle();
    if (target.closest('#sidebarToggle')) return AppUI.toggleSidebar();
    if (target.closest('#sidebarOverlay')) return AppUI.closeSidebarMobile();
    if (target.closest('#settingsToggle')) return AppUI.openOffcanvas();
    if (target.closest('#offcanvasClose') || target.closest('#offcanvasOverlay')) return AppUI.closeOffcanvas();

    const dropdownBtn = target.closest('[data-dropdown]');
    if (dropdownBtn) { e.stopPropagation(); return AppUI.toggleDropdown(dropdownBtn.dataset.dropdown); }

    const sidebarDropdown = target.closest('[data-sidebar-dropdown]');
    if (sidebarDropdown) return AppUI.toggleSidebarDropdown(sidebarDropdown.dataset.sidebarDropdown);

    const sidebarLink = target.closest('.sidebar-link[data-page]');
    if (sidebarLink) {
      document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
      sidebarLink.classList.add('active');
      return AppUI.closeSidebarMobile();
    }

    const subLink = target.closest('.sidebar-sub-link');
    if (subLink) {
      document.querySelectorAll('.sidebar-sub-link').forEach(l => l.classList.remove('active'));
      subLink.classList.add('active');
      return AppUI.closeSidebarMobile();
    }

    const langItem = target.closest('.lang-item');
    if (langItem) {
      document.querySelectorAll('.lang-item').forEach(l => { l.classList.remove('active'); l.querySelector('i').className = ''; });
      langItem.classList.add('active'); langItem.querySelector('i').className = 'fa-solid fa-check';
      return;
    }

    const swatch = target.closest('.color-swatch');
    if (swatch) return AppTheme.setAccentColor(swatch.dataset.color);

    const fsBtn = target.closest('[data-fs]');
    if (fsBtn) {
      document.querySelectorAll('[data-fs]').forEach(b => b.classList.remove('active')); fsBtn.classList.add('active');
      document.body.style.fontSize = { small: '13px', medium: '14px', large: '16px' }[fsBtn.dataset.fs];
      return;
    }

    const chartBtn = target.closest('[data-chart-range]');
    if (chartBtn) return AppCharts.renderChart(chartBtn.dataset.chartRange);

    const toggleSwitch = target.closest('.toggle-switch:not(#offcanvasDarkMode)');
    if (toggleSwitch) { toggleSwitch.classList.toggle('active'); return; }

    // Close dropdowns if clicking outside
    if (!target.closest('.dropdown-wrap')) AppUI.closeAllDropdowns();
  });
})();