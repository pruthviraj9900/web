# Quick Start Guide

Get the DevBros website running in 3 simple steps.

## Step 1: Install Dependencies

```bash
# Frontend (in project root)
pnpm install

# Backend (in backend folder)
cd backend
pip install -r requirements.txt
cd ..
```

## Step 2: Start the Backend

Open a new terminal and run:

```bash
cd backend
python app.py
```

You should see:
```
DevBros Backend API Starting...
Backend URL: http://localhost:5000
```

**Keep this terminal running!**

## Step 3: View the Frontend

The frontend is already running in Figma Make's dev server.
Just open the preview to see the website.

The frontend will automatically connect to the backend at `http://localhost:5000/api`.

## ✅ You're Done!

- **Frontend**: Running in Figma Make preview
- **Backend**: Running at http://localhost:5000
- **API Health Check**: http://localhost:5000/api/health

## Testing the Connection

1. Open the website in the preview
2. Go to the Contact page
3. Fill out and submit the form
4. Check your backend terminal - you should see the form data logged
5. The frontend should show a success message

## Common Issues

### Backend not connecting?
- Make sure `backend/app.py` is running
- Check that `.env` file exists with `VITE_API_URL=http://localhost:5000/api`
- Check browser console for CORS errors

### Missing dependencies?
```bash
# Frontend
pnpm install

# Backend
cd backend
pip install -r requirements.txt
```

### Port already in use?
Change the Flask port in `backend/app.py`:
```python
app.run(host='0.0.0.0', port=5001, debug=True)  # Changed to 5001
```

Then update `.env`:
```
VITE_API_URL=http://localhost:5001/api
```

## What to Explore

1. **Home Page** - See all sections working
2. **Portfolio Page** - Data loaded from backend API
3. **Contact Form** - Submit and see backend logs
4. **Dashboard Demo** - Charts and tables with live data
5. **All Pages** - Explore the complete website

## Next Steps

- Read `README.md` for detailed documentation
- Customize the content in `backend/app.py`
- Add your own branding and images
- Connect a real database
- Deploy to production

Happy coding! 🚀
