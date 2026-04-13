/* Chart & Progress Bar Logic */
const AppCharts = {
  chartData: {
    weekly: { labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], values: [65, 42, 78, 56, 90, 72, 85] },
    monthly: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], values: [45, 62, 55, 78, 68, 82, 90, 75, 88, 92, 70, 85] }
  },

  renderChart(range) {
    const data = this.chartData[range];
    const chartEl = document.getElementById('barChart');
    chartEl.innerHTML = '';
    const max = Math.max(...data.values);

    data.values.forEach((val, i) => {
      const col = document.createElement('div'); col.className = 'bar-col';
      const bar = document.createElement('div'); bar.className = 'bar'; bar.style.height = '0%';
      const label = document.createElement('div'); label.className = 'bar-label'; label.textContent = data.labels[i];
      
      col.appendChild(bar); col.appendChild(label); chartEl.appendChild(col);
      
      requestAnimationFrame(() => { setTimeout(() => { bar.style.height = Math.max(4, (val / max) * 100) + '%'; }, i * 60); });
    });

    document.querySelectorAll('[data-chart-range]').forEach(btn => btn.classList.toggle('active', btn.dataset.chartRange === range));
  },

  animateProgressBars() {
    document.querySelectorAll('.progress-fill[data-width]').forEach((bar, i) => {
      setTimeout(() => { bar.style.width = bar.dataset.width; }, 300 + i * 150);
    });
  },

  init() {
    this.renderChart('weekly');
    setTimeout(this.animateProgressBars, 600);
  }
};