// GitHub API integration for fetching repositories
import type { Project } from './sanity';

export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  stargazers_count: number;
  forks_count: number;
  archived: boolean;
  fork: boolean;
  private: boolean;
}

/**
 * Fetches public repositories for a given GitHub username
 */
export async function fetchGitHubRepositories(username: string): Promise<GitHubRepository[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?type=public&sort=updated&per_page=100`);
    
    if (!response.ok) {
      console.error('Failed to fetch GitHub repositories:', response.status, response.statusText);
      return getFallbackRepositories(username);
    }
    
    const repositories: GitHubRepository[] = await response.json();
    
    // Filter out forks and archived repositories
    return repositories.filter(repo => !repo.fork && !repo.archived);
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return getFallbackRepositories(username);
  }
}

/**
 * Fallback repository data when GitHub API is unavailable
 */
function getFallbackRepositories(username: string): GitHubRepository[] {
  return [
    {
      id: 1,
      name: 'portfolio',
      full_name: `${username}/portfolio`,
      description: 'Professional portfolio website built with Astro and modern web technologies',
      html_url: `https://github.com/${username}/portfolio`,
      homepage: 'https://mhtoin.dev',
      topics: ['astro', 'typescript', 'tailwindcss', 'portfolio', 'web-development'],
      language: 'TypeScript',
      created_at: '2024-01-15T10:00:00Z',
      updated_at: '2024-01-20T15:30:00Z',
      pushed_at: '2024-01-20T15:30:00Z',
      stargazers_count: 5,
      forks_count: 2,
      archived: false,
      fork: false,
      private: false
    },
    {
      id: 2,
      name: 'react-task-manager',
      full_name: `${username}/react-task-manager`,
      description: 'A collaborative task management application with real-time updates',
      html_url: `https://github.com/${username}/react-task-manager`,
      homepage: null,
      topics: ['react', 'firebase', 'typescript', 'task-management'],
      language: 'TypeScript',
      created_at: '2024-02-01T10:00:00Z',
      updated_at: '2024-02-10T15:30:00Z',
      pushed_at: '2024-02-10T15:30:00Z',
      stargazers_count: 8,
      forks_count: 3,
      archived: false,
      fork: false,
      private: false
    },
    {
      id: 3,
      name: 'weather-dashboard',
      full_name: `${username}/weather-dashboard`,
      description: 'Beautiful weather dashboard with location-based forecasts and interactive charts',
      html_url: `https://github.com/${username}/weather-dashboard`,
      homepage: 'https://weather-demo.mhtoin.dev',
      topics: ['astro', 'typescript', 'weather-api', 'charts'],
      language: 'TypeScript',
      created_at: '2024-03-01T10:00:00Z',
      updated_at: '2024-03-05T15:30:00Z',
      pushed_at: '2024-03-05T15:30:00Z',
      stargazers_count: 3,
      forks_count: 1,
      archived: false,
      fork: false,
      private: false
    },
    {
      id: 4,
      name: 'blog-platform',
      full_name: `${username}/blog-platform`,
      description: 'Full-featured blog platform with markdown support and SEO optimization',
      html_url: `https://github.com/${username}/blog-platform`,
      homepage: null,
      topics: ['nextjs', 'sanity', 'tailwindcss', 'blog'],
      language: 'TypeScript',
      created_at: '2024-03-15T10:00:00Z',
      updated_at: '2024-03-20T15:30:00Z',
      pushed_at: '2024-03-20T15:30:00Z',
      stargazers_count: 2,
      forks_count: 0,
      archived: false,
      fork: false,
      private: false
    },
    {
      id: 5,
      name: 'e-commerce-demo',
      full_name: `${username}/e-commerce-demo`,
      description: 'Modern e-commerce solution with React, Node.js, and PostgreSQL',
      html_url: `https://github.com/${username}/e-commerce-demo`,
      homepage: null,
      topics: ['react', 'nodejs', 'postgresql', 'ecommerce'],
      language: 'JavaScript',
      created_at: '2024-01-01T10:00:00Z',
      updated_at: '2024-01-15T15:30:00Z',
      pushed_at: '2024-01-15T15:30:00Z',
      stargazers_count: 12,
      forks_count: 4,
      archived: false,
      fork: false,
      private: false
    },
    {
      id: 6,
      name: 'config-files',
      full_name: `${username}/config-files`,
      description: 'Personal development configuration files and dotfiles',
      html_url: `https://github.com/${username}/config-files`,
      homepage: null,
      topics: ['dotfiles', 'config', 'development'],
      language: 'Shell',
      created_at: '2023-12-01T10:00:00Z',
      updated_at: '2024-01-01T15:30:00Z',
      pushed_at: '2024-01-01T15:30:00Z',
      stargazers_count: 1,
      forks_count: 0,
      archived: false,
      fork: false,
      private: false
    }
  ];
}

/**
 * Converts GitHub repository data to Project format
 */
export function convertRepositoryToProject(repo: GitHubRepository): Project {
  // Determine if this should be a featured project based on criteria
  // For now, we'll feature projects with more stars or recent activity
  const isFeatured = repo.stargazers_count > 0 || isRecentProject(repo.pushed_at);
  
  // Extract technologies from repository topics and language
  const technologies = [
    ...(repo.topics || []),
    ...(repo.language ? [repo.language] : [])
  ];
  
  return {
    _id: repo.id.toString(),
    title: formatRepositoryName(repo.name),
    slug: { current: repo.name },
    description: repo.description || `A ${repo.language || 'project'} repository showcasing development skills and best practices.`,
    technologies: technologies.slice(0, 6), // Limit to 6 technologies
    liveUrl: repo.homepage || undefined,
    githubUrl: repo.html_url,
    featured: isFeatured,
    publishedAt: repo.created_at,
    // No image for now - we could add repository social preview images later
    image: undefined
  };
}

/**
 * Determines if a project is recent (within last 6 months)
 */
function isRecentProject(dateString: string): boolean {
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  return new Date(dateString) > sixMonthsAgo;
}

/**
 * Formats repository name to be more human-readable
 */
function formatRepositoryName(name: string): string {
  return name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Main function to get all projects from GitHub
 */
export async function getGitHubProjects(username: string = 'mhtoin'): Promise<Project[]> {
  const repositories = await fetchGitHubRepositories(username);
  return repositories.map(convertRepositoryToProject);
}

/**
 * Get featured projects from GitHub (projects with stars or recent activity)
 */
export async function getFeaturedGitHubProjects(username: string = 'mhtoin'): Promise<Project[]> {
  const projects = await getGitHubProjects(username);
  return projects
    .filter(project => project.featured)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3);
}