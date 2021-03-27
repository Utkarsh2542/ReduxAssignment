import {Get_Data} from './constants';

const initialState = {
  data: '',
};

export default function Reducer1 (state = initialState, action) {
  switch (action.type) {
    case Get_Data:
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
}
