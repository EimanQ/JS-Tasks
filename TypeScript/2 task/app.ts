const array: { name: string; count: number }[] = [
  {
    name: `bread`,
    count: 10,
  },
  {
    name: `apple`,
    count: 3,
  },
  {
    name: `juice`,
    count: 120,
  },
  {
    name: `fish`,
    count: 4,
  },
];

const result: {}[] = [];

for (let i: number = array.length - 1; i >= 0; i--) {
  result.push(array[i]);
}

console.log(result);
