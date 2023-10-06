import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logins } from "./redux/user/useActions";
import { useNavigate} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";


function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState();
  const [image,setImage]=useState()
  const data = useSelector((state) => state.login.user);
  const loadings = useSelector((state) => state.login.loading);
  const [password, setPassword] = useState();
  const action = useDispatch();
  // const history=useHistory()

  useEffect(() => {
    if (data==="logined") {
      // history.push("/home")
      nav('/home')
    }else if(data=="ok")
    {
      nav("/Admin")
    }

  }, [data]);
 
  const handleLogin = (e) => {
    e.preventDefault();
    action(logins(email, password));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
          Log in to your account
        </h2>
        {loadings && (
          <div className="flex justify-center">
            <CircularProgress />
          </div>
        )}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:outline-none"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
           
            {}
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
