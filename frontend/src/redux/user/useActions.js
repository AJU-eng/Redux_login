import axios from "axios";

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

export const fetch_request = () => {
  return {
    type: FETCH_REQUEST,
  };
};
export const fetch_success = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};
export const userlogout=(data)=>{
  return {
    type:USER_LOGOUT,
    payload:data
  }
}

export const userlogoutError=(err)=>{
  return {
    type:USER_LOGOUT_ERROR,
    payload:err
  }
}

export const user_logged = (data) => {
  return {
    type: USER_LOGGED,
    payload: data,
  };
};

export const user_logged_error = (erro) => {
  return {
    type: USER_LOGGED_ERROR,
    payload: erro,
  };
};

export const fetch_error = (err) => {
  return {
    type: FETCH_ERROR,
    payload: err,
  };
};

export const login_request = () => {
  return {
    type: LOGIN_REQUEST,
  };
};
export const login_sucess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const login_error = (err) => {
  return {
    type: LOGIN_ERROR,
    payload: err,
  };
};

export const fetch_user = () => {
  return {
    type: FETCH_USER,
  };
};
export const fetch_user_success = (data) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: data,
  };
};
export const fetch_user_error = (err) => {
  return {
    type: FETCH_USER_ERROR,
    payload: err,
  };
};

// export const find_user=(data)=>{
//     return {
//       type:FIND_USER,
//       payload:data
//     }
// }
// export const register = (name, email, password,image) => {
//   return (dispatch) => {
//     dispatch(fetch_request());

//     let formData = {name:name,email:email,password:password,image:image}
//     console.log(formData+"formData");
//     axios
//       .post("http://localhost:3000/user/", formData,{
//         headers:{"Content-Type":"multipart/form-data"}
//       })
//       .then((res) => {
//         console.log("then worked")
//         const datas = res.data;
//         dispatch(fetch_success(datas));
//       })
//       .catch((err) => {
//         console.log("catch worked")
//         dispatch(fetch_error(err.message));
//       });
//   };
// };

export const register = (formData) => {
  return (dispatch) => {
    dispatch(fetch_request());
    console.log(formData);
    //  let formData={name:name,email:email,password:password,image:image}
    //  console.log(formData+"loging");
    // Create a new FormData object
    //  const formData = new FormData();
    // formData.append("name", name);
    // formData.append("email", email);
    // formData.append("password", password);
    //formData.append("file", formData);

    // Set the Content-Type header of the request to multipart/form-data
    // const headers = { "Content-Type": "multipart/form-data" };

    // Make a POST request to the backend API with the FormData object as the body
    axios
      .post("http://localhost:3000/user/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        const datas = res.data;
        dispatch(login_sucess(datas));
      })
      .catch((err) => {
        dispatch(login_error(err.message));
      });
  };
};
// export const uploadImage = (formData) => {
//   return (dispatch) => {
//     dispatch(fetch_request());
//     axios
//       .post("http://localhost:3000/user/uploadimage", {formData },{headers:{"Content-Type":"multipart/form-data"}})
//       .then((res) => {
//         const datas = res.data;
//         dispatch(fetch_success(datas));
//       })
//       .catch((err) => {
//         dispatch(fetch_error(err.message));
//       });
//   };
// };

export const logins = (email, password) => {
  return (dispatch) => {
    dispatch(login_request());
    axios
      .post("http://localhost:3000/user/login", { email, password })
      .then((res) => {
        const dats = res.data;
        dispatch(login_sucess(dats));
      })
      .catch((err) => dispatch(login_error(err.message)));
  };
};

export const logged = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:3000/user/logged")
      .then((res) => {
        console.log(res.data);
        dispatch(user_logged(res.data));
      })
      .catch((err) => {
        dispatch(user_logged_error(err.message));
      });
  };
};

export const getUser = () => {
  return (dispatch) => {
    dispatch(fetch_user());
    axios
      .get("http://localhost:3000/user/getData")
      .then((res) => {
        dispatch(fetch_user_success(res.data));
      })
      .catch((err) => {
        dispatch(fetch_user_error(err.message));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    // dispatch(fetch_request);
    axios.get("http://localhost:3000/user/logout").then((res) => {
      dispatch(userlogout(res.data))
    }).catch((err)=>{
      dispatch(userlogoutError(err))
    })
  };
};
