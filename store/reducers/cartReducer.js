const initialState = {
    items: [],
    totalPrice: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const updatedItems = [...state.items, action.payload];
        const updatedPrice = state.totalPrice + action.payload.price;
        return {
          ...state,
          items: updatedItems,
          totalPrice: updatedPrice,
        };
  
      case 'REMOVE_FROM_CART':
        const filteredItems = state.items.filter((item) => item.id !== action.payload.id);
        const reducedPrice = state.totalPrice - action.payload.price;
        return {
          ...state,
          items: filteredItems,
          totalPrice: reducedPrice,
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  