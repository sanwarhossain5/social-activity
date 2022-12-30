import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const [userEmail, setUserEmail] = useState("");
  // console.log(userEmail);
  const { signin, loading, setLoading, resetPassword, signInWithGoogle } =
    useContext(AuthContext);

  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  const handleLogin = (data) => {
    setLoginError("");
    //sign in with email and password
    signin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setLoading(false);
        console.log(user);
        // setAuthToken(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  //reset password
  // const handleResetPassword = () => {
  //   resetPassword(userEmail)
  //     .then(() => {
  //       toast.success("please check your email for reset password");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       toast.error(error.message);
  //       setLoading(false);
  //     });
  // };

  return (
    <div className="h-screen   flex justify-center items-center flex-col max-w-lg mx-auto">
      <div className="w-full p-12 border">
        <h2 className="text-2xl text-center text-[#D53F8C] font-bold py-4">
          Login
        </h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className=" w-full text-sm mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-400">
              Email
            </label>
            <input
              // onChange={(event) => setUserEmail(event.target.value)}
              type="email"
              {...register("email", { required: "Email is Required" })}
              className="w-full px-4 py-3 border"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email?.message}</p>
            )}
          </div>
          <div className=" w-full text-sm mb-4">
            <label htmlFor="password" className="block mb-2 text-gray-400">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character or longer",
                },
              })}
              className="w-full px-4 py-3 border"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password?.message}</p>
            )}
            <button
              // onClick={handleResetPassword}
              className="text-xs hover:underline text-[#D53F8C]"
            >
              Forgot password?
            </button>
          </div>
          <div className="text-center">
            <input
              type="submit"
              className="w-ful cursor-pointer py-3 px-8 text-white bg-[#D53F8C]"
              value="Sign In"
            />
          </div>
        </form>
        {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
        <p className="text-xs text-center mt-3  text-[#D53F8C]">
          Don't have an account{" "}
          <Link className="underline" to="/signup">
            Sign Up
          </Link>
        </p>
        <div>
          <hr className="my-4" />
          <div className="text-center">
            <button
              onClick={handleGoogleSignIn}
              aria-label="Log in with Google"
              className="w-ful py-3 px-6 text-white bg-[#D53F8C]"
            >
              Google Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
