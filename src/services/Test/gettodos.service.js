import axios from "axios";
import { USERS_ENDPOINT_API } from "../root-api-endpoint";

const fetchUsers = async () => {
  return await axios.get(USERS_ENDPOINT_API);
};

const getAllServices = {
  fetchUsers,
};

export default getAllServices;
