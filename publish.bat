@echo off
setlocal enabledelayedexpansion
title Nirvayak Global - Build and Publish
echo ========================================================
echo  Building and Publishing Nirvayak Global Website
echo ========================================================
echo.

set "TARGET_DIR=D:\Projects\Nirvayak\nirvayak-global"
set "SOURCE_DIR=%~dp0dist"

echo Step 1: Building production static SPA...
echo --------------------------------------------------------
call npm.cmd run build
if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] Production build failed! Aborting publish.
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo Step 2: Preparing destination directory...
echo Target: %TARGET_DIR%
echo --------------------------------------------------------
if not exist "%TARGET_DIR%" (
    mkdir "%TARGET_DIR%"
)

echo.
echo Step 3: Copying production static files to destination...
echo --------------------------------------------------------
robocopy "%SOURCE_DIR%" "%TARGET_DIR%" /E /PURGE /R:2 /W:2 /NP /NFL /NDL

:: Robocopy exit codes 0-7 mean success/files copied
if %ERRORLEVEL% gtr 7 (
    echo.
    echo [ERROR] Failed to publish files to %TARGET_DIR%!
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo ========================================================
echo  [SUCCESS] Website built and published successfully!
echo  Location: %TARGET_DIR%
echo ========================================================
echo.
pause
