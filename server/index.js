import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Sample endpoint for server info
const serverInfo = {
  settings: {
    region: "EUROPE - DE",
    punkbuster: "ON",
    fairfight: "ON",
    password: "OFF",
    preset: "NORMAL",
  },
  advanced: {
    minimap: "ON",
    onlySquadLeaderSpawn: "OFF",
    vehicles: "ON",
    teamBalance: "ON",
    minimapSpotting: "ON",
    hud: "ON",
    vehicleCam: "ON",
    regenerativeHealth: "ON",
    killCam: "ON",
    friendlyFire: "OFF",
    spotting3D: "ON",
    enemyNameTags: "ON",
  },
  rules: {
    tickets: 400,
    vehicleSpawnDelay: 25,
    bulletDamage: 100,
    kickAfterTeamKills: 5,
    playerHealth: 100,
    playerRespawnTime: 100,
    kickAfterIdle: 300,
    banAfterKicks: 3,
  },
};

app.get("/api/server-info", (req, res) => {
  res.json(serverInfo);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
