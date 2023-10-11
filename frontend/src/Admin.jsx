import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  DeleteUser,
  admin_logout,
  fetch_userData,
} from "./redux/admin/adminAction";
import { Link,useNavigate } from "react-router-dom";
// import {image} from ""
const Table = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.admin.userData);
  const deleted = useSelector((state) => state.admin.deleted);
  const loading = useSelector((state) => state.admin.loading);
  const nav=useNavigate()

  useEffect(() => {
    dispatch(fetch_userData());
    console.log(data + "userData");
  }, [deleted]);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-10">
      {/* {loading && <p>Loading...</p>} */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="px-4 py-2 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          dispatch(admin_logout());
          nav ("/")
          window.location.reload()
        }}
        className="bg-green-400 text-white py-1 px-3 rounded-lg ml-2"
      >
        Logout
      </button>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-indigo-600 text-white">
          <tr>
            <th className="py-3 px-6 text-left">No.</th>
            <th className="py-3 px-6 text-left">Profile</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {filteredData ? (
            filteredData.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">
                  <img
                    src={`http://localhost:3000/images/${item.image}`}
                    className="h-7 w-11"
                    alt=""
                  />
                </td>
                <td className="py-3 px-6">{item.name}</td>
                <td className="py-3 px-6">{item.email}</td>
                <td className="py-3 px-6 text-center">
                  <Link to={`/update/${item._id}`}>
                    <button>Update</button>
                  </Link>

                  <button
                    className="bg-red-600 text-white py-1 px-3 rounded-lg ml-2"
                    onClick={()=> confirmAlert({
                      title: 'Confirm to submit',
                      message: 'Are you sure to do this.',
                      buttons: [
                        {
                          label: 'Yes',
                          onClick: () => dispatch(DeleteUser(item._id))
                        },
                        {
                          label: 'No',
                          onClick: () => nav('/Admin')
                        }
                      ]
                    })}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <h1>No data found</h1>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
