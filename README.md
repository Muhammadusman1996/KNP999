# KNP999 — Triple Nine (Demo)

This is a runnable starter project containing:
- Customer-facing responsive web app
- Demo game catalogue and simulated practice rounds
- Demo virtual-coin wallet (no monetary value)
- Admin dashboard with announcement and maintenance controls
- Express backend API

## Run locally

1. Install Node.js 18 or newer.
2. Open a terminal in this folder.
3. Run `npm install`
4. Run `npm start`
5. Open `http://localhost:3000`

## Android APK path

This project is currently a web app with a backend. To make an Android APK:
1. Deploy the Node server to a hosting provider with HTTPS.
2. In `android-wrapper/README.md`, follow the Capacitor wrapper steps.
3. Build the Android project in Android Studio and generate a signed APK.

# Android APK wrapper (Capacitor)

The demo web frontend can be packaged as an Android app after you deploy the Node server.

## Steps

1. Install Node.js 18+ and Android Studio.
2. In the project root run:
   ```bash
   npm install
   npm install @capacitor/core @capacitor/cli @capacitor/android
   npx cap init KNP999 com.knp999.app --web-dir=public
   ```
3. Edit `capacitor.config.ts` (created by Capacitor) and set the hosted server URL:
   ```ts
   import type { CapacitorConfig } from '@capacitor/cli';
   const config: CapacitorConfig = {
     appId: 'com.knp999.app',
     appName: 'KNP999',
     webDir: 'public',
     server: { url: 'https://YOUR-DOMAIN.example', cleartext: false }
   };
   export default config;
   ```
4. Run:
   ```bash
   npx cap add android
   npx cap sync android
   npx cap open android
   ```
5. In Android Studio use **Build > Generate Signed Bundle / APK > APK**.

Replace `https://YOUR-DOMAIN.example` with your actual HTTPS domain. Do not ship a production APK with an unauthenticated admin API.

The APK wrapper loads your hosted KNP999 web app. It is not an offline APK.

## Important demo limitations

- Games are illustrative mini-game simulations, not copies of H555 proprietary code or assets.
- Admin routes are intentionally unauthenticated for local demonstration only. Do not expose this demo server publicly.
- Data and coin balance are not persisted; this is a prototype.
- No deposits, withdrawals, payment processing, cash prizes, or real-money betting are implemented.
- Before production: implement authentication, authorization, database persistence, audit logs, rate limiting, HTTPS, security review, privacy policy, and legal review.
