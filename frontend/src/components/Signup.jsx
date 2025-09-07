import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import bg from "../assets/bg.jpg";

const Signup = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  function handleUname(e) {
    setUser(e.target.value);
  }

  function handlePass(e) {
    setPass(e.target.value);
  }

  function signup() {
    axios
      .post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/signup`, {
        username: user,
        password: pass,
      })
      .then((res) => {
        if (res.data.success) {
          alert("Signup successful! You can login now.");
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.response && err.response.data.message) {
          alert(err.response.data.message);
        } else {
          alert("Something went wrong");
        }
      });
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="fixed top-6 left-6 z-50">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      </div>

      <div className="relative w-full max-w-md rounded-2xl bg-black/20 backdrop-blur-xl ring-1 ring-white/10 shadow-2xl p-8 text-center">
        <h2 className="mb-6 text-4xl text-left px-2 font-semibold text-white">
          Signup
        </h2>

        <input
          placeholder="Username"
          value={user}
          onChange={handleUname}
          className="mb-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-400 outline-none focus:border-white/20 focus:ring-2 focus:ring-white/10"
        />
        <input
          placeholder="Password"
          type="password"
          value={pass}
          onChange={handlePass}
          className="mb-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-400 outline-none focus:border-white/20 focus:ring-2 focus:ring-white/10"
        />
        <button
          onClick={signup}
          className="w-full rounded-xl bg-red-600 text-white px-4 py-3 font-medium backdrop-blur-sm transition hover:bg-white/15 focus:ring-2 focus:ring-white/20"
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
