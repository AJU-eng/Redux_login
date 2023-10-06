import {
  USER_DATA_ERROR,
  USER_DATA_REQUEST,
  USER_DATA_SUCCESS,
  USER_DELETED,
  FIND_USER,
  UPDATE_USER,
  ADMIN_LOGGED,
  ADMIN_LOGGED_ERROR,
  ADMIN_LOGOUT,
  ADMIN_LOGOUT_ERROR,
} from "./adminTypes";

const initialUserState = {
  loading: false,
  userData: [],
  err: "",
  deleted: false,
};

const initialAdminState = {
  logged: "",
  err: "",
};

const initialLogoutState={
  logout:"",
  err:""
}

export const adminLogoutReducer=(state=initialLogoutState,action)=>{
  switch (action.type) {
    case ADMIN_LOGOUT:
      return {
        logout:action.payload,
        err:""
      }
    case ADMIN_LOGOUT_ERROR:
      return {
        logout:"",
        err:action.payload
      }
  
    default:return state
 
  }
}

export const adminLoggedReducer = (state = initialAdminState, action) => {
  switch (action.type) {
    case ADMIN_LOGGED:
     return {
      logged:action.payload,
      err:""
     }
    case ADMIN_LOGGED_ERROR:
      return {
        logged:"",
        err:action.payload
      }
    default:return state
      
  }
};

export const adminReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_DATA_SUCCESS:
      return {
        loading: false,
        userData: action.payload,
        err: "",
      };
    case USER_DATA_ERROR:
      return {
        loading: false,
        userData: [],
        err: action.payload,
      };

    case UPDATE_USER:
      const updatedUser = state.userData.map((item) => {
        item._id === action.payload._id ? action.payload : item;
      });
      return {
        ...state,
        userData: updatedUser,
      };

    case USER_DELETED:
      const data = action.payload;
      const undeletedData = state.userData.filter(
        (user) => user._id !== data._id
      );
      return {
        loading: false,
        userData: undeletedData,
        err: "",
        deleted: true,
      };
    case FIND_USER:
      return {
        userData: action.payload,
      };
    // case UPDATE_USER:
    //   return {

    //   }

    default:
      return state;
  }
};
