import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {
    createUser,
    updateUserProfile,
    verifyEmail,
    loading,
    setLoading,
    signInWithGoogle,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    console.log(errors);

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(data.name)
          .then(
            //verify Email
            verifyEmail()
              .then(() => {
                toast.success("Please check your email for verification link.");
                setLoading(false);
                navigate(from, { replace: true });
              })
              .catch((error) => console.error(error.message))
          )
          .catch((error) => console.error(error.message));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //google signin
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setLoading(false);
        toast.success(`Google Sign In ${user}`);
        // setAuthToken(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(`Google Sign In ${error.message}`);
      });
  };

  return (
    <div className="h-screen   flex justify-center items-center flex-col max-w-lg mx-auto">
      <div className="w-full p-12 border">
        <h2 className="text-2xl text-center text-[#D53F8C] font-bold py-4">
          Register
        </h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className=" w-full text-sm mb-4">
            <label htmlFor="name" className="block mb-2 text-gray-400">
              Name
            </label>
            <input
              type="name"
              {...register("name", {
                required: "Name is Required",
              })}
              className="w-full px-4 py-3 border"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-600 text-sm">{errors.name?.message}</p>
            )}
          </div>
          <div className=" w-full text-sm mb-4">
            <label htmlFor="email" className="block mb-2 text-gray-400">
              Email
            </label>
            <input
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
              {...register(
                "password",

                {
                  required: "Password is Required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 character or longer",
                  },
                  pattern: {
                    value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/,
                    message: "Password must be one uppercase one lowercase ",
                  },
                }
              )}
              className="w-full px-4 py-3 border"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password?.message}</p>
            )}
            <button className="text-xs hover:underline text-[#D53F8C]">
              Forgot password?
            </button>
          </div>
          <div className="text-center">
            <input
              type="submit"
              className="w-ful cursor-pointer py-3 px-8 text-white bg-[#D53F8C]"
              value="Sign Up"
            />
          </div>
        </form>
        <p className="text-xs text-center mt-3  text-[#D53F8C]">
          Already have an account{" "}
          <Link className="underline" to="/signin">
            Sign In
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

export default Register;
