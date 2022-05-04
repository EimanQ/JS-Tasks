const valueA = prompt().trim();
let sum = 0;
let arr = [];

if (isNaN(valueA)) {
    alert(`Неверный тип данных`);
} else {
    for (let i = 0; i < valueA; i++) {
        if (arr.length < 2) {
            arr.push(sum);
            sum += 1;
        } else {
            arr.push(arr[i - 2] + arr[i - 1]);
        }
    }
}
console.log(arr);
