import { packDirectory } from "@foundryvtt/foundryvtt-cli";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

// Directories
const SOURCE_DIR = "/home/steve/Plerion-FoundryVTT/packs/src";
const DEST_DIR = "/data/nginxproxymanager/foundryvtt/data/Data/systems/plerion/packs";

async function packAllPacks() {
  const packNames = fs.readdirSync(SOURCE_DIR).filter(pack => 
    fs.statSync(path.join(SOURCE_DIR, pack)).isDirectory()
  );

  for (const packName of packNames) {
    const inputPath = path.join(SOURCE_DIR, packName);
    const outputPath = path.join(DEST_DIR, packName);

    console.log(`🔄 Packing: ${packName}...`);
    try {
      await packDirectory(inputPath, outputPath, { yaml: true });
      console.log(`✅ Packed: ${packName} → ${outputPath}`);
    } catch (error) {
      console.error(`❌ Failed to pack ${packName}:`, error);
    }
  }
}

packAllPacks().then(() => console.log("🎉 All packs packed."));
