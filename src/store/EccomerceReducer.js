import { createSlice } from "@reduxjs/toolkit";

const eccomerceSlice = createSlice({
  name: "eccomerce",
  initialState: {
    horizontal: "",
    login: false,
    category: "",
    cartItem: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newCart = action.payload;
      const existingItem = state.cartItem.find(
        (cart) => cart.id === Number(newCart.id)
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.total = existingItem.quantity * existingItem.new_price;
      } else {
        state.cartItem.push({
          id: newCart.id,
          name: newCart.name,
          image: newCart.image,
          new_price: newCart.new_price,
          old_price: newCart.old_price,
          quantity: 1,
          total: newCart.new_price * state.quantity,
        });
      }
    },
    removeCart(state, action) {
      const id = action.payload;

      const cart = state.cartItem.findIndex((cart) => cart.id === id);
      if (cart == !1) {
        state.cartItem.splice(cart, 1);
      }
    },
    setHorizontal(state, action) {
      const value = action.payload;
      state.horizontal = value;
    },

    setCategory(state, action) {},
    setLogin(state) {
      state.login = !state.login;
    },
  },
});

export const eccomerceSliceActions = eccomerceSlice.actions;
export default eccomerceSlice;
