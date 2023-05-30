import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
  removeFromCart(state, action){
  const nextCartItems =  state.products.Filer(
      product => product.id !== action.payload.id
    )
    state.product = nextCartItems
  }
});

export const { addProduct, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;