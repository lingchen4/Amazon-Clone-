export const initialState = {
  basket: [],
  user: null,
  numberItem: 0,
  Subtotal: 0,
};

function reducer(state, action) {
  let newBasket = [...state.basket];
  switch (action.type) {
    case "ADD_TO_BASKET":
      if (newBasket.find((item) => item.id === action.item.id)) {
        ++newBasket.find((item) => item.id === action.item.id).amount;
      } else {
        newBasket.push(action.item);
      }
      return {
        ...state,
        basket: [...newBasket],
        numberItem: ++state.numberItem,
        Subtotal: state.Subtotal + action.item.price,
      };
    case "REMOVE_FROM_BASKET":
      if (newBasket.find((item) => item.id === action.id)) {
        const item = state.basket.find((item) => item.id === action.id);
        if (item.amount < 2) {
          newBasket = newBasket.filter((cartItem) => cartItem.id !== item.id);
        } else {
          --newBasket.find((item) => item.id === action.id).amount;
        }
      }
      return {
        ...state,
        basket: [...newBasket],
        numberItem: --state.numberItem,
        Subtotal: state.Subtotal - action.price,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}

export default reducer;
