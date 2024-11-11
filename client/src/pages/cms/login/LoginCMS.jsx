import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import backgroundLogin from "../../../assets/login-cms-pic/background-login.png";
import growlab from "../../../assets/logo/growlab1.png";
import { icon } from "../../../constants";
import axios from "axios";

const LoginCMS = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });


  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      let { username, password } = input;
      await axios
        .post(`${process.env.REACT_APP_API_BASE_URL}/cms/login`, { username, password })
        .then((res) => {
          const token = res.data.token
          localStorage.setItem('token', token)
          navigate('/admin/dashboard')
          
          // console.log(res);
        })
      
    } catch (err) {
      alert("Invalid Password or Username");
      console.log(err.message);
    }

    // console.log(input);
  };
  return (
    <section className="relative flex h-screen bg-white">
      <img
        src={icon.loginVector}
        alt=""
        className="absolute top-0 right-0 md:hidden"
      />
      <div className="hidden md:flex md:flex-[1_1_60%]">
        <img
          src={backgroundLogin}
          alt="login"
          className="h-screen shadow-[8px_8px_10px_rgba(0,0,0,0.25)] rounded-tr-[50px]"
        />
      </div>

      <div className=" flex-[1_1_40%] mt-16">
        <div className="w-full px-8 md:px-24 flex flex-col mt-16">
          <div className="flex flex-col items-center mb-10 md:mb-4">
            <div className="w-[140px] h-[140px] md:w-[220px] md:h-[220px]">
              <img src={growlab} alt="growlab" className="" />
            </div>
            <h4 className="md:hidden text-center font-semibold">
              Content Management System
            </h4>
          </div>
          {/* <div className=" flex flex-col md:justify-center">
          </div> */}
          <form action="" onSubmit={handleSubmit}>
            <div className="my-4">
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={input.username}
                onChange={handleChange}
                className="px-4 py-2 border-2 border-black rounded-lg w-full focus:outline-none"
              />
            </div>
            <div className="my-6">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={input.password}
                onChange={handleChange}
                className="px-4 py-2 border-2 border-black rounded-lg w-full focus:outline-none"
              />
            </div>

            <div className="flex justify-center">
              <button
                className="shadow-[3px_3px_#000] px-4 py-2 border border-black rounded-lg"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginCMS;
