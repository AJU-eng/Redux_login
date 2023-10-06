import axios from "axios";

import {
  ADMIN_LOGGED,
  ADMIN_LOGGED_ERROR,
  ADMIN_LOGOUT,
  ADMIN_LOGOUT_ERROR,
  FIND_USER,
  UPDATE_USER,
  USER_DATA_ERROR,
  USER_DATA_REQUEST,
  USER_DATA_SUCCESS,
  USER_DELETED,
} from "./adminTypes";

export const UserDataRequest = () => {
  return {
    type: USER_DATA_REQUEST,
  };
};

export const UserDataSuccess = (data) => {
  return {
    type: USER_DATA_SUCCESS,
    payload: data,
  };
};

export const UserDataError = (err) => {
  return {
    type: USER_DATA_ERROR,
    payload: err,
  };
};
export const admin_logged=(data)=>{
   return {
    type:ADMIN_LOGGED,
    payload:data
   }
}

export const admin_logged_err=(err)=>{
  return {
    type:ADMIN_LOGGED_ERROR,
    payload:err
  }
}
export const UserDeleted = (data) => {
  return {
    type: USER_DELETED,
    payload: data,
  };
};

export const finduser = (data) => {
  return {
    type: FIND_USER,
    payload: data,
  };
};

export const admin_logouts=(data)=>{
  return {
    type:ADMIN_LOGOUT,
    payload:data
  }
}

export const admin_logout_err=(err)=>{
  return {
    type:ADMIN_LOGOUT_ERROR,
    payload:err
  }
}

export const fetch_userData = () => {
  return (dispatch) => {
    dispatch(UserDataRequest());

    axios
      .get("http://localhost:3000/user/userData")
      .then((res) => {
        dispatch(UserDataSuccess(res.data));
      })
      .catch((err) => dispatch(UserDataError(err.message)));
  };
};



export const DeleteUser = (id) => {
  return (dispatch) => {
    axios.post("http://localhost:3000/user/userDelete", { id }).then((res) => {
      dispatch(UserDeleted(res.data));
    });
  };
};

export const adminlogged=()=>{
  return (dispatch)=>{
    axios.get("http://localhost:3000/user/adminLogged").then((res)=>{
      dispatch(admin_logged(res.data))
    }).catch((err)=>{
      dispatch(admin_logged_err(err))
    })
  }
}

export const updateUser = (name,email) => {
  return (dispatch) => {
    axios
      .put("http://localhost:3000/user/updateUser", { name, email })
      .then((res) => dispatch({type:UPDATE_USER,payload:res.data}),

      );
  };
};

export const findUser = (id) => {
  return (dispatch) => {
    axios.post("http://localhost:3000/user/findUser", { id }).then((res) => {
      dispatch(finduser(res.data));
    });
  };
};

export const admin_logout=()=>{
  return (dispatch)=>{
    axios.get("http://localhost:3000/user/adminLogout").then((res)=>{
       dispatch(admin_logouts(res.data))
    }).catch((err)=>dispatch(admin_logout_err(err.message)))
  }
}
