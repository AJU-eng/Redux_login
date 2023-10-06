import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { findUser, updateUser } from "./redux/admin/adminAction";
import axios from "axios";

const UpdateForm = () => {
  const { id } = useParams();
  const Data = useSelector((state) => state.admin.userData);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    dispatch(findUser(id));
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();

    // axios
    //   .put("http://localhost:3000/user/updateUser", { name, email })
    //   .then(
    //     (res) => dispatch({ type: "UPDATE_USER", payload: res.data }),
      dispatch(updateUser(name,email))
        nav("/Admin")
        window.location.reload()
  };
  useEffect(() => {
    setName(Data.name);
    setEmail(Data.email);
  }, [Data]);

  return (
    <div className="max-w-md mx-auto">
      {!Data && <h1>loading</h1>}
      {/* <h1>{Data.name}</h1> */}
      <h2 className="text-2xl font-semibold mb-4">Update Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-600 font-semibold mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-600 font-semibold mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
