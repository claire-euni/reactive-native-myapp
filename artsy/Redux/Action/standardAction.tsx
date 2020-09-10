export const standardAction = (idx: number) => {
  if (idx === 0) {
    return {type: 'A-Z'};
  }
  if (idx === 1) {
    return {type: 'High to Low'};
  }
  if (idx === 2) {
    return {type: 'Low to High'};
  }
};
