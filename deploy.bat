@echo off
echo Setting up environment...
set PATH=%PATH%;C:\Program Files\nodejs

echo ==========================================
echo 1. Staging changes...
git add .

echo ==========================================
echo 2. Committing changes (Timestamp: %date% %time%)...
git commit -m "Update portfolio content - %date% %time%"

echo ==========================================
echo 3. Pushing to GitHub (main branch)...
git push origin main

echo ==========================================
echo 4. Deploying to GitHub Pages...
call npm run deploy

echo ==========================================
echo DONE! Your site should be live in a few minutes.
echo check: https://balakumaran.in (after DNS propagation)
pause
