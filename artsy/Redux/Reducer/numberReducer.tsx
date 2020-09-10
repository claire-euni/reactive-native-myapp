const initialState = {
  standard: 2,
  name: 'Random',
};

// 그렇기 때문에 reducer를 통해서만 state에 접근할 수 있다.
export const numberReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'A-Z':
      return (state = {
        standard: 0,
        name: 'Title A-Z',
      });
    case 'High to Low':
      return (state = {
        standard: 1,
        name: 'Highest Price',
      });
    case 'Low to High':
      return (state = {
        standard: 2,
        name: 'Lowest Price',
      });

    default:
      return state;
  }
};
