@echo off
REM Start script for DevBros Backend (Windows)

echo ================================================
echo DevBros Backend Startup
echo ================================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo Error: Python is not installed
    echo Please install Python 3.8 or higher
    pause
    exit /b 1
)

echo Python found
echo.

REM Check if virtual environment exists
if not exist "venv" (
    echo Creating virtual environment...
    python -m venv venv
    echo Virtual environment created
)

REM Activate virtual environment
echo.
echo Activating virtual environment...
call venv\Scripts\activate.bat
echo Virtual environment activated

REM Install dependencies
echo.
echo Installing dependencies...
pip install -r requirements.txt --quiet
echo Dependencies installed

REM Start Flask server
echo.
echo ================================================
echo Starting Flask server...
echo ================================================
echo.
python app.py
