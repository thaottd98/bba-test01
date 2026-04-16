//Bài 1:
function createCharacters() {
  // Mảng gốc
  const characters = [
    { name: "Mario", level: 2, health: 600 },
    { name: "Luci", level: 3, health: 300 },
    { name: "Misa", level: 6, health: 95 },
    { name: "Nicky", level: 5, health: 900 }
  ];

  // Map → tạo mảng mới (power up)
  const charactersPowerUp = characters.map(character => {
    return {
      name: character.name.toUpperCase(),
      level: character.level * 2,
      health: character.health * 3
    };
  });

  // Filter → lọc ra health > 1000
  const possibleWinners = charactersPowerUp.filter(character => {
    return character.health > 1000;
  });

  console.log("Power Up Characters:", charactersPowerUp);
  console.log("Possible Winners:", possibleWinners);
}

createCharacters();

//Bài 2
function printLeaderboard(players) {
  const sorted = players.sort((a, b) => b.score - a.score);

  let index = 0;

  for (let player of sorted) {
    let medal = "";

    if (index === 0) medal = "🥇 ";
    else if (index === 1) medal = "🥈 ";
    else if (index === 2) medal = "🥉 ";

    console.log(`${medal}${index + 1}. ${player.name} ${player.score} pts`);

    index++;
  }
}
const players = [
  { name: "Mario", score: 1000 },
  { name: "Luigi", score: 900 },
  { name: "Peach", score: 850 },
  { name: "Yoshi", score: 800 },
  { name: "Phong", score: 500 }
];

printLeaderboard(players);

