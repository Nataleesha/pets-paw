export const getGridGroups = (arr) => {
  const groups = [];
  for (let i = 0; i < arr.length; i += 5) {
    groups.push(arr.slice(i, i + 5));
  }
  return groups;
};
