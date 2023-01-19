import { ADD_USER, DELETE_USER, EDIT_USER, UPDATE_USER  } from "../type/type";

const initialState = {
  payload: [],
  error: "",
  editUser:[]
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        payload: [...state.payload, action.payload],
      };

    case DELETE_USER: {
      return {
        // payload: [...state.payload, state.payload]
        payload: state.payload.filter((item) => item.id !== action.payload),
      };
    }
    case EDIT_USER: {
      return {
        payload: state.payload,
        editUser: action.payload
      };    
    }
    case UPDATE_USER:{
        // arr1.map(obj => arr2.find(o => o.id === obj.id) || obj);
        return {
            payload: action.payload
        }
    }
    default:
      return state;
  }
};
export default userReducer;
