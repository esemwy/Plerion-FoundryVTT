import os
import plyvel
import yaml
import argparse

# Paths
SOURCE_DIR = "/data/nginxproxymanager/foundryvtt/data/Data/systems/plerion/packs"
DEST_DIR = "/home/steve/Plerion-FoundryVTT/packs/src"

def ensure_directory(path):
    """Ensure a directory exists."""
    os.makedirs(path, exist_ok=True)

def clean_ownership(record_data):
    """Modify ownership to ensure universal access."""
    if "ownership" in record_data:
        record_data["ownership"] = {"default": 3}  # Set universal full control

def extract_leveldb_pack(pack_name, source_path, dest_path):
    """Extracts data from a LevelDB pack and saves each record as a YAML file."""
    ensure_directory(dest_path)

    # Open LevelDB database
    db = plyvel.DB(source_path, create_if_missing=False)

    for key, value in db:
        try:
            # Decode key and value
            record_id = key.decode("utf-8")
            record_data = yaml.safe_load(value.decode("utf-8"))  # Assuming UTF-8 YAML storage

            # Remove non-essential fields and normalize ownership
            record_data.pop("_stats", None)  # Always remove _stats
            clean_ownership(record_data)  # Set default: 3 in ownership

            # Construct file path
            yaml_filename = f"{record_data.get('name', 'unknown')}_{record_id}.yml"
            yaml_filename = "".join(c if c.isalnum() or c in "-_." else "_" for c in yaml_filename)
            yaml_path = os.path.join(dest_path, yaml_filename)

            # Write YAML file
            with open(yaml_path, "w", encoding="utf-8") as f:
                yaml.dump(record_data, f, default_flow_style=False, allow_unicode=True)

            print(f"Extracted: {yaml_path}")

        except Exception as e:
            print(f"Error processing {key}: {e}")

    db.close()

def main():
    """Main function to process all packs."""
    for pack_name in os.listdir(SOURCE_DIR):
        pack_path = os.path.join(SOURCE_DIR, pack_name)
        dest_path = os.path.join(DEST_DIR, pack_name)

        if os.path.isdir(pack_path):
            print(f"Processing pack: {pack_name}")
            extract_leveldb_pack(pack_name, pack_path, dest_path)

if __name__ == "__main__":
    main()
