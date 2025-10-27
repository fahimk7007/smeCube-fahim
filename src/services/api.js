import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Pricing Plans API
export const pricingPlansAPI = {
  getAll: () => api.get('/pricing-plans'),
  getOne: (id) => api.get(`/pricing-plans/${id}`),
  create: (data) => api.post('/pricing-plans', data),
  update: (id, data) => api.put(`/pricing-plans/${id}`, data),
  delete: (id) => api.delete(`/pricing-plans/${id}`),
};

// Extra Services API
export const extraServicesAPI = {
  getAll: () => api.get('/extra-services'),
  getOne: (id) => api.get(`/extra-services/${id}`),
  create: (data) => api.post('/extra-services', data),
  update: (id, data) => api.put(`/extra-services/${id}`, data),
  delete: (id) => api.delete(`/extra-services/${id}`),
};

// Plan Comparisons API
export const planComparisonsAPI = {
  getAll: () => api.get('/plan-comparisons'),
  getOne: (id) => api.get(`/plan-comparisons/${id}`),
  create: (data) => api.post('/plan-comparisons', data),
  update: (id, data) => api.put(`/plan-comparisons/${id}`, data),
  delete: (id) => api.delete(`/plan-comparisons/${id}`),
};

export default api;