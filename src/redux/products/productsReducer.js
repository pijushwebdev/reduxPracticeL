import { ADDPRODUCT } from "./actionType";

const initialState = [{id: 0}];

const nextId = (state) => {
   const maxId = state.reduce((maxId, currentObj) =>
    Math.max(maxId, currentObj.id), -1
  );

  return maxId + 1;
};
export const productsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADDPRODUCT:
      return [
        ...state,
        {
          id: nextId(state),
          productName: action.payload.productName,
          category: action.payload.category,
          imageUrl: action.payload.imageUrl,
          price: action.payload.price,
          quantity: action.payload.quantity,
        },
      ];

    default:
      return state
  }
};
