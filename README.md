# DevBros - Software Development Company Website

A production-ready, modern, mobile-first website for a software and web development company. Features a complete **separated frontend (React + Tailwind)** and **backend (Python Flask)** architecture.

## 🎯 Overview

This project demonstrates a complete full-stack web application with:

- **Frontend**: React + TypeScript + Tailwind CSS + React Router
- **Backend**: Python Flask REST API
- **Architecture**: Fully separated frontend/backend that communicate via API
- **Features**: Multi-page website, contact forms, portfolio, pricing, dashboard demo

## 📁 Project Structure

```
code/
├── src/                    # Frontend React application
│   ├── app/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components
│   │   ├── layout/         # Layout components
│   │   ├── lib/            # Utilities and API client
│   │   ├── routes.tsx      # React Router configuration
│   │   └── App.tsx         # Main app component
│   └── styles/             # CSS and theme files
│
├── backend/                # Flask backend API
│   ├── app.py              # Main Flask application
│   └── requirements.txt    # Python dependencies
│
├── package.json            # Frontend dependencies
├── .env.example            # Environment variables template
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **Python** (v3.8 or higher)
- **pnpm** (or npm)

### Installation & Setup

#### 1. Install Frontend Dependencies

```bash
# Install pnpm if you don't have it
npm install -g pnpm

# Install frontend dependencies
pnpm install
```

#### 2. Install Backend Dependencies

```bash
# Navigate to backend directory
cd backend

# Create a virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\\Scripts\\activate

# Install Python packages
pip install -r requirements.txt

# Go back to project root
cd ..
```

#### 3. Configure Environment Variables

```bash
# Copy the example env file
cp .env.example .env

# The default configuration should work out of the box:
# VITE_API_URL=http://localhost:5000/api
```

## ▶️ Running the Application

You need to run **both** the frontend and backend in **separate terminals**.

### Terminal 1: Start the Backend (Flask)

```bash
# From project root
cd backend

# Activate virtual environment if not already active
source venv/bin/activate  # macOS/Linux
# or
venv\\Scripts\\activate   # Windows

# Run the Flask server
python app.py
```

The backend API will be available at: `http://localhost:5000`

You should see:
```
* Running on http://0.0.0.0:5000
* Restarting with stat
* Debugger is active!
```

### Terminal 2: Start the Frontend (React)

```bash
# From project root (in a NEW terminal)
# The Vite dev server is already running in Figma Make environment
# Just open the preview to see the website
```

The frontend will be available through the Figma Make preview window.

## 📡 How Frontend & Backend Connect

The frontend and backend communicate via **REST API calls**:

### API Configuration

The API client is configured in `src/app/lib/api.ts`:

```typescript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Example API call
export const api = {
  getServices: () => fetchAPI('/services'),
  submitContact: (data) => fetchAPI('/contact', { method: 'POST', body: JSON.stringify(data) })
};
```

### Example: Contact Form Flow

1. **User fills out form** → Frontend (`src/app/pages/Contact.tsx`)
2. **Form submits** → Frontend calls `api.submitContact(formData)`
3. **API request sent** → `POST http://localhost:5000/api/contact`
4. **Backend receives** → Flask endpoint processes request (`backend/app.py`)
5. **Backend responds** → JSON response with success/error
6. **Frontend updates** → Shows success message to user

### Available API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/services` | Get all services |
| GET | `/api/portfolio` | Get portfolio projects |
| GET | `/api/testimonials` | Get client testimonials |
| GET | `/api/faqs` | Get FAQs |
| GET | `/api/technologies` | Get technologies list |
| GET | `/api/hosting-plans` | Get hosting plans |
| POST | `/api/contact` | Submit contact form |
| POST | `/api/quote` | Submit quote request |
| GET | `/api/dashboard/stats` | Get dashboard stats (demo) |
| GET | `/api/dashboard/projects` | Get dashboard projects (demo) |
| GET | `/api/health` | Health check |

## 📄 Pages Included

1. **Home** (`/`) - Hero, services overview, testimonials, CTA
2. **Services** (`/services`) - Complete services catalog
3. **Custom Software** (`/custom-software`) - Custom development details
4. **Web Development** (`/web-development`) - Web services details
5. **Hosting** (`/hosting`) - Hosting plans and pricing
6. **Portfolio** (`/portfolio`) - Case studies with real results
7. **About** (`/about`) - Company story, team, values
8. **Process** (`/process`) - Development process explanation
9. **Pricing** (`/pricing`) - Pricing ranges and quote form
10. **Contact** (`/contact`) - Contact form and info
11. **FAQ** (`/faq`) - Frequently asked questions
12. **Dashboard Demo** (`/dashboard-demo`) - Sample dashboard with charts

## 🎨 Features

### Frontend Features
- ✅ Mobile-first responsive design
- ✅ React Router for navigation
- ✅ Smooth animations with Motion
- ✅ Form validation
- ✅ Toast notifications
- ✅ Loading states
- ✅ Error handling
- ✅ SEO-friendly structure
- ✅ Accessible components

### Backend Features
- ✅ RESTful API design
- ✅ CORS enabled for frontend requests
- ✅ JSON responses
- ✅ Demo data for all endpoints
- ✅ Form validation
- ✅ Error handling
- ✅ Detailed logging
- ✅ API documentation in code

## 🔧 Customization

### Adding New API Endpoints

1. **Backend**: Add endpoint to `backend/app.py`
```python
@app.route('/api/your-endpoint', methods=['GET'])
def your_endpoint():
    return jsonify({"data": "your data"})
```

2. **Frontend**: Add to API client (`src/app/lib/api.ts`)
```typescript
export const api = {
  yourEndpoint: () => fetchAPI('/your-endpoint')
};
```

3. **Use in components**:
```typescript
const data = await api.yourEndpoint();
```

### Connecting to a Real Database

Replace the demo data in `backend/app.py` with database queries:

```python
# Example with PostgreSQL
import psycopg2

@app.route('/api/services', methods=['GET'])
def get_services():
    conn = psycopg2.connect("your-connection-string")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM services")
    services = cursor.fetchall()
    return jsonify({"services": services})
```

### Environment Variables

Create a `.env` file for sensitive configuration:

```bash
# Frontend (.env in root)
VITE_API_URL=http://localhost:5000/api

# Backend (add to backend/.env)
DATABASE_URL=postgresql://user:password@localhost/dbname
SECRET_KEY=your-secret-key
MAIL_SERVER=smtp.gmail.com
```

## 🚢 Production Deployment

### Frontend Deployment (Vercel/Netlify)

```bash
# Build the frontend
pnpm build

# The dist/ folder contains the production build
# Deploy to Vercel, Netlify, or any static hosting
```

Update environment variables in your hosting platform:
```
VITE_API_URL=https://your-backend-api.com/api
```

### Backend Deployment (Heroku/Railway/AWS)

```bash
# Add to backend folder:
# - Procfile: web: python app.py
# - runtime.txt: python-3.11

# Deploy to your chosen platform
# Set environment variables:
# - FLASK_ENV=production
# - Any database URLs, API keys, etc.
```

## 📝 Development Notes

### Testing API Endpoints

You can test the backend API directly:

```bash
# Health check
curl http://localhost:5000/api/health

# Get services
curl http://localhost:5000/api/services

# Submit contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

### Hot Reload

- **Frontend**: Vite automatically reloads on file changes
- **Backend**: Flask debug mode reloads on Python file changes

## 🎯 Next Steps

1. **Replace demo data** with real database
2. **Add email notifications** for form submissions
3. **Implement user authentication** if needed
4. **Add analytics tracking** (Google Analytics, etc.)
5. **Set up CI/CD pipeline** for automated deployment
6. **Add automated tests** for backend endpoints
7. **Optimize images** and assets for production
8. **Configure SEO metadata** for all pages

## 📞 Support

For questions about this project structure:
- Review the inline code comments in `backend/app.py`
- Check the API client in `src/app/lib/api.ts`
- Examine how pages fetch data (e.g., `src/app/pages/Portfolio.tsx`)

## 📄 License

This is a demo project for educational purposes.

---

**Built with ❤️ by DevBros** - Demonstrating modern full-stack web development with separated frontend and backend architecture.
# web
