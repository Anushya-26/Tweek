import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/editteddeer.jpg"; // adjust path as needed

export default function TweekLandingSplit() {
  const [clicked, setClicked] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [regno,setRegno] = useState('');
  const [password,setPassword] = useState('');


  const bgColor = "#313131";

  return (
    <div className="flex h-screen text-white relative overflow-hidden flex-col md:flex-row" style={{ backgroundColor: bgColor }}>

      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16">
        <h1 className="text-5xl font-bold mb-6">
          <span>Welcome to </span> <br />
          <motion.span
            className="inline-block"
            animate={{
              position: "relative",
              fontSize: "3rem",
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            Tweek
          </motion.span>
        </h1>
        {
          !showSignInForm && !showSignUpForm && (<p className="text-lg leading-relaxed text-gray-300">
            A space to overcome your hesitations, share your opinions, experiences, and feelings freely.
            We are here to nurture your thoughts and bring them to people who will value and cherish them.
          </p>)
        }
      </div>

      {/* Right Side */}
      <div className="mt-10 w-full md:w-1/2 flex flex-col items-center justify-center px-8">
        {/* Clickable Logo */}
        <motion.img
          src={logo}
          alt="Tweek Logo"
          className="w-60 h-60 object-contain mb-10 cursor-pointer"
          animate={{ rotate: clicked ? 15 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onClick={() => setClicked(!clicked)}
        />

        {/* Buttons below Logo */}
        <div className="flex flex-col gap-4">
          {["Sign In", "Sign Up"].map((label, index) => (
            <motion.button
              key={index}
              className="px-8 py-3 rounded-full border border-white text-white font-semibold transition-all"
              initial={{ opacity: 0, y: -20 }}
              animate={
                clicked
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -20 }
              }
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.05,
                y: -2,
                background: "linear-gradient(to right, #ffffff44, #bbbbbb33)",
                color: "#000000",
                boxShadow: "0 0 10px rgba(255,255,255,0.5)",
              }}
              onClick={() => {
                if (label === "Sign In") {
                  setShowSignInForm(true);
                  setShowSignUpForm(false);
                  setClicked(false);
                } else {
                  setShowSignUpForm(true);
                  setShowSignInForm(false);
                  setClicked(false);
                }
              }}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Sign In Form */}
        <motion.div
          className="absolute right-0 top-0 h-full w-full md:w-1/2 flex items-center justify-center bg-[#ffffff4b]"
          initial={{ x: "100%" }}
          animate={{ x: showSignInForm ? "0%" : "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="w-3/4 max-w-md p-8 rounded-lg shadow-lg bg-white">
            <h3 className="text-2xl font-bold mb-6">Sign In</h3>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded bg-[#313131] text-white focus:outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-3 rounded bg-[#313131] text-white focus:outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="mt-4 px-6 py-3 rounded-full bg-[#313131] text-white font-semibold hover:bg-[#313131e3] transition-all"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-sm text-center text-black">
              Don't have an account?{" "}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => {
                  setShowSignInForm(false);
                  setShowSignUpForm(true);
                }}
              >
                Sign Up here
              </button>
            </p>
          </div>
        </motion.div>

        {/* Sign Up Form */}
        <motion.div
          className="absolute right-0 top-0 h-full w-full md:w-1/2 flex items-center justify-center bg-[#ffffff4b]"
          initial={{ x: "100%" }}
          animate={{ x: showSignUpForm ? "0%" : "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="w-3/4 max-w-md p-8 rounded-lg shadow-lg bg-white">
            <h3 className="text-2xl font-bold mb-6">Sign Up</h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Username"
                className="px-4 py-3 rounded bg-[#313131] text-white focus:outline-none"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded bg-[#313131] text-white focus:outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-3 rounded bg-[#313131] text-white focus:outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="text"
                placeholder="Registration No."
                className="px-4 py-3 rounded bg-[#313131] text-white focus:outline-none"
                onChange={(e) => setRegno(e.target.value)}
              />
              <button
                type="submit"
                className="mt-4 px-6 py-3 rounded-full bg-[#313131] text-white font-semibold hover:bg-[#313131e3] transition-all"
              >
                Register
              </button>
            </form>
            <p className="mt-4 text-sm text-center text-black">
              Go to {" "}
              <button
                className="text-blue-600 hover:underline"
                onClick={() => {
                  setShowSignUpForm(false);
                  setShowSignInForm(true);
                }}
              >
                Sign In here
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}












