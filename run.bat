@echo off
title Nirvayak Global - Single Page Website
echo ========================================================
echo  Starting Nirvayak Global Website (React Single Page)
echo ========================================================
echo.
echo Launching local development server and opening browser...
echo.

start "" "http://localhost:5173"
call npm.cmd run dev -- --open

pause
