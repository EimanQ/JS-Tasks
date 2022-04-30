const valueA = prompt().trim();
let sum = 0;
let arr = [];

if (isNaN(valueA)) {
    alert(`Неверный тип данных`);
} else {
    for (let i = 0; i <= valueA; i++) {
        if (arr.length < 2) {
            (sum === 0)
            arr.push(sum);
            sum += 1;
        } else {
            sum = 0;
            sum += arr[i - 2] + arr[i - 1];
            arr.push(sum);
        }
    }
}
console.log(arr);
