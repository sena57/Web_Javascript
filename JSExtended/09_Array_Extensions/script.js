// filter methode
const items = [
    {name: 'Bike', prince: 100},
    {name: 'Shirt', price: 50},
    {name: 'Pants', price: 150},
    {name: 'Shoes', price: 10},
    {name: 'Jacket', price: 150}
];

const filteredItems = items.filter((item) => {
    return item.price <= 100;
})

// map wenn man nur eines von den dingen im array ausgeben will zb nur den namen
const itemNames = items.map((item) => {
    return item.name
})

// find methode
const foundItem = items.find((item) => {
    return item.name === 'Shoes'
})

// foreach methode für jedes Item wird der name von dem item ausgegeben
/*items.forEach((item) => {
    console.log(item.name);
})*/

//some methode
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 0
})

// every methode
const allItemsAreExpensive = items.every((item) => {
    return item.price <= 1000
})

// reduce methode
const totalPrice = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

//console.log(totalPrice);


const items2 = [1,2,3,4]
const includesTwo = items2.includes(7)

console.log(includesTwo);