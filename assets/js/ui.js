/* UI Logic: Sidebar, Dropdowns, Offcanvas */
const AppUI = {
  state: {
    sidebarOpen: window.innerWidth >= 992,
    offcanvasOpen: false,
    openDropdown: null
  },

  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const mainWrap = document.getElementById('mainWrap');

    if (window.innerWidth < 992) {
      this.state.sidebarOpen = !this.state.sidebarOpen;
      sidebar.classList.toggle('open', this.state.sidebarOpen);
      overlay.classList.toggle('show', this.state.sidebarOpen);
    } else {
      this.state.sidebarOpen = !this.state.sidebarOpen;
      sidebar.style.transform = this.state.sidebarOpen ? 'translateX(0)' : 'translateX(-100%)';
      mainWrap.style.marginLeft = this.state.sidebarOpen ? 'var(--sidebar-width)' : '0';
    }
  },

  closeSidebarMobile() {
    if (window.innerWidth < 992) {
      this.state.sidebarOpen = false;
      document.getElementById('sidebar').classList.remove('open');
      document.getElementById('sidebarOverlay').classList.remove('show');
    }
  },

  toggleDropdown(name) {
    if (this.state.openDropdown === name) {
      this.closeAllDropdowns();
    } else {
      this.closeAllDropdowns();
      const el = document.getElementById(`dropdown-${name}`);
      if (el) { el.classList.add('show'); this.state.openDropdown = name; }
    }
  },

  closeAllDropdowns() {
    document.querySelectorAll('.dropdown-menu-custom.show').forEach(d => d.classList.remove('show'));
    this.state.openDropdown = null;
  },

  toggleSidebarDropdown(key) {
    const link = document.querySelector(`[data-sidebar-dropdown="${key}"]`);
    const sub = document.getElementById(`sub-${key}`);
    if (link && sub) { link.classList.toggle('open'); sub.classList.toggle('open'); }
  },

  openOffcanvas() {
    this.state.offcanvasOpen = true;
    document.getElementById('offcanvasPanel').classList.add('show');
    document.getElementById('offcanvasOverlay').classList.add('show');
  },

  closeOffcanvas() {
    this.state.offcanvasOpen = false;
    document.getElementById('offcanvasPanel').classList.remove('show');
    document.getElementById('offcanvasOverlay').classList.remove('show');
  },

  initResize() {
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const sidebar = document.getElementById('sidebar');
        const mainWrap = document.getElementById('mainWrap');
        const overlay = document.getElementById('sidebarOverlay');
        
        if (window.innerWidth >= 992) {
          sidebar.classList.remove('open');
          overlay.classList.remove('show');
          if (this.state.sidebarOpen) {
            sidebar.style.transform = 'translateX(0)';
            mainWrap.style.marginLeft = 'var(--sidebar-width)';
          }
        } else {
          sidebar.style.transform = '';
          mainWrap.style.marginLeft = '';
        }
      }, 100);
    });
  }
};