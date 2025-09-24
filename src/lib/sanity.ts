import { createClient } from '@sanity/client';
import { getGitHubProjects, getFeaturedGitHubProjects } from './github';

// These should be replaced with actual Sanity project values
const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
const dataset = process.env.PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2023-05-03';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

// Types for Sanity documents
export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  image?: {
    asset: {
      _ref: string;
      url: string;
    };
    alt?: string;
  };
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  publishedAt: string;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  content: any; // Portable Text
  image?: {
    asset: {
      _ref: string;
      url: string;
    };
    alt?: string;
  };
  tags: string[];
  publishedAt: string;
}

export interface Profile {
  _id: string;
  name: string;
  title: string;
  bio: string;
  image?: {
    asset: {
      _ref: string;
      url: string;
    };
    alt?: string;
  };
  email: string;
  linkedinUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  skills: string[];
}

// GROQ Queries
export const PROJECTS_QUERY = `*[_type == "project"] | order(publishedAt desc, _createdAt desc)`;
export const FEATURED_PROJECTS_QUERY = `*[_type == "project" && featured == true] | order(publishedAt desc) [0...3]`;
export const PROJECT_BY_SLUG_QUERY = `*[_type == "project" && slug.current == $slug][0]`;

export const BLOG_POSTS_QUERY = `*[_type == "blogPost"] | order(publishedAt desc, _createdAt desc)`;
export const BLOG_POST_BY_SLUG_QUERY = `*[_type == "blogPost" && slug.current == $slug][0]`;

export const PROFILE_QUERY = `*[_type == "profile"][0]`;

// Helper functions
export async function getProjects(): Promise<Project[]> {
  try {
    const sanityProjects = await sanityClient.fetch(PROJECTS_QUERY);
    if (sanityProjects && sanityProjects.length > 0) {
      return sanityProjects;
    }
  } catch (error) {
    console.error('Error fetching projects from Sanity:', error);
  }
  
  // Fallback to GitHub projects
  const githubUsername = import.meta.env.PUBLIC_GITHUB_USERNAME || 'mhtoin';
  return await getGitHubProjects(githubUsername);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const sanityProjects = await sanityClient.fetch(FEATURED_PROJECTS_QUERY);
    if (sanityProjects && sanityProjects.length > 0) {
      return sanityProjects;
    }
  } catch (error) {
    console.error('Error fetching featured projects from Sanity:', error);
  }
  
  // Fallback to GitHub featured projects
  const githubUsername = import.meta.env.PUBLIC_GITHUB_USERNAME || 'mhtoin';
  return await getFeaturedGitHubProjects(githubUsername);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    return await sanityClient.fetch(PROJECT_BY_SLUG_QUERY, { slug });
  } catch (error) {
    console.error('Error fetching project by slug:', error);
    return null;
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    return await sanityClient.fetch(BLOG_POSTS_QUERY);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    return await sanityClient.fetch(BLOG_POST_BY_SLUG_QUERY, { slug });
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    return null;
  }
}

export async function getProfile(): Promise<Profile | null> {
  try {
    return await sanityClient.fetch(PROFILE_QUERY);
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}