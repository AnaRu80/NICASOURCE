import { ADD_QR, DELETE_QR, FILTER_QR } from './type';

export const addQr = (qr) => ({
  type: ADD_QR,
  payload: qr,
});
export const filterQr = (link = '') => ({
  type: FILTER_QR,
  link,
});

export const deleteQr = (id) => ({
  type: DELETE_QR,
  payload: id,
});
