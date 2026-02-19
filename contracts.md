# API Contracts - Orion Digital Portfolio

## Overview
This document defines the API contracts between frontend and backend for seamless integration.

## Current Mock Data Structure (frontend/src/mock/mockData.js)
- `portfolioProjects`: Array of portfolio projects with categories
- `services`: Array of services offered
- `testimonials`: Array of client testimonials
- `stats`: Basic statistics
- `categories`: Portfolio category filters

---

## Backend Implementation Plan

### 1. Database Collections

#### `projects` Collection
```json
{
  "_id": "ObjectId",
  "title": "string",
  "category": "string (sites|apps|landing|social|design|gestao|trafego)",
  "description": "string",
  "technologies": ["string"],
  "results": "string",
  "image": "string (URL)",
  "featured": "boolean",
  "createdAt": "datetime",
  "updatedAt": "datetime"
}
```

#### `testimonials` Collection
```json
{
  "_id": "ObjectId",
  "name": "string",
  "role": "string",
  "content": "string",
  "rating": "number (1-5)",
  "avatar": "string",
  "approved": "boolean",
  "createdAt": "datetime"
}
```

#### `contacts` Collection
```json
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string",
  "phone": "string (optional)",
  "service": "string",
  "message": "string",
  "status": "string (new|contacted|completed)",
  "createdAt": "datetime"
}
```

---

## 2. API Endpoints

### Portfolio Projects

#### GET `/api/projects`
**Query Params:**
- `category` (optional): Filter by category
- `featured` (optional): Filter featured projects
- `limit` (optional): Number of results

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "title": "string",
      "category": "string",
      "description": "string",
      "technologies": ["string"],
      "results": "string",
      "image": "string",
      "featured": boolean
    }
  ]
}
```

#### GET `/api/projects/:id`
**Response:**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "title": "string",
    "category": "string",
    "description": "string",
    "technologies": ["string"],
    "results": "string",
    "image": "string",
    "featured": boolean
  }
}
```

### Testimonials

#### GET `/api/testimonials`
**Query Params:**
- `approved` (optional): Filter approved testimonials (default: true)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "name": "string",
      "role": "string",
      "content": "string",
      "rating": number,
      "avatar": "string"
    }
  ]
}
```

### Contact Form

#### POST `/api/contact`
**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "phone": "string (optional)",
  "service": "string (required)",
  "message": "string (required)"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso! Entraremos em contato em breve.",
  "data": {
    "id": "string"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message",
  "errors": {
    "field": "error detail"
  }
}
```

### Statistics

#### GET `/api/stats`
**Response:**
```json
{
  "success": true,
  "data": {
    "projectsCompleted": number,
    "clientsSatisfied": number,
    "yearsExperience": number,
    "successRate": string
  }
}
```

---

## 3. Frontend Integration Changes

### Files to Update:

#### `/app/frontend/src/pages/Home.jsx`
- Remove import of mock data for projects, testimonials, stats
- Add API calls to fetch data from backend
- Add loading states
- Add error handling

#### `/app/frontend/src/pages/Portfolio.jsx`
- Remove import of mock portfolioProjects
- Add API call to `/api/projects` with category filter
- Add loading skeleton
- Add error handling

#### `/app/frontend/src/pages/Contact.jsx`
- Update form submission to POST to `/api/contact`
- Add proper error handling and validation feedback
- Keep toast notifications

#### Create `/app/frontend/src/services/api.js`
- Centralized API client with axios
- Base URL from environment variable
- Error handling middleware
- Request/response interceptors

---

## 4. Environment Variables

### Backend (.env)
Already configured:
- `MONGO_URL`: MongoDB connection string
- `DB_NAME`: Database name

### Frontend (.env)
Already configured:
- `REACT_APP_BACKEND_URL`: Backend API URL

---

## 5. Initial Data Seeding

On first backend startup, seed database with:
- 8 portfolio projects from mock data
- 4 testimonials from mock data
- Initial stats

---

## 6. Error Handling

### Backend
- Validation errors: 400 Bad Request
- Not found: 404 Not Found
- Server errors: 500 Internal Server Error
- All responses include `success` boolean and `message` string

### Frontend
- Display user-friendly error messages
- Use toast notifications for feedback
- Fallback to empty states when data fails to load
- Retry mechanisms for failed requests

---

## 7. Implementation Order

1. ✅ Backend Models (Pydantic schemas)
2. ✅ Database seed script with mock data
3. ✅ API endpoints implementation
4. ✅ Backend testing
5. ✅ Frontend API service layer
6. ✅ Frontend integration (replace mock imports)
7. ✅ End-to-end testing

---

## Notes
- Mock data in `mockData.js` will be removed after backend integration
- All dates use ISO 8601 format
- Images are stored as URLs (future: implement file upload)
- Admin panel for managing projects/testimonials is future enhancement
