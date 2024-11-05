// store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  type: string;
}

type CartState = CartItem[];

const initialState: CartState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (
      state,
      action: PayloadAction<Omit<CartItem, 'quantity'>>
    ) => {
      const itemInCart = state.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        if (state[itemIndex].quantity > 1) {
          state[itemIndex].quantity -= 1;
        } else {
          state.splice(itemIndex, 1); // Remove item when quantity is 0
        }
      }
    },
    deleteAllItems: (state) => {
      state.splice(0, state.length);
    },
    setCartState: (state, action: PayloadAction<CartState>) => {
      return action.payload;
    }
  }
});

export const {
  addItemToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteAllItems,
  setCartState
} = cartSlice.actions;

export default cartSlice.reducer;
