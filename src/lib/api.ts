// API Configuration and Integration for Laravel Backend
// This provides a clean interface to connect with your Laravel API

interface ApiConfig {
  baseUrl: string;
  timeout?: number;
  headers?: Record<string, string>;
}

// Default configuration - update with your Laravel API endpoint
const defaultConfig: ApiConfig = {
  baseUrl: process.env.VITE_API_BASE_URL || 'https://your-laravel-api.com/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
};

class ApiClient {
  private config: ApiConfig;

  constructor(config: ApiConfig = defaultConfig) {
    this.config = config;
  }

  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.config.baseUrl}${endpoint}`;
    
    const config: RequestInit = {
      ...options,
      headers: {
        ...this.config.headers,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // GET request
  async get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
    const url = params 
      ? `${endpoint}?${new URLSearchParams(params)}`
      : endpoint;
    
    return this.request<T>(url, { method: 'GET' });
  }

  // POST request
  async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // PUT request
  async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  // DELETE request
  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

// API Types for Laravel Backend Integration
export interface ProposalRequest {
  name: string;
  email: string;
  company: string;
  phone?: string;
  country: string;
  projectType: string;
  timeline?: string;
  budget?: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

export interface NewsletterSubscription {
  email: string;
  source?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  published_at: string;
  featured_image?: string;
  tags?: string[];
  meta_title?: string;
  meta_description?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  bio: string;
  image?: string;
  linkedin?: string;
  email?: string;
}

export interface Client {
  id: number;
  name: string;
  logo?: string;
  industry: string;
  testimonial?: string;
}

// API Service Instance
export const api = new ApiClient();

// Specific API functions for your Laravel backend
export const apiService = {
  // Proposal requests
  submitProposal: (data: ProposalRequest) => 
    api.post('/proposals', data),

  // Contact form
  submitContact: (data: ContactForm) => 
    api.post('/contact', data),

  // Newsletter subscription
  subscribeNewsletter: (data: NewsletterSubscription) => 
    api.post('/newsletter/subscribe', data),

  // Blog posts
  getBlogPosts: (page = 1, limit = 10) => 
    api.get<{ data: BlogPost[]; meta: any }>('/blog', { 
      page: page.toString(), 
      limit: limit.toString() 
    }),

  getBlogPost: (slug: string) => 
    api.get<BlogPost>(`/blog/${slug}`),

  // Team members
  getTeamMembers: () => 
    api.get<TeamMember[]>('/team'),

  getTeamMember: (id: string) => 
    api.get<TeamMember>(`/team/${id}`),

  // Clients
  getClients: () => 
    api.get<Client[]>('/clients'),

  // Analytics (optional - for dashboard)
  getAnalytics: (period = '30days') => 
    api.get(`/analytics?period=${period}`),
};

// Error handling utility
export const handleApiError = (error: any) => {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }
  if (error.message) {
    return error.message;
  }
  return 'An unexpected error occurred. Please try again.';
};