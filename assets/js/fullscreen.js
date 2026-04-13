/* Fullscreen API Logic */
const AppFullscreen = {
  toggle() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  },
  updateIcon() {
    const icon = document.querySelector('#fullscreenToggle i');
    icon.className = document.fullscreenElement ? 'fa-solid fa-compress' : 'fa-solid fa-expand';
  },
  init() {
    document.addEventListener('fullscreenchange', this.updateIcon);
  }
};