import axios from "axios"; // Importing Axios
import swal from "sweetalert"; // Using Sweetalert for successful actions
import { SIGNIN_USER, SIGNUP_USER } from "../allTypes"; // Getting the action type

export const signupUser = (userData) => (dispatch) => {
  axios
    .post("https://todo-list-ekesolonge.herokuapp.com/api/users", userData)
    .then((response) => {
      if (response.status === 200) {
        swal({
          title: "Congratulations!",
          text: "You have Registered Successfully",
          icon: "success",
          button: "Proceed",
        });

        dispatch({
          type: SIGNUP_USER,
          payload: response.data,
        });
      } else {
        swal({
          title: "Error!",
          text: "Oops, there was an error",
          icon: "warning",
          button: "Ok",
        });
      }

      window.location = "/login";
    });
};

export const signinUser = (userData) => (dispatch) => {
  axios
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
        });
      } else {
        swal({
          title: "Error!",
          text: "Users does not exist",
          icon: "warning",
          button: "Ok",
        });
      }

      localStorage.setItem("token", response.data);

      window.location = "/mainTasks";
    });
};
