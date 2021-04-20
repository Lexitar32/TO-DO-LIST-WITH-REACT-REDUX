import React, { useState } from "react";
import { useForm } from "react-hook-form"; // React Hook Form Hooks
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "../styles/signup.css";
import { useDispatch } from "react-redux"; // For Dispatching Actions
import { signupUser } from "../actions/Auth/signup.action";

// Eye Icon for revealing password
const eye = <FontAwesomeIcon icon={faEye} />;

function Signup() {
  // Registering and Submitting Methods
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [passwordShown, setPasswordShown] = useState(false); // State for password visibility
  const dispatch = useDispatch();

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  // Submit Function && resetting the input fields
  const onSubmit = (data) => {
    reset();

    dispatch(signupUser(data));

    console.log(data);
  };

  return (
    <React.Fragment>
      <h2 className="text-center page-header mt-5">
        Welcome to My Task Manager
      </h2>
      <form
        className="container mt-5 form-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-center sign-up">Sign Up</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            {...register("username", {
              required: "This field is required",
              maxLength: { value: 10, message: "Exceeded the maximum words" },
            })}
            style={{ border: errors.username ? "1px solid red" : "" }}
            className="form-control"
            aria-describedby="emailHelp"
          />
          {errors.username && (
            <p className="errorMessage">{errors.username.message}</p>
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
                value: 8,
                message: "Password must not be less than 8 characters",
              },
            })}
            style={{ border: errors.password ? "1px solid red" : "" }}
            type={passwordShown ? "text" : "password"}
            className="form-control"
            aria-describedby="emailHelp"
          />
          <i onClick={togglePasswordVisiblity}>{eye}</i>
          {errors.password && (
            <p className="errorMessage">{errors.password.message}</p>
          )}
        </div>
        <div id="emailHelp" className="form-text">
          We'll never share your password with anyone else.
        </div>
        <div className="mb-3 form-check mt-4">
          <div className="flex-1">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>
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
