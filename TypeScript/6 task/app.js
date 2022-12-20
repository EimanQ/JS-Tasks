var array = [
    { id: 1, title: "Часы", count: 10, price: 500 },
    { id: 2, title: "Смартфон", count: 33, price: 1500 },
    { id: 3, title: "Моноблок", count: 6, price: 2200 },
    { id: 4, title: "Ноутбук", count: 13, price: 3000 },
    { id: 5, title: "Планшет", count: 22, price: 2100 },
];
var result = 0;
for (var i = 0; i < array.length; i++) {
    var price = array[i].price;
    if (i < array.length - 1)
        result += price;
    else {
        result += price;
        result = result / array.length;
    }
}
console.log(result);
