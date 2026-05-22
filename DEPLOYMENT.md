# Deployment Guide

## Current Status
✅ Project is ready for Vercel deployment

## Real Device Photos
- iPhone 15 (Pink): `src/app/assets/iphone15-pink.png` (1.2MB)
- iPad Mini 6 (Pink): `src/app/assets/ipad-mini-pink.png` (820KB)

## Build Configuration
- Entry: `index.html` → `src/main.tsx`
- Build command: `pnpm run build`
- Output directory: `dist/`
- SPA routing: Configured in `vercel.json`

## Deploy to Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Settings will be auto-detected from `vercel.json`
4. Deploy!

## Image Handling
- Local images: Imported as ES modules from `src/app/assets/`
- External images: Direct Unsplash URLs
- All images processed by Vite and optimized in build
