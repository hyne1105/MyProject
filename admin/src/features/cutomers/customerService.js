import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const getUsers = async () => {
  const response = await axios.get(`${base_url}user/all-users`);

  return response.data;
};

const deleteUser = async (id) => {
  const response = await axios.delete(`${base_url}user/${id}`, config);

  return response.data;
};


const customerService = {
  getUsers,
  deleteUser
};

export default customerService;
