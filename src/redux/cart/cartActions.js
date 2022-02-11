import { cartActionTypes } from "./cartActionTypes";

export const cartAddItem = (item) => ({
  type: cartActionTypes.CART_ADD_ITEM,
  payload: item,
});

export const cartRemoveItem = (item) => ({
  type: cartActionTypes.CART_REMOVE_ITEM,
  payload: item,
});
