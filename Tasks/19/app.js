const valueA = +prompt();
const valueB = +prompt();
const valueC = +prompt();

if (valueA === valueB && valueA != valueC || valueB === valueC && valueB != valueA || valueC === valueA && valueC != valueA) {
    console.log(`Равнобедренный треугольник`);
} else if (valueA === valueB && valueA === valueC) {
    console.log(`Равносторонний треугольник`);
} else console.log(`Разносторонний`);