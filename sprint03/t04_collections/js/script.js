const guestList = new Set();
guestList.add("Anton");
guestList.add("Denis");
guestList.add("Andrew");

console.log(guestList.has("Denis"));
console.log(guestList.has("Eve"));

guestList.delete("Andrew");
console.log(guestList.has("Andrew"));

const menu = new Map();
menu.set("Pizza", 10);
menu.set("Burger", 8);
menu.set("Salad", 6);

for (const [dish, price] of menu) {
    console.log(`${dish}: $${price}`);
}

const bankVault = new WeakMap();
const box1 = { credentials: "1234", contents: "Card" };
const box2 = { credentials: "5678", contents: "Cash" };

bankVault.set(box1, "Box 1");
bankVault.set(box2, "Box 2");

console.log(bankVault.get(box1));
console.log(bankVault.get(box2));

const coinCollection = new WeakSet();
const coin1 = { year: 2000, value: "1 Dollar" };
const coin2 = { year: 2010, value: "50 Cents" };

coinCollection.add(coin1);
coinCollection.add(coin2);

console.log(coinCollection.has(coin1));
console.log(coinCollection.has(coin2));

