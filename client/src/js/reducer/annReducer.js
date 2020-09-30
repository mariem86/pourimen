import {
    ADD_ANNONCE,
    GET_ANNONCE,
    DELETE_ANNONCE,
    EDIT_ANNONCE,
    AUTH_ERROR,
    SET_LOADING,
} from "../const/actionType";
const initState = {
 annonces:[],
 isLoading: false,
};
export default function (state = initState, { type, payload }) {
    switch (type) {
      case SET_LOADING:
        return { ...state, isLoading: true };
        case ADD_ANNONCE:
      return {...state,annonces:[payload, ...state.annonces],isLoading: false };
        case GET_ANNONCE:
      return {
        ...state,
        annonces: payload, isLoading: false  };
        case DELETE_ANNONCE:
            return {
              ...state,
         annonces: state.annonces.filter(annonce => annonce._id !== payload), isLoading: false };
         case EDIT_ANNONCE:
            return {...state,annonces:payload, isLoading: false}
              default:
                return state;
            }
          }
         