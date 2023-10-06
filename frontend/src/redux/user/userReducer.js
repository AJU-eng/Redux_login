import {
  FETCH_ERROR,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_USER,
  FETCH_USER_ERROR,
  FETCH_USER_SUCCESS,
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  USER_LOGGED,
  USER_LOGGED_ERROR,
  USER_LOGOUT,
  USER_LOGOUT_ERROR,
} from "./userTypes";

const initialState = {
  loading: false,
  user: [],
  err: "",
};

const initialLoggedState = {
  logged: "",
  err: "",
};

const initialLoginState = {
  loading: false,
  user: "",
  err: "",
};

const initialLogoutState={
  logout:"",
  err:""
}

const initialUserState = {
  loading: false,
  Data: [],
  err: "",
};

export const logoutReducer=(state=initialLogoutState,action)=>{
  switch (action.type) {
    case USER_LOGOUT:
       return {
        logout:action.payload,
        err:""
       }
    case USER_LOGOUT_ERROR:
      return {
        logout:"",
        err:action.payload
      }
    default:return state
      
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        err: "",
      };
    case FETCH_ERROR:
      return {
        loading: false,
        user: [],
        err: action.payload,
      };

    default:
      return state;
  }
};

export const loggedReducer = (state = initialLoggedState, action) => {
  switch (action.type) {
    case USER_LOGGED:
      return {
        logged: action.payload,
        err: "",
      };
    case USER_LOGGED_ERROR:
      return {
        logged: "",
        err: action.payload,
      };

    default:
      return state;
  }
};

export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        err: "",
      };

    case LOGIN_ERROR:
      return {
        loading: false,
        user: "",
        err: action.payload,
      };

    default:
      return state;
  }
};

export const getUserReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        Data: action.payload,
        err: "",
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        Data: [],
        err: action.payload,
      };
    default:
      return state;
  }
};
