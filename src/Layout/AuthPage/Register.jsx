/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UserCreate, UserLogin } from "../../redux/extraReducer";
import svg from './images/megaphone 1.svg';
import svg1 from './images/megaphone 1 (1).svg';
import svg2 from './images/Group.svg';
import svg3 from './images/ic_google logo (1).svg';
import svg4 from './images/ic_fb logo.svg';
import '../style.css'

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      UserCreate({ userName: userName, email: email, password: password })
    );
  };
  return (
    <section class="max-w-screen-2xl  mx-auto px-4 h-full justify-center items-center">
    <div class="flex  w-full h-full  flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white max-w-2xl rounded-lg md:mt-0 sm:max-w-md xl:p-0">
            <div class="">
                <h1 class="mb-2 font-normal text-3xl lg:text-5xl sm:text-3xl">
                   Create An Account
                </h1>
                <p class="mt-2 text-base font-light md:mt-16">Already have an account? <span class="text-purple-700 font-normal cursor-pointer"><a href="/">Login</a></span></p>
                <p class="my-4 text-gray-400">Join as an <span class="text-blue-500 cursor-pointer">ad space host</span>  or as <span class="text-purple-700 cursor-pointer">an advertiser</span> </p>
                <div class=" grid gap-4 w-full  md:flex">
          <div class="text-center py-4 md:py-8  border rounded-xl w-full cursor-pointer hover:border-blue-600  hover:shadow-md md:w-1/2 sm:w-full">
              <img class="inline w-14 md:w-20" src={svg} alt="icon" />
              <p class="font-light">Join as an ad space host</p>
          </div>
          <div class="text-center py-4 md:py-8  border rounded-xl w-full cursor-pointer hover:border-blue-600 hover:font-normal hover:shadow-md md:w-1/2 sm:w-full">
              <img class="inline  w-14 md:w-20" src={svg1} alt="icon2" />
              <p class="font-light hover:font-normal">Join as an advertiser</p>
          </div>
      </div>
      <h3 class="text-center text-lg font-light my-8 md:font-normal">Create with</h3>
      <div class="">
      <div>
      {/* <div class="mrt social-card border rounded-xl  py-2 text-center hover:border-blue-600  hover:shadow-md md:px-16">
          <button class="text-center text-gray-800 font-normal py-2 px-4 rounded inline-flex items-center">
             <img src={svg2} />
              <span class="ml-1 md:ml-2 font-light ">Create Account</span>
            </button>
      </div>  */}
      <div class="mt-3 social-card google border rounded-xl  py-2 text-center hover:border-blue-600  hover:shadow-md md:px-16">
          <button class=" text-center   text-gray-800 font-light md:font-normal py-2 px-4 rounded inline-flex items-center">
              <img src={svg3} />
              <span class="ml-1 md:ml-2">Continue with Google</span>
            </button>
      </div>
      <div class="mt-3 social-card facebook border rounded-xl py-2 text-center hover:border-blue-600  hover:shadow-md md:px-16">
          <button class="text-center   text-gray-800 font-light md:font-normal py-2 px-4 rounded inline-flex items-center">
              <img src={svg4} />
              <span class="ml-1 md:ml-2">Continue with Facebook</span>
            </button>
      </div>
     </div>
    </div>
            </div>
        </div>
    </div>
  </section>
  );
}

export default Register;
