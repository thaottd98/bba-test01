let count = 0;
const pairs = [];

for (let a = 1; a <= 100; a++) {
  for (let b = a + 1; b <= 100; b++) {
    if ((a + b) % 17 === 0) {
      pairs.push(`(${a}, ${b}) = ${a + b}`);
      count++;
    }
  }
}
console.log("Các cặp số tìm được:");
console.log(pairs.join("\n"));
console.log(`\nTổng cộng có: ${count} cặp số.`);