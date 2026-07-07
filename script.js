const themeToggle = document.getElementById('themeToggle');
const root = document.body;

const storedTheme = localStorage.getItem('portfolio-theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const initialTheme = storedTheme || systemTheme;

root.setAttribute('data-theme', initialTheme);
updateToggleLabel(initialTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
    updateToggleLabel(nextTheme);
  });
}

function updateToggleLabel(theme) {
  if (!themeToggle) return;
  themeToggle.querySelector('.toggle-icon').textContent = theme === 'dark' ? '🌙' : '☀️';
}
