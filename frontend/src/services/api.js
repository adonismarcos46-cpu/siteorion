import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_BASE = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message || 'An error occurred';
    console.error('API Error:', message);
    return Promise.reject(error);
  }
);

// Projects API
export const projectsApi = {
  getAll: async (params = {}) => {
    const response = await apiClient.get('/projects', { params });
    return response.data;
  },
  
  getById: async (id) => {
    const response = await apiClient.get(`/projects/${id}`);
    return response.data;
  },
  
  getFeatured: async () => {
    const response = await apiClient.get('/projects', { params: { featured: true } });
    return response.data;
  },
  
  getByCategory: async (category) => {
    const response = await apiClient.get('/projects', { params: { category } });
    return response.data;
  },
};

// Testimonials API
export const testimonialsApi = {
  getAll: async (approved = true) => {
    const response = await apiClient.get('/testimonials', { params: { approved } });
    return response.data;
  },
};

// Contact API
export const contactApi = {
  submit: async (contactData) => {
    const response = await apiClient.post('/contact', contactData);
    return response.data;
  },
};

// Stats API
export const statsApi = {
  get: async () => {
    const response = await apiClient.get('/stats');
    return response.data;
  },
};

// Health check
export const healthCheck = async () => {
  try {
    const response = await apiClient.get('/health');
    return response.data;
  } catch (error) {
    return { status: 'unhealthy', error: error.message };
  }
};

export default apiClient;
