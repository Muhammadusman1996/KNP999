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
