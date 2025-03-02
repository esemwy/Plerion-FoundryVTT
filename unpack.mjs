import { extractPack } from "@foundryvtt/foundryvtt-cli";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

// Define directories
const SOURCE_DIR = "/data/nginxproxymanager/foundryvtt/data/Data/systems/plerion/packs";
const DEST_DIR = "/home/steve/Plerion-FoundryVTT/packs/src";

// Ensure the destination directory exists
fs.ensureDirSync(DEST_DIR);

async function unpackAllPacks() {
  const packNames = fs.readdirSync(SOURCE_DIR).filter(pack => {
    const fullPath = path.join(SOURCE_DIR, pack);
    return fs.statSync(fullPath).isDirectory() || fullPath.endsWith(".db"); // Include LevelDB dirs and .db files
  });

  for (const packName of packNames) {
    const inputPath = path.join(SOURCE_DIR, packName);
    const outputPath = path.join(DEST_DIR, packName.replace(".db", "")); // Remove .db suffix for clean folder names

    // Ensure output directory exists
    fs.ensureDirSync(outputPath);

    console.log(`🔄 Unpacking: ${packName}...`);
    try {
      await extractPack(inputPath, outputPath, { yaml: true }
      );
      console.log(`✅ Unpacked: ${packName} → ${outputPath}`);
    } catch (error) {
      console.error(`❌ Failed to unpack ${packName}:`, error);
    }
  }
}

unpackAllPacks().then(() => console.log("🎉 All packs unpacked."));
