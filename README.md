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

The APK wrapper loads your hosted KNP999 web app. It is not an offline APK.

## Important demo limitations

- Games are illustrative mini-game simulations, not copies of H555 proprietary code or assets.
- Admin routes are intentionally unauthenticated for local demonstration only. Do not expose this demo server publicly.
- Data and coin balance are not persisted; this is a prototype.
- No deposits, withdrawals, payment processing, cash prizes, or real-money betting are implemented.
- Before production: implement authentication, authorization, database persistence, audit logs, rate limiting, HTTPS, security review, privacy policy, and legal review.
