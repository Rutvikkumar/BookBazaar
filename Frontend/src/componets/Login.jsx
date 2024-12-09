import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import login from "../../public/login.webp";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://bookbazaar-e1qc.onrender.com/user/login",
        data
      );
      console.log(response.data);
      toast.success("Login Successfully");
      localStorage.setItem("Users", JSON.stringify(response.data));
      window.location.href = "/";
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-xl overflow-hidden flex">
        {/* Image Section */}
        <div
          className="hidden md:block w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url("/api/placeholder/800/800?text=Welcome+Back")`,
          }}
        >
          <div className="h-full bg-opacity-70 flex items-center justify-center">
            <div className="text-center text-white px-8">
              {/* <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
              <p className="text-xl">Login to access your dashboard</p> */}
              <img src={login} alt="" />
            </div>
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Login to Your Account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email address
              </label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: "Email is required" })}
                  className={`pl-10 pr-3 py-2 border rounded-md w-full ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className={`pl-10 pr-10 py-2 border rounded-md w-full ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-400 text-white rounded-md hover:bg-blue-700"
            >
              Login
            </button>
            <p className="text-sm text-center mt-4">
              If you have no account?{" "}
              <Link to="/signup" className=" bg-green-400 underline">
                Signup here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
