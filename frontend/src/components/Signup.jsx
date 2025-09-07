
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; 
import axios from "axios";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/signup`, {
        username,
        password,
      });

      if (res.status === 200) {
        navigate("/");
      } else {
        alert("Signup failed, try again!");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/004/299/830/original/shopping-online-on-phone-with-podium-paper-art-modern-pink-background-gifts-box-illustration-free-vector.jpg')",
      }}
    >
     
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative bg-white/30 backdrop-blur-lg border border-pink-300/40 
                   shadow-2xl p-8 rounded-2xl w-80 md:w-96 overflow-hidden"
      >
        
        <div
          className="absolute inset-0 rounded-2xl border-2 border-transparent 
                     bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 
                     opacity-70 animate-pulse"
        ></div>

        {/* Content */}
        <div className="relative z-10">
         
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-extrabold mb-6 text-center 
                       bg-gradient-to-r from-pink-600 to-purple-600 
                       bg-clip-text text-transparent"
          >
            Create Account 🎉
          </motion.h1>

          {/* Form */}
          <form onSubmit={handleSignup} className="flex flex-col space-y-4">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              type="text"
              placeholder="Username"
              className="p-3 border rounded-lg focus:outline-none 
                         focus:ring-2 focus:ring-pink-400 bg-white/70"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <motion.input
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              type="password"
              placeholder="Password"
              className="p-3 border rounded-lg focus:outline-none 
                         focus:ring-2 focus:ring-pink-400 bg-white/70"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white 
                         py-2 rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              Signup ✨
            </motion.button>
          </form>

          {/* Login Link */}
          <p className="mt-4 text-center text-sm text-gray-700">
            Already have an account?{" "}
            <span
              className="text-pink-600 cursor-pointer font-semibold hover:underline"
              onClick={() => navigate("/")}
            >
              Login
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
