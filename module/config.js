/** @name CONFIG.Plerion */
export const Plerion = {};

Plerion.characterGenerator = {
  ability: "3d6",
  hitProtection: "1d6",
  gold: "3d6",
  name: {
    text: "{name} {surname}",
    items: {
      name: "plerion.character-creation-tables-srd;Names",
      surname: "plerion.character-traits;Surnames"
    }
  },
  background: "plerion.character-traits;Background",
  startingItems: [
    "plerion.expeditionary-gear;Rations;1",
    "plerion.expeditionary-gear;Torch;1"
  ],
  startingGear: [
    "plerion.character-creation-tables-srd;Starting Gear - Armor",
    "plerion.character-creation-tables-srd;Starting Gear - Helmet & Shields",
    "plerion.character-creation-tables-srd;Starting Gear - Weapons",
    "plerion.character-creation-tables-srd;Starting Gear - Expeditionary Gear",
    "plerion.character-creation-tables-srd;Starting Gear - Tools",
    "plerion.character-creation-tables-srd;Starting Gear - Trinkets",
    "plerion.character-creation-tables-srd;Starting Gear - Bonus Item"
  ],
  biography: {
    text: "I have a <strong>{physique}</strong> physique, <strong>{skin}</strong> skin, <strong>{hair}</strong> hair, and a <strong>{face}</strong> face. I speak in a <strong>{speech}</strong> manner and wear <strong>{clothing}</strong> clothing. I am <strong>{vice}</strong> yet <strong>{virtue}</strong>, and I am generally regarded as <strong>{reputation}</strong>. I have had the misfortune of being <strong>{misfortune}</strong>. I am <strong>{age}</strong> years old.",
    age: "2d20 + 10",
    items: {
      physique: "plerion.character-traits;Physique",
      skin: "plerion.character-traits;Skin",
      hair: "plerion.character-traits;Hair",
      face: "plerion.character-traits;Face",
      speech: "plerion.character-traits;Speech",
      clothing: "plerion.character-traits;Clothing",
      vice: "plerion.character-traits;Vice",
      virtue: "plerion.character-traits;Virtue",
      misfortune: "plerion.character-traits;Misfortunes",
      reputation: "plerion.character-traits;Reputation"
    }
  }
};

CONFIG.Plerion = Plerion;

