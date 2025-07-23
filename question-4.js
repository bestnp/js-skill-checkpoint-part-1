// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
//1
let lowestQuantity = inventory[0].quantity;

for (let i = 1; i < inventory.length; i++) {
  if (inventory[i].quantity < lowestQuantity) {
    lowestQuantity = inventory[i].quantity;
  }
}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${inventory.find(item => item.quantity === lowestQuantity).name} ซึ่งมี ${lowestQuantity} ชิ้น`);

