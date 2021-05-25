import axios from "axios"; // Importing Axios
import swal from "sweetalert"; // Using Sweetalert for successful actions
import { LOGOUT_USER, SIGNIN_USER, SIGNUP_USER, THROW_ERROR } from "../allTypes"; // Getting the action type

export const signupUser = (userData) => (dispatch) => {
  return axios
    .post("https://todo-list-ekesolonge.herokuapp.com/api/users", userData)
    .then((response) => {
      if (response.status === 200) {
        swal({
          title: "Congratulations!",
          text: "You are successfully logged in!",
          icon: "success",
          button: "Proceed",
        });

        dispatch({
          type: SIGNUP_USER,
          payload: response.data,
        })

        setTimeout(() => {
          window.location = "/login";
        }, 2000);
      }
    })
    .catch(error => {
      dispatch({
        type: THROW_ERROR,
        payload: error.response
      })
    })
};

export const signinUser = (userData) => (dispatch) => {
  return axios
    .post(
      "https://todo-list-ekesolonge.herokuapp.com/api/users/login",
      userData
    )
    .then((response) => {
      if (response.status === 200) {
        swal({
          title: "Congratulations!",
          text: "You are successfully logged in!",
          icon: "success",
          button: "Proceed",
        });

        dispatch({
          type: SIGNIN_USER,
          payload: response.data,
        })
      }

      setTimeout(() => {
        window.location = "/mainTasks";
      }, 2000);

      localStorage.setItem("token", response.data);
    })
    .catch(error => {
      dispatch({
        type: THROW_ERROR,
        payload: error.response
      })
    })
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");

  swal({
    title: "Hey!",
    text: "You are Logged out!",
    icon: "warning",
    button: "Proceed",
  });

  dispatch({
    type: LOGOUT_USER,
  });
};