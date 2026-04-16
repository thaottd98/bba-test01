//Khai báo biến
let playName = "Mario";
let currentLives = 3;

//Khai báo hằng số coin từng level
const levelCoin1 = 25;
const levelCoin2 = 30;
const levelCoin3 = 45

//Sum coin
const totalCoins = levelCoin1 + levelCoin2 + levelCoin3;

//Avg coin
const avgCoins = totalCoins / 3;

//Số dư coin khi chia 3
const modCoins = totalCoins % 3;

console.log("Total Coins:", totalCoins);
console.log("Average Coins:", avgCoins);
console.log("Remainder:", modCoins);