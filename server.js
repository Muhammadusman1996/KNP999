const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const games = [
  { id: "aviator", name: "Sky Pilot", category: "Arcade", description: "Tap to launch and collect before the flight ends.", color: "pink", icon: "✈️" },
  { id: "dragon", name: "Dragon Tiger", category: "Cards", description: "A simple high-card comparison game.", color: "gold", icon: "🐉" },
  { id: "teenpatti", name: "Teen Patti", category: "Cards", description: "Three-card practice table against a demo dealer.", color: "purple", icon: "🃏" },
  { id: "plinko", name: "Lucky Drop", category: "Arcade", description: "Drop a ball through a peg board for practice points.", color: "blue", icon: "🔵" },
  { id: "slots", name: "Fruit Spin", category: "Slots", description: "A colorful fruit matching mini-game.", color: "green", icon: "🍒" },
  { id: "chicken", name: "Chicken Dash", category: "Arcade", description: "Guide the chicken across a safe practice track.", color: "orange", icon: "🐔" }
];

let settings = { announcement: "Welcome to KNP999 — free-play demo!", maintenance: false };
let stats = { visits: 128, rounds: 542, demoCoinsIssued: 25000 };

app.get("/api/config", (req, res) => res.json({ brand: "KNP999", subtitle: "TRIPLE NINE", mode: "FREE PLAY DEMO", settings, games }));
app.get("/api/admin/stats", (req, res) => res.json({ ...stats, gameCount: games.length, mode: "Demo only" }));
app.post("/api/admin/announcement", (req, res) => {
  const announcement = String(req.body.announcement || "").slice(0, 180);
  settings.announcement = announcement;
  res.json({ ok: true, settings });
});
app.post("/api/admin/maintenance", (req, res) => {
  settings.maintenance = Boolean(req.body.enabled);
  res.json({ ok: true, settings });
});
app.get("/api/health", (req, res) => res.json({ ok: true, service: "KNP999 demo server" }));

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.listen(PORT, () => console.log(`KNP999 demo running at http://localhost:${PORT}`));
