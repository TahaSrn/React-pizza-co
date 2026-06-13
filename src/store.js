import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartReducer from "./features/cart/cartSlice";

function loadState() {
  try {
    const serialized = localStorage.getItem("pizzaAppState");
    return serialized ? JSON.parse(serialized) : undefined;
  } catch {
    return undefined;
  }
}

function saveState(state) {
  try {
    localStorage.setItem(
      "pizzaAppState",
      JSON.stringify({
        user: { username: state.user.username },
        cart: { cart: state.cart.cart },
      }),
    );
  } catch {}
}

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => saveState(store.getState()));

export default store;
