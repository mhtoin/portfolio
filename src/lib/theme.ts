export type Theme = 'light' | 'dark';

export const THEME_KEY = 'portfolio-theme';

export function getStoredTheme(): Theme | null {
  if (typeof localStorage === 'undefined') return null;
  return localStorage.getItem(THEME_KEY) as Theme | null;
}

export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getCurrentTheme(): Theme {
  return getStoredTheme() || getSystemTheme();
}

export function setTheme(theme: Theme): void {
  if (typeof localStorage === 'undefined') return;
  
  localStorage.setItem(THEME_KEY, theme);
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

export function toggleTheme(): Theme {
  const currentTheme = getCurrentTheme();
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  return newTheme;
}

export function initializeTheme(): void {
  if (typeof window === 'undefined') return;
  
  const theme = getCurrentTheme();
  document.documentElement.classList.toggle('dark', theme === 'dark');
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!getStoredTheme()) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }
  });
}