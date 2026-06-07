

from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime
import json

app = Flask(__name__)

# Enable CORS to allow requests from the React frontend (running on different port)
CORS(app)


from data import *


@app.route('/api/services', methods=['GET'])
def get_services():
    """
    Get all available services

    Frontend usage:
    const response = await fetch('http://localhost:5000/api/services');
    const data = await response.json();
    console.log(data.services); // Array of services
    """
    return jsonify(SERVICES_DATA)


@app.route('/api/portfolio', methods=['GET'])
def get_portfolio():
    """
    Get portfolio projects (case studies)

    Frontend usage:
    const response = await fetch('http://localhost:5000/api/portfolio');
    const data = await response.json();
    console.log(data.projects); // Array of projects
    """
    return jsonify(PORTFOLIO_DATA)


@app.route('/api/testimonials', methods=['GET'])
def get_testimonials():
    """
    Get client testimonials

    Frontend usage:
    const response = await fetch('http://localhost:5000/api/testimonials');
    const data = await response.json();
    console.log(data.testimonials); // Array of testimonials
    """
    return jsonify(TESTIMONIALS_DATA)


@app.route('/api/faqs', methods=['GET'])
def get_faqs():
    """
    Get frequently asked questions organized by category

    Frontend usage:
    const response = await fetch('http://localhost:5000/api/faqs');
    const data = await response.json();
    console.log(data.faqs); // Array of FAQ categories
    """
    return jsonify(FAQ_DATA)


@app.route('/api/technologies', methods=['GET'])
def get_technologies():
    """
    Get list of technologies/tools used

    Frontend usage:
    const response = await fetch('http://localhost:5000/api/technologies');
    const data = await response.json();
    console.log(data.technologies); // Array of technologies
    """
    return jsonify(TECHNOLOGIES_DATA)


@app.route('/api/hosting-plans', methods=['GET'])
def get_hosting_plans():
    """
    Get available hosting plans

    Frontend usage:
    const response = await fetch('http://localhost:5000/api/hosting-plans');
    const data = await response.json();
    console.log(data.plans); // Array of hosting plans
    """
    return jsonify(HOSTING_PLANS_DATA)


@app.route('/api/contact', methods=['POST'])
def submit_contact():
    """
    Handle contact form submissions

    Frontend usage:
    const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: "John Doe",
            email: "john@example.com",
            phone: "555-1234",
            company: "ACME Corp",
            serviceType: "custom-software",
            budget: "15k-30k",
            message: "I need a CRM system..."
        })
    });
    const data = await response.json();
    console.log(data.message); // Success message
    """
    try:
        # Get JSON data from request
        data = request.get_json()

        # In a real application, you would:
        # 1. Validate the data
        # 2. Save to database
        # 3. Send email notification
        # 4. Add to CRM system

        print("\n" + "="*50)
        print("NEW CONTACT FORM SUBMISSION")
        print("="*50)
        print(f"Name: {data.get('name')}")
        print(f"Email: {data.get('email')}")
        print(f"Phone: {data.get('phone')}")
        print(f"Company: {data.get('company')}")
        print(f"Service Type: {data.get('serviceType')}")
        print(f"Budget: {data.get('budget')}")
        print(f"Message: {data.get('message')}")
        print("="*50 + "\n")

        # Return success response
        return jsonify({
            "success": True,
            "message": "Thank you for your message! We'll be in touch within 24 hours.",
            "submissionId": f"CNT-{datetime.now().strftime('%Y%m%d%H%M%S')}"
        }), 200

    except Exception as e:
        print(f"Error processing contact form: {str(e)}")
        return jsonify({
            "success": False,
            "message": "Failed to submit form. Please try again or email us directly."
        }), 500


@app.route('/api/quote', methods=['POST'])
def submit_quote():
    """
    Handle quote request submissions

    Frontend usage:
    const response = await fetch('http://localhost:5000/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: "Jane Smith",
            email: "jane@example.com",
            serviceType: "website",
            budget: "5k-15k",
            description: "Need a business website..."
        })
    });
    const data = await response.json();
    """
    try:
        data = request.get_json()

        print("\n" + "="*50)
        print("NEW QUOTE REQUEST")
        print("="*50)
        print(f"Name: {data.get('name')}")
        print(f"Email: {data.get('email')}")
        print(f"Service Type: {data.get('serviceType')}")
        print(f"Budget: {data.get('budget')}")
        print(f"Description: {data.get('description')}")
        print("="*50 + "\n")

        return jsonify({
            "success": True,
            "message": "Quote request received! We'll send you a detailed proposal within 48 hours.",
            "quoteId": f"QTE-{datetime.now().strftime('%Y%m%d%H%M%S')}"
        }), 200

    except Exception as e:
        print(f"Error processing quote request: {str(e)}")
        return jsonify({
            "success": False,
            "message": "Failed to submit quote request. Please try again."
        }), 500


@app.route('/api/dashboard/stats', methods=['GET'])
def get_dashboard_stats():
    """
    Get dashboard statistics (demo data)

    Frontend usage:
    const response = await fetch('http://localhost:5000/api/dashboard/stats');
    const data = await response.json();
    console.log(data.revenue); // Revenue stats
    """
    return jsonify({
        "revenue": {
            "current": 142580,
            "previous": 128340,
            "change": 11.1
        },
        "customers": {
            "current": 2847,
            "previous": 2654,
            "change": 7.3
        },
        "orders": {
            "current": 1245,
            "previous": 1098,
            "change": 13.4
        },
        "activeUsers": {
            "current": 847,
            "previous": 923,
            "change": -8.2
        }
    })


@app.route('/api/dashboard/projects', methods=['GET'])
def get_dashboard_projects():
    """
    Get dashboard project list (demo data)

    Frontend usage:
    const response = await fetch('http://localhost:5000/api/dashboard/projects');
    const data = await response.json();
    console.log(data.projects); // Array of projects
    """
    return jsonify({
        "projects": [
            {"id": 1, "name": "E-commerce Redesign", "client": "TechStore Inc", "status": "In Progress", "progress": 75, "dueDate": "2026-06-20", "priority": "High"},
            {"id": 2, "name": "CRM Integration", "client": "SalesFlow Co", "status": "In Progress", "progress": 45, "dueDate": "2026-07-05", "priority": "Medium"},
            {"id": 3, "name": "Mobile App MVP", "client": "StartupXYZ", "status": "Planning", "progress": 15, "dueDate": "2026-08-15", "priority": "High"},
            {"id": 4, "name": "Dashboard Analytics", "client": "DataViz Ltd", "status": "Testing", "progress": 90, "dueDate": "2026-06-10", "priority": "Medium"},
            {"id": 5, "name": "API Development", "client": "CloudSync", "status": "Completed", "progress": 100, "dueDate": "2026-05-30", "priority": "Low"}
        ]
    })


@app.route('/api/health', methods=['GET'])
def health_check():
    """
    Health check endpoint to verify the API is running

    Frontend usage:
    const response = await fetch('http://localhost:5000/api/health');
    const data = await response.json();
    console.log(data.status); // "ok"
    """
    return jsonify({
        "status": "ok",
        "message": "DevBros API is running",
        "timestamp": datetime.now().isoformat()
    })


@app.route('/', methods=['GET'])
def home():
    """
    Root endpoint - API documentation
    """
    return jsonify({
        "message": "DevBros Backend API",
        "version": "1.0.0",
        "endpoints": {
            "GET /api/services": "Get all services",
            "GET /api/portfolio": "Get portfolio projects",
            "GET /api/testimonials": "Get client testimonials",
            "GET /api/faqs": "Get FAQs",
            "GET /api/technologies": "Get technologies list",
            "GET /api/hosting-plans": "Get hosting plans",
            "POST /api/contact": "Submit contact form",
            "POST /api/quote": "Submit quote request",
            "GET /api/dashboard/stats": "Get dashboard stats (demo)",
            "GET /api/dashboard/projects": "Get dashboard projects (demo)",
            "GET /api/health": "Health check"
        },
        "documentation": "See app.py for detailed endpoint documentation and usage examples"
    })


# ============================================================================
# RUN THE APPLICATION
# ============================================================================

if __name__ == '__main__':
    print("\n" + "="*60)
    print("DevBros Backend API Starting...")
    print("="*60)
    print("Backend URL: http://localhost:5000")
    print("API Endpoints: http://localhost:5000/api/...")
    print("Health Check: http://localhost:5000/api/health")
    print("\nMake sure your frontend is configured to use this URL")
    print("(Set VITE_API_URL=http://localhost:5000/api in frontend .env)")
    print("="*60 + "\n")

    # Run the Flask app
    # debug=True enables auto-reload when you change code
    app.run(host='0.0.0.0', port=5000, debug=True)
    
