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

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const games = [
  {
    "id": "catalog-001",
    "name": "Aviator",
    "category": "Arcade",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-002",
    "name": "Chicken Road 2.0",
    "category": "Arcade",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-003",
    "name": "9Wickets Sports",
    "category": "Sports",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-004",
    "name": "Piggy Bank",
    "category": "Slots",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-005",
    "name": "Crash",
    "category": "Arcade",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-006",
    "name": "Crazy777",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-007",
    "name": "Dragon Tiger (International)",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-008",
    "name": "Chicken Dash",
    "category": "Arcade",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-009",
    "name": "Boom Red Packet",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-010",
    "name": "7up7down",
    "category": "Table",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-011",
    "name": "Sic Bo",
    "category": "Table",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-012",
    "name": "Andar Bahar",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-013",
    "name": "Birds & Beasts (International)",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-014",
    "name": "Digger (International)",
    "category": "Arcade",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-015",
    "name": "Mercedes & BMW (International)",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-016",
    "name": "European Roulette",
    "category": "Table",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-017",
    "name": "Dragon & Tiger",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-018",
    "name": "Fortune Roulette",
    "category": "Table",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-019",
    "name": "Rummy",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-020",
    "name": "Thai Hilo",
    "category": "Table",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-021",
    "name": "Ludo Quick",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-022",
    "name": "Pappu",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-023",
    "name": "Cricket Roulette",
    "category": "Sports",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-024",
    "name": "Cricket King 18",
    "category": "Sports",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-025",
    "name": "Number King",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-026",
    "name": "Lucky Bingo",
    "category": "Bingo",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-027",
    "name": "Cricket War",
    "category": "Sports",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-028",
    "name": "Poker King",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-029",
    "name": "Teen Patti 20-20",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-030",
    "name": "Calaca Bingo",
    "category": "Bingo",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-031",
    "name": "Fortune Bingo",
    "category": "Bingo",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-032",
    "name": "Color Prediction",
    "category": "Table",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-033",
    "name": "Baccarat",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-034",
    "name": "Win Drop",
    "category": "Arcade",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-035",
    "name": "Jhandi Munda",
    "category": "Table",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-036",
    "name": "Fish Prawn Crab",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-037",
    "name": "Cricket Sah 75",
    "category": "Sports",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-038",
    "name": "Video Poker",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-039",
    "name": "Teen Patti",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-040",
    "name": "AK47",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-041",
    "name": "Callbreak",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-042",
    "name": "Pool Rummy",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-043",
    "name": "Super Bingo",
    "category": "Bingo",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-044",
    "name": "TeenPatti Joker",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-045",
    "name": "Callbreak Quick",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-046",
    "name": "Gold Rush Bingo West Hunter",
    "category": "Bingo",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-047",
    "name": "Jackpot Bingo",
    "category": "Bingo",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-048",
    "name": "Bingo Adventure",
    "category": "Bingo",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-049",
    "name": "Go Goal Bingo",
    "category": "Bingo",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-050",
    "name": "Pearls of Bingo",
    "category": "Bingo",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-051",
    "name": "Tongits Go",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-052",
    "name": "Pusoy Go",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-053",
    "name": "Candyland Bingo",
    "category": "Bingo",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-054",
    "name": "Magic Lamp Bingo",
    "category": "Bingo",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-055",
    "name": "Blackjack",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-056",
    "name": "Blackjack Lucky Ladies",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-057",
    "name": "Mini Flush",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-058",
    "name": "Caribbean Stud Poker",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-059",
    "name": "Speed Baccarat",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-060",
    "name": "Jogo do Bicho",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-061",
    "name": "Super E-Sabong",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-062",
    "name": "Ultimate Texas Holdem",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-063",
    "name": "Super Ace Scratch",
    "category": "Slots",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-064",
    "name": "Extravaganza",
    "category": "Slots",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-065",
    "name": "Fortune Gems Scratch",
    "category": "Slots",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-066",
    "name": "Go for Champion",
    "category": "Sports",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-067",
    "name": "Keno Super Chance",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-068",
    "name": "Keno Extra Bet",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-069",
    "name": "Domino Go",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-070",
    "name": "Penalty Kicks",
    "category": "Sports",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-071",
    "name": "Color Game Extreme",
    "category": "Table",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-072",
    "name": "Amar Akbar Anthony",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-073",
    "name": "Big Small Casino Royale",
    "category": "Table",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-074",
    "name": "Golden Treasure",
    "category": "Slots",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-075",
    "name": "Royal Coins",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-076",
    "name": "Drop Ball",
    "category": "Arcade",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-077",
    "name": "Golden Treasure Lightning",
    "category": "Slots",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-078",
    "name": "Gallina Fortunata",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-079",
    "name": "Speed Andar Bahar",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-080",
    "name": "Frog Dash",
    "category": "Arcade",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-081",
    "name": "Grand Golden Treasure",
    "category": "Slots",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-082",
    "name": "Chicken Dash 10000",
    "category": "Arcade",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-083",
    "name": "Football Golden Cup",
    "category": "Sports",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-084",
    "name": "Big & Small (International)",
    "category": "Table",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-085",
    "name": "7 Up Down",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-086",
    "name": "Red vs Blue (International)",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-087",
    "name": "Sic (International)",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-088",
    "name": "Baccarat (International)",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-089",
    "name": "Bull Bull for 100",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-090",
    "name": "Texas Hold'em (International)",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-091",
    "name": "Win Three Cards",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-092",
    "name": "Banker Bull Bull",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-093",
    "name": "Cards Checker Bull Bull",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-094",
    "name": "Bull Bull Brawl",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-095",
    "name": "Landlord",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-096",
    "name": "Mahjong 2P",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-097",
    "name": "Pineapple Poker",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-098",
    "name": "Teenpatti",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-099",
    "name": "Forest Dance",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-100",
    "name": "Three-Card Bullfight",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-101",
    "name": "Red vs Black",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-102",
    "name": "Wild Bounty Showdown",
    "category": "Slots",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-103",
    "name": "Fortune Gems 500",
    "category": "Slots",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-104",
    "name": "Fortune Gems 1000",
    "category": "Slots",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-105",
    "name": "Lightning Storm",
    "category": "Mini Games",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-106",
    "name": "Lucky Baccarat A",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-107",
    "name": "Disco Balls",
    "category": "Slots",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-108",
    "name": "Ice Fishing",
    "category": "Arcade",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-109",
    "name": "Free Bet Blackjack 22",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-110",
    "name": "Classic Bet Stacker Blackjack",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-111",
    "name": "VIP Bet Stacker Blackjack 10",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-112",
    "name": "Red Door Roulette",
    "category": "Table",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-113",
    "name": "Spooky Roulette",
    "category": "Table",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-114",
    "name": "MONOPOLY Roulette",
    "category": "Table",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-115",
    "name": "Free Bet VIP Blackjack J",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  },
  {
    "id": "catalog-116",
    "name": "Free Bet VIP Blackjack E",
    "category": "Cards",
    "description": "Catalogue listing · demo preview only",
    "color": "gold",
    "icon": "🎮"
  }
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
