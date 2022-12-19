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
  {
    name: `meat`,
    count: 4,
  },
  {
    name: `milk`,
    count: 4,
  },
];

const result: {}[] = [];

for (let i: number = 0; i < array.length; i++) {
  if ((i + 1) % 3) result.push(array[i]);
}

console.log(result);