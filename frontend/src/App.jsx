import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login";
import Homes from "./homes";
import Register from "./home";
import Modal from "./update";
import axios from "axios";
import Admin from "./Admin";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logged } from "./redux/user/useActions";
import Home from "./home";
import { adminlogged } from "./redux/admin/adminAction";

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.logged.logged);
  const adminAuth=useSelector(state=>state.adminLog.logged)

  useEffect(() => {
    // Dispatch the action to check if the user is logged in
    dispatch(logged());
    dispatch(adminlogged())
    console.log(`admin:${adminAuth}`);
    // Since authenticated is a dependency, this effect will run whenever it changes
    console.log(authenticated);
  }, [dispatch, authenticated,adminAuth]); // Include authenticated in the dependencies array

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={adminAuth && <Admin />} />
          <Route path="/update/:id" element={adminAuth && <Modal />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Homes />} />
          <Route path="*" element={<h1>404</h1>}/>
          <Route path="/" element={authenticated ? <Homes /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
