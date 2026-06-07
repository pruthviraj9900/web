// API configuration and helper functions for frontend-backend communication
// Backend runs on http://localhost:5000 by default

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://10.131.210.141:5000/api';

export async function fetchAPI(endpoint: string, options?: RequestInit) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
}

// Service endpoints
export const api = {
  // Get all services
  getServices: () => fetchAPI('/services'),

  // Get portfolio projects
  getPortfolio: () => fetchAPI('/portfolio'),

  // Get testimonials
  getTestimonials: () => fetchAPI('/testimonials'),

  // Get FAQs
  getFAQs: () => fetchAPI('/faqs'),

  // Get technologies
  getTechnologies: () => fetchAPI('/technologies'),

  // Get hosting plans
  getHostingPlans: () => fetchAPI('/hosting-plans'),

  // Submit contact form
  submitContact: (data: any) =>
    fetchAPI('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  // Submit quote request
  submitQuote: (data: any) =>
    fetchAPI('/quote', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  // Get dashboard stats (demo)
  getDashboardStats: () => fetchAPI('/dashboard/stats'),

  // Get dashboard projects (demo)
  getDashboardProjects: () => fetchAPI('/dashboard/projects'),
};
