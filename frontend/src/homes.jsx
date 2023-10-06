import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "./redux/user/useActions";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

function homes() {
  const userData = useSelector((state) => state.userData.Data);
  const loadings = useSelector((state) => state.userData.loading);
  const logouts = useSelector((state) => state.logout.logout);
  const nav = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(logout());
          nav('/')
          window.location.reload()
          // console.log(logouts + "logouts_knf");
          // window.location.reload()
          // nav("/")
        }}
        className="bg-green-400 text-white py-1 px-3 rounded-lg ml-2"
      >
        Logout
      </button>

      {loadings ? (
        <>
          <Stack spacing={1}>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Stack>
        </>
      ) : (
        <>
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80">
              <img
                src={`http://localhost:3000/images/${userData.image}`}
                // alt="Profile"
                className="w-60 h-10 object-cover  object-center"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-2xl mb-2">{userData.name}</div>
                <p className="text-gray-600 text-lg mb-4">{userData.email}</p>
                <p className="text-gray-600 text-lg">{userData.password}</p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* <button onClick={()=>dispatch()}>logout</button> */}
    </div>
  );
}

export default homes;
