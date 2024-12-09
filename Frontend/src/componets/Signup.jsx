import React, { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import signup from "../../public/signup.webp";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    try {
      const response = await axios.post(
        "https://bookbazaar-e1qc.onrender.com/user/signup",
        userInfo
      );
      console.log(response.data);
      toast.success("Signup Successfully");
      // navigate("/login");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-xl overflow-hidden flex">
        {/* Cover Photo Section */}
        <div
          className="hidden md:block w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://www.freepik.com/free-photo/navy-blue-concrete-wall-with-scratches_15556823.htm#fromView=keyword&page=1&position=26&uuid=11359ba2-11ba-4a10-9c77-12d6af14a49e")`,
          }}
        >
          <div className="h-full  bg-opacity-70 flex items-center justify-center">
            <div className="text-center text-white px-8">
              <h2 className="text-3xl font-bold mb-4">Join Us!</h2>
              <p className="text-xl">
                Create an account to explore exclusive features.
              </p>
              <img src={signup} alt="" />
            </div>
          </div>
        </div>

        {/* Signup Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Create Your Account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium">
                Full Name
              </label>
              <div className="mt-1 relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  id="fullname"
                  type="text"
                  placeholder="Enter your full name"
                  {...register("fullname", { required: "Name is required" })}
                  className={`pl-10 pr-3 py-2 border rounded-md w-full ${
                    errors.fullname ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>
              {errors.fullname && (
                <p className="text-sm text-red-600">
                  {errors.fullname.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
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

            {/* Password */}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Signup
            </button>

            {/* Login Link */}
            <p className="text-sm text-center mt-4">
              Already have an account?{" "}
              <Link to="/login" className="bg-green-400">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
