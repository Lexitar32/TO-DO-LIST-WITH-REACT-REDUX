import React, { useState } from "react";
import { useForm } from "react-hook-form"; // React Hook Form Hooks
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";
import "../styles/signup.css";
import { useDispatch, useSelector } from "react-redux"; // For Dispatching Actions
import { signupUser } from "../actions/Auth/auth.action";

// Eye Icon for revealing password
// const eye = <FontAwesomeIcon icon={faEye} />;

function Signup() {
  // Registering and Submitting Methods
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const error = useSelector(error => error.registerUsers.error)
  // const [passwordShown, setPasswordShown] = useState(false); // State for password visibility
  const [myError, setmyError] = useState(false);
  const dispatch = useDispatch();

  // const togglePasswordVisiblity = () => {
  //   setPasswordShown(passwordShown ? false : true);
  // };

  // Submit Function && resetting the input fields
  const onSubmit = (data) => {
    dispatch(signupUser(data));

    if (error) {
      setmyError(error.data)
    }
  };

  return (
    <React.Fragment>
      <form
        className="mt-5 form-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center sign-up">Sign Up</h2>
        {myError ? <p className="errormessage">{myError}</p> : ""}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            {...register("username", {
              required: "This field is required",
              minLength: { value: 5, message: "Username must not be less than 5 characters" },
            })}
            style={{ border: errors.username ? "1px solid red" : "" }}
            className="form-control"
            type="username"
            aria-describedby="usernameHelp"
          />
          {errors.username && (
            <p className="errorMessage">{errors.username.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email Address
          </label>
          <input
            {...register("email", {
              required: "This field is required",
              maxLength: { value: 50, message: "Exceeded the maximum words" },
            })}
            style={{ border: errors.email ? "1px solid red" : "" }}
            className="form-control"
            type="email"
            aria-describedby="emailHelp"
          />
          {errors.email && (
            <p className="errorMessage">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 5,
                message: "Password must not be less than 5 characters",
              },
            })}
            style={{ border: errors.password ? "1px solid red" : "" }}
            type="password"
            className="form-control"
            aria-describedby="emailHelp"
          />
          {/* <i onClick={togglePasswordVisiblity}>{eye}</i> */}
          {errors.password && (
            <p className="errorMessage">{errors.password.message}</p>
          )}
        </div>
        <div id="emailHelp" className="form-text">
          We'll never share your password with anyone else.
        </div>
        <div className="mb-3 mt-4">
          <div className="flex-2">
            Already have an account <Link to="/login">Sign In</Link>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </React.Fragment>
  );
}

export default Signup;
