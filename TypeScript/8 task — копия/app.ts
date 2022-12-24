const arrays: string[] = [`HI`, `code`, `Hi`, `ilikecode`, `ts`, `hi`];

const res: string[] = [];

for (let i: number = 0; i < arrays.length; i++) {
  if (!res.includes(arrays[i])) res.push(arrays[i]);
  continue;
}

console.log(res);
