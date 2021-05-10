import { ADD_QR, DELETE_QR } from "../actions/type";

const initialState = {
  QRData: [],
};

const qrReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QR:
      console.log(action.payload);
      return {
        ...state,
        QRData: state.QRData.concat({
          id: Math.random(),
          link: action.payload,
        }),
      };
    case DELETE_QR:
      return {
        ...state,
        QRData: state.QRData.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default qrReducer;
