import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import bg from "../assets/bg.jpg";

const Login = () => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    function handleUname(e) {
        setUser(e.target.value);
    }

    function handlePass(e) {
        setPass(e.target.value);
    }

    function check() {
        axios
            .post("http://localhost:5000/login", {
                username: user,
                password: pass,
            })
            .then((res) => {
                if (res.data === true) {
                    navigate("/success");
                } else {
                    navigate("/fail");
                }
            })
            .catch((err) => console.log(err));
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
                <h2 className="mb-6 text-4xl text-left font-semibold text-white px-2">
                    Login
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
                    onClick={check}
                    className="mb-4 w-full rounded-xl bg-red-600 text-white px-4 py-3 font-medium backdrop-blur-sm transition hover:bg-white/15 focus:ring-2 focus:ring-white/20"
                >
                    Login
                </button>

                <p className="text-sm text-zinc-300/80">
                    New user?{" "}
                    <Link
                        to="/signup"
                        className="font-medium text-white hover:underline hover:underline-offset-4"
                    >
                        Signup here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
