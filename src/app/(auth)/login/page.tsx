"use client";

import React, { useState } from "react";
import Cookies from "js-cookie";

import { useSession, signIn, signOut } from "next-auth/react";
import { useForm, Controller } from "react-hook-form";
import { FaFacebookF } from "react-icons/fa";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import routes from "@/routes";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import authApi from "@/apis/authApi";
import { useUser } from "@/store/useUser";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const setUserInfo = useUser((state) => state.setUserInfo);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginResquest>();

  const handleLogin = async (data: LoginResquest) => {
    setIsLoading(true);
    const response = await authApi.login(data);
    console.log(response);
    setIsLoading(false);
    if (response.data.status === "OK") {
      Cookies.set("accessToken", response.data.accessToken, { expires: 100 });
      Cookies.set("refreshToken", response.data.refreshToken, { expires: 100 });
      setUserInfo(response.data);
      router.push(routes.home);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    // <div className="min-h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    //   <div className="sm:mx-auto sm:w-full sm:max-w-md">
    //     <h2 className="mt-6 text-center text-3xl font-extrabold ">
    //       Sign in to your account
    //     </h2>
    //     <p className="mt-2 text-center text-sm max-w">
    //       Or
    //       <Link
    //         href="/register"
    //         className="font-medium text-blue-600 hover:text-blue-500"
    //       >
    //         create an account
    //       </Link>
    //     </p>
    //   </div>
    //   <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-slate-200">
    //     <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
    //       <form className="space-y-6" action="#" method="POST">
    //         <div>
    //           <label htmlFor="email" className="block text-sm font-medium ">
    //             Email address
    //           </label>
    //           <div className="mt-1">
    //             <input
    //               id="email"
    //               name="email"
    //               type="email"
    //               autoComplete="email"
    //               required
    //               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    //               placeholder="Enter your email address"
    //             />
    //           </div>
    //         </div>
    //         <div>
    //           <label htmlFor="password" className="block text-sm font-medium ">
    //             Password
    //           </label>
    //           <div className="mt-1">
    //             <input
    //               id="password"
    //               name="password"
    //               type="password"
    //               autoComplete="current-password"
    //               required
    //               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    //               placeholder="Enter your password"
    //             />
    //           </div>
    //         </div>
    //         <div className="flex items-center justify-between">
    //           <div className="flex items-center">
    //             <input
    //               id="remember_me"
    //               name="remember_me"
    //               type="checkbox"
    //               className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
    //             />
    //             <label htmlFor="remember_me" className="ml-2 block text-sm ">
    //               Remember me
    //             </label>
    //           </div>
    //           <div className="text-sm">
    //             <a
    //               href="#"
    //               className="font-medium text-blue-600 hover:text-blue-500"
    //             >
    //               Forgot your password?
    //             </a>
    //           </div>
    //         </div>
    //         <div>
    //           <button
    //             type="submit"
    //             className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //           >
    //             Sign in
    //           </button>
    //         </div>
    //       </form>
    //       <div className="mt-6">
    //         <div className="relative">
    //           <div className="absolute inset-0 flex items-center">
    //             <div className="w-full border-t border-gray-300" />
    //           </div>
    //           <div className="relative flex justify-center text-sm">
    //             <span className="px-2 bg-gray-100 text-gray-500">
    //               Or continue with
    //             </span>
    //           </div>
    //         </div>
    //         <div className="mt-6 grid grid-cols-3 gap-3">
    //           <button onClick={() => signIn("facebook")}>
    //             <a
    //               href="#"
    //               className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
    //             >
    //               <img
    //                 className="h-5 w-5"
    //                 src="https://www.svgrepo.com/show/512120/facebook-176.svg"
    //                 alt="Facebook"
    //               />
    //             </a>
    //           </button>
    //           <div>
    //             <a
    //               href="#"
    //               className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
    //             >
    //               <img
    //                 className="h-5 w-5"
    //                 src="https://www.svgrepo.com/show/513008/twitter-154.svg"
    //                 alt="twitter"
    //               />
    //             </a>
    //           </div>
    //           <div>
    //             <a
    //               href="#"
    //               className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
    //             >
    //               <img
    //                 className="h-6 w-6"
    //                 src="https://www.svgrepo.com/show/506498/google.svg"
    //                 alt="google"
    //               />
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen  text-gray-900 flex justify-center mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
      <div className="max-w-screen-xl m-0 sm:my-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <img
              src="https://drive.google.com/uc?export=view&id=1MFiKAExRFF0-2YNpAZzIu1Sh52J8r16v"
              className="w-mx-auto"
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center gap-3">
                <Button
                  onClick={() => signIn("google", { callbackUrl: routes.home })}
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 hover:bg-green-50 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                >
                  <div className="bg-white p-2 rounded-full">
                    <svg className="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span className="ml-4">Sign In with Google</span>
                </Button>

                <Button
                  onClick={() =>
                    signIn("facebook", { callbackUrl: routes.home })
                  }
                  className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 hover:bg-green-50 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                >
                  <div className="bg-white p-2 rounded-full">
                    <FaFacebookF size={16} color="blue" />
                  </div>
                  <span className="ml-4">Sign In with Facebook</span>
                </Button>
              </div>
              <div className="my-12 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Or sign In with Cartesian E-mail
                </div>
              </div>
              <form onSubmit={handleSubmit((data) => handleLogin(data))}>
                <div className="mx-auto max-w-xs">
                  <div className="grid gap-1 py-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      {...register("email")}
                      className={cn({
                        "focus-visible:ring-red-500": errors.email,
                      })}
                      placeholder="you@example.com"
                    />
                    {errors?.email && (
                      <p className="text-sm text-red-500">
                        {/* {errors.email.message} */}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-1 py-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      {...register("password")}
                      type="password"
                      className={cn({
                        "focus-visible:ring-red-500": errors.password,
                      })}
                      placeholder="Password"
                    />
                    {errors?.password && (
                      <p className="text-sm text-red-500">
                        {/* {errors.password.message} */}
                      </p>
                    )}
                  </div>
                  <Button className="mt-5 tracking-wide font-semibold  w-full py-4 rounded-lg  transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy={7} r={4} />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-">Sign In</span>
                  </Button>
                </div>
              </form>
              <div className="flex justify-between mt-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember_me"
                      className="ml-2 block text-sm "
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <p className="mt-6 text-xs text-gray-600 text-center">
                I agree to abide by Cartesian Kinetics
                <a href="#" className="border-b border-gray-500 border-dotted">
                  Terms of Service
                </a>
                and its
                <a href="#" className="border-b border-gray-500 border-dotted">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://drive.google.com/uc?export=view&id=1KZ_Ub_2lZ0dHbKV0fAIhxVhiQA183RCz")',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
