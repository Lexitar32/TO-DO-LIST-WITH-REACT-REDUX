import getAllServices from "../../services/Test/gettodos.service";
import { FETCH_USERS } from "../allTypes";

export const fetchUsers = () => (dispatch) => {
  return getAllServices
    .fetchUsers()
    .then((response) => {
      console.log(response.data);
      dispatch({
        type: FETCH_USERS,
        payload: response.data,
      });
      return response.data;
    })
    .catch((error) => console.log(error));
};
