const list: { name: string; count: number }[] = [
  {
    name: `bread`,
    count: 10,
  },
  {
    name: `bread`,
    count: 5,
  },
  {
    name: `bread`,
    count: 13,
  },
  {
    name: `bread`,
    count: 1,
  },
  {
    name: `bread`,
    count: 101,
  },
];

const result: {}[] = list.filter((el) => el.count >= 10);

console.log(result);
