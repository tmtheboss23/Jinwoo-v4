global.rpg = {
  role(level) {
    level = parseInt(level);
    if (isNaN(level)) return { name: '', level: '' };

    const role = [
      { name: '🚪 E-Rank Hunter', level: 0 },
      { name: '🧰 D-Rank Porter', level: 5 },
      { name: '⚔️ C-Rank Hunter', level: 10 },
      { name: '🛡️ B-Rank Tank', level: 15 },
      { name: '💥 A-Rank Assassin', level: 20 },
      { name: '🔥 S-Rank Hunter', level: 25 },
      { name: '🧿 Reawakener', level: 30 },
      { name: '🌑 Shadow Extractor', level: 35 },
      { name: '👤 Shadow Monarch’s Vessel', level: 40 },
      { name: '🪦 Commander of the Undead', level: 45 },
      { name: '🗡️ Monarch Slayer', level: 50 },
      { name: '🌌 Sovereign of Shadows', level: 60 },
      { name: '👑 Ruler-Class Hunter', level: 70 },
      { name: '☯️ Balance Keeper', level: 80 },
      { name: '🕶 Absolute Monarch', level: 90 },
      { name: '⚡ God of Death: Sung Jin-Woo', level: 100 },
    ];

    return role.reverse().find(role => level >= role.level);
  },
};
