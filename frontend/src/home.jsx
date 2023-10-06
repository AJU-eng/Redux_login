  import React, { useState } from "react";
  import { useDispatch } from "react-redux";
  import { register } from "./redux/user/useActions";
  import { useNavigate } from "react-router-dom";
  function Home() {
    // Renamed 'home' to 'Home' (use PascalCase for components)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState(null); // Initialize image as null
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const nav=useNavigate()

    const registers = (e) => {
      e.preventDefault(); 
    
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
     
      dispatch(register(formData));
      nav("/home")
      window.location.reload()
      
    };

    return (
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <h1 className="text-4xl font-bold mb-8">Register</h1>
        <form onSubmit={registers}>
          <input
            type="text"
            className="w-full mb-4 p-4 rounded-md border border-gray-300"
            placeholder="Name"
            onChange={(e)=>setName(e.target.value)}
          />
          <input
            type="email"
            className="w-full mb-4 p-4 rounded-md border border-gray-300"
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full mb-4 p-4 rounded-md border border-gray-300"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <input
            accept="image/*"
            type="file"
            id="image"
            name="image"
            className="w-full mb-4 p-4 rounded-md border border-gray-300"
            placeholder="Profile photo"
            onChange={(e)=>setImage(e.target.files[0])}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Register
          </button>
        </form>
      </div>
    );
  }

  export default Home; // Renamed the export name to 'Home'
