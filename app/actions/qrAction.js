import { ADD_QR, DELETE_QR } from "./type";

export const addQr = (qr) => ({
  type: ADD_QR,
  payload: qr,
});

export const deleteQr = (id) => ({
  type: DELETE_QR,
  payload: id,
});
