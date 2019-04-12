const initState = {
  data: [],
  isError: false,
  isFetching: false
};

const reducer = (state = initState, action) => {
  console.log(state);
  switch (action.type) {
    case "GET_CITY":
      return { ...state, data: [...state.data, action.data] };
    case "GET_ERROR":
      console.log(state);
      return { ...state, isError: true };
    case "FETCHING":
      return { ...state, isFetching: true };
    default:
      return state;
  }
};

export default reducer;
// Object.assign({}, state, { data: [...state.data, action.data] })
