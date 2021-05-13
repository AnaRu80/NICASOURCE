import { ADD_QR, DELETE_QR, FILTER_QR } from '../actions/type';

const initialState = {
  filterData: [],
  QRData: [
    {
      id: 1,
      link: 'google.com',
    },
  ],
};

const qrReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QR:
      return {
        ...state,
        QRData: state.QRData.concat({
          id: Math.random(),
          link: action.payload,
        }),
      };
    case FILTER_QR:
      return {
        ...state,
        filterData: state.QRData.filter((item) => {
          const itemData = item.link
            ? item.link.toLowerCase()
            : ''.toLowerCase();
          const textData = action.link.toLowerCase();
          return itemData.indexOf(textData) > -1;
        }),
      };

    case DELETE_QR:
      return {
        ...state,
        QRData: state.QRData.filter((item) => item.id !== action.payload),
        filterData: state.QRData.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default qrReducer;
