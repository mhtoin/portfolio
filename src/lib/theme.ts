export type ColorMode = 'light' | 'dark';
export type VisualTheme = 'original' | 'terminal';

export interface ThemeState {
  colorMode: ColorMode;
  visualTheme: VisualTheme;
}

export const COLOR_MODE_KEY = 'portfolio-color-mode';
export const VISUAL_THEME_KEY = 'portfolio-visual-theme';

// Color mode functions (light/dark)
export function getStoredColorMode(): ColorMode | null {
  if (typeof localStorage === 'undefined') return null;
  return localStorage.getItem(COLOR_MODE_KEY) as ColorMode | null;
}

export function getSystemColorMode(): ColorMode {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getCurrentColorMode(): ColorMode {
  return getStoredColorMode() || getSystemColorMode();
}

// Visual theme functions (original/terminal)
export function getStoredVisualTheme(): VisualTheme | null {
  if (typeof localStorage === 'undefined') return null;
  return localStorage.getItem(VISUAL_THEME_KEY) as VisualTheme | null;
}

export function getCurrentVisualTheme(): VisualTheme {
  return getStoredVisualTheme() || 'terminal'; // Default to terminal since that's what we implemented
}

// Combined theme state
export function getCurrentThemeState(): ThemeState {
  return {
    colorMode: getCurrentColorMode(),
    visualTheme: getCurrentVisualTheme()
  };
}

export function setColorMode(colorMode: ColorMode): void {
  if (typeof localStorage === 'undefined') return;
  
  localStorage.setItem(COLOR_MODE_KEY, colorMode);
  document.documentElement.classList.toggle('dark', colorMode === 'dark');
}

export function setVisualTheme(visualTheme: VisualTheme): void {
  if (typeof localStorage === 'undefined') return;
  
  localStorage.setItem(VISUAL_THEME_KEY, visualTheme);
  document.documentElement.classList.toggle('terminal-theme', visualTheme === 'terminal');
  
  // Trigger view transition if supported
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      document.documentElement.classList.toggle('terminal-theme', visualTheme === 'terminal');
    });
  }
}

export function setThemeState(themeState: ThemeState): void {
  setColorMode(themeState.colorMode);
  setVisualTheme(themeState.visualTheme);
}

export function toggleColorMode(): ColorMode {
  const currentColorMode = getCurrentColorMode();
  const newColorMode = currentColorMode === 'dark' ? 'light' : 'dark';
  
  // Use view transition for color mode changes too
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      setColorMode(newColorMode);
    });
  } else {
    setColorMode(newColorMode);
  }
  
  return newColorMode;
}

export function toggleVisualTheme(): VisualTheme {
  const currentVisualTheme = getCurrentVisualTheme();
  const newVisualTheme = currentVisualTheme === 'terminal' ? 'original' : 'terminal';
  setVisualTheme(newVisualTheme);
  return newVisualTheme;
}

export function initializeTheme(): void {
  if (typeof window === 'undefined') return;
  
  const colorMode = getCurrentColorMode();
  const visualTheme = getCurrentVisualTheme();
  
  document.documentElement.classList.toggle('dark', colorMode === 'dark');
  document.documentElement.classList.toggle('terminal-theme', visualTheme === 'terminal');
  
  // Listen for system color mode changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!getStoredColorMode()) {
      const newColorMode = e.matches ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', newColorMode === 'dark');
    }
  });
}

// Legacy support for existing theme toggle
export function toggleTheme(): ColorMode {
  return toggleColorMode();
}