/** @format */

import React, { useState } from "react";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import svg1 from './images/ic_google logo (1).svg'
import svg2 from './images/ic_fb logo.svg'

function Login() {
  const [password, setPassword] = useState("");
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }

  return (
    <section class="max-w-screen-2xl  mx-auto px-4 h-full justify-center items-center">
      <div class="flex  w-full h-full  flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white max-w-2xl rounded-lg md:mt-0 sm:max-w-md xl:p-0">
          <div class="">
            <h1 class="mb-2 font-normal text-3xl lg:text-5xl sm:text-3xl">
              Sign In
            </h1>
            <p class="my-4 text-sm md:text-base font-light md:my-8">Don’t have an account? <span class="text-blue-700 font-normal cursor-pointer "><a href="/register">Create an acount </a></span></p>
            <form class="md:space-y-6" action="#">
              <div>
                <h3 class="text-base font-medium">
                  Email Address
                </h3>
                <input type="email" name="email" class="mt-2.5 px-3 py-3 md:py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-blue-600 block w-full rounded-xl focus:ring-1" placeholder="example@gmail.com|" />
              </div>
              <div>
                <label class="password-container block mt-5 md:mt-8">
                  <h3 class="text-base font-normal">
                    Password</h3>
                  <div className='flex'>
                    <input className="mt-2.5 px-3 py-3 md:py-4 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-blue-600 block w-full rounded-xl focus:ring-1" type={type} name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
                    <span class="flex justify-around items-center" onClick={handleToggle}>
                      <Icon class="absolute mr-14 mt-2" icon={icon} size={20} />
                    </span>
                  </div>
                </label>
              </div>
              <div class="flex items-center my-2 justify-between">
                <div class="flex items-start">
                  <div class="flex items-center  h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4  border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="/forgotPassword" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>

            </form>
            <div class="mt-5 md:mt-8 social-card bg-blue-500 text-white google border rounded-xl  py-2 text-center hover:border-blue-600  hover:shadow-md md:px-16">
              <button class=" text-center   text-gray-800 font-normal py-1 md:py-2 px-4 rounded inline-flex items-center">
                <span class="ml-1 md:ml-2 text-white">Sign In</span>
              </button>
            </div>
            <div className="relative flex items-center justify-center w-full my-10 border border-t">
              <div className="absolute px-5 bg-white">or</div>
            </div>
            <div class="mt-3 flex justify-center items-center text-center w-full social-card text-gray-800 md:font-normal google border font-light rounded-xl py-4 px-4 text-center hover:border-blue-600  hover:shadow-md md:px-16">
              <img src={svg1} />
              <span class="ml-1 md:ml-2">Sign in with Google</span>
            </div>
            <div class="mt-3 flex justify-center items-center text-center w-full social-card text-gray-800 md:font-normal google border font-light rounded-xl py-4 px-4 text-center hover:border-blue-600  hover:shadow-md md:px-16">
                <img src={svg2} />
                <span class="ml-1 md:ml-2">Sign in with Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Login;
