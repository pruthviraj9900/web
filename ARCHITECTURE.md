# Architecture Documentation

## System Overview

This project demonstrates a **modern, separated frontend-backend architecture** commonly used in professional web development. The frontend and backend are completely independent and communicate only through HTTP API calls.

```
┌─────────────────────────────────────────────────────────────┐
│                          USER                               │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (React)                         │
│  Running at: Figma Make Preview / localhost:5173           │
│                                                             │
│  Technology Stack:                                          │
│  - React 18 + TypeScript                                   │
│  - React Router (client-side routing)                      │
│  - Tailwind CSS v4 (styling)                               │
│  - Motion (animations)                                      │
│  - Recharts (charts/graphs)                                │
│  - shadcn/ui components                                     │
│                                                             │
│  Key Files:                                                 │
│  - src/app/App.tsx          (main app)                     │
│  - src/app/routes.tsx       (routing config)               │
│  - src/app/lib/api.ts       (API client)                   │
│  - src/app/pages/*.tsx      (page components)              │
│  - src/app/components/*.tsx (reusable components)          │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ HTTP/JSON
                         │ (REST API Calls)
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                   BACKEND (Flask)                           │
│  Running at: http://localhost:5000                          │
│                                                             │
│  Technology Stack:                                          │
│  - Python 3.8+                                              │
│  - Flask (web framework)                                    │
│  - Flask-CORS (cross-origin requests)                      │
│                                                             │
│  Key Files:                                                 │
│  - backend/app.py           (main Flask app)               │
│  - backend/requirements.txt (Python dependencies)          │
│                                                             │
│  API Endpoints:                                             │
│  - GET  /api/services                                       │
│  - GET  /api/portfolio                                      │
│  - GET  /api/testimonials                                   │
│  - GET  /api/faqs                                           │
│  - POST /api/contact                                        │
│  - POST /api/quote                                          │
│  - GET  /api/dashboard/stats                               │
│  - ... (see README.md for complete list)                   │
└─────────────────────────────────────────────────────────────┘
```

## Request Flow Example

### Example: User Visits Portfolio Page

1. **User navigates to `/portfolio`**
   - Browser URL changes to `http://localhost:5173/portfolio`
   - React Router matches route to `Portfolio` component

2. **Portfolio component mounts**
   - `useEffect` hook triggers
   - Calls `api.getPortfolio()`

3. **Frontend makes API request**
   ```typescript
   // src/app/lib/api.ts
   const response = await fetch('http://localhost:5000/api/portfolio');
   const data = await response.json();
   ```

4. **Backend receives request**
   ```python
   # backend/app.py
   @app.route('/api/portfolio', methods=['GET'])
   def get_portfolio():
       return jsonify(PORTFOLIO_DATA)
   ```

5. **Backend sends JSON response**
   ```json
   {
     "projects": [
       {
         "id": 1,
         "title": "SmartInventory",
         "client": "LogiTech Solutions",
         ...
       }
     ]
   }
   ```

6. **Frontend receives data**
   - React updates state with project data
   - Component re-renders with actual content

7. **User sees portfolio projects**
   - Smooth animations via Motion
   - Fully interactive UI

## Frontend Architecture

### Component Hierarchy

```
App.tsx (Router Provider)
  └─ Root.tsx (Layout with Header/Footer)
      ├─ Header.tsx (Navigation)
      ├─ Outlet (Page Content)
      │   ├─ Home.tsx
      │   ├─ Services.tsx
      │   ├─ Portfolio.tsx
      │   ├─ Contact.tsx
      │   └─ ... (other pages)
      └─ Footer.tsx
```

### Routing Strategy

Uses **React Router v7** with Data mode:

```typescript
// src/app/routes.tsx
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "portfolio", Component: Portfolio },
      // ... more routes
    ]
  }
]);
```

### API Integration Pattern

All API calls go through a centralized client:

```typescript
// src/app/lib/api.ts
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

async function fetchAPI(endpoint: string, options?: RequestInit) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  return await response.json();
}

export const api = {
  getServices: () => fetchAPI('/services'),
  submitContact: (data) => fetchAPI('/contact', { method: 'POST', body: JSON.stringify(data) })
};
```

### Component Pattern

Pages follow this pattern:

```typescript
export default function PageName() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getData()
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        // Fallback to demo data
        setData(demoData);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingState />;

  return <PageContent data={data} />;
}
```

## Backend Architecture

### Flask Application Structure

```python
# backend/app.py

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow frontend to make requests

# Demo data (would be database queries in production)
SERVICES_DATA = { ... }
PORTFOLIO_DATA = { ... }

# API endpoints
@app.route('/api/services', methods=['GET'])
def get_services():
    return jsonify(SERVICES_DATA)

@app.route('/api/contact', methods=['POST'])
def submit_contact():
    data = request.get_json()
    # Process data (save to DB, send email, etc.)
    return jsonify({"success": True, "message": "Form submitted"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
```

### CORS Configuration

CORS (Cross-Origin Resource Sharing) is **required** because:
- Frontend runs on `http://localhost:5173` (Vite dev server)
- Backend runs on `http://localhost:5000` (Flask server)
- Different ports = different origins = CORS needed

```python
from flask_cors import CORS
CORS(app)  # Allows all origins in development
```

In production, restrict to specific origins:
```python
CORS(app, origins=["https://yourdomain.com"])
```

## Data Flow Patterns

### 1. GET Request (Fetching Data)

```
User clicks link
  → React Router navigates
    → Component mounts
      → useEffect calls API
        → fetch() to backend
          → Flask endpoint queries data
            → Returns JSON
              → Frontend updates state
                → Component re-renders
                  → User sees content
```

### 2. POST Request (Form Submission)

```
User fills form
  → User clicks submit
    → Form validation
      → onSubmit handler
        → api.submitContact(formData)
          → fetch() POST to backend
            → Flask endpoint receives data
              → Validates & processes
                → Returns success/error JSON
                  → Frontend shows toast notification
                    → Form resets or shows errors
```

## Environment Configuration

### Development

```bash
# Frontend (.env)
VITE_API_URL=http://localhost:5000/api

# Backend (no .env needed for demo)
# Flask runs with default settings
```

### Production

```bash
# Frontend (.env.production)
VITE_API_URL=https://api.yourdomain.com/api

# Backend (.env)
FLASK_ENV=production
DATABASE_URL=postgresql://...
SECRET_KEY=your-secret-key
MAIL_SERVER=smtp.gmail.com
```

## State Management

This project uses **React's built-in state** (useState, useEffect):

```typescript
// Simple state for API data
const [projects, setProjects] = useState<Project[]>([]);

// Loading states
const [loading, setLoading] = useState(true);

// Form state
const [formData, setFormData] = useState({ name: "", email: "" });
```

For larger apps, consider:
- **React Context** for global state
- **Redux** for complex state management
- **TanStack Query** for API data caching

## Performance Optimizations

### Frontend
- **Code splitting** via React Router
- **Lazy loading** images with loading states
- **Memoization** for expensive computations
- **Debouncing** form inputs
- **Optimistic updates** for better UX

### Backend
- **Caching** frequently accessed data
- **Database indexing** on common queries
- **Pagination** for large datasets
- **Compression** for API responses
- **Rate limiting** to prevent abuse

## Security Considerations

### Current Implementation (Demo)
- Demo data only (no real database)
- No authentication required
- CORS open to all origins
- Form data logged to console

### Production Requirements
- **Input validation** on all forms
- **SQL injection prevention** (use ORMs)
- **XSS protection** (sanitize inputs)
- **CSRF tokens** for forms
- **Rate limiting** on API endpoints
- **Authentication** (JWT tokens)
- **HTTPS** for all communications
- **Environment secrets** (never commit)
- **API key rotation**
- **Security headers** (helmet, CSP)

## Deployment Strategy

### Frontend (Static Hosting)

```bash
# Build production bundle
pnpm build

# Output: dist/ folder
# Deploy to:
# - Vercel (recommended for Next.js/Vite)
# - Netlify
# - AWS S3 + CloudFront
# - GitHub Pages
```

### Backend (Server Hosting)

```bash
# Options:
# 1. Heroku (easiest)
# 2. Railway.app
# 3. AWS EC2 / ECS
# 4. DigitalOcean
# 5. Google Cloud Run

# Requirements:
# - Python runtime
# - Install requirements.txt
# - Set environment variables
# - Configure CORS for production domain
```

### Database (if added)

```bash
# Options:
# - PostgreSQL (recommended)
# - MongoDB
# - MySQL

# Hosted options:
# - Supabase (PostgreSQL)
# - MongoDB Atlas
# - AWS RDS
# - Railway Postgres
```

## Scaling Considerations

As your application grows:

1. **Add a database** (replace demo data)
2. **Implement caching** (Redis)
3. **Add authentication** (JWT, OAuth)
4. **Use a task queue** (Celery) for long operations
5. **Add monitoring** (Sentry, LogRocket)
6. **Implement CI/CD** (GitHub Actions)
7. **Use a CDN** for static assets
8. **Add load balancing** for multiple backend instances
9. **Database replication** for high availability
10. **API versioning** (/api/v1/, /api/v2/)

## Testing Strategy

### Frontend Tests
```bash
# Unit tests (components)
- Vitest + React Testing Library

# E2E tests (user flows)
- Playwright or Cypress

# Visual regression
- Chromatic or Percy
```

### Backend Tests
```bash
# API tests
- pytest
- unittest

# Integration tests
- Test database connections
- Test external API calls

# Load testing
- Locust or Apache JMeter
```

## Further Reading

- **React Documentation**: https://react.dev
- **React Router**: https://reactrouter.com
- **Flask Documentation**: https://flask.palletsprojects.com
- **Tailwind CSS**: https://tailwindcss.com
- **REST API Best Practices**: https://restfulapi.net

---

This architecture provides a solid foundation for a production-ready web application. As you scale, you can add more sophisticated patterns while maintaining the clean separation between frontend and backend.
